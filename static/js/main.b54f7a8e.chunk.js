(this["webpackJsonpreact-user-info"]=this["webpackJsonpreact-user-info"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(76),a(16)),s=a(10),u=a(17),i=a(18),d=a(19),m=a(35),h=a(28),v=(a(77),a(31)),p=a.n(v),E=a(20),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={hoverClassName:"shadow-none",hoverCardBg:"light",hoverCardText:""},a.onMouseOver=function(){a.setState({hoverClassName:"shadow-lg",hoverCardBg:"secondary",hoverCardText:"white"})},a.onMouseOut=function(){a.setState({hoverClassName:"shadow-none",hoverCardBg:"light",hoverCardText:""})},a.onMouseClick=function(){a.setState({hoverClassName:"shadow-none",hoverCardBg:"dark",hoverCardText:"whitw"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.user.name;return r.a.createElement(m.b,{style:{textDecoration:"none"},to:"/user/".concat(this.props.user.id)},r.a.createElement(E.a,{bg:this.state.hoverCardBg,text:this.state.hoverCardText,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,className:this.state.hoverClassName,style:{margin:"20px 2px 20px 2px"}},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Text,null,e))))}}]),t}(n.Component),f=a(121),y=a(127),g=a(126),O=a(122),j=a(123),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={userData:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(t){return e.setState({userData:t.data})}))}},{key:"render",value:function(){var e=this.state.userData;return console.log("hello"),r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(y.a,{style:{margin:"20px 2px 20px 2px"},elevation:4},r.a.createElement(g.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{color:"textPrimary"},"Name : ",e.name,r.a.createElement("br",null),"Email : ",e.email))))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).dispUser=function(e){return r.a.createElement(x,{user:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("userlist",this.props.users),this.props.users.map((function(e){return r.a.createElement(b,{user:e})}))}}]),t}(n.Component),C=a(46),k=a(47);var B=function(){return r.a.createElement("div",{className:"center-navbar"},r.a.createElement(C.a,{bg:"dark",variant:"dark"},r.a.createElement(C.a.Brand,null,"User Info"),r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement(k.a.Link,{href:"/"},"Home"))))},N=a(66),D=a(124),M=a(125),T=a(67),S=a.n(T),A=a(68),I=a.n(A),L=a(69),_=a.n(L),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={userData:[],userImage:"",dataLoaded:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(t){return e.setState({userData:t.data,dataLoaded:!0})}))}},{key:"render",value:function(){var e,t,a,n,l,o,c,s,u,i,d=this.state.userData;return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(E.a,{bg:"dark",text:"white",style:{marginTop:"20px"},className:"shadow-sm p-3 mb-5"},r.a.createElement(E.a.Header,null,r.a.createElement("h5",null,d.name)),r.a.createElement(E.a.Body,null,r.a.createElement(D.a,null,r.a.createElement(M.a,{src:"https://cdn3.iconfinder.com/data/icons/miniman-vol-1/65/_Cool_Tough_Guy-512.png",roundedCircle:!0,width:100,height:100,className:"mr-3",thumbnail:!0}),r.a.createElement(D.a.Body,null,r.a.createElement("h5",null,d.username),r.a.createElement(E.a.Text,null,d.email,r.a.createElement("br",null),d.website,r.a.createElement("br",null),d.phone,r.a.createElement("br",null)),r.a.createElement(D.a,null,r.a.createElement(S.a,null),r.a.createElement(D.a.Body,null,r.a.createElement(E.a.Text,null,null===d||void 0===d?void 0:null===(e=d.company)||void 0===e?void 0:e.name,r.a.createElement("br",null),r.a.createElement("p",{className:"text-white-50"},null===d||void 0===d?void 0:null===(t=d.company)||void 0===t?void 0:t.catchPhrase)))),r.a.createElement(D.a,null,r.a.createElement(I.a,null),r.a.createElement(D.a.Body,null,r.a.createElement("p",null,null===d||void 0===d?void 0:null===(a=d.address)||void 0===a?void 0:a.street,", ",null===d||void 0===d?void 0:null===(n=d.address)||void 0===n?void 0:n.suite,r.a.createElement("br",null),null===d||void 0===d?void 0:null===(l=d.address)||void 0===l?void 0:l.city,", ",null===d||void 0===d?void 0:null===(o=d.address)||void 0===o?void 0:o.zipcode,r.a.createElement("br",null),r.a.createElement("div",{className:"text-white-50"},r.a.createElement(_.a,null),null===d||void 0===d?void 0:null===(c=d.address)||void 0===c?void 0:null===(s=c.geo)||void 0===s?void 0:s.lat,"   ",null===d||void 0===d?void 0:null===(u=d.address)||void 0===u?void 0:null===(i=u.geo)||void 0===i?void 0:i.lat))))))))))}}]),t}(n.Component),J=(a(103),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({users:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(m.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(w,{users:e.state.users})))}}),r.a.createElement(h.a,{path:"/user/:id",render:function(e){return r.a.createElement(H,e)}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(104)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.b54f7a8e.chunk.js.map