import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    back() {
      if (window.history.length <= 2) {
        //TODO 当页面进入时记录历史记录长度
        // 如果与页面进入时长度相等则无法后退
        router.replace("/homenav");
      } else {
        router.go(-1);
        
      }
    }
  },
  modules: {
  }
})


/**
 * 
 * 
 * 
 * https://blog.csdn.net/fifteen718/article/details/102544541
window.scrollTo({ 
    top: 0, 
    behavior: "smooth" 
});
 * 
 */