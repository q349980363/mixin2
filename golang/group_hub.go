package main

type GroupHub struct {
	session *HubSession
}

func (hub *GroupHub) Create(userList string) (bool, string) {

	return true, "创建成功"
}
