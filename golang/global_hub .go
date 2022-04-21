package main

type GlobalHub struct {
	session *HubSession
}

func (hub *GlobalHub) GetChat() []GlobalChat {
	var list []GlobalChat
	db.Order("ID desc").Limit(30).Order("ID").Find(&list)
	return list
}

func (hub *GlobalHub) Send(msg string) string {
	hub.session.hub.SendGlobalTxt(hub.session, msg)
	return ""
}
