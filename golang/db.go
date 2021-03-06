package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB

func init() {
	var err error
	//初始化数据库
	db, err = gorm.Open("sqlite3", "test.db")
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&UserInfo{})

	db.AutoMigrate(&SystemChat{})
	db.AutoMigrate(&FriendsChat{})
	db.AutoMigrate(&GroupChat{})

	db.AutoMigrate(&Friends{})
	db.AutoMigrate(&Group{})
	db.AutoMigrate(&GroupRelation{})
	db.AutoMigrate(&Config{})
	db.AutoMigrate(&GlobalChat{})

	// db.AutoMigrate(&Chat{})
	db.LogMode(true)
	// db.AutoMigrate(&Product{})
	// // 创建
	// db.Create(&Product{Code: "L1212", Price: 1000})

	// // 读取
	// var product Product
	// db.First(&product, 1)                   // 查询id为1的product
	// db.First(&product, "code = ?", "L1212") // 查询code为l1212的product

	// // 更新 - 更新product的price为2000
	// db.Model(&product).Update("Price", 2000)

	// // 删除 - 删除product
	// db.Delete(&product)

}
