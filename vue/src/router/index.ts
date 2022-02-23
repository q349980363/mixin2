import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";

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
      requiresAuth: false,
    },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/homenav/",
    name: "HomeNav",
    component: import("../views/HomeNavigation/HomeNavigation.vue"),
    redirect: "/homenav/messagelist",
    children: [
      {
        path: "messagelist",
        name: "MessageList",
        alias: ["/homenav"],
        component: import("../views/HomeNavigation/MessageList.vue"),
      },
      {
        path: "users",
        name: "Users",
        component: import("../views/HomeNavigation/Users.vue"),
      },
      {
        path: "my",
        name: "My",
        component: import("../views/HomeNavigation/My/My.vue"),
      },
    ],
  },

  {
    path: "/searchusers",
    name: "SearchUsers",
    component: () => import("../views/SearchUsers.vue"),
  },

  {
    path: "/systemnotice",
    name: "SystemNotice",
    component: () => import("../views/SystemNotice.vue"),
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
  // 用户
  {
    path: "/addusers",
    name: "AddUsers",
    component: () => import("../views/User/AddUsers.vue"),
  },
  {
    path: "/userchatset",
    name: "UserChatSet",
    component: () => import("../views/User/UserChatSet.vue"),
  },
  {
    path: "/setusername",
    name: "SetUserName",
    component: () => import("../views/User/SetUserName.vue"),
  },
  // 群
  {
    path: "/group",
    name: "Group",
    component: () => import("../views/Group/Group.vue"),
  },

  {
    path: "/creategroup",
    name: "Creategroup",
    component: () => import("../views/Group/Creategroup.vue"),
  },
  {
    path: "/groupchatset",
    name: "GroupChatSet",
    component: () => import("../views/Group/GroupChatSet.vue"),
  },
  {
    path: "/setgroupname",
    name: "SetGroupName",
    component: () => import("../views/Group/SetGroupName.vue"),
  },
  {
    path: "/groupcard",
    name: "GroupCard",
    component: () => import("../views/Group/GroupCard.vue"),
  },

  // 我的页
  {
    path: "/userinfo",
    name: "UserInfo",
    component: () => import("../views/HomeNavigation/My/UserInfo.vue"),
  },
  {
    path: "/card",
    name: "Card",
    component: () => import("../views/HomeNavigation/My/Card.vue"),
  },
  {
    path: "/setmyname",
    name: "SetMyName",
    component: () => import("../views/HomeNavigation/My/SetMyName.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/HomeNavigation/My/Settings.vue"),
  },
  {
    path: "/settingsnumber",
    name: "SettingsNumber",
    component: () => import("../views/HomeNavigation/My/SettingsNumber.vue"),
  },
  {
    path: "/settingschat",
    name: "SettingsChat",
    component: () => import("../views/HomeNavigation/My/SettingsChat.vue"),
  },
  {
    path: "/settingscurrency",
    name: "SettingsCurrency",
    component: () => import("../views/HomeNavigation/My/SettingsCurrency.vue"),
  },
  {
    path: "/settingscurrencysize",
    name: "SettingsCurrencySize",
    component: () =>
      import("../views/HomeNavigation/My/SettingsCurrencySize.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/HomeNavigation/My/About.vue"),
  },
  {
    path: "/administer",
    name: "Administer",
    component: () => import("../views/HomeNavigation/My/Administer.vue"),
  },
  {
    path: "/administerusers",
    name: "AdministerUsers",
    component: () => import("../views/HomeNavigation/My/AdministerUsers.vue"),
  },
  {
    path: "/administergroup",
    name: "AdministerGroup",
    component: () => import("../views/HomeNavigation/My/AdministerGroup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
