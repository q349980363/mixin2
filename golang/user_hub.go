package main

type UserHub struct {
	session *HubSession
}

func (hub *UserHub) GetMy() UserInfo {
	var user UserInfo
	db.First(&user, &UserInfo{UserName: hub.session.UserInfo.UserName})
	return user
}

func (hub *UserHub) SetAvatar(value string) string {
	var user UserInfo
	db.First(&user, &UserInfo{UserName: hub.session.UserInfo.UserName})

	user.Avatars = value
	db.Save(&user)
	return "设置成功"
}

func (hub *UserHub) SetNickname(value string) string {
	var user UserInfo
	db.First(&user, &UserInfo{UserName: hub.session.UserInfo.UserName})
	user.Nickname = value
	db.Save(&user)
	return "设置成功"
}
