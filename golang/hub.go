package main

import (
	"encoding/json"
	"errors"
	"fmt"
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
	authorizationHandle func(string) (*UserInfo, bool)

	session__GroupToSession    map[string][]*HubSession
	session__SessionToUserInfo map[*melody.Session]*HubSession
}
type handleMessageFunc func(*HubSession, string, map[string]interface{})
type handleSessionFunc func(*HubSession)

func NewHub() *Hub {
	hub := &Hub{
		m:                          melody.New(),
		lock:                       new(sync.Mutex),
		session__SessionToUserInfo: make(map[*melody.Session]*HubSession),
		session__GroupToSession:    make(map[string][]*HubSession),
	}
	hub.m.HandleConnect(hub.handleConnect)
	hub.m.HandleMessage(hub.handleMessage)
	hub.m.HandleDisconnect(hub.handleDisconnect)

	return hub
}
func (hub *Hub) GetGroupAllUsers(name string) []*HubSession {
	var old []*HubSession
	hub.lock.Lock()
	old = hub.session__GroupToSession[name]
	hub.lock.Unlock()
	return old
}

func (hub *Hub) broadcastGroupJson(name string, v interface{}) {
	var list []*HubSession
	hub.lock.Lock()
	list = hub.session__GroupToSession[name]
	hub.lock.Unlock()
	go func() {
		for _, v := range list {
			v.WriteJson(v)
		}
	}()
}

func (hub *Hub) handleConnect(s *melody.Session) {
	s.Keys = make(map[string]interface{})
	hubS := NewHubSession(s, hub)
	if hub.authorizationHandle != nil {
		token := ""
		query := s.Request.URL.Query()

		token = query["token"][0]
		userInfo, auth := hub.handleAuthorization(token)
		if !auth {
			fmt.Println("踢出")
			hubS.CloseWithMsg(gin.H{
				"type": "auth",
			})
			return
		}
		hubS.UserInfo = userInfo
	}
	s.Keys["session"] = hubS
	hub.lock.Lock()
	hub.session__SessionToUserInfo[s] = hubS
	hub.lock.Unlock()
}

func (hub *Hub) handleAuthorization(token string) (*UserInfo, bool) {
	if hub.authorizationHandle == nil {
		return nil, false
	}
	return hub.authorizationHandle(token)
}

func (hub *Hub) handleMessage(s *melody.Session, bytes []byte) {
	requestData := make(map[string]interface{})
	_ = json.Unmarshal(bytes, &requestData)
	hubS := s.Keys["session"].(*HubSession)

	defer func() {
		if err := recover(); err != nil {
			fmt.Println("\033[1;37;41m HandleMessage err :", err)
			hubS.WriteError(-1, err)
		}
	}()
	hub.messageHandler(hubS, requestData["type"].(string), requestData)
}

func (hub *Hub) handleDisconnect(s *melody.Session) {
	hubS := s.Keys["session"].(*HubSession)
	hub.lock.Lock()
	delete(hub.session__SessionToUserInfo, s)
	hubS.EmptyGroupUnlock()
	hub.lock.Unlock()
}

func (hub *Hub) HandleRequest(c *gin.Context) {
	hub.m.HandleRequest(c.Writer, c.Request)
	//上方代码后再调用c 就会抛错.
	// log.Fatalln("HandleRequest:" + c.ClientIP())
}

// 用户授权,如果授权成功返回用户信息,授权失败返回nil.
// 返回nil,授权失败会自动断开.
// 绑定后链接必须传入token 参数否则会被踢
func (hub *Hub) HandleAuthorization(fn func(string) (*UserInfo, bool)) {
	hub.authorizationHandle = fn
}

func (hub *Hub) HandleConnect(fn func(*HubSession)) {
	hub.connectHandler = fn
}

func (hub *Hub) HandleMessage(fn handleMessageFunc) {
	hub.messageHandler = fn
}

func (hub *Hub) HandleDisconnect(fn func(*HubSession)) {
	hub.disconnectHandler = fn
}

type HubSession struct {
	lock *sync.Mutex
	hub  *Hub
	s    *melody.Session
	// 请勿修改userInfo内属性,直接覆盖user本身
	UserInfo *UserInfo
	Groups   []string
}

func NewHubSession(s *melody.Session, hub *Hub) *HubSession {
	hubS := &HubSession{}
	hubS.s = s
	hubS.lock = hub.lock
	hubS.hub = hub
	hubS.Groups = make([]string, 0)
	return hubS
}

