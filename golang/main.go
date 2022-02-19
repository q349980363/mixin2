package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/gin-gonic/gin"
)

var r *gin.Engine
var hub *Hub

func main() {
	rand.Seed(time.Now().UnixNano())

	r = gin.Default()
	r.Use(Cors())
	// m = melody.New()
	// m.Upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	hub = NewHub()
	r.GET("/ws", func(c *gin.Context) {
		hub.HandleRequest(c)
		// c.ClientIP()
	})
	r.NoRoute(func(c *gin.Context) {
		path := c.Request.URL.Path
		// _log(c.Request.URL.Path)
		c.File("./webroot/" + path)
	})

	init_ip()
	r.Run(":8000") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	for i := 0; i < 10; i++ {
		fmt.Println("##################服务器关闭##################")
	}
}
func init_ip() {
	fmt.Println("http://127.0.0.1:8080/")
	var ips = make(map[string]string)
	ips, _ = Ips()

	//key是网卡名称，value是网卡IP
	for k, v := range ips {
		fmt.Println("http://" + v + ":8080/    " + k)
	}
}
