package main

type LoginHub struct {
	session *HubSession
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

	vm.Run(getJavaScriptFile("Login.js"))
	vm.Call("Register", hub, userInfo.UserName)
	hub.loginSuccess(&userInfo)
	return true, userInfo.ToKen
}

func (hub *LoginHub) loginSuccess(userInfo *UserInfo) {
	vm.Run(getJavaScriptFile("Login.js"))
	hub.session.UserInfo = userInfo
	vm.Call("LoginSuccess_Before", hub, userInfo.UserName)
	hub.session.AddGroup("user_" + userInfo.UserName)
	vm.Call("LoginSuccess", hub, userInfo.UserName)
}
