(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(4),r=a.n(l),c=(a(19),a(20),a(1));var i=function(){var e=Object(c.c)((function(e){return e.todos})),t=Object(c.b)();return o.a.createElement("div",{className:"task-list-container"},o.a.createElement("svg",{viewBox:"0 0 0 0",style:{position:"absolute",zIndex:-1,opacity:0}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"boxGradient",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"25",y2:"25"},o.a.createElement("stop",{offset:"0%","stop-color":"#27FDC7"}),o.a.createElement("stop",{offset:"100%","stop-color":"#0FC0F5"})),o.a.createElement("linearGradient",{id:"lineGradient"},o.a.createElement("stop",{offset:"0%","stop-color":"#0FC0F5"}),o.a.createElement("stop",{offset:"100%","stop-color":"#27FDC7"})),o.a.createElement("path",{id:"todo__line",stroke:"url(#lineGradient)",d:"M21 12.3h168v0.1z"}),o.a.createElement("path",{id:"todo__box",stroke:"url(#boxGradient)",d:"M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"}),o.a.createElement("path",{id:"todo__check",stroke:"url(#boxGradient)",d:"M10 13l2 2 5-5"}),o.a.createElement("circle",{id:"todo__circle",cx:"13.5",cy:"12.5",r:"10"}))),o.a.createElement("ul",null,e.map((function(e){return o.a.createElement("div",{className:"todo-list-wrapper"},o.a.createElement("div",{className:"todo-list"},o.a.createElement("label",{className:"todo"},o.a.createElement("input",{className:"todo__state",type:"checkbox",value:e.task}),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 200 25",class:"todo__icon"},o.a.createElement("use",{xlinkHref:"#todo__line",class:"todo__line"}),o.a.createElement("use",{xlinkHref:"#todo__box",class:"todo__box"}),o.a.createElement("use",{xlinkHref:"#todo__check",class:"todo__check"}),o.a.createElement("use",{xlinkHref:"#todo__circle",class:"todo__circle"})),o.a.createElement("div",{class:"todo__text"},e.task),o.a.createElement("ion-icon",{name:"trash-outline"})),o.a.createElement("span",{className:"delete-button",onClick:function(a){return function(e,a){e.preventDefault(),t(function(e){return{type:"DELETE_TASK",payload:e}}(a))}(a,e.id)}},o.a.createElement("svg",{className:"delete-icon",width:"52",height:"45",viewBox:"0 0 52 45",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M33.853 11.1123V8.12756C33.853 6.84184 32.6857 5.83164 31.2 5.83164H20.8C19.3143 5.83164 18.1469 6.84184 18.1469 8.12756V11.1123H7.05713V13.8674H10.4L13.053 39.7653C13.1061 40.4541 13.7959 41.0051 14.6449 41.0051H37.4081C38.2571 41.0051 38.9469 40.4541 39 39.7653L41.653 13.8674H45.049V11.1123C45.049 11.1123 33.853 11.1123 33.853 11.1123ZM21.3306 8.58674H30.6694V11.1123H21.3306V8.58674ZM35.9224 38.25H16.0245L13.5306 13.8674H38.3102L35.9224 38.25Z",fill:"url(#paint0_linear)"}),o.a.createElement("path",{d:"M33.7469 17.9541L30.5632 17.8623L29.8734 34.1633L33.0571 34.2551L33.7469 17.9541Z",fill:"url(#paint1_linear)"}),o.a.createElement("path",{d:"M22.1265 34.1633L21.4367 17.8623L18.2531 17.9541L18.9428 34.2551L22.1265 34.1633Z",fill:"url(#paint2_linear)"}),o.a.createElement("path",{d:"M27.5918 17.9082H24.4081V34.2092H27.5918V17.9082Z",fill:"url(#paint3_linear)"}),o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"paint0_linear",x1:"26.053",y1:"3.55868",x2:"26.053",y2:"41.4354",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{"stop-color":"#00EFD1"}),o.a.createElement("stop",{offset:"1","stop-color":"#00ACEA"})),o.a.createElement("linearGradient",{id:"paint1_linear",x1:"31.8102",y1:"3.55869",x2:"31.8102",y2:"41.4354",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{"stop-color":"#00EFD1"}),o.a.createElement("stop",{offset:"1","stop-color":"#00ACEA"})),o.a.createElement("linearGradient",{id:"paint2_linear",x1:"20.1898",y1:"3.55869",x2:"20.1898",y2:"41.4354",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{"stop-color":"#00EFD1"}),o.a.createElement("stop",{offset:"1","stop-color":"#00ACEA"})),o.a.createElement("linearGradient",{id:"paint3_linear",x1:"26",y1:"3.55868",x2:"26",y2:"41.4354",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{"stop-color":"#00EFD1"}),o.a.createElement("stop",{offset:"1","stop-color":"#00ACEA"}))))),o.a.createElement("br",null)))}))))},s=a(13);var d=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(c.c)((function(e){return e.todos.length})),i=Object(c.b)();return o.a.createElement("div",{className:"add-todo-task-container"},o.a.createElement("form",{className:"task-form",onSubmit:function(e){e.preventDefault();var t={id:r+1,task:a};console.log(r),i({type:"ADD_TASK",payload:t}),l("")}},o.a.createElement("input",{className:"task-input",type:"text",name:"task-input",value:a,placeholder:"What to do today?",onChange:function(e){return l(e.target.value)}}),o.a.createElement("button",{className:"add-button"},o.a.createElement("svg",{className:"add-icon",width:"56",height:"50",viewBox:"0 0 56 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M28 0C12.5599 0 0 11.2142 0 25C0 38.7858 12.5599 50 28 50C43.4401 50 56 38.7839 56 25C56 11.2161 43.4401 0 28 0ZM28 46.1271C14.9543 46.1271 4.3377 36.6499 4.3377 25C4.3377 13.3501 14.9543 3.87295 28 3.87295C41.0457 3.87295 51.6623 13.3501 51.6623 25C51.6623 36.6499 41.0479 46.1271 28 46.1271Z",fill:"white"}),o.a.createElement("path",{d:"M38.8575 22.6824H30.1821V14.9365C30.1821 13.8676 29.2126 13 28.0132 13C26.8138 13 25.8443 13.8676 25.8443 14.9365V22.6824H17.1689C15.9695 22.6824 15 23.55 15 24.6189C15 25.6879 15.9695 26.5555 17.1689 26.5555H25.8443V34.3014C25.8443 35.3703 26.8138 36.2379 28.0132 36.2379C29.2126 36.2379 30.1821 35.3703 30.1821 34.3014V26.5555H38.8575C40.0569 26.5555 41.0264 25.6879 41.0264 24.6189C41.0264 23.55 40.0569 22.6824 38.8575 22.6824Z",fill:"white"})))))};a(27);var m=function(){return o.a.createElement("div",{className:"todolist-app"},o.a.createElement(d,null),o.a.createElement(i,null))};var u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(2),E=a(10),f=a(9),h=[{id:1,task:"Be creative!"}],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return[].concat(Object(f.a)(e),[t.payload]);case"UPDATE_TASK":return e.map((function(e,a){return e.id===t.payload.id?Object(E.a)(Object(E.a)({},e),{},{id:t.payload.id,task:t.payload.task}):e}));case"DELETE_TASK":return e.filter((function(e,a){return e.id!==t.payload}));default:return Object(f.a)(e)}},v=Object(p.b)({todos:_}),x=Object(p.c)(v);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:x},o.a.createElement(u,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.89fc1401.chunk.js.map