//func (hub *Hub) SendUserAlert(receive_user string, message string)
//func (hub *Hub) SendFriendsTxt(send_user string, receive_user string, txt string)
//func (hub *Hub) SendSystemTxt(username string, txt string)
//func (hub *Hub) SendUserTips(receive_user string, message string)
//func (hub *Hub) SendUserEvent(receive_user string, name string)

/**
 * send_user申请receive_user为好友   拒绝
 * @param {*} send_user 请求发送人
 * @param {*} receive_user 接受人
 */
function OperationSystemChat_Friends_No(send_user, receive_user) {
  try {
    hub.SendUserTips(send_user, receive_user + "拒绝好您友请求");
    hub.SendUserTips(receive_user, "成功拒绝对方");
  } catch (error) {
    console.log(error);
  }
}

/**
 * send_user申请receive_user为好友   通过
 * @param {*} send_user 请求发送人
 * @param {*} receive_user 接受人
 */
function OperationSystemChat_Friends_Ok(send_user, receive_user) {
  try {
    hub.SendUserTips(send_user, receive_user + "已通过您好友请求");
    hub.SendUserTips(receive_user, "已添加对方为好友");
  } catch (error) {
    console.log(error);
  }
}
