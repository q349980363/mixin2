//Before区别是当前用户还不在未上线,你向用户广播消息是收不到的,必须向session发送
//Authorization为使用token 登录

function Authorization_Before(username, session) {
  hub.SendUserTips(username, "在其他地方登录");
}
function Authorization(username, session) {
  this.SendTips("欢迎回来");
}
//注册会先触发Register然后触发LoginSuccess
function Register(username) {
  console.log("新用户注册!");
}
//不管登录还是注册都会触发次函数
function LoginSuccess_Before(username) {
  hub.SendUserTips(username, "在其他地方登录");
}
function LoginSuccess(username) {
  console.log("新用户注册!");
}
