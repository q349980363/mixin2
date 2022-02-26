package main

type LoginHub struct {
	session *HubSession
}

func NewLoginHub(s *HubSession) *LoginHub {
	login := &LoginHub{}
	login.session = s
	return login
}

func (hub *LoginHub) Login(username string, password string) (bool, string) {
	if username == "" || password == "" {
		return false, "用户名或密码不能为空"
	}
	var userInfo UserInfo
	if db.First(&userInfo, &UserInfo{UserName: username}).RecordNotFound() {
		return false, "用户不存在"
	}

	if password != userInfo.PassWord {
		return false, "密码不正确"
	}
	hub.loginSuccess(&userInfo)
	return true, userInfo.ToKen
}

func (hub *LoginHub) Register(username string, password string) (bool, string) {
	if username == "" || password == "" {
		return false, "用户名或密码不能为空"
	}
	if !db.First(&UserInfo{}, &UserInfo{UserName: username}).RecordNotFound() {
		return false, "用户已存在"
	}
	userInfo := UserInfo{
		UserName: username,
		PassWord: password,
		ToKen:    randomString(32),
	}
	db.Create(&userInfo)
	hub.loginSuccess(&userInfo)
	return true, userInfo.ToKen
}

func (hub *LoginHub) GetMy() *UserInfo {
	// if hub.session.UserInfo == nil {
	// 	return UserInfo{}
	// }
	return hub.session.UserInfo
}

func (hub *LoginHub) loginSuccess(userInfo *UserInfo) {
	hub.session.UserInfo = userInfo
	hub.session.AddGroup("user_" + userInfo.UserName)
	// hub.session.AddGroup("World Channel")
}
