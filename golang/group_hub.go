package main

type GroupHub struct {
	session *HubSession
}

func NewGroupController(s *HubSession) *GroupHub {
	obj := &GroupHub{}
	obj.session = s
	return obj
}
