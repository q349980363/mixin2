package main

type LoginHub struct {
	session *HubSession
}

func NewLoginHub(s *HubSession) *LoginHub {
	login := &LoginHub{}
	login.session = s
	return login
}

func (c *LoginHub) Login(username string, passwor string) (string, bool) {
	return "test", false
}

func (c *LoginHub) Register(username string, passwor string) {

}
