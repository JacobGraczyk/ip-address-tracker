(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{20:function(e,a,c){},25:function(e,a,c){"use strict";c.r(a);var s=c(0),t=c.n(s),r=c(9),i=c.n(r),n=(c(20),c(8)),o=c(28),b=c(29),l=c(27),d=c(30),j=c(5),h=c.n(j),k=(c(21),c.p+"static/media/icon-arrow.2eaaa5ee.svg"),O=c.p+"static/media/icon-location.7e6459d2.svg",u=c.p+"static/media/pattern-bg.a60a3c85.png",p=c(1);var m=function(){var e=Object(s.useState)([]),a=Object(n.a)(e,2),c=a[0],t=a[1],r=Object(s.useState)(!0),i=Object(n.a)(r,2),j=i[0],m=i[1],x=Object(s.useState)([]),g=Object(n.a)(x,2),f=g[0],A=g[1],v=Object(s.useState)([]),N=Object(n.a)(v,2),I=N[0],M=N[1],y=Object(s.useState)([]),S=Object(n.a)(y,2),w=S[0],C=S[1],P=Object(s.useState)([]),D=Object(n.a)(P,2),E=D[0],R=D[1],z=Object(s.useState)([]),T=Object(n.a)(z,2),F=T[0],K=T[1],U=Object(s.useState)([]),V=Object(n.a)(U,2),W=V[0],H=V[1],L=Object(s.useState)(42.88),G=Object(n.a)(L,2),J=G[0],Y=G[1],B=Object(s.useState)(-78.87),X=Object(n.a)(B,2),Q=X[0],Z=X[1],_=Object(p.jsx)("img",{src:k,alt:"Right Arrow"}),q=Object(s.useRef)(),$=new h.a.Icon({iconUrl:O,iconRetinaUrl:O,iconSize:new h.a.Point(46,55)}),ee={width:"1px",height:"60px",margin:"10px 0 0 0",background:"lightgrey"},ae=j?{height:"100vh",width:"100vw",position:"absolute",top:"0",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0, 0, 0, 50%)",color:"white"}:{display:"none"};Object(s.useEffect)((function(){fetch("https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5").then((function(e){return e.json()})).then((function(e){console.log(e),A(e.ip),M(e.location.city),C(e.location.region),R(e.location.postalCode),K(e.location.timezone),H(e.isp),Y(e.location.lat),Z(e.location.lng),m(!1)}))}),[]),Object(s.useEffect)((function(){fetch(c).then((function(e){if(e.ok)return e.json();alert("Please enter a valid IP Address"),A(""),M(""),C(""),R(""),K(""),H(""),Y(""),Z(""),m(!1)})).then((function(e){A(e.ip),M(e.location.city),C(e.location.region),R(e.location.postalCode),K(e.location.timezone),H(e.isp),Y(e.location.lat),Z(e.location.lng),m(!1)})).catch((function(e){console.log(e)}))}),[c]),Object(s.useEffect)((function(){var e=q.current;(void 0===e?{}:e).leafletElement.setView([J,Q],15)}),[J,Q]);var ce="";switch(w){case"Alabama":ce=", AL ";break;case"Alaska":ce=", AK ";break;case"Arizona":ce=", AZ ";break;case"Arkansas":ce=", AR ";break;case"California":ce=", CA ";break;case"Colorado":ce=", CO ";break;case"Connecticut":ce=", CT ";break;case"Delaware":ce=", DE ";break;case"Florida":ce=", FL ";break;case"Georgia":ce=", GA ";break;case"Hawaii":ce=", HI ";break;case"Idaho":ce=", ID ";break;case"Illinois":ce=", IL ";break;case"":ce=",  ";break;case"Indiana":ce=", IN ";break;case"Iowa":ce=", IA ";break;case"Kansas":ce=", KS ";break;case"Kentucky":ce=", KY ";break;case"Louisiana":ce=", LA ";break;case"Maine":ce=", ME ";break;case"Maryland":ce=", MD ";break;case"Massachusetts":ce=", MA ";break;case"Michigan":ce=", MI ";break;case"Minnesota":ce=", MN ";break;case"Mississippi":ce=", MS ";break;case"Missouri":ce=", MO ";break;case"Montana":ce=", MT ";break;case"Nebraska":ce=", NE ";break;case"Nevada":ce=", NV ";break;case"New Hampshire":ce=", NH ";break;case"New Jersey":ce=", NJ ";break;case"New Mexico":ce=", NM ";break;case"New York":ce=", NY ";break;case"North Carolina":ce=", NC ";break;case"North Dakota":ce=", ND ";break;case"Ohio":ce=", OH ";break;case"Oklahoma":ce=", OK ";break;case"Oregon":ce=", OR ";break;case"Pennsylvania":ce=", PA ";break;case"Rhode Island":ce=", RI ";break;case"South Carolina":ce=", SC ";break;case"South Dakota":ce=", SD ";break;case"Tennessee":ce=", TN ";break;case"Texas":ce=", TX ";break;case"Utah":ce=", UT ";break;case"Vermont":ce=", VT ";break;case"Virginia":ce=", VA ";break;case"Washington":ce=", WA ";break;case"West Virginia":ce=", WV ";break;case"Wisconsin":ce=", WI ";break;case"Wyoming":ce=", WY ";break;case"District of Columbia":ce=", DC ";break;case"Guam":ce=", GU ";break;case"Marshall Islands":ce=", MH ";break;case"Northern Mariana Island":ce=", MP ";break;case"Puerto Rico":ce=", PR ";break;case"Virgin Islands":ce=", VI ";break;case"Armed Forces Africa":ce=", AE ";break;case"Armed Forces Americas":ce=", AA ";break;case"Armed Forces Canada":case"Armed Forces Europe":case"Armed Forces Middle East":ce=", AE ";break;case"Armed Forces Pacific":ce=", AP ";break;default:ce=""}var se=Object(s.useRef)();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{className:"header-top",style:{backgroundImage:"url("+u+")"},children:[Object(p.jsx)("h1",{children:"IP Address Tracker"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{ref:se,type:"text",placeholder:"Search for any IP address or domain"}),Object(p.jsx)("button",{onClick:function(e){var a=se.current.value;""!==a&&(t("https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5&ipAddress="+a),m(!0),se.current.value=null)},children:_})]})]}),Object(p.jsxs)("div",{className:"header-bottom",children:[Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"IP Address"}),Object(p.jsx)("h2",{children:f})]}),Object(p.jsx)("div",{style:ee}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"Location"}),Object(p.jsxs)("h2",{children:[I,ce,E]})]}),Object(p.jsx)("div",{style:ee}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"Timezone"}),Object(p.jsxs)("h2",{children:["UTC",F]})]}),Object(p.jsx)("div",{style:ee}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"ISP"}),Object(p.jsx)("h2",{children:W})]})]})]}),Object(p.jsx)("div",{className:"load-screen",style:ae,children:j?Object(p.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):""}),Object(p.jsx)("div",{className:"leaflet-container",children:Object(p.jsxs)(o.a,{ref:q,center:[J,Q],zoom:10,scrollWheelZoom:!0,children:[Object(p.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(l.a,{icon:$,position:[J,Q],children:Object(p.jsx)(d.a,{children:"IP Address Location."})})]})})]})};i.a.render(Object(p.jsx)(t.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.09be66d2.chunk.js.map