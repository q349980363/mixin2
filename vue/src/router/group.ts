import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 群
const routes: Array<RouteRecordRaw> = [
  {
    path: "/group",
    name: "Group",
    component: () => import("../views/Group/Group.vue"),
  },
// 创建群聊
  {
    path: "/creategroup",
    name: "Creategroup",
    component: () => import("../views/Group/Creategroup.vue"),
  },
// 创建群聊成功
  {
    path: "/creategroupchat",
    name: "CreateGroupChat",
    component: () => import("../views/Group/CreateGroupChat.vue"),
  },
  // 群聊设置
  {
    path: "/groupchatset",
    name: "GroupChatSet",
    component: () => import("../views/Group/GroupChatSet.vue"),
  },
  // 设置备注 groupchatset-setgroupname
  {
    path: "/setgroupname",
    name: "SetGroupName",
    component: () => import("../views/Group/SetGroupName.vue"),
  },
  // 群二维码 groupchatset-groupcard
  {
    path: "/groupcard",
    name: "GroupCard",
    component: () => import("../views/Group/GroupCard.vue"),
  },
  {
    path: "/searchpagegroup",
    name: "SearchPageGroup",
    component: () => import("../views/Group/SearchPageGroup.vue"),
  },
];

export default routes;
