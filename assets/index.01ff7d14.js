var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as b,u as me,r as h,a as G,o as g,c as K,w as l,b as r,e as a,N as fe,f as he,g as ve,z as _e,h as ge,i as ke,j as Y,k as ye,l as Ee,m as Fe,n as we,p as Ae,q as De,s as y,t as Ce,v as Ne,x as xe,y as E,A as I,B as be,C as Ie,D as x,E as m,F as q,G as Pe,H as $e,I as P,L as Be,J as Z,K as Le,M as Oe,O as Te,P as Se,Q as Ve,R as Re,S as Me,T as je,U as X,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as qe}from"./vendor.c5ea8577.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ze();const Xe=b({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=b({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,n)=>{const s=G("router-view");return g(),K(a(ke),{locale:a(_e),"date-locale":a(ge),"theme-overrides":t.value},{default:l(()=>[r(a(ve),null,{default:l(()=>[r(a(fe),null,{default:l(()=>[r(a(he),null,{default:l(()=>[r(Xe),r(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",Q={},tt="/pikpak/",v=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${tt}${n}`,n in Q)return;Q[n]=!0;const s=n.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((F,_)=>{c.addEventListener("load",F),c.addEventListener("error",_)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=Y.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&D.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.m694990405.workers.dev"))===-1&&(e.url="https://pikpak.m694990405.workers.dev/"+e.url),e});let A=!1;d.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!A?(console.log("wait",o.url),A=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(i=>(i.data&&i.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(i.data)),A=!1,d(o))).catch(()=>(D.push("/login"),!1))):s.username&&s.password&&A?new Promise((i,c)=>{const F=setInterval(()=>{A||(clearInterval(F),i(d(o)))},100)}):(D.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const ee=Y.create({});ee.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pikpak.m694990405.workers.dev"))===-1&&(e.url="https://pikpak.m694990405.workers.dev/"+e.url),e});const At=ee,te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const st=m("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[m("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),m("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},rt=E("\u4F1A\u5458\u7801"),nt={style:{"margin-bottom":"0"}},it=m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ut=E(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),lt={class:"bottom-user-info"},ct={key:0,src:ot,class:"user-info-avatar"},pt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},dt={class:"user-info-name"},mt={key:0},ft={class:"action"},ht=E(" \u9000\u51FA\u767B\u5F55 "),vt=m("p",null,[m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),_t=E("\u6DFB\u52A0"),gt=b({setup(e){const t=h(!1),o=u=>()=>X(P,null,{default:()=>X(u)}),n=ye(),s=Ee(),i=h([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(ze)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),c=h(),F=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),c.value=u.data}).catch(u=>{console.log(u)})},_=h(),$=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{_.value=u.data}).catch(u=>{console.log(u)})},k=h(),oe=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;k.value=(p=u.data)==null?void 0:p.data})},se=(u,p)=>{console.log(p),n.push("/"+p.key)};Fe(()=>{F(),$(),oe()});const N=h(),w=h(!1),ae=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:N.value}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(u=>{console.log(u)}).finally(()=>{w.value=!1})},B=h(!1),re=u=>{B.value=u<800,t.value||(t.value=u<800)};we(s,()=>{B.value&&(t.value=!0)});const ne=Ae(),ie=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const ue=G("router-view"),le=De("resize");return g(),y(je,null,[Ce(r(a(Z),{"has-sider":"",onResize:re},{default:l(()=>[r(a(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=f=>t.value=!0),onExpand:p[2]||(p[2]=f=>t.value=!1),bordered:""},{default:l(()=>{var f,L,O,T,S,V,R,M,j,z,J;return[st,r(a(xe),{options:i.value,value:String(a(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?x("",!0):(g(),y("div",at,[E(I(a(te)((f=_.value)==null?void 0:f.quota.usage))+" / "+I(a(te)((L=_.value)==null?void 0:L.quota.limit))+" ",1),r(a(be),{type:"primary",onClick:p[0]||(p[0]=Et=>w.value=!0)},{default:l(()=>[rt]),_:1}),((O=_.value)==null?void 0:O.quota)?(g(),K(a(Ie),{key:0,type:"line",percentage:Number((((T=_.value)==null?void 0:T.quota.usage)/((S=_.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):x("",!0),m("p",nt,[r(a(q),{placement:"right"},{trigger:l(()=>[it]),default:l(()=>[ut]),_:1})])])),t.value?x("",!0):(g(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[m("div",lt,[((M=k.value)==null?void 0:M.status)==="ok"?(g(),y("img",ct)):(g(),y("img",pt)),m("div",dt,[E(I((j=c.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(g(),y("div",mt,[r(a($e),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):x("",!0)]),m("div",ft,[r(a(q),null,{trigger:l(()=>[r(a(P),{onClick:ie},{default:l(()=>[r(a(Be))]),_:1})]),default:l(()=>[ht]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(a(Z),null,{default:l(()=>[r(a(Le),{style:{height:"100vh"}},{default:l(()=>[r(a(Oe),{style:{"max-height":"100vh"}},{default:l(()=>[r(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),r(a(Me),{show:w.value,"onUpdate:show":p[5]||(p[5]=f=>w.value=f)},{default:l(()=>[r(a(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":l(()=>[r(a(P),{onClick:p[3]||(p[3]=f=>w.value=!1)},{default:l(()=>[r(a(Se))]),_:1})]),action:l(()=>[r(a(Ve),{block:!0,type:"primary",disabled:!N.value,onClick:ae},{default:l(()=>[_t]),_:1},8,["disabled"])]),default:l(()=>[r(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:N.value,"onUpdate:value":p[4]||(p[4]=f=>N.value=f)},null,8,["value"]),vt]),_:1})]),_:1},8,["show"])],64)}}}),kt=[{path:"/",name:"home",component:gt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>v(()=>import("./list.b9adffdf.js"),["assets/list.b9adffdf.js","assets/list.b938c6ec.css","assets/vendor.c5ea8577.js","assets/StreamSaver.89b65d14.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>v(()=>import("./trash.cc221a2f.js"),["assets/trash.cc221a2f.js","assets/trash.99a3677d.css","assets/vendor.c5ea8577.js"])},{path:"setting",name:"setting",component:()=>v(()=>import("./setting.902a2888.js"),["assets/setting.902a2888.js","assets/setting.f947579c.css","assets/vendor.c5ea8577.js"])},{path:"share",name:"share",component:()=>v(()=>import("./share.7e3a8e17.js"),["assets/share.7e3a8e17.js","assets/share.4f9c11c6.css","assets/vendor.c5ea8577.js"])}]},{path:"/t/:id?",name:"test",component:()=>v(()=>import("./test.c7264d0f.js"),["assets/test.c7264d0f.js","assets/vendor.c5ea8577.js"])},{path:"/s/:id",name:"shareInfo",component:()=>v(()=>import("./shareInfo.5a3decaf.js"),["assets/shareInfo.5a3decaf.js","assets/shareInfo.9e107d57.css","assets/vendor.c5ea8577.js","assets/StreamSaver.89b65d14.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>v(()=>import("./login.08ef785d.js"),["assets/login.08ef785d.js","assets/login.5735a7bc.css","assets/vendor.c5ea8577.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>v(()=>import("./register.baa9841b.js"),["assets/register.baa9841b.js","assets/register.5588ce76.css","assets/vendor.c5ea8577.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>v(()=>import("./testtest.7ba818d1.js"),["assets/testtest.7ba818d1.js","assets/vendor.c5ea8577.js"])}],yt=We({history:Ge(),routes:kt});var D=yt;const C=Ke(Qe);C.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,i=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});C.config.globalProperties.$http=d;C.use(D);C.use(qe,{router:D,siteIdList:[1280510106]});C.mount("#app");export{te as b,d as i,At as n};
