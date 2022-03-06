package main

type SystemchatHub struct {
	session *HubSession
}

func NewSystemchatHub(s *HubSession) *SystemchatHub {
	hub := &SystemchatHub{}
	hub.session = s
	return hub
}

func (hub *SystemchatHub) Get() []SystemChat {
	var list []SystemChat
	db.First(&list, &SystemChat{UserName: hub.session.UserInfo.UserName})
	return list
}
