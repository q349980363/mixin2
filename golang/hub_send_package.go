package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func (hub *Hub) SendSystemTxt(username string, txt string) {
	hub.SendSystemChat(&SystemChat{
		UserName: username,
		Data:     "",
		// ExInt:    int(friends.ID),
		Txt:       txt,
		Type:      "Friends",
		Operation: "ok_no",
	})
}

func (hub *Hub) SendFriendsTxt(send_user string, receive_user string, txt string) {
	d := db.First(&Friends{}, &Friends{
		UserName: receive_user,
		Target:   send_user,
	})

	if d.RecordNotFound() {
		db.Create(&Friends{
			UserName: receive_user,
			Target:   send_user,
		})
	}
	hub.SendFriendsChat(&FriendsChat{
		Type:     "txt",
		UserName: send_user,
		Target:   receive_user,
		Data:     txt,
		Ip:       "",
		IpAddr:   "",
	})
}

func (hub *Hub) SendUserAlert(receive_user string, message string) {
	hub.broadcastGroupJson("user_"+receive_user, gin.H{
		"type":    "alert",
		"message": message,
	})
}
func (hub *Hub) SendUserLog(receive_user string, message string) {
	hub.broadcastGroupJson("user_"+receive_user, gin.H{
		"type":    "log",
		"message": message,
	})
}
func (hub *Hub) SendUserEval(receive_user string, message string) {
	hub.broadcastGroupJson("user_"+receive_user, gin.H{
		"type":    "eval",
		"message": message,
	})
}
func (hub *Hub) SendUserTips(receive_user string, message string) {
	fmt.Println("SendUserTips:", receive_user, message)
	hub.broadcastGroupJson("user_"+receive_user, gin.H{
		"type":    "tips",
		"message": message,
	})
}
func (hub *Hub) SendUserEvent(receive_user string, name string) {
	fmt.Println("SendUserEvent:", receive_user, name)
	hub.broadcastGroupJson("user_"+receive_user, gin.H{
		"type": "event",
		"name": name,
	})
}
