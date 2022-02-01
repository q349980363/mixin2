package main

import (
	"container/list"
	"encoding/json"
	"errors"
	"log"
	"sync"

	"github.com/gin-gonic/gin"
	"gopkg.in/olahol/melody.v1"
)

type Hub struct {
	lock *sync.Mutex
	m    *melody.Melody

	connectHandler      handleSessionFunc
	messageHandler      handleMessageFunc
	disconnectHandler   handleSessionFunc
	authorizationHandle func(string) (UserInfo, bool)

	session__GroupToSession    map[string][]*HubSession
	session__SessionToUserInfo map[*melody.Session]*HubSession
}
type handleMessageFunc func(*HubSession, string, map[string]string)
type handleSessionFunc func(*HubSession)

func NewHub() *Hub {
	hub := &Hub{}
	hub.m = melody.New()
	hub.lock = new(sync.Mutex)
	hub.m.HandleConnect(hub.handleConnect)
	hub.m.HandleMessage(hub.handleMessage)
	hub.m.HandleDisconnect(hub.handleDisconnect)
	hub.session__SessionToUserInfo = make(map[*melody.Session]*HubSession)
	hub.session__GroupToSession = make(map[string][]*HubSession)
	return hub
}

func (hub Hub) handleConnect(s *melody.Session) {
	token := s.Request.URL.Query()["toKen"][0]
	hubS := NewHubSession(s, hub)
	userInfo, auth := hub.handleAuthorization(token)
	if !auth {
		hubS.CloseWithMsg(gin.H{
			"type": "auth",
		})
		return
	}
	hubS.UserInfo = userInfo
	hub.lock.Lock()
	hub.session__SessionToUserInfo[s] = hubS
	hub.lock.Unlock()
}

func (hub Hub) handleAuthorization(token string) (*UserInfo, bool) {
	return nil, false
}

func (hub Hub) handleMessage(s *melody.Session, bytes []byte) {
	requestData := make(map[string]string)
	_ = json.Unmarshal(bytes, &requestData)

}

func (hub Hub) handleDisconnect(s *melody.Session) {
	hub.lock.Lock()
	delete(hub.session__SessionToUserInfo, s)
	// list := hub.session__SessionToGroup[s]
	// list_ := make([]string, len(list))
	// copy(list_, list)
	// for _, groupName := range list_ {
	// 	sessionDelGroup(s, groupName, true)
	// }
	hub.lock.Unlock()
}

func (hub Hub) HandleRequest(c *gin.Context) {
	hub.m.HandleRequest(c.Writer, c.Request)
	log.Fatalln("HandleRequest:" + c.ClientIP())
}

// 用户授权,如果授权成功返回用户信息,授权失败返回nil.
// 返回nil,授权失败会自动断开.
func (hub Hub) HandleAuthorization(fn func(string) (UserInfo, bool)) {
	hub.authorizationHandle = fn
}

func (hub Hub) HandleConnect(fn func(*HubSession)) {
	hub.connectHandler = fn
}

func (hub Hub) HandleMessage(fn handleMessageFunc) {
	hub.messageHandler = fn
}

func (hub Hub) HandleDisconnect(fn func(*HubSession)) {
	hub.disconnectHandler = fn
}

type HubSession struct {
	hub Hub
	s   *melody.Session
	// 请勿修改userInfo内属性,直接覆盖user本身
	UserInfo *UserInfo
	Groups   []string
}

func NewHubSession(s *melody.Session, hub Hub) *HubSession {
	hubS := &HubSession{}
	hubS.s = s
	hubS.hub = hub
	hubS.Groups = make([]string, 0)
	return hubS
}

// 判断用户是否在某个组
func (hubS HubSession) ExistGroup(name string) bool {
	hubS.hub.lock.Lock()
	exist := hubS.ExistGroupUnlock(name)
	hubS.hub.lock.Unlock()
	return exist
}

// 判断用户是否在某个组,不加锁版本
func (hubS HubSession) ExistGroupUnlock(name string) bool {
	exist := false
	{
		for _, v := range hubS.hub.session__GroupToSession[name] {
			if v == &hubS {
				exist = true
				break
			}
		}
	}
	return exist
}

func (hubS HubSession) AddGroup(name string) error {
	hubS.hub.lock.Lock()
	if hubS.ExistGroupUnlock(name) {
		hubS.hub.lock.Unlock()
		return errors.New("当前用户已存在该组中")
	}
	l := list.New()
	l.Remove(1)
	{
		if len(hubS.hub.session__GroupToSession[name]) == 0 {
			hubS.hub.session__GroupToSession[name] = make([]*HubSession, 0)
		}
		list := hubS.hub.session__GroupToSession[name]
		hubS.hub.session__GroupToSession[name] = append(list, &hubS)
	}
	hubS.hub.lock.Unlock()
	return nil
}

func (hubS HubSession) DelGroup(name string) error {
	hubS.hub.lock.Lock()
	if !hubS.ExistGroupUnlock(name) {
		hubS.hub.lock.Unlock()
		return errors.New("当前用户没有在该群组")
	}
	return nil
}

func (hubS HubSession) EmptyGroup() {

}

func (hubS HubSession) WriteAlert(txt string) {
	hubS.WriteJson(gin.H{
		"type": "alert",
		"data": txt,
	})
}

func (hubS HubSession) WriteLog(v interface{}) {
	hubS.WriteJson(gin.H{
		"type": "log",
		"data": v,
	})
}

func (hubS HubSession) WriteObj(txt string, v interface{}) {
	json, _ := json.Marshal(v)
	hubS.s.Write(json)
}

func (hubS HubSession) WriteJson(v interface{}) {
	json, _ := json.Marshal(v)
	hubS.s.Write(json)
}

func (hubS HubSession) Close() {
	hubS.s.Close()
}

func (hubS HubSession) CloseWithMsg(v interface{}) {
	json, _ := json.Marshal(v)
	hubS.s.CloseWithMsg(json)
}
