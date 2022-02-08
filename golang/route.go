package main

import (
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

func (route *Route) handleMessage(s *HubSession, _type string, json map[string]interface{}) {
	if _type != "call" {
		return
	}
	var controller interface{}
	auth := false
	switch json["controller"].(string) {
	case "login":
		controller = NewLoginController(s)
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

	fn := t.MethodByName(json["function"].(string))
	if fn.IsZero() {
		//TODO 错误
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
