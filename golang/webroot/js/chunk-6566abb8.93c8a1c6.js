(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6566abb8"],{a55b:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("e347"),a=n.n(r),i=function(e){return Object(c["A"])("data-v-c8fbc3ea"),e=e(),Object(c["x"])(),e},o={class:"login"},s=i((function(){return Object(c["i"])("div",{class:"login-title"},"雅茹软件",-1)})),u=i((function(){return Object(c["i"])("img",{class:"login-icon",src:a.a,alt:""},null,-1)})),b=Object(c["k"])("注册新用户");function l(e,t,n,r,a,i){var l=Object(c["F"])("router-link");return Object(c["w"])(),Object(c["h"])("div",o,[s,u,Object(c["M"])(Object(c["i"])("input",{class:"username",type:"text",placeholder:"用户名","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[c["J"],e.username]]),Object(c["M"])(Object(c["i"])("input",{class:"password",type:"password",placeholder:"密码","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[c["J"],e.password]]),Object(c["i"])("button",{class:"login-but",onClick:t[2]||(t[2]=function(t){return e.clickLogin()})},"登录"),Object(c["l"])(l,{class:"login-reg",to:"/register"},{default:Object(c["L"])((function(){return[b]})),_:1})])}var p=n("1da1"),d=n("d4ec"),j=n("bee2"),O=n("262e"),f=n("2caf"),h=(n("96cf"),n("9ab4")),g=n("4bb5"),v=n("ce1f"),m=function(e){Object(O["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.username=localStorage.username,e}return Object(j["a"])(n,[{key:"clickLogin",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(localStorage.username=this.username,this.username&&this.password){e.next=4;break}return this.tips("用户名或密码不能为空"),e.abrupt("return");case 4:return e.next=6,this.hub.invoke("Login","Login",this.username,this.password);case 6:t=e.sent,console.log(t),n=t[1],c=t[0],c?(this.tips("登录成功"),n,this.tokenLogin(n)):this.tips("登录失败,"+n);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(v["b"]);Object(h["a"])([Object(g["b"])("hub")],m.prototype,"hub",void 0),Object(h["a"])([Object(g["a"])("tokenLogin")],m.prototype,"tokenLogin",void 0),Object(h["a"])([Object(g["a"])("tips")],m.prototype,"tips",void 0),m=Object(h["a"])([Object(v["a"])({components:{}})],m);var w=m,k=(n("e206"),n("6b0d")),y=n.n(k);const L=y()(w,[["render",l],["__scopeId","data-v-c8fbc3ea"]]);t["default"]=L},e206:function(e,t,n){"use strict";n("e5e8")},e5e8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6566abb8.93c8a1c6.js.map