package main

import (
	"fmt"
	"reflect"
)

//TODO 解决在线用户统计

type Route struct {
	hub *Hub
}

func NewRoute(hub *Hub) *Route {
	route := &Route{hub}
	hub.HandleMessage(route.handleMessage)
	hub.HandleAuthorization(func(token string) (*UserInfo, bool) {
		var userInfo UserInfo
		if db.First(&userInfo, &UserInfo{ToKen: token}).RecordNotFound() {
			return nil, true
		}
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
	case "login":
		controller = NewLoginHub(s)
	case "friends":
		controller = NewFriendsHub(s)
		auth = true
	case "user":
		//TODO 未编写
		auth = true
	default:
		return
	}

	if auth {
		if s.UserInfo == nil {
			//TODO 错误
			return
		}
	}
	t := reflect.ValueOf(controller)
	functionName := json["functionName"].(string)
	numMethod := t.NumMethod()
	_ = numMethod
	fn := t.MethodByName(functionName)
	fmt.Println(fn)
	// if fn.IsNil() {

	// }
	if !fn.IsValid() {
		//TODO 如果指针空则会触发异常.
	}

	args := json["args"].([]interface{})
	values := make([]reflect.Value, len(args))
	for i := range args {
		values[i] = reflect.ValueOf(args[i])
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
