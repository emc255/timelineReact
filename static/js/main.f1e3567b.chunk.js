(this["webpackJsonpassignment02-timeline"]=this["webpackJsonpassignment02-timeline"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),l=(a(10),a(2)),m=a(1);var i=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"MY TIMELINE"))};var o=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(0),i=Object(m.a)(l,2),o=i[0],u=i[1];return c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=new Date;""!==r&&(e.addMessage(r,o,a.toLocaleTimeString(),a.toLocaleDateString()),s(""))}},c.a.createElement("div",{className:"choose-user-container"},c.a.createElement("select",{onChange:function(e){e.target.value?u(e.target.value):u(0)}},e.user.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))),c.a.createElement("input",{className:"user-input-post",type:"text",value:r,placeholder:"message goes here...",onChange:function(e){return s(e.target.value)}}),c.a.createElement("div",{className:"post-btn-container"},c.a.createElement("button",{className:"post-btn"},"post"))))};var u=function(e){return e.message.length>0?c.a.createElement("div",null,e.message.map((function(t,a){return c.a.createElement("div",{className:"outer-message-container",key:a},c.a.createElement("div",{className:"user-photo"},c.a.createElement("img",{src:t.photo,alt:"kitty"})),c.a.createElement("div",{className:"message-content-container"},c.a.createElement("p",{className:"line user-name"},t.name),c.a.createElement("p",{className:"line date"},t.date),c.a.createElement("span",null,"@"),c.a.createElement("p",{className:"line time"},t.time)),c.a.createElement("div",{className:"speech-bubble"},c.a.createElement("p",{classname:"aaa"},t.message)),c.a.createElement("button",{className:"delete-btn","data-id":a,onClick:function(t){return e.delete(t.target.dataset.id)}},"delete post"))}))):c.a.createElement("div",null)};a(11);var p=function(){var e=Object(n.useState)([{id:0,name:"euhna",photo:"http://placekitten.com/g/101/100"},{id:1,name:"sana",photo:"http://placekitten.com/g/102/100"},{id:2,name:"sinb",photo:"http://placekitten.com/g/103/100"},{id:3,name:"yerin",photo:"http://placekitten.com/g/104/100"},{id:4,name:"nayeon",photo:"http://placekitten.com/g/105/100?"}]),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),s=Object(m.a)(r,2),p=s[0],d=s[1];return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(o,{user:a,addMessage:function(e,t,n,c){var r={};a.map((function(a){return a.id===parseInt(t)&&(r={index:a.id,name:a.name,photo:a.photo,message:e,date:c,time:n}),r}));var s=[r].concat(Object(l.a)(p));d(s)}}),c.a.createElement(u,{message:p,delete:function(e){var t=Object(l.a)(p);t=t.filter((function(t,a){return a!==parseInt(e)})),d(t)}}))};s.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f1e3567b.chunk.js.map