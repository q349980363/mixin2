package main

type LoginHub struct {
	session *HubSession
}

func NewLoginHub(s *HubSession) *LoginHub {
	login := &LoginHub{}
	login.session = s
	return login
}

func (c *LoginHub) Login(username string, password string) (string, bool) {
	if username == "" || password == "" {
		return "用户名或密码不能为空", false
	}
	var userInfo UserInfo
	if db.First(&userInfo, &UserInfo{UserName: username}).RecordNotFound() {
		return "用户不存在", false
	}

	if password != userInfo.PassWord {
		return "密码不正确", false
	}
	return userInfo.ToKen, true
}

func (c *LoginHub) Register(username string, password string) (string, bool) {
	if username == "" || password == "" {
		return "用户名或密码不能为空", false
	}
	if !db.First(&UserInfo{}, &UserInfo{UserName: username}).RecordNotFound() {
		return "用户已存在", false
	}
	userInfo := UserInfo{
		UserName: username,
		PassWord: password,
		ToKen:    randomString(32),
	}
	db.Create(&userInfo)
	return userInfo.ToKen, true
}
