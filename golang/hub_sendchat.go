package main

import (
	"encoding/json"
	"errors"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func (hub *Hub) SendSystemChat(chat *SystemChat) {
	d := db.First(&Friends{}, &Friends{
		UserName: chat.UserName,
		Target:   "系统消息",
	})

	if d.RecordNotFound() {
		db.Create(&Friends{
			UserName: chat.UserName,
			Target:   "系统消息",
			Path:     "/system_session",
		})
	}

	db.Create(&chat)
	updateFriendsLastChatTime(chat.UserName, "系统消息", chat.Txt)
	// hub.broadcastGroupJson("user_"+chat.UserName, gin.H{
	// 	"type": "system",
	// 	"data": chat,
	// })
	hub.SendUserEvent(chat.UserName, "SystemChat")
}

func (hub *Hub) SendFriendsChat(chat *FriendsChat) {
	db.Create(chat)
	updateFriendsLastChatTime(chat.Target, chat.UserName, chat.Data)

	hub.broadcastGroupJson("user_"+chat.UserName, gin.H{
		"type": "friends",
		"data": chat,
	})
	hub.broadcastGroupJson("user_"+chat.Target, gin.H{
		"type": "friends",
		"data": chat,
	})
}

func (hub *Hub) SendGroupChat(chat *GroupChat) {
	db.Create(chat)
	updateGroupLastChatTime(chat.Target, chat.Data)

	hub.broadcastGroupJson("group_"+chat.Target, gin.H{
		"type": "group",
		"data": chat,
	})

}

func (hub *Hub) SendGlobalChat(chat *GroupChat) {
	db.Create(chat)
	updateGroupLastChatTime(chat.Target, chat.Data)
	json, _ := json.Marshal(gin.H{
		"type": "global",
		"data": chat,
	})
	hub.m.Broadcast(json)
}

//添加用户申请
func (hub *Hub) AddFriends(userName string, target string) error {
	if target == "" {
		return errors.New("请输入好友名称")
	}
	if db.First(&UserInfo{}, &UserInfo{
		UserName: target,
	}).RecordNotFound() {
		return errors.New("用户不存在")
	}
	if !db.First(&Friends{}, &Friends{UserName: userName, Target: target}).RecordNotFound() {
		return errors.New("已添加该用户为好友")
	}
	hub.SendSystemChat(&SystemChat{
		UserName: target,
		Data:     userName,
		// ExInt:    int(friends.ID),
		Txt:       "用户[" + userName + "]申请加您为好友",
		Type:      "Friends",
		Operation: "ok_no",
	})
	return nil

}

//添加用户申请
func (hub *Hub) AddGroup(userName string, target string) error {
	if target == "" {
		return errors.New("请输入群名称")
	}
	var group Group
	if db.First(&group, &Group{
		Name: target,
	}).RecordNotFound() {
		return errors.New("群不存在")
	}
	if !db.First(&GroupRelation{}, &GroupRelation{UserName: userName, Target: target}).RecordNotFound() {
		return errors.New("已在该群")
	}
	hub.SendSystemChat(&SystemChat{
		UserName: group.UserName,
		Data:     target,
		// ExInt:    int(friends.ID),
		Txt:       "用户[" + userName + "]申请加入群[" + target + "]",
		ExString:  userName,
		Type:      "GroupRelation",
		Operation: "ok_no",
	})
	return nil
}

//TODO 需要记录每个s 的绑定的所有组  在退出的时候将他们全部清除掉
func updateFriendsLastChatTime(userName string, target string, chat string) {
	db.Model(&Friends{}).Where(&Friends{UserName: userName, Target: target}).Updates(map[string]interface{}{
		"Unread":     gorm.Expr("Unread + 1"),
		"LastChatAt": time.Now(),
		"LastChat":   chat,
	})

	db.Model(&Friends{}).Where(&Friends{UserName: target, Target: userName}).Updates(map[string]interface{}{
		"LastChat": chat,
	})
}

//TODO 需要记录每个s 的绑定的所有组  在退出的时候将他们全部清除掉
func updateGroupLastChatTime(target string, chat string) {
	db.Model(&GroupRelation{}).Where(&GroupRelation{Target: target}).Updates(map[string]interface{}{
		"Unread":     gorm.Expr("Unread + 1"),
		"LastChatAt": time.Now(),
		"LastChat":   chat,
	})
}

func (hub *Hub) OperationSystemChat(userInfo UserInfo, id int, result string) error {
	var systemChat SystemChat

	if db.First(&systemChat, id).RecordNotFound() {
		return errors.New("失败,systemChat不存在")
	}
	if systemChat.Result != "" {
		return errors.New("失败,已经操作,请勿重复点击")
	}

	if result == "" {
		return errors.New("失败,result为空")
	}

	error := db.Model(&SystemChat{}).Where(map[string]interface{}{
		"user_name": userInfo.UserName,
		"data":      systemChat.Data,
		"result":    "",
	}).Update("Result", result).Error
	if error != nil {
		return error
	}

	switch systemChat.Type {
	case "Friends":
		if result != "ok" {
			hub.SendSystemChat(&SystemChat{
				UserName: systemChat.Data,
				Data:     userInfo.UserName,
				ExInt:    int(systemChat.ID),
				Type:     "FriendsNo",
				Txt:      "申请加好友[" + userInfo.UserName + "],拒绝",
			})
			vm.Run(getJavaScriptFile("OperationSystemChat.js"))
			vm.Call("OperationSystemChat_Friends_No", hub, systemChat.Data, userInfo.UserName)
			return nil
		}
		if !db.First(&Friends{}, &Friends{UserName: userInfo.UserName, Target: systemChat.Data}).RecordNotFound() {
			return errors.New("添加失败,已添加该用户为好友")
		}
		db.Create(&Friends{
			UserName: systemChat.UserName,
			Target:   systemChat.Data,
		})
		db.Create(&Friends{
			UserName: systemChat.Data,
			Target:   systemChat.UserName,
		})
		updateFriendsLastChatTime(systemChat.UserName, systemChat.Data, "你们已经是好友了,可以开始聊天了")
		updateFriendsLastChatTime(systemChat.Data, systemChat.UserName, "你们已经是好友了,可以开始聊天了")
		hub.SendSystemChat(&SystemChat{
			UserName: systemChat.Data,
			Data:     userInfo.UserName,
			ExInt:    int(systemChat.ID),
			Type:     "FriendsOk",
			Txt:      "申请加好友[" + systemChat.Data + "],通过",
		}) //应该是双向通知

		vm.Run(getJavaScriptFile("OperationSystemChat.js"))
		vm.Call("OperationSystemChat_Friends_Ok", hub, systemChat.Data, userInfo.UserName)
	case "GroupRelation":
		if result != "ok" {
			vm.Run(getJavaScriptFile("OperationSystemChat.js"))
			return nil
		}
		if !db.First(&GroupRelation{}, &GroupRelation{UserName: systemChat.ExString, Target: systemChat.Data}).RecordNotFound() {
			return errors.New("添加失败,已添加该群")
		}
		db.Create(&GroupRelation{
			UserName: systemChat.ExString,
			Target:   systemChat.Data,
		})

		updateGroupLastChatTime(systemChat.Data, "新用户进群")

		sessionList := hub.GetGroupAllUsers("user_" + systemChat.ExString)
		for _, v := range sessionList {
			v.AddGroup("group_" + systemChat.Data)
		}
		hub.SendSystemChat(&SystemChat{
			UserName: systemChat.ExString,
			Data:     systemChat.Data,
			ExInt:    int(systemChat.ID),
			Type:     "GroupRelationOk",
			Txt:      "申请加入[" + systemChat.Data + "]通过",
		}) //应该是双向通知
	}

	return nil
}
