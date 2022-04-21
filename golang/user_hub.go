package main

import "sort"

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

func (hub *UserHub) GetMessageList() []MessageListClient {
	// var users []Friends
	clientUsers := []MessageListClient{}
	//
	where := db.Model(&Friends{}).Select("user_infos.*,friends.*").Where(&Friends{UserName: hub.session.UserInfo.UserName})
	where.Joins("left join user_infos on user_infos.user_name = friends.target").Scan(&clientUsers)

	var globalChat GlobalChat
	db.Order("ID desc").Limit(1).Order("ID").Find(&globalChat)
	clientUsers = append(clientUsers, MessageListClient{
		Nickname:   "世界群聊",
		Avatars:    "groupchat",
		Path:       "/global_chat",
		LastChat:   globalChat.Data,
		LastChatAt: globalChat.CreatedAt,
	})
	sort.Sort(MessageListClients(clientUsers))

	return clientUsers
}
