import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Default",
    redirect: (to) => {
      //TODO 做权限判定,如果已经登录直接跳转至home
      //如果未登录跳转至其他页面
      return "login";
    },
    meta: {
      login: false,
    },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      login: false,
    },
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      login: false,
    },
  },

  {
    path: "/homenav",
    name: "HomeNav",
    component: import("../views/HomeNavigation/HomeNavigation.vue"),
    children: [
      {
        path: "/homenav/messagelist",
        name: "MessageList",
        alias: ["/homenav"],
        component: import("../views/HomeNavigation/MessageList.vue"),
      },
      {
        path: "/homenav/users",
        name: "Users",
        component: import("../views/HomeNavigation/Users.vue"),
      },
      {
        path: "/homenav/my",
        name: "My",
        component: import("../views/HomeNavigation/My.vue"),
      },
    ],
  },

  {
    path: "/searchusers",
    name: "SearchUsers",
    component: () => import("../views/SearchUsers.vue"),
  },
  {
    path: "/addusers",
    name: "AddUsers",
    component: () => import("../views/AddUsers.vue"),
  },
  {
    path: "/systemnotice",
    name: "SystemNotice",
    component: () => import("../views/SystemNotice.vue"),
  },
  {
    path: "/userchat",
    name: "UserChat",
    component: () => import("../views/Chat/UserChat.vue"),
  },
  {
    path: "/group",
    name: "Group",
    component: () => import("../views/Group.vue"),
  },
  {
    path: "/groupchat",
    name: "GroupChat",
    component: () => import("../views/Chat/GroupChat.vue"),
  },
  {
    path: "/creategroup",
    name: "Creategroup",
    component: () => import("../views/Creategroup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
