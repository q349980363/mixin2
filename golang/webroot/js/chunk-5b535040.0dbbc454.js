(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b535040"],{1127:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=n("9fa2"),s=n.n(i),a=function(t){return Object(r["A"])("data-v-49451823"),t=t(),Object(r["x"])(),t},c={class:"userchat"},u=a((function(){return Object(r["i"])("img",{src:s.a,alt:""},null,-1)})),o={class:"userchat-list",ref:"list"},h={key:0,class:"chatbox-my"},f={class:"my-time"},l={class:"chatbubble-my"},d={key:1,class:"chatbox-he"},b={class:"he-time"},v={class:"chatbubble-he"},O={class:"userchat-bar"};function p(t,e,n,i,s,a){var p=Object(r["F"])("router-link"),m=Object(r["F"])("BaseTopBarBack"),j=Object(r["F"])("ChatBubble"),$=Object(r["F"])("Icons"),y=Object(r["F"])("templete");return Object(r["w"])(),Object(r["h"])("div",c,[Object(r["l"])(m,{title:t.UserInfo.Nickname},{default:Object(r["L"])((function(){return[Object(r["l"])(p,{to:{path:"/userchatset",query:t.UserInfo},class:"tool-trigger"},{default:Object(r["L"])((function(){return[u]})),_:1},8,["to"])]})),_:1},8,["title"]),Object(r["i"])("div",o,[(Object(r["w"])(!0),Object(r["h"])(r["a"],null,Object(r["D"])(t.dataList,(function(e){return Object(r["w"])(),Object(r["f"])(y,{key:e.ID},{default:Object(r["L"])((function(){return[e.UserName==t.MyUserInfo.UserName?(Object(r["w"])(),Object(r["h"])("div",h,[Object(r["i"])("div",f,Object(r["H"])(t.timenow(e.CreatedAt)),1),Object(r["i"])("div",l,[Object(r["l"])(j,{direction:"left"},{default:Object(r["L"])((function(){return[Object(r["k"])(Object(r["H"])(e.Data),1)]})),_:2},1024),Object(r["l"])($,{class:"headportrait",default:"defaultAvatar",name:t.MyUserInfo.Avatars},null,8,["name"])])])):(Object(r["w"])(),Object(r["h"])("div",d,[Object(r["i"])("div",b,Object(r["H"])(t.timenow(e.CreatedAt)),1),Object(r["i"])("div",v,[Object(r["l"])($,{class:"headportrait",default:"defaultAvatar",name:t.UserInfo.Avatars},null,8,["name"]),Object(r["l"])(j,{direction:"right"},{default:Object(r["L"])((function(){return[Object(r["k"])(Object(r["H"])(e.Data),1)]})),_:2},1024)])]))]})),_:2},1024)})),128))],512),Object(r["i"])("div",O,[Object(r["M"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.txt=e}),onKeyup:e[1]||(e[1]=Object(r["N"])((function(){return t.clickSend&&t.clickSend.apply(t,arguments)}),["enter"]))},null,544),[[r["J"],t.txt]]),Object(r["i"])("div",null,[Object(r["i"])("div",{class:"bar-btn",onClick:e[2]||(e[2]=function(){return t.clickSend&&t.clickSend.apply(t,arguments)})},"发送")])])])}var m=n("1da1"),j=n("d4ec"),$=n("bee2"),y=n("262e"),w=n("2caf"),g=(n("96cf"),n("d3b7"),n("159b"),n("9ab4")),M=n("ce1f"),k=n("4083"),D=n("4bb5"),S=n("c5a6"),L=n("5a0c"),x=n.n(L),_=function(t){Object(y["a"])(n,t);var e=Object(w["a"])(n);function n(){var t;return Object(j["a"])(this,n),t=e.apply(this,arguments),t.ListenerList=[],t.dataList=[],t.txt="",t}return Object($["a"])(n,[{key:"created",value:function(){this.UserInfo=this.$route.query,this.loadData();var t=this.emitter.on("friends."+this.UserInfo.UserName+"-"+this.MyUserInfo.UserName,this.addChat.bind(this),{objectify:!0});this.ListenerList.push(t),t=this.emitter.on("event.ClearChat",this.clearChat.bind(this),{objectify:!0}),this.ListenerList.push(t),t=this.emitter.on("friends."+this.MyUserInfo.UserName+"-"+this.UserInfo.UserName,this.addChat.bind(this),{objectify:!0}),this.ListenerList.push(t)}},{key:"unmounted",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.ListenerList.forEach((function(t){t.off()})),this.ListenerList=[];case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"clearChat",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dataList=[];case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"addChat",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dataList.push(e),this.$nextTick((function(){this.chatListToEnd()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadData",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.hub.invoke("Friends","GetChat",this.UserInfo.UserName);case 2:e=t.sent,e.forEach((function(t){n.dataList.push(t)})),this.$nextTick((function(){this.chatListToEnd()}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"chatListToEnd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",e=this.$refs.list;e.scrollTo({top:e.scrollHeight,behavior:t})}},{key:"chatListIsEnd",value:function(){var t=this.$refs.list,e=t.clientHeight+t.scrollTop;return e>=t.scrollHeight}},{key:"clickSend",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.txt,this.txt="",t.next=4,this.hub.invoke("Friends","SendChat",this.UserInfo.UserName,e);case 4:t.sent;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"timenow",value:function(t){return x()(t).format("YYYY/MM/DD HH:mm:ss")}}]),n}(M["b"]);Object(g["a"])([Object(D["b"])("hub")],_.prototype,"hub",void 0),Object(g["a"])([Object(D["b"])("emitter")],_.prototype,"emitter",void 0),Object(g["a"])([Object(D["b"])("userInfo")],_.prototype,"MyUserInfo",void 0),_=Object(g["a"])([Object(M["a"])({components:{ChatBubble:k["a"],Icons:S["a"]}})],_);var U=_,I=(n("4d7b"),n("6b0d")),C=n.n(I);const H=C()(U,[["render",p],["__scopeId","data-v-49451823"]]);e["default"]=H},4083:function(t,e,n){"use strict";var r=n("7a23"),i=function(t){return Object(r["A"])("data-v-d0f72662"),t=t(),Object(r["x"])(),t},s={key:0,class:"my-left"},a=i((function(){return Object(r["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"angle",viewBox:"0 0 12 14.04"},[Object(r["i"])("path",{fill:" rgb(0, 123, 255)",class:"cls-1",d:"M650.09,1193h12c-1,.57-1.09,1-3.09,4-2.29,3.43-2,9-3,10Z",transform:"translate(-650.09 -1193)"})],-1)})),c={key:1,class:"he-left"},u=i((function(){return Object(r["i"])("svg",{class:"angle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 14.04"},[Object(r["i"])("path",{fill:" rgb(255, 255, 255)",class:"cls-1",d:"M458.09,1193h-12c1,.57,1.09,1,3.09,4,2.29,3.43,2,9,3,10Z",transform:"translate(-446.09 -1193)"})],-1)})),o={key:2,class:""};function h(t,e,n,i,h,f){return"left"==t.direction?(Object(r["w"])(),Object(r["h"])("div",s,[a,Object(r["E"])(t.$slots,"default",{},void 0,!0)])):"right"==t.direction?(Object(r["w"])(),Object(r["h"])("div",c,[u,Object(r["E"])(t.$slots,"default",{},void 0,!0)])):(Object(r["w"])(),Object(r["h"])("div",o,[Object(r["k"])(Object(r["H"])(t.location)+" ",1),Object(r["E"])(t.$slots,"default",{},void 0,!0)]))}var f=n("bee2"),l=n("d4ec"),d=n("262e"),b=n("2caf"),v=n("9ab4"),O=n("ce1f"),p=function(t){Object(d["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(f["a"])(n)}(O["b"]);p=Object(v["a"])([Object(O["a"])({components:{},props:{direction:String}})],p);var m=p,j=(n("ebc8"),n("6b0d")),$=n.n(j);const y=$()(m,[["render",h],["__scopeId","data-v-d0f72662"]]);e["a"]=y},"4d7b":function(t,e,n){"use strict";n("66a3")},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",u="week",o="month",h="quarter",f="year",l="date",d="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:u,d:c,D:l,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},j="en",$={};$[j]=O;var y=function(t){return t instanceof k},w=function t(e,n,r){var i;if(!e)return j;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var c=e.name;$[c]=e,i=c}return!r&&i&&(j=i),i||!r&&j},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},M=m;M.l=w,M.i=y,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function O(t){this.$L=w(t.locale,null,!0),this.parse(t)}var p=O.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(b);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===d)},p.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return g(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<g(t)},p.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!M.u(e)||e,h=M.p(t),d=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(c)},b=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,O=this.$M,p=this.$D,m="set"+(this.$u?"UTC":"");switch(h){case f:return r?d(1,0):d(31,11);case o:return r?d(1,O):d(0,O+1);case u:var j=this.$locale().weekStart||0,$=(v<j?v+7:v)-j;return d(r?p-$:p+(6-$),O);case c:case l:return b(m+"Hours",0);case a:return b(m+"Minutes",1);case s:return b(m+"Seconds",2);case i:return b(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=M.p(t),h="set"+(this.$u?"UTC":""),d=(n={},n[c]=h+"Date",n[l]=h+"Date",n[o]=h+"Month",n[f]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[u],b=u===c?this.$D+(e-this.$W):e;if(u===o||u===f){var v=this.clone().set(l,1);v.$d[d](b),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](b);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[M.p(t)]()},p.add=function(r,h){var l,d=this;r=Number(r);var b=M.p(h),v=function(t){var e=g(d);return M.w(e.date(e.date()+Math.round(t*r)),d)};if(b===o)return this.set(o,this.$M+r);if(b===f)return this.set(f,this.$y+r);if(b===c)return v(1);if(b===u)return v(7);var O=(l={},l[s]=e,l[a]=n,l[i]=t,l)[b]||1,p=this.$d.getTime()+r*O;return M.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,c=this.$M,u=n.weekdays,o=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return M.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:M.s(c+1,2,"0"),MMM:h(n.monthsShort,c,o,3),MMMM:h(o,c),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:M.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||b[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,l,d){var b,v=M.p(l),O=g(r),p=(O.utcOffset()-this.utcOffset())*e,m=this-O,j=M.m(this,O);return j=(b={},b[f]=j/12,b[o]=j,b[h]=j/3,b[u]=(m-p)/6048e5,b[c]=(m-p)/864e5,b[a]=m/n,b[s]=m/e,b[i]=m/t,b)[v]||m,d?j:M.a(j)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return $[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},O}(),D=k.prototype;return g.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",o],["$y",f],["$D",l]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,k,g),t.$i=!0),g},g.locale=w,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=$[j],g.Ls=$,g.p={},g}))},"66a3":function(t,e,n){},bfec:function(t,e,n){},ebc8:function(t,e,n){"use strict";n("bfec")}}]);
//# sourceMappingURL=chunk-5b535040.0dbbc454.js.map