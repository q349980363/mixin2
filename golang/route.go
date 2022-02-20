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
		controller = new(LoginHub)
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
	// reflect.
	t := reflect.ValueOf(controller)
	t = reflect.ValueOf(&LoginHub{})
	functionName := json["functionName"].(string)
	numMethod := t.NumMethod()
	_ = numMethod
	fn := t.MethodByName(functionName)
	fmt.Println(fn)

	if !fn.IsValid() {
		//TODO 错误
		return
	}

	args := json["args"].([]interface{})
	values := make([]reflect.Value, len(args))
	for i := range args {
		values[i] = reflect.ValueOf(args[i])
	}
	returns := fn.Call(values)
	if len(returns) > 0 {
		if len(returns) == 1 {
			s.functionReturn(json, returns[0].Interface())
		} else {
			returnsInterface := make([]interface{}, len(returns))
			for i := range returns {
				returnsInterface[i] = returns[i].Interface()
			}
			s.functionReturn(json, returnsInterface)
		}
	}
}
