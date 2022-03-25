package main

import (
	"time"

	"github.com/jinzhu/gorm"
)

//用户信息 返回给客户端的版本,隐藏掉部分信息
type UserInfoClient struct {
	gorm.Model
	UserName string
	Tags     string
	Avatars  string //用户头像
	Nickname string
}

type MessageListClient struct {
	gorm.Model
	UserName   string
	Tags       string
	Avatars    string //用户头像
	Nickname   string
	Unread     int       //消息是否已读  已读做到关系上还是做到消息上?
	LastChatAt time.Time //消息是否已读  已读做到关系上还是做到消息上?
	LastChat   string
	Path       string //特殊参数
}
