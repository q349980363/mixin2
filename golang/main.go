package main

import (
	"fmt"
	"math/rand"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/robertkrimen/otto"
)

var r *gin.Engine
var hub *Hub
var route *Route
var vm *otto.Otto = otto.New()

func main() {

	rand.Seed(time.Now().UnixNano())
	r = gin.Default()
	r.Use(Cors())
	// m = melody.New()
	// m.Upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	hub = NewHub()
	route = NewRoute(hub)

	// r.StaticFile("favicon.ico", "./resources/favicon.ico")
	// 静态资源目录

	r.GET("/ws", func(c *gin.Context) {
		hub.HandleRequest(c)
		// c.ClientIP()
	})

	r.Use(func(c *gin.Context) {
		path := c.Request.URL.Path
		// _log(c.Request.URL.Path)
		_, err := os.Stat("./webroot/" + path)
		if err == nil {
			c.File("./webroot/" + path)
		} else {
			c.Next()
		}
	})

	r.Use(func(c *gin.Context) {
		c.File("./webroot/index.html")
		c.Abort()
	})

	init_ip()

	vm.Run(getJavaScriptFile("Init.js"))
	vm.Set("hub", hub)

	r.Run(":8000") // listen and serve on 0.0.0.0:8000 (for windows "localhost:8000")

	for i := 0; i < 10; i++ {
		fmt.Println("##################服务器关闭##################")
	}
}
func init_ip() {
	fmt.Println("http://127.0.0.1:8000/")
	var ips = make(map[string]string)
	ips, _ = Ips()

	//key是网卡名称，value是网卡IP
	for k, v := range ips {
		fmt.Println("http://" + v + ":8000/    " + k)
	}
}
