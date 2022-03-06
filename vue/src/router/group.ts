import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 群
const routes: Array<RouteRecordRaw> = [
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
];

export default routes;
