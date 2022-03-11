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
];

export default routes;
