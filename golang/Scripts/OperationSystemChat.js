//func (hub *Hub) SendUserAlert(receive_user string, message string)
//func (hub *Hub) SendFriendsTxt(send_user string, receive_user string, txt string)
//func (hub *Hub) SendSystemTxt(username string, txt string)

/**
 * send_user申请receive_user为好友
 * @param {*} send_user 请求发送人
 * @param {*} receive_user 接受人
 */
function OperationSystemChat_Friends_No(send_user, receive_user) {
  console.log("###################################");
  console.log("###################################");
  console.log("###################################");
  console.log("###################################");
  try {
    hub.SendUserTips(send_user, receive_user + "拒绝好友请求");
  } catch (error) {
    console.log(error);
  }
  console.log("---------------------------------------");
}
