(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e5efe73"],{"16eb":function(e,t,n){},"37a6":function(e,t,n){"use strict";n("16eb")},"73cf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),s=function(e){return Object(r["A"])("data-v-0e44724d"),e=e(),Object(r["x"])(),e},a={class:"register"},c=s((function(){return Object(r["i"])("div",{class:"register-title"},"注册",-1)})),i=s((function(){return Object(r["i"])("div",{class:"register-tips"},"请记住您的密码",-1)})),o=Object(r["k"])("返回登录");function u(e,t,n,s,u,b){var p=Object(r["F"])("router-link");return Object(r["w"])(),Object(r["h"])("div",a,[c,Object(r["M"])(Object(r["i"])("input",{class:"username",type:"text",placeholder:"用户名","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[r["J"],e.username]]),Object(r["M"])(Object(r["i"])("input",{class:"password",type:"password",placeholder:"密码","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[r["J"],e.password]]),i,Object(r["i"])("button",{class:"register-but",onClick:t[2]||(t[2]=function(t){return e.clickRegister()})},"注册"),Object(r["l"])(p,{class:"register-reg",to:"/"},{default:Object(r["L"])((function(){return[o]})),_:1})])}var b=n("1da1"),p=n("d4ec"),l=n("bee2"),d=n("262e"),j=n("2caf"),O=(n("96cf"),n("9ab4")),f=n("ce1f"),h=n("4bb5"),v=function(e){Object(d["a"])(n,e);var t=Object(j["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.username=localStorage.username,e.password="",e}return Object(l["a"])(n,[{key:"clickRegister",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username&&this.password){e.next=3;break}return this.tips("用户名或密码不能为空"),e.abrupt("return");case 3:return e.next=5,this.hub.invoke("Login","Register",this.username,this.password);case 5:t=e.sent,console.log(t),n=t[1],r=t[0],localStorage.username=this.username,r?(this.tips("注册成功"),n,this.tokenLogin(n)):this.tips("注册失败,"+n);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(f["b"]);Object(O["a"])([Object(h["b"])("hub")],v.prototype,"hub",void 0),Object(O["a"])([Object(h["a"])("tokenLogin")],v.prototype,"tokenLogin",void 0),Object(O["a"])([Object(h["a"])("tips")],v.prototype,"tips",void 0),v=Object(O["a"])([Object(f["a"])({components:{}})],v);var g=v,w=(n("37a6"),n("6b0d")),k=n.n(w);const m=k()(g,[["render",u],["__scopeId","data-v-0e44724d"]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-7e5efe73.a28874fe.js.map