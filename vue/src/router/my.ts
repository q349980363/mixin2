import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 我的页
const routes: Array<RouteRecordRaw> = [
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

export default routes;
