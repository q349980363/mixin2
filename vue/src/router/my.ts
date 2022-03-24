import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 我的页 my
const routes: Array<RouteRecordRaw> = [
  // 个人信息  my-myinfo
  {
    path: "/myinfo",
    name: "MyInfo",
    component: () => import("../views/HomeNavigation/My/MyInfo.vue"),
  },
  // 设置昵称 my-userinfo-setnickname
  {
    path: "/setnickname",
    name: "SetNickname",
    component: () => import("../views/HomeNavigation/My/SetNickname.vue"),
  },
  // 设置名字 my-userinfo-myqrcode
  {
    path: "/myqrcode",
    name: "MyQrCode",
    component: () => import("../views/HomeNavigation/My/MyQrCode.vue"),
  },
// 设置 
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/HomeNavigation/My/Settings.vue"),
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
    path: "/aboutIntroduce",
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
