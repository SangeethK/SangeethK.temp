(this.webpackJsonpcovidappv1=this.webpackJsonpcovidappv1||[]).push([[0],{221:function(e,t,a){e.exports=a(407)},226:function(e,t,a){},227:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),o=a.n(l),i=(a(226),a(227),a(183)),c=a(457),s=a(184),m=a(77),d=a(168),u=a(5),p=a(446),h=a(448),E=a(458),v=a(459),g=a(449),f=a(450),y=a(454),b=a(62),w=a(453),x=a(451),j=a(452),C=a(455),O=a(456),k=a(410),S=a(447),D=a(180),N=a.n(D),B=a(182),A=a.n(B),I=a(181),P=a.n(I),L=a(461),T=a(443),K=a(444),M=a(445),R=a(169),z=a.n(R),F=a(170),H=a.n(F),W=a(171),_=a.n(W),G=r.a.createElement("div",null,r.a.createElement(L.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(z.a,null)),r.a.createElement(K.a,{primary:"Dashboard"})),r.a.createElement(L.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(H.a,null)),r.a.createElement(K.a,{primary:"Reports"}))),J=r.a.createElement("div",null,r.a.createElement(M.a,{inset:!0},"Saved reports"),r.a.createElement(L.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(_.a,null)),r.a.createElement(K.a,{primary:"Current month"})));function U(e){return r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var V=r.a.createContext(null),X=V.Provider;V.Consumer;function Y(e){e.preventDefault()}var $=Object(p.a)({depositContext:{flex:1}});function q(e){var t=$(),a=Object(n.useContext)(V),l=0,o="";switch(e.type){case 1:l=null===a||void 0===a?void 0:a.total,o="Total Confirmed Cases";break;case 2:l=null===a||void 0===a?void 0:a.totalActive,o="Total Active Cases";break;case 3:l=null===a||void 0===a?void 0:a.totalrecovered,o="Total Recovered Cases";break;case 4:l=null===a||void 0===a?void 0:a.totaldeceased,o="Total Deceased"}return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,o),r.a.createElement(b.a,{component:"p",variant:"h4"},l),r.a.createElement(b.a,{color:"textSecondary",className:t.depositContext},"on ",(new Date).toDateString()),r.a.createElement("div",null,r.a.createElement(S.a,{color:"primary",href:"#",onClick:Y},"View Details")))}var Q=a(85),Z=a(86),ee=a(186),te=a(185),ae=function(){function e(){Object(Q.a)(this,e)}return Object(Z.a)(e,[{key:"getState",value:function(e){var t;return null!==(t={ap:"Andhra Pradesh",an:"Arunachal Pradesh",tg:"Telangana",mh:"Maharashtra",dl:"Delhi",gj:"Gujarat",rj:"Rajasthan",tn:"Tamilnadu",up:"Uttar Pradesh"}[e])&&void 0!==t?t:e}}]),e}(),ne=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(Q.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,items:[],error:{message:""},totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0},n.state={error:{message:""},isLoaded:!1,items:[],totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0},n}return Object(Z.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/states_daily.json").then((function(e){return e.json()})).then((function(t){for(var a=new Array,n=new Array,r=t.states_daily,l=0,o=0,i=0,c=0;c<r.length;c++){var s=new Date(r[c].date),m=new Date,d=m.valueOf()-s.valueOf(),u=Math.ceil(d/864e5);if(s<=m)switch("Confirmed"==r[c].status&&(l+=parseInt(r[c].tt),n.push({total:l,date:r[c].date})),r[c].status){case"Recovered":o+=parseInt(r[c].tt);break;case"Deceased":i+=parseInt(r[c].tt)}u<=10&&s<=m&&"Confirmed"==r[c].status&&a.push({count:parseInt(r[c].tt),date:r[c].date})}var p=Object.keys(r[0]),h=r.reduce((function(e,t){for(var a=0;a<p.length;a++){var n=p[a];"date"!=n&&"tt"!=n&&"status"!=n&&"Confirmed"==t.status&&(void 0==e[n]&&(e[n]=0),e[n]+=parseInt(t[n]))}return e}),{__array:[]});p=Object.keys(h);for(var E=[],v=0;v<p.length;v++)h[p[v]]>700&&E.push({state:(new ae).getState(p[v]),count:h[p[v]]});e.setState({isLoaded:!0,items:n,totalcases:l,statewise:a,statescount:E,totalActive:l-(o+i),totaldeceased:i,totalrecovered:o})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,l={data:e.items,total:e.totalcases,statewise:e.statewise,statescount:e.statescount,totalActive:e.totalActive,totaldeceased:e.totaldeceased,totalrecovered:e.totalrecovered};return""!=t.message?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement(X,{value:l},r.a.createElement(n.Fragment,null,this.props.children)):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),re=a(48),le=a(15),oe=function(e){var t=e.x,a=e.y,n=e.width,l=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("circle",{cx:t+n/2,cy:a-10,r:10,fill:"#8884d8"}),r.a.createElement("text",{x:t+n/2,y:a-10,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle"},l))};function ie(){Object(re.a)();var e=Object(n.useContext)(V);return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"India Daily Cases","  ","0.0"),r.a.createElement(le.b,{width:1200,height:500,data:null===e||void 0===e?void 0:e.statewise,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(le.c,{strokeDasharray:"3 3"}),r.a.createElement(le.g,{dataKey:"date"}),r.a.createElement(le.h,{domain:[0,"dataMax + 100"]}),r.a.createElement(le.f,null),r.a.createElement(le.e,null),r.a.createElement(le.a,{dataKey:"count",fill:"#8884d8",minPointSize:0},r.a.createElement(le.d,{dataKey:"count",content:oe}))))}var ce=function(e){var t=e.x,a=e.y,n=e.width,l=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("circle",{cx:t+n,cy:a+20,r:10,fill:"#8884d8"}),r.a.createElement("text",{x:t+n,y:a+20,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle"},l))};function se(){Object(re.a)();var e=Object(n.useContext)(V);return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"Today"),r.a.createElement(le.b,{width:1200,height:600,layout:"vertical",data:null===e||void 0===e?void 0:e.statescount,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(le.c,{strokeDasharray:"3 3",horizontal:!1}),r.a.createElement(le.g,{type:"number",dataKey:"count",axisLine:!0,stroke:"#a0a0a0",domain:[0,"dataMax + 1000"]}),r.a.createElement(le.h,{type:"category",dataKey:"state",width:40}),r.a.createElement(le.f,null),r.a.createElement(le.e,null),r.a.createElement(le.a,{dataKey:"count",fill:"#8884d8",minPointSize:0},r.a.createElement(le.d,{dataKey:"count",content:ce}))))}function me(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(S.a,{color:"inherit",href:"https://material-ui.com/"},"Covid Dashboard")," ",(new Date).getFullYear(),".")}var de=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(m.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ue(){var e=de(),t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],o=Object(u.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,null),r.a.createElement(g.a,{position:"absolute",className:Object(u.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(f.a,{className:e.toolbar},r.a.createElement(x.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(u.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(N.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Covid Dashboard"),r.a.createElement(x.a,{color:"inherit"},r.a.createElement(j.a,{badgeContent:4,color:"secondary"},r.a.createElement(P.a,null))))),r.a.createElement(E.a,{variant:"permanent",classes:{paper:Object(u.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(x.a,{onClick:function(){l(!1)}},r.a.createElement(A.a,null))),r.a.createElement(w.a,null),r.a.createElement(y.a,null,G),r.a.createElement(w.a,null),r.a.createElement(y.a,null,J)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(ne,null,r.a.createElement(C.a,{maxWidth:"lg",className:e.container},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:o},r.a.createElement(q,{type:1}))),r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:o},r.a.createElement(q,{type:2}))),r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:o},r.a.createElement(q,{type:3}))),r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:o},r.a.createElement(q,{type:4}))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(k.a,{className:e.paper},r.a.createElement(ie,null))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(k.a,{className:e.paper},r.a.createElement(se,null)))),r.a.createElement(v.a,{pt:4},r.a.createElement(me,null))))))}var pe=Object(i.a)({palette:{type:"dark"}});var he=function(){return r.a.createElement(c.a,{theme:pe},r.a.createElement("div",{className:"App"},r.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[221,1,2]]]);
//# sourceMappingURL=main.4e20fd12.chunk.js.map