(this["webpackJsonpreact-user-info"]=this["webpackJsonpreact-user-info"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(76),a(16)),i=a(10),s=a(17),u=a(18),d=a(19),m=a(35),v=a(28),h=(a(77),a(31)),p=a.n(h),E=a(20),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hoverClassName:"shadow-none",hoverCardBg:"rgba(255, 255, 255, 0.4)",hoverCardText:"white"},a.onMouseOver=function(){a.setState({hoverClassName:"shadow-lg",hoverCardBg:"rgba(255, 255, 255, 0.7)",hoverCardText:"dark"})},a.onMouseOut=function(){a.setState({hoverClassName:"shadow-none",hoverCardBg:"rgba(255, 255, 255, 0.4)",hoverCardText:"white"})},a.onMouseClick=function(){a.setState({hoverClassName:"shadow-none",hoverCardBg:"dark",hoverCardText:"white"})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user.name;return r.a.createElement(m.b,{style:{textDecoration:"none"},to:"/user/".concat(this.props.user.id)},r.a.createElement(E.a,{text:this.state.hoverCardText,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,className:this.state.hoverClassName,style:{margin:"20px 2px 20px 2px",backdropFilter:"blur(10px)",backgroundColor:this.state.hoverCardBg}},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Text,null,e))))}}]),t}(n.Component),f=a(123),g=a(130),x=a(129),y=a(124),w=a(125),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={userData:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(t){return e.setState({userData:t.data})}))}},{key:"render",value:function(){var e=this.state.userData;return console.log("hello"),r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(g.a,{style:{margin:"20px 2px 20px 2px"},elevation:4},r.a.createElement(x.a,null,r.a.createElement(y.a,null,r.a.createElement(w.a,{color:"textPrimary"},"Name : ",e.name,r.a.createElement("br",null),"Email : ",e.email))))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).dispUser=function(e){return r.a.createElement(O,{user:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("userlist",this.props.users),this.props.users.map((function(e){return r.a.createElement(b,{user:e})}))}}]),t}(n.Component),C=a(46),k=a(47);var B=function(){return r.a.createElement("div",{className:"center-navbar"},r.a.createElement(C.a,{style:{backdropFilter:"blur(10px)",backgroundColor:"rgba(255,255,255,0.7)",paddingBottom:"15px"},variant:"light"},r.a.createElement(C.a.Brand,null,"User Info"),r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement(k.a.Link,{href:"/react-user"},"Home"))))},N=a(66),D=a(127),M=a(128),T=a(67),S=a.n(T),F=a(68),A=a.n(F),I=a(69),L=a.n(I),H=a(126),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={userData:[],userImage:"",dataLoaded:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){p.a.get("https://jsonplaceholder.typicode.com/users/".concat(e.props.match.params.id)).then((function(t){return e.setState({userData:t.data,dataLoaded:!0})}))}),3e3)}},{key:"render",value:function(){var e,t,a,n,l,o,c,i,s,u,d,m=this.state.userData;return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(E.a,{filter:"blur(20px) ",style:{marginTop:"20px",backdropFilter:"blur(10px)",backgroundColor:"rgba(255, 255, 255, 0.4)"},className:"shadow-lg p-3 mb-5"},r.a.createElement(E.a.Header,null,m.name?r.a.createElement("h5",null,m.name):r.a.createElement(H.a,{variant:"text",animation:"wave",width:"25%"})),r.a.createElement(E.a.Body,null,r.a.createElement(D.a,null,r.a.createElement(M.a,{src:"https://joeschmoe.io/api/v1/".concat(m.name),roundedCircle:!0,width:100,height:100,className:"mr-3"}),(null===m||void 0===m?void 0:null===(e=m.company)||void 0===e?void 0:e.name)?r.a.createElement(D.a.Body,null,r.a.createElement("h5",null,m.username),r.a.createElement(E.a.Text,null,m.email?m.email:r.a.createElement(H.a,{variant:"text",animation:"wave",width:"25%",height:"100px"}),r.a.createElement("br",null),m.website?m.website:r.a.createElement(H.a,{variant:"text",animation:"wave",width:"25%"}),r.a.createElement("br",null),m.phone,r.a.createElement("br",null)),r.a.createElement(D.a,null,r.a.createElement(S.a,null),r.a.createElement(D.a.Body,null,r.a.createElement(E.a.Text,null,null===m||void 0===m?void 0:null===(t=m.company)||void 0===t?void 0:t.name,r.a.createElement("br",null),r.a.createElement("p",{className:"text-white-50"},null===m||void 0===m?void 0:null===(a=m.company)||void 0===a?void 0:a.catchPhrase)))),r.a.createElement(D.a,null,r.a.createElement(A.a,null),r.a.createElement(D.a.Body,null,r.a.createElement("p",null,null===m||void 0===m?void 0:null===(n=m.address)||void 0===n?void 0:n.street,","," ",null===m||void 0===m?void 0:null===(l=m.address)||void 0===l?void 0:l.suite,r.a.createElement("br",null),null===m||void 0===m?void 0:null===(o=m.address)||void 0===o?void 0:o.city,","," ",null===m||void 0===m?void 0:null===(c=m.address)||void 0===c?void 0:c.zipcode,r.a.createElement("br",null),r.a.createElement("div",{className:"text-white-50"},r.a.createElement(L.a,null),null===m||void 0===m?void 0:null===(i=m.address)||void 0===i?void 0:null===(s=i.geo)||void 0===s?void 0:s.lat,"   ",null===m||void 0===m?void 0:null===(u=m.address)||void 0===u?void 0:null===(d=u.geo)||void 0===d?void 0:d.lat))))):r.a.createElement(H.a,{variant:"rect",animation:"wave",width:"100%",height:"250px"}))))))}}]),t}(n.Component),P=(a(103),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({users:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(m.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/react-user",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(j,{users:e.state.users})))}}),r.a.createElement(v.a,{path:"/user/:id",render:function(e){return r.a.createElement(J,e)}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(104)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.63cc985f.chunk.js.map