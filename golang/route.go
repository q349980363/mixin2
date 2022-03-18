package main

import (
	"errors"
	"reflect"
)

//TODO 解决在线用户统计

type Route struct {
	hub *Hub
}

func NewRoute(hub *Hub) *Route {
	route := &Route{hub}
	hub.HandleMessage(route.handleMessage)
	hub.HandleAuthorization(func(token string, s *HubSession) (*UserInfo, bool) {
		var userInfo UserInfo
		if db.First(&userInfo, &UserInfo{ToKen: token}).RecordNotFound() {
			return nil, true
		}
		//TODO 还需要登陆上所有群组

		vm.Run(getJavaScriptFile("Login.js"))
		vm.Call("Authorization_Before", s, userInfo.UserName, s)
		s.AddGroup("user_" + userInfo.UserName)
		vm.Call("Authorization", s, userInfo.UserName, s)

		return &userInfo, true
	})
	return route
}

func (route *Route) handleMessage(s *HubSession, msgType string, json map[string]interface{}) {
	if msgType != "call" {
		return
	}
	var controller interface{}
	auth := false
	switch json["hubName"].(string) {
	case "Login":
		controller = &LoginHub{
			session: s,
		}
	case "Friends":
		controller = &FriendsHub{
			session: s,
		}
		auth = true
	case "Systemchat":
		controller = &SystemchatHub{
			session: s,
		}
		auth = true
	case "User":
		controller = &UserHub{
			session: s,
		}
		auth = true
	default:
		panic(errors.New("所调用的Hub不存在,严格区分大小写"))
		return
	}

	if auth {
		if s.UserInfo == nil {
			s.functionReturnErrorCode(json, "无效登录", -1)
			// panic(errors.New("未授权的访问"))
			//TODO 错误
			return
		}
	}

	t := reflect.ValueOf(controller)
	functionName := json["functionName"].(string)
	numMethod := t.NumMethod()
	_ = numMethod
	fn := t.MethodByName(functionName)
	if !fn.IsValid() {
		//TODO 如果指针空则会触发异常.
		panic(errors.New("所调用的函数不存在,严格区分大小写"))
	}
	fnType := fn.Type()
	fnLenth := fnType.NumIn()
	args := json["args"].([]interface{})
	if fnLenth != len(args) {
		panic(errors.New("参数数量不正确"))
	}

	values := make([]reflect.Value, len(args))
	for i := range args {
		item := args[i]
		itemValueOf := reflect.ValueOf(item)
		// if fnType.In(i) != item.Type() {
		// 	panic(errors.New("参数类型不正确"))
		// }
		if fnType.In(i).Kind() == reflect.Int {
			values[i] = reflect.ValueOf(int(item.(float64)))
		} else {
			values[i] = itemValueOf
		}

	}
	returns := fn.Call(values)
	if len(returns) > 0 {

		returnsInterface := make([]interface{}, len(returns))
		for i := range returns {
			returnsInterface[i] = returns[i].Interface()
		}

		if len(returns) == 1 {
			s.functionReturn(json, returnsInterface[0])
		} else {
			s.functionReturn(json, returnsInterface)
		}
	}
}
