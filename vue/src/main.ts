import { createApp } from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
store.state.connectionInitPromise = new Promise((resolve, reject) => {
  store.state.connectionInitPromiseResolve = resolve;
});
router.beforeEach(async (to, from, next) => {
  await store.state.connectionInitPromise;
  console.log(to, store.state.loginState);

  //如果已经登录 还在尝试访问登录页直接跳转至首页
  if (to.name == "Login") {
    if (store.state.loginState) {
      next({ name: "HomeNav" });
      return;
    }
  }

  //如果当前页面不需要授权,则忽略
  if (to.meta.requiresAuth === false) {
    next();
    return;
  }

  //当前页面需要授权,如果有授权允许访问,没有授权则重定向至login
  if (store.state.loginState) {
    next();
  } else {
    next({ name: "Login" });
  }
});

const app = createApp(App);
//! 一定要在初始化后再写代码
//初始化前EventEmitter2不正确
store.dispatch("init");
const requireComponent = require.context(
  // 组件文件夹的相对路径
  "./components",
  // 是否查找子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName: string) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 名
  const componentName = upperFirst(
    camelCase(
      // 获取目录深度无关的文件名
      fileName
        .split("/")
        .pop()!
        .replace(/\.\w+$/, "")
    )
  );
  // console.log(componentName);
  app.component(
    componentName,
    // 在 `.default` 上查找组件选项。
    // 如果组件导出了 `export default` 的话，该选项会存在。
    // 否则回退到模块的根。
    componentConfig.default || componentConfig
  );
});
// app.component(
//   "Icons",
//   // 在 `.default` 上查找组件选项。
//   // 如果组件导出了 `export default` 的话，该选项会存在。
//   // 否则回退到模块的根。
//   componentConfig.default || componentConfig
// );
// console.log("requireComponent", requireComponent.keys());
app.use(store).use(router).mount("#app");
