(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r,c=n(1),i=n.n(c),a=n(14),o=n.n(a),s=n(6),l=Object(s.b)((function(e){return{"@global":{a:{color:e.linkColor,outline:"none",textDecoration:"none"}},flex:{display:"flex"},wrap:{flexWrap:"wrap"}}}));function d(e){return e.filter((function(t,n){return e.indexOf(t)===n})).join(" ")}function u(e){return function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];var i=[];return n.forEach((function(t){Object.keys(r).includes(t)&&i.push(r[t]),n.includes(t)&&i.push(e[t])})),d(i)}}var p=n(8),j=n(15),b=Object(s.b)((function(e){return{wrapper:{display:"flex",flexDirection:"column",background:e.backgroundColor,boxShadow:e.boxShadow,"&>div":{whiteSpace:"nowrap",padding:"10px",cursor:"pointer",transition:"background-color 0.5s ease","&:hover":{backgroundColor:"#8a8787"}}}}})),x=n(2),f=["\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"],O=Object(p.b)(null,null)((function(){var e=u(b());return Object(x.jsx)("div",{className:e("wrapper"),children:f.map((function(e,t){return Object(x.jsx)("div",{children:e},e+t)}))})})),h=Object(s.b)({payloadContainer:function(e){var t=e.posChildren;return{position:"absolute",top:"".concat(t.y,"px"),left:"".concat(t.x,"px")}},wrapper:function(e){var t=e.posParent;return{position:"absolute",top:"".concat(t.y,"px"),left:"".concat(t.x,"px")}},container:{position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",backgroundColor:"transparent"}});var m=function(e){var t=e.refNode,n=e.children,r=e.handler,i=Object(c.useState)({y:0,x:0}),a=Object(j.a)(i,2),s=a[0],l=a[1],d=Object(c.useState)({y:0,x:0}),u=Object(j.a)(d,2),p=u[0],b=u[1],f=h({posChildren:s,posParent:p});return Object(c.useLayoutEffect)((function(){var e,n=null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect(),r=document.getElementsByClassName(f.payloadContainer)[0],c=null===r||void 0===r?void 0:r.getBoundingClientRect();if(c){var i=c.height,a=c.width,o=function(e){var t=e.posParent,n=e.childrenHeight,r=0;return void 0!==(null===t||void 0===t?void 0:t.y)&&(r=t.y<n?t.height:-n),r}({posParent:n,childrenHeight:i}),s=function(e){var t=e.posParent,n=e.childrenWidth,r=0;return void 0!==(null===t||void 0===t?void 0:t.x)&&(r=t.x<n?t.width:-n),r}({posParent:n,childrenWidth:a});l({x:s,y:o}),b({x:null===n||void 0===n?void 0:n.left,y:null===n||void 0===n?void 0:n.top})}}),[f.payloadContainer,t]),Object(c.useEffect)((function(){var e=function(e){var t=!0;return function(){if(t)return t=!1,e()}}((function(){return r()}));return window.addEventListener("scroll",(function(t){t.preventDefault(),e()})),window.removeEventListener("scroll",(function(e){}))}),[r]),(null===t||void 0===t?void 0:t.current)?o.a.createPortal(Object(x.jsx)("div",{className:f.container,onClick:function(){return r()},children:Object(x.jsx)("div",{className:f.wrapper,children:Object(x.jsx)("div",{className:f.payloadContainer,children:n})})}),document.body):null},v=Object(s.b)((function(e){return{menu:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",width:"20px",height:"20px",pointsEvents:"none","&>span":{pointEvents:"none",textAlign:"center",borderRadius:"100%",width:"4px",height:"4px",backgroundColor:"black",marginTop:"2px"}},btn:{outline:"none",border:"none",padding:"10px",backgroundColor:"transparent"}}})),g=Object(p.b)(null,null)((function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],i=n[1],a=v(),o=u(a);return Object(x.jsxs)("button",{className:o("menu","btn"),ref:e,onClick:function(){return i(!r)},children:[Object(x.jsxs)("div",{className:a.menu,children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]}),r&&Object(x.jsx)(m,{refNode:e,handler:function(){return i(!1)},children:Object(x.jsx)(O,{})})]})})),w=Object(s.b)((function(e){return{payloadContainer:{padding:"16px"},titleContainer:{justifyContent:"space-between",backgroundColor:e.backgroundColor,borderBottom:e.border,alignItems:"center"},menu:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",width:"24px",height:"24px",pointsEvents:"none","&>span":{pointsEvents:"none",textAlign:"center",borderRadius:"100%",width:"4px",height:"4px",backgroundColor:"black",marginTop:"4px"}},btn:{outline:"none",border:"none",padding:"10px",backgroundColor:"red"},title:{}}})),y=Object(s.b)((function(e){return{wrapper:{border:e.border,margin:"11px",minWidth:"300px"},payloadContainer:{padding:"16px"},flex:{justifyContent:"space-between"}}})),E=function(e){var t=w(),n=u(t);return Object(x.jsxs)("div",{className:n("payloadContainer","titleContainer","flex"),children:[Object(x.jsx)("div",{className:t.title,children:e.title}),Object(x.jsx)(g,{})]})},C=Object(p.b)(null,null)((function(e){var t=e.title,n=e.children,r=y();return Object(x.jsxs)("div",{className:r.wrapper,children:[Object(x.jsx)(E,{title:t}),Object(x.jsx)("div",{className:r.payloadContainer,children:n})]})})),N=Object(s.b)((function(e){return{avatar:{width:"64px",height:"64px",backgroundColor:"black",marginRight:"10px"},personInfo:{display:"flex",flexDirection:"column","&>span":{marginTop:"5px"},"&__position":{color:"red"}},wrapperJustify:{justifyContent:"space-between"},wrapper:{padding:"10px",alignItems:"center"},flex:{display:"flex"}}}),{name:"PersonItemDescription"}),k=Object(s.b)((function(e){return{wrapper:{flexDirection:"column",border:e.border,marginRight:"10px",flexGrow:"1"}}}),{name:"PersonItem"}),_=Object(s.b)((function(e){return{comments:{borderTop:e.border,padding:"10px"}}}),{name:"PersonItemComments"}),W=function(e){var t=e.comments,n=_();return t?Object(x.jsx)("div",{className:n.comments,children:"\u0415\u0441\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}):Object(x.jsx)("div",{className:n.comments,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"})},L=function(){var e=N(),t=u(e);return Object(x.jsxs)("div",{className:t("wrapper","flex","wrapperJustify"),children:[Object(x.jsxs)("div",{className:t("flex"),children:[Object(x.jsx)("img",{src:"#",alt:"avatar",className:e.avatar}),Object(x.jsxs)("div",{className:e.personInfo,children:[Object(x.jsx)("span",{className:"position",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440"}),Object(x.jsx)("span",{children:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447"})]})]}),Object(x.jsx)(g,{})]})},T=Object(p.b)(null,null)((function(){var e=u(k());return Object(x.jsxs)("div",{className:e("flex","wrapper"),children:[Object(x.jsx)(L,{}),Object(x.jsx)(W,{})]})})),D=Object(s.b)((function(e){return{wrapper:{margin:"30px","&>div":{marginBottom:"24px"}}}})),I=function(e){var t=e.children,n=u(D());return Object(x.jsx)("div",{className:n("wrapper"),children:t})},S=Object(s.b)((function(e){return{contentWrapper:{borderBottom:e.border,padding:"10px"}}})),B=Object(p.b)(null,null)((function(e){var t=e.children,n=S();return Object(x.jsx)("div",{className:n.contentWrapper,children:t})})),P=n.p+"static/media/img.e1b3030c.jpg",F=Object(s.b)((function(e){return{container__image:{margin:"-10px",overflowX:"auto","-ms-overflow-style":"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},"&>img":{margin:"10px"}},link:{margin:"-10px"},link__a:{margin:"10px"},locationWrapper:{"&>figure":{margin:"0px","&>figCaption":{margin:"10px","&>span":{margin:"-10px"}}}},locationWrapper__image:{overflow:"hidden","&>img":{}},cardInfoWrapper:{display:"flex",flexWrap:"wrap","&>:first-child":{flex:"2 2 300px"},"&>:last-child":{flex:"1 2 300px"}}}})),R=Object(p.b)(null,null)((function(){var e=u(F());return Object(x.jsxs)(I,{children:[Object(x.jsxs)("div",{className:e("cardInfoWrapper"),children:[Object(x.jsx)(C,{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B,{children:"\u0420\u043e\u0441\u0441\u0438\u0438\u0306\u0441\u043a\u043e\u0435 \u0441\u0443\u0434\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0438 \u0441\u0443\u0434\u043e\u0440\u0435\u043c\u043e\u043d\u0442\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0435\u0435\u0441\u044f \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 \u0411\u043e\u043b\u044c\u0448\u043e\u0438\u0306 \u041a\u0430\u043c\u0435\u043d\u044c \u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0440\u0430\u044f. \u0412\u0435\u0434\u0443\u0449\u0435\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443 \u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0445 \u043b\u043e\u0434\u043e\u043a \u0422\u0438\u0445\u043e\u043e\u043a\u0435\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u0444\u043b\u043e\u0442\u0430 \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043d\u0430 \u0414\u0430\u043b\u044c\u043d\u0435\u043c \u0412\u043e\u0441\u0442\u043e\u043a\u0435, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0435\u0435\u0441\u044f \u043d\u0430 \u0440\u0435\u043c\u043e\u043d\u0442\u0435, \u043f\u0435\u0440\u0435\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u043c\u043e\u0434\u0435\u0440\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0442\u043e\u043c\u043d\u044b\u0445 \u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0445 \u0440\u0430\u043a\u0435\u0442\u043e\u043d\u043e\u0441\u0446\u0435\u0432."}),Object(x.jsx)(B,{children:Object(x.jsxs)("div",{className:e("link"),children:[Object(x.jsx)("div",{className:e("link__a"),children:Object(x.jsx)("a",{href:"#",children:"\u041d\u0430 \u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u044f\u0442 \u0442\u0440\u0438 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043e\u043b\u0438\u043c\u043f\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0440\u0435\u0437\u0435\u0440\u0432\u0430"})}),Object(x.jsx)("div",{className:e("link__a"),children:Object(x.jsx)("a",{href:"#",children:"\u0412 \u042e\u0436\u043d\u043e-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0435 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c \u0440\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u2013 \u0441\u0442\u0430\u0434\u0438\u043e\u043d\u0430 \xab\u0421\u043f\u0430\u0440\u0442\u0430\u043a\xbb"})})]})}),Object(x.jsx)(B,{children:Object(x.jsxs)("div",{className:e("flex","container__image"),children:[Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"}),Object(x.jsx)("img",{src:P,alt:"#"})]})})]})}),Object(x.jsx)(C,{title:"\u041c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",children:Object(x.jsx)("div",{className:e("locationWrapper"),children:Object(x.jsxs)("figure",{children:[Object(x.jsx)("figcaption",{children:Object(x.jsx)("span",{children:"\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439, \u0433. \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u0430\u043c\u0435\u043d\u044c, \u0443\u043b. \u041f\u0440\u043e\u043b\u0435\u0442\u0430\u0440\u0441\u043a\u043e-\u043a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a\u0430\u044f \u0437\u0434\u0430\u043d\u0438\u0435 53 \u0434\u043b\u0438\u043d\u044b\u0439 \u043b\u0438\u0442\u0435\u0440 2\u043a\u043b4\u0416"})}),Object(x.jsx)("div",{className:e("locationWrapper__image"),children:Object(x.jsx)("img",{src:P,alt:""})})]})})})]}),Object(x.jsx)(C,{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a",children:Object(x.jsxs)("div",{className:e("flex","wrap"),children:[Object(x.jsx)(T,{}),Object(x.jsx)(T,{}),Object(x.jsx)(T,{})]})})]})}));var V,H,A=function(){return function(e){r?console.error("\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043e\u0434\u0438\u043d \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c"):r=e}(l()),Object(x.jsx)(R,{})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},G=n(10),J=n(11);!function(e){e.TOOGLE_MENU="TOOGLE_MENU"}(V||(V={})),function(e){e.ADD_EVENT="ADD_EVENT",e.SHOW_EVENT="SHOW_EVENT"}(H||(H={}));var U={eventList:[]},X={id:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a",status:!0},q=Object(G.combineReducers)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.TOOGLE_MENU:return Object(J.a)(Object(J.a)({},e),{},{status:!t.payload.status});default:return e}},eventList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ADD_EVENT:return Object(J.a)(Object(J.a)({},e),{},{eventList:e.eventList.concat([t.payload.eventItemList])});case H.SHOW_EVENT:return t.payload.eventItemList?Object(J.a)(Object(J.a)({},e),{},{eventList:e.eventList.concat(t.payload.eventItemList)}):e;default:return e}}}),z=n(24),K=n(22),Q=n(23),Y=n(13),Z=n.n(Y),$=n(17),ee=Z.a.mark(ne),te=Z.a.mark(re);function ne(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.c)(H.SHOW_EVENT,re);case 2:case"end":return e.stop()}}),ee)}function re(e){var t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($.a)(ce,e.payload.url);case 3:return t=n.sent,n.next=6,Object($.b)({type:H.SHOW_EVENT,payload:{eventItemList:t}});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,new Error(n.t0);case 12:case"end":return n.stop()}}),te,null,[[0,8]])}function ce(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(Q.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var ae=Object(z.a)();var oe=Object(G.createStore)(q,Object(K.composeWithDevTools)(Object(G.applyMiddleware)(ae)));ae.run(ne),o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(p.a,{store:oe,children:Object(x.jsx)(s.a,{theme:{border:"1px solid #E1E1E1",backgroundColor:"#FBFBFB",filterBorderColor__active:"#4583CC",borderColor:"#E1E1E1",boxShadow:"0px 4px 12px #E5E5E5",secondaryBackground:"0px 4px 12px rgba(0, 0, 0, 0.16)",linkColor:"#2F80ED"},children:Object(x.jsx)(A,{})})})}),document.getElementById("root")),M()}},[[39,1,2]]]);
//# sourceMappingURL=main.9cef2a20.chunk.js.map