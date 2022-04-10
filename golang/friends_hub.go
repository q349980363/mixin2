package main

import "github.com/jinzhu/copier"

type FriendsHub struct {
	session *HubSession
}

func (hub *FriendsHub) Apply(username string) (bool, string) {
	if db.First(&UserInfo{}, &UserInfo{UserName: username}).RecordNotFound() {
		return false, "用户不存在"
	}
	if username == "" {
		return false, "请输入好友名称"
	}
	if username == hub.session.UserInfo.UserName {
		return false, "不能添加自己为好友"
	}
	if !db.First(&Friends{}, &Friends{UserName: hub.session.UserInfo.UserName, Target: username}).RecordNotFound() {
		return false, "已添加该用户为好友"
	}
	hub.session.hub.SendSystemChat(&SystemChat{
		UserName: username,
		Data:     hub.session.UserInfo.UserName,
		// ExInt:    int(friends.ID),
		Txt:       "用户[" + hub.session.UserInfo.UserName + "]申请加您为好友",
		Type:      "Friends",
		Operation: "ok_no",
	})
	return true, "好友申请已发送至对方"
}

//添加好友前,搜索用户名称,可全网搜索.
func (hub *FriendsHub) SearchUsername(username string) []UserInfoClient {
	var users []UserInfo
	db.Where("user_name LIKE ?", "%"+username+"%").Or("nickname LIKE ?", "%"+username+"%").Find(&users)
	clientUsers := []UserInfoClient{}
	// clientUsers := make([]UserInfoClient, 0)
	copier.Copy(&clientUsers, &users)
	return clientUsers
}

func (hub *FriendsHub) GetMyFriends() []UserInfoClient {
	// var users []Friends
	clientUsers := []UserInfoClient{}
	//
	where := db.Model(&Friends{}).Select("user_infos.*,friends.*").Where(&Friends{Target: hub.session.UserInfo.UserName})
	where.Joins("left join user_infos on user_infos.user_name = friends.user_name").Scan(&clientUsers)

	// .Find(&users)
	// clientUsers := make([]UserInfoClient, 0)
	// copier.Copy(&clientUsers, &users)
	return clientUsers
}

func (hub *FriendsHub) GetChat(username string) []FriendsChat {
	var list []FriendsChat
	db.Where(&FriendsChat{
		UserName: hub.session.UserInfo.UserName,
		Target:   username,
	}).Or(&FriendsChat{
		UserName: username,
		Target:   hub.session.UserInfo.UserName,
	}).Find(&list)
	hub.Read(username)
	return list
}
func (hub *FriendsHub) ClearChat(username string) string {
	db.Where(&FriendsChat{
		UserName: hub.session.UserInfo.UserName,
		Target:   username,
	}).Or(&FriendsChat{
		UserName: username,
		Target:   hub.session.UserInfo.UserName,
	}).Delete(&FriendsChat{})

	hub.session.hub.SendUserEvent(hub.session.UserInfo.UserName, "ClearChat", username)
	hub.session.hub.SendUserEvent(username, "ClearChat", hub.session.UserInfo.UserName)
	return "清除成功"
}

func (hub *FriendsHub) Read(username string) string {
	db.Model(&Friends{}).Where(&Friends{
		UserName: hub.session.UserInfo.UserName,
		Target:   username,
	}).Update("Unread", 0)
	return ""
}

func (hub *FriendsHub) SendChat(username string, txt string) string {
	hub.session.hub.SendFriendsTxt(hub.session.UserInfo.UserName, username, txt)
	return ""
}
func (hub *FriendsHub) Delete(username string) string {
	hub.ClearChat(username)
	db.Where(&Friends{Target: hub.session.UserInfo.UserName, UserName: username}).Delete(&Friends{})
	db.Where(&Friends{UserName: hub.session.UserInfo.UserName, Target: username}).Delete(&Friends{})
	return "删除成功"
}

// func (hub *FriendsHub) Get() []UserInfoClient {
// 	var users []UserInfo
// 	// db.Where("user_name LIKE ?", "%"+username+"%").Find(&users)
// 	// var usernames []string
// 	// for _, user := range users {
// 	// 	usernames = append(usernames, user.UserName)
// 	// }
// 	return usernames
// }

//  func addFriends(userName string, target string) error {

// 	sendSystemChat(&SystemChat{
// 		UserName: target,
// 		Data:     userName,
// 		// ExInt:    int(friends.ID),
// 		Txt:       "用户[" + userName + "]申请加您为好友",
// 		Type:      "Friends",
// 		Operation: "ok_no",
// 	})
// 	return nil
// }
