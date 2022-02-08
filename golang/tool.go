package main

import (
	"flag"
	"log"
	"math/rand"
	"net"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"gopkg.in/olahol/melody.v1"
)

func init() {
	log.Println("初始化IP数据库,有可能时间较长.")
	datFile := flag.String("qqwry", "./qqwry.dat", "纯真 IP 库的地址")
	IPData.FilePath = *datFile
	res := IPData.InitIPData()

	if v, ok := res.(error); ok {
		log.Panic(v)
	}

	qqWry = NewQQwry()
	log.Println("初始化IP数据库完毕.")
}

var qqWry QQwry

// 通过 melody.Session 获取ip地理位置.
func getIpAddr_melody(s *melody.Session) (string, string) {
	ip, _, _ := net.SplitHostPort(strings.TrimSpace(s.Request.RemoteAddr))
	forwarded := s.Request.Header.Get("X-Forwarded-For")
	real := s.Request.Header.Get("X-Real-IP")
	if real != "" {
		ip = real
	} else if forwarded != "" {
		ip = forwarded
	}
	return ip, getIpAddr(ip)
}

func getIpAddr(ip string) string {
	resultQQwry := qqWry.Find(ip)
	ipAddr := resultQQwry.Country
	return ipAddr
}

// Returns an int >= min, < max
func randomInt(min, max int) int {
	return min + rand.Intn(max-min)
}

// Generate a random string of A-Z chars with len = l
func randomString(len int) string {
	bytes := make([]byte, len)
	for i := 0; i < len; i++ {
		bytes[i] = byte(randomInt(65, 90))
	}
	return string(bytes)
}

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		c.Header("Access-Control-Allow-Origin", "*") // 可将将 * 替换为指定的域名
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Header("Access-Control-Allow-Headers", "token,Origin, X-Requested-With, Content-Type, Accept, Authorization")
		c.Header("Access-Control-Expose-Headers", "token,Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")

		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()

	}
}

func Ips() (map[string]string, error) {
	ips := make(map[string]string)
	//返回 interface 结构体对象的列表，包含了全部网卡信息
	interfaces, err := net.Interfaces()
	if err != nil {
		return nil, err
	}

	//遍历全部网卡
	for _, i := range interfaces {
		if i.Flags&net.FlagUp == 0 {
			continue // interface down
		}
		if i.Flags&net.FlagLoopback != 0 {
			continue // loopback interface
		}
		// Addrs() 方法返回一个网卡上全部的IP列表
		address, err := i.Addrs()
		if err != nil {
			return nil, err
		}

		//遍历一个网卡上全部的IP列表，组合为一个字符串，放入对应网卡名称的map中
		for _, v := range address {
			if ipnet, ok := v.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
				if ipnet.IP.To4() != nil {
					ips[i.Name] += ipnet.IP.String()
				}
			}
		}
	}
	return ips, nil
}

func init_ip() {
	// log.SetFlags(log.flag)
	log.Println("http://127.0.0.1:8080/")
	var ips = make(map[string]string)
	ips, _ = Ips()
	//key是网卡名称，value是网卡IP
	for k, v := range ips {
		log.Println("http://" + v + ":8080/    " + k)
	}
}
