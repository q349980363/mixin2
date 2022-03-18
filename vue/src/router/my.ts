import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 我的页 my
const routes: Array<RouteRecordRaw> = [
  // 用户信息  my-userinfo
  {
    path: "/userinfo",
    name: "UserInfo",
    component: () => import("../views/HomeNavigation/My/UserInfo.vue"),
  },
  // 设置名字 my-userinfo-setmyname
  {
    path: "/setmyname",
    name: "SetMyName",
    component: () => import("../views/HomeNavigation/My/SetMyName.vue"),
  },
  // 设置名字 my-userinfo-card
  {
    path: "/card",
    name: "Card",
    component: () => import("../views/HomeNavigation/My/Card.vue"),
  },
// 设置 
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/HomeNavigation/My/Settings.vue"),
  },
  // 账号与安全 settings-settingsnumber  
  {
    path: "/settingsnumber",
    name: "SettingsNumber",
    component: () => import("../views/HomeNavigation/My/SettingsNumber.vue"),
  },
  // 账号与安全 - 设置账号 settings-settingsnumber - settingsnumberlist
  {
    path: "/settingsnumberlist",
    name: "SettingsNumberList",
    component: () => import("../views/HomeNavigation/My/SettingsNumberList.vue"),
  },
  // 聊天 settings-settingschat
  {
    path: "/settingschat",
    name: "SettingsChat",
    component: () => import("../views/HomeNavigation/My/SettingsChat.vue"),
  },
    // 通用 settings-settingscurrency
  {
    path: "/settingscurrency",
    name: "SettingsCurrency",
    component: () => import("../views/HomeNavigation/My/SettingsCurrency.vue"),
  },
  // 字体大小 settings-settingscurrency-settingscurrencysize
  {
    path: "/settingscurrencysize",
    name: "SettingsCurrencySize",
    component: () =>
      import("../views/HomeNavigation/My/SettingsCurrencySize.vue"),
  },
  // 关于
  {
    path: "/about",
    name: "About",
    component: () => import("../views/HomeNavigation/My/About.vue"),
  },
  // 功能介绍  about-introduce
  {
    path: "/aboutintroduce",
    name: "AboutIntroduce",
    component: () => import("../views/HomeNavigation/My/AboutIntroduce.vue"),
  },
  // 后台管理
  {
    path: "/administer",
    name: "Administer",
    component: () => import("../views/HomeNavigation/My/Administer.vue"),
  },
  // 用户列表 administer-administerusers
  {
    path: "/administerusers",
    name: "AdministerUsers",
    component: () => import("../views/HomeNavigation/My/AdministerUsers.vue"),
  },
  // 群列表 administer-administergroup
  {
    path: "/administergroup",
    name: "AdministerGroup",
    component: () => import("../views/HomeNavigation/My/AdministerGroup.vue"),
  },
];

export default routes;
