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
	db.Find(&list, &SystemChat{UserName: hub.session.UserInfo.UserName})
	return list
}

func (hub *SystemchatHub) Operation(id int, result string) []SystemChat {
	_ = hub.session.hub.OperationSystemChat(*hub.session.UserInfo, id, result)
	return hub.Get()
}
