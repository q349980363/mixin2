import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 用户
const routes: Array<RouteRecordRaw> = [


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
  {
    path: "/searchpageuser",
    name: "SearchPageUser",
    component: () => import("../views/User/SearchPageUser.vue"),
  },
  
];

export default routes;
