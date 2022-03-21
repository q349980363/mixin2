import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import my from "./my";
import users from "./users";
import group from "./group";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Default",
    redirect: "/login",
    meta: {
      requiresAuth: false,
    },
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      requiresAuth: false,
    },
  },

  // 主页导航
  {
    path: "/homenav/",
    name: "HomeNav",
    component: () => import("../views/HomeNavigation/HomeNavigation.vue"),
    redirect: "/homenav/messagelist",
    children: [
      // 消息列表
      {
        path: "messagelist",
        name: "MessageList",
        alias: ["/homenav"],
        component: () => import("../views/HomeNavigation/MessageList.vue"),
      },
      // 用户列表
      {
        path: "users",
        name: "Users",
        component: () => import("../views/HomeNavigation/Users.vue"),
      },
      // 我的
      {
        path: "my",
        name: "My",
        component: () => import("../views/HomeNavigation/My/My.vue"),
      },
    ],
  },
  // 临时 用完删除
  // {
  //   path: "/selectprompt",
  //   name: "SelectPrompt",
  //   component: () => import("../components/SelectPrompt.vue"),
  // },
  // 系统通知
  {
    path: "/systeminforms",
    name: "SystemInforms",
    component: () => import("../views/SystemInforms.vue"),
  },
  // 等待加载
  {
    path: "/waitingload",
    name: "WaitingLoad",
    component: () => import("../views/WaitingLoad.vue"),
  },
  // 二维码
  {
    path: "/qrcode",
    name: "QRCode",
    component: () => import("../views/QRCode.vue"),
  },
  // 聊天页
  {
    path: "/userchat",
    name: "UserChat",
    component: () => import("../views/Chat/UserChat.vue"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/groupchat",
    name: "GroupChat",
    component: () => import("../views/Chat/GroupChat.vue"),
    meta: { transition: "slide-left" },
  },

  {
    path: "/demo",
    name: "Demo",
    component: () => import("../views/Demo.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];
const routesList = routes.concat(my).concat(users).concat(group);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesList,
});

export default router;
