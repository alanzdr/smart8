(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/send-icon.544a5860.svg"},21:function(e,t,n){e.exports=n(49)},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){e.exports=n.p+"static/media/GothamBook.b54724f5.ttf"},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),s=n.n(c);n(26);function o(){return r.a.createElement("div",{id:"content-logo"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 73.1 73.1"},r.a.createElement("rect",{width:"73.1",height:"73.1",rx:"19"}),r.a.createElement("circle",{cx:"36.43",cy:"36.36",r:"17.44"}),r.a.createElement("g",null,r.a.createElement("path",{d:"M29.49,39.5v0c0-2.12,1.25-3.42,3.15-4.2a4.19,4.19,0,0,1-2.55-3.8V31.4c0-2.87,2.87-4.9,7-4.9s7,2,7,4.9v.05a4.19,4.19,0,0,1-2.55,3.8c1.78.73,3.15,2,3.15,4.2v0c0,3-3.1,5.15-7.62,5.15S29.49,42.52,29.49,39.5Zm9.65-.65V38.8a1.81,1.81,0,0,0-2-1.7,1.81,1.81,0,0,0-2,1.7v.05a1.81,1.81,0,0,0,2,1.75A1.84,1.84,0,0,0,39.14,38.85Zm-.2-6.67v0a1.83,1.83,0,0,0-3.65,0v0a1.83,1.83,0,0,0,3.65,0Z"})),r.a.createElement("rect",{className:"top-eye",x:"11.43",y:"17.92",width:"50",height:"1"}),r.a.createElement("rect",{className:"bot-eye",x:"11.55",y:"53.8",width:"50",height:"1"})))}var i=n(20),u=n(7),l=n(4),m=n.n(l),d=n(6),g=n(3),f=n(18),p=n.n(f).a.create({baseURL:"http://localhost:3333"}),v={affirmative:["It\xa0is\xa0certain.","It\xa0is\xa0decidedly\xa0so.","Without a doubt.","Yes \u2013 definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes."],negative:["Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."],"non-committal":["Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again."]},h=function(e){var t=v[e];return t[Math.floor(Math.random()*t.length)]},y=Object(a.createContext)({messages:[]}),b=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(g.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(!1),u=Object(g.a)(i,2),l=u[0],m=u[1];return r.a.createElement(y.Provider,{value:{messages:s,setMessages:o,loading:l,setLoading:m}},t)},E=function(){var e=Object(a.useContext)(y),t=e.messages,n=e.setMessages,r=e.loading,c=e.setLoading,s=function(){return Math.random().toString(36).substring(7)},o=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/",{params:{text:t}});case 2:return n=e.sent,a=n.data.displayName,r=h(a),c={key:s(),status:"visible",target:"bot",text:r},e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t){var n=e.length,a=e.map((function(e,t){return n>3&&t<=n-4?Object(u.a)(Object(u.a)({},e),{},{status:"hidden"}):e}));return[].concat(Object(i.a)(a),[t])};return{loading:r,messages:t,sendMessage:function(){var e=Object(d.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={key:s(),status:"visible",target:"user",text:t},n((function(e){return l(e,a)})),c(!0),e.next=5,o(t);case 5:r=e.sent,n((function(e){return l(e,r)})),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};n(45);function x(){var e=E(),t=e.messages,n=e.loading;return r.a.createElement("div",{id:"messages-container"},t.map((function(e){return r.a.createElement("div",{key:e.key,className:"message ".concat(e.status," ").concat(e.target)},r.a.createElement("p",null,e.text))})),n?r.a.createElement("div",{className:"message bot"},r.a.createElement("p",null,"...")):null)}n(46);var w=n(19),k=n.n(w);function O(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],s=E(),o=s.sendMessage,i=s.loading,u=function(e){e&&e.preventDefault(),!i&&n.length>1&&(o(n),c(""))};return r.a.createElement("form",{onSubmit:u,id:"messages-input"},r.a.createElement("input",{type:"text",placeholder:"Type text...",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"button",onClick:u},r.a.createElement("img",{src:k.a,alt:"Send"})))}n(47),n(48);function j(){return r.a.createElement(b,null,r.a.createElement("div",{id:"site-container"},r.a.createElement(o,null),r.a.createElement(x,null),r.a.createElement(O,null)))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f0dd5b84.chunk.js.map