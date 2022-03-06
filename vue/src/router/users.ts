import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 用户
const routes: Array<RouteRecordRaw> = [
  // 添加用户
  {
    path: "/addusers",
    name: "AddUsers",
    component: () => import("../views/User/AddUsers.vue"),
  },
  // 用户聊天设置
  {
    path: "/userchatset",
    name: "UserChatSet",
    component: () => import("../views/User/UserChatSet.vue"),
  },
  // 设置用户名
  {
    path: "/setusername",
    name: "SetUserName",
    component: () => import("../views/User/SetUserName.vue"),
  },
  
];

export default routes;
