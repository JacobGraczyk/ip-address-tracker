(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{16:function(e,a,s){},19:function(e,a,s){"use strict";s.r(a);var c=s(0),t=s.n(c),r=s(8),i=s.n(r),n=(s(16),s(2)),o=s(21),b=s(24),l=s(22),d=s(23),j=s(4),h=s.n(j),k=(s(17),s.p+"static/media/icon-arrow.2eaaa5ee.svg"),O=s.p+"static/media/icon-location.7e6459d2.svg",u=s.p+"static/media/pattern-bg.a60a3c85.png",p=s(1);var m=function(){var e=Object(c.useState)([]),a=Object(n.a)(e,2),s=a[0],t=a[1],r=Object(c.useState)(!0),i=Object(n.a)(r,2),j=i[0],m=i[1],x=Object(c.useState)([]),g=Object(n.a)(x,2),A=g[0],N=g[1],f=Object(c.useState)([]),v=Object(n.a)(f,2),I=v[0],M=v[1],y=Object(c.useState)([]),S=Object(n.a)(y,2),w=S[0],C=S[1],P=Object(c.useState)([]),D=Object(n.a)(P,2),z=D[0],R=D[1],T=Object(c.useState)([]),E=Object(n.a)(T,2),F=E[0],K=E[1],U=Object(c.useState)([]),V=Object(n.a)(U,2),W=V[0],H=V[1],L=Object(c.useState)(42.88),G=Object(n.a)(L,2),J=G[0],Y=G[1],B=Object(c.useState)(-78.87),X=Object(n.a)(B,2),Q=X[0],Z=X[1],_=Object(p.jsx)("img",{src:k,alt:"Right Arrow"}),q=new h.a.Icon({iconUrl:O,iconRetinaUrl:O,iconSize:new h.a.Point(46,55)}),$={width:"1px",height:"60px",margin:"10px 0 0 0",background:"lightgrey"},ee=j?{height:"100vh",width:"100vw",position:"absolute",top:"0",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0, 0, 0, 50%)",color:"white"}:{display:"none"};Object(c.useEffect)((function(){fetch("https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5").then((function(e){return e.json()})).then((function(e){console.log(e),N(e.ip),M(e.location.city),C(e.location.region),R(e.location.postalCode),K(e.location.timezone),H(e.isp),Y(e.location.lat),Z(e.location.lng),m(!1)}))}),[]),Object(c.useEffect)((function(){fetch(s).then((function(e){if(e.ok)return e.json();alert("Please enter a valid IP Address"),N(""),M(""),C(""),R(""),K(""),H(""),Y(""),Z(""),m(!1)})).then((function(e){N(e.ip),M(e.location.city),C(e.location.region),R(e.location.postalCode),K(e.location.timezone),H(e.isp),Y(e.location.lat),Z(e.location.lng),m(!1)}))}),[s]);var ae="";switch(w){case"Alabama":ae=", AL ";break;case"Alaska":ae=", AK ";break;case"Arizona":ae=", AZ ";break;case"Arkansas":ae=", AR ";break;case"California":ae=", CA ";break;case"Colorado":ae=", CO ";break;case"Connecticut":ae=", CT ";break;case"Delaware":ae=", DE ";break;case"Florida":ae=", FL ";break;case"Georgia":ae=", GA ";break;case"Hawaii":ae=", HI ";break;case"Idaho":ae=", ID ";break;case"Illinois":ae=", IL ";break;case"":ae=",  ";break;case"Indiana":ae=", IN ";break;case"Iowa":ae=", IA ";break;case"Kansas":ae=", KS ";break;case"Kentucky":ae=", KY ";break;case"Louisiana":ae=", LA ";break;case"Maine":ae=", ME ";break;case"Maryland":ae=", MD ";break;case"Massachusetts":ae=", MA ";break;case"Michigan":ae=", MI ";break;case"Minnesota":ae=", MN ";break;case"Mississippi":ae=", MS ";break;case"Missouri":ae=", MO ";break;case"Montana":ae=", MT ";break;case"Nebraska":ae=", NE ";break;case"Nevada":ae=", NV ";break;case"New Hampshire":ae=", NH ";break;case"New Jersey":ae=", NJ ";break;case"New Mexico":ae=", NM ";break;case"New York":ae=", NY ";break;case"North Carolina":ae=", NC ";break;case"North Dakota":ae=", ND ";break;case"Ohio":ae=", OH ";break;case"Oklahoma":ae=", OK ";break;case"Oregon":ae=", OR ";break;case"Pennsylvania":ae=", PA ";break;case"Rhode Island":ae=", RI ";break;case"South Carolina":ae=", SC ";break;case"South Dakota":ae=", SD ";break;case"Tennessee":ae=", TN ";break;case"Texas":ae=", TX ";break;case"Utah":ae=", UT ";break;case"Vermont":ae=", VT ";break;case"Virginia":ae=", VA ";break;case"Washington":ae=", WA ";break;case"West Virginia":ae=", WV ";break;case"Wisconsin":ae=", WI ";break;case"Wyoming":ae=", WY ";break;case"District of Columbia":ae=", DC ";break;case"Guam":ae=", GU ";break;case"Marshall Islands":ae=", MH ";break;case"Northern Mariana Island":ae=", MP ";break;case"Puerto Rico":ae=", PR ";break;case"Virgin Islands":ae=", VI ";break;case"Armed Forces Africa":ae=", AE ";break;case"Armed Forces Americas":ae=", AA ";break;case"Armed Forces Canada":case"Armed Forces Europe":case"Armed Forces Middle East":ae=", AE ";break;case"Armed Forces Pacific":ae=", AP ";break;default:ae=""}var se=Object(c.useRef)();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{className:"header-top",style:{backgroundImage:"url("+u+")"},children:[Object(p.jsx)("h1",{children:"IP Address Tracker"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{ref:se,type:"text",placeholder:"Search for any IP address or domain"}),Object(p.jsx)("button",{onClick:function(e){var a=se.current.value;""!==a&&(t("https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5&ipAddress="+a),m(!0),se.current.value=null)},children:_})]})]}),Object(p.jsxs)("div",{className:"header-bottom",children:[Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"IP Address"}),Object(p.jsx)("h2",{children:A})]}),Object(p.jsx)("div",{style:$}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"Location"}),Object(p.jsxs)("h2",{children:[I,ae,z]})]}),Object(p.jsx)("div",{style:$}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"Timezone"}),Object(p.jsxs)("h2",{children:["UTC",F]})]}),Object(p.jsx)("div",{style:$}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{children:"ISP"}),Object(p.jsx)("h2",{children:W})]})]})]}),Object(p.jsx)("div",{className:"load-screen",style:ee,children:j?Object(p.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):""}),Object(p.jsx)("div",{className:"leaflet-container",children:Object(p.jsxs)(o.a,{center:[J,Q],zoom:10,scrollWheelZoom:!0,children:[Object(p.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(l.a,{icon:q,position:[J,Q],children:Object(p.jsx)(d.a,{children:"IP Address Location."})})]})})]})};i.a.render(Object(p.jsx)(t.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.dce75a94.chunk.js.map