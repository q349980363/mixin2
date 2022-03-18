package main

type UserHub struct {
	session *HubSession
}

func (hub *UserHub) GetMy() *UserInfo {
	// if hub.session.UserInfo == nil {
	// 	return UserInfo{}
	// }
	return hub.session.UserInfo
}
