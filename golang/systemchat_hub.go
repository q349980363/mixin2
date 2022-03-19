package main

type SystemchatHub struct {
	session *HubSession
}

func (hub *SystemchatHub) Get() []SystemChat {
	var list []SystemChat
	db.Order("ID desc").Find(&list, &SystemChat{UserName: hub.session.UserInfo.UserName})
	return list
}

func (hub *SystemchatHub) Operation(id int, result string) []SystemChat {
	_ = hub.session.hub.OperationSystemChat(*hub.session.UserInfo, id, result)
	return hub.Get()
}
func (hub *SystemchatHub) Clear() string {
	db.Delete(&SystemChat{
		UserName: hub.session.UserInfo.UserName,
	})

	return "清空完成"
}
