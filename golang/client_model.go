package main

import (
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
