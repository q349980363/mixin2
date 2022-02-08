package main

type LoginController struct {
	session *HubSession
}

func NewLoginController(s *HubSession) *LoginController {
	login := &LoginController{}
	login.session = s
	return login
}

func (c *LoginController) login(username string, passwor string) {

}

func (c *LoginController) register(username string, passwor string) {

}
