package main

type GroupController struct {
	session *HubSession
}

func NewGroupController(s *HubSession) *GroupController {
	obj := &GroupController{}
	obj.session = s
	return obj
}