// 判断用户是否在某个组
func (hubS *HubSession) ExistGroup(name string) bool {
	hubS.lock.Lock()
	exist := hubS.ExistGroupUnlock(name)
	hubS.lock.Unlock()
	return exist
}

// 判断用户是否在某个组,不加锁版本
func (hubS *HubSession) ExistGroupUnlock(name string) bool {
	exist := false
	{
		for _, v := range hubS.Groups {
			if v == name {
				exist = true
				break
			}
		}
	}
	return exist
}

func (hubS *HubSession) AddGroup(name string) error {
	hubS.lock.Lock()
	if hubS.ExistGroupUnlock(name) {
		hubS.lock.Unlock()
		return errors.New("当前用户已存在该组中")
	}
	// l := list.New()
	// l.Remove(1)
	{
		if len(hubS.hub.session__GroupToSession[name]) == 0 {
			hubS.hub.session__GroupToSession[name] = make([]*HubSession, 0)
		}
		list := hubS.hub.session__GroupToSession[name]
		hubS.hub.session__GroupToSession[name] = append(list, hubS)
	}
	hubS.lock.Unlock()
	return nil
}

func (hubS *HubSession) DelGroupUnlock(name string) error {
	if !hubS.ExistGroupUnlock(name) {
		return errors.New("当前用户没有在该群组")
	}

	exist := false
	for i, v := range hubS.Groups {
		if v == name {
			exist = true
			hubS.Groups = append(hubS.Groups[:i], hubS.Groups[i+1:]...)
			break
		}
	}
	if !exist {
		return errors.New("hubS.Groups 没有找到与设计不符")
	}
	exist = false
	sessionList := hubS.hub.session__GroupToSession[name]
	for i, v := range sessionList {
		if v == hubS {
			exist = true
			hubS.hub.session__GroupToSession[name] = append(sessionList[:i], sessionList[i+1:]...)
			break
		}
	}
	if !exist {
		return errors.New("hubS.hub.session__GroupToSession[name] 没有找到与设计不符")
	}

	return nil
}

func (hubS *HubSession) DelGroup(name string) error {
	var err error
	hubS.lock.Lock()
	err = hubS.DelGroupUnlock(name)
	hubS.lock.Unlock()
	return err
}

func (hubS *HubSession) EmptyGroupUnlock() error {
	groups := hubS.Groups
	for _, g := range groups {
		err := hubS.DelGroupUnlock(g)
		if err != nil {
			return err
		}
	}
	return nil
}

func (hubS *HubSession) CallFunction(name string, args ...interface{}) {
	hubS.WriteJson(gin.H{
		"type": "call",
		"args": args,
	})
}

func (hubS *HubSession) WriteLog(v interface{}) {
	hubS.WriteJson(gin.H{
		"type":    "log",
		"message": v,
	})
}

func (hubS *HubSession) WriteError(code int, v interface{}) {
	hubS.WriteJson(gin.H{
		"type":    "error",
		"error":   code,
		"message": v,
	})
}

func (hubS *HubSession) WriteJson(v interface{}) {
	json, _ := json.Marshal(v)
	hubS.s.Write(json)
}

func (hubS *HubSession) Call(fnName string, args []interface{}) {

}

func (s *HubSession) functionReturn(request map[string]interface{}, response interface{}) {
	requestId := int(request["requestId"].(float64))
	s.WriteJson(gin.H{
		"type":      "functionReturn",
		"id":        requestId,
		"state":     true,
		"stateCode": 1,
		"response":  response,
	})
}

func (s *HubSession) functionReturnError(request map[string]interface{}, response interface{}) {
	requestId := request["requestId"].(int)
	s.WriteJson(gin.H{
		"type":      "functionReturn",
		"id":        requestId,
		"state":     false,
		"stateCode": -1,
		"response":  response,
	})
}

func (s *HubSession) functionReturnErrorCode(request map[string]interface{}, response interface{}, errorCode int) {
	requestId := request["requestId"].(int)
	s.WriteJson(gin.H{
		"type":      "functionReturn",
		"id":        requestId,
		"state":     false,
		"stateCode": errorCode,
		"response":  response,
	})
}

func (hubS *HubSession) Close() {
	hubS.s.Close()
}

func (hubS *HubSession) CloseWithMsg(v interface{}) {
	json, _ := json.Marshal(v)
	hubS.s.CloseWithMsg(json)
}
