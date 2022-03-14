package main

type UserHub struct {
	session *HubSession
}

func (hub *LoginHub) GetMy() *UserInfo {
	// if hub.session.UserInfo == nil {
	// 	return UserInfo{}
	// }
	return hub.session.UserInfo
}
