(this.webpackJsonpcovidappv1=this.webpackJsonpcovidappv1||[]).push([[0],{267:function(e,t,a){e.exports=a(474)},272:function(e,t,a){},273:function(e,t,a){},474:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),o=a.n(i),c=(a(272),a(25)),l=(a(273),a(234)),s=a(530),d=a(42),m=a(33),u=a(5),h=a(514),p=a(524),v=a(531),f=a(525),g=a(526),E=a(529),y=a(90),w=a(528),b=a(527),x=a(232),S=a.n(x),j=a(233),O=a.n(j),k=a(534),F=a(512),C=a(513),D=a(219),B=a.n(D),I=a(220),R=a.n(I),z=a(60);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),L=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),M=function(e){var t=e.svgRef,a=e.title,n=N(e,["svgRef","title"]);return r.a.createElement("svg",A({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},n),a?r.a.createElement("title",null,a):null,P,L)},H=r.a.forwardRef((function(e,t){return r.a.createElement(M,A({svgRef:t},e))}));a.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var K=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),W=r.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}),_=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",T({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},n),a?r.a.createElement("title",null,a):null,K,W)},J=r.a.forwardRef((function(e,t){return r.a.createElement(_,T({svgRef:t},e))})),U=(a.p,r.a.createElement("div",null,r.a.createElement(k.a,{button:!0,component:z.b,to:"/Dashboard"},r.a.createElement(F.a,null,r.a.createElement(B.a,null)),r.a.createElement(C.a,{primary:"Dashboard"})),r.a.createElement(k.a,{button:!0,component:z.b,to:"/States"},r.a.createElement(F.a,null,r.a.createElement(R.a,null)),r.a.createElement(C.a,{primary:"States"})),r.a.createElement(k.a,{button:!0,component:z.b,to:"/StateStats"},r.a.createElement(F.a,null,r.a.createElement(J,null)),r.a.createElement(C.a,{primary:"State Table"})),r.a.createElement(k.a,{button:!0,component:z.b,to:"/CountryMap"},r.a.createElement(F.a,null,r.a.createElement(H,null)),r.a.createElement(C.a,{primary:"Country Map"})))),Y=r.a.createElement("div",null),X=a(532),V=a(516),Z=a(517),$=a(477),q=a(515);function Q(e){return r.a.createElement(y.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var ee=r.a.createContext(null),te=ee.Provider,ae=ee.Consumer;var ne=Object(h.a)({depositContext:{flex:1}});function re(e){var t=ne(),a=Object(n.useContext)(ee),i=0,o="",c=0,l="";switch(e.type){case 1:i=null===a||void 0===a?void 0:a.total,o="Confirmed",c=null===a||void 0===a?void 0:a.deltaconfirmed,l="red-color-text";break;case 2:i=null===a||void 0===a?void 0:a.totalActive,o="Active",c=-1,l="blue-color-text";break;case 3:i=null===a||void 0===a?void 0:a.totalrecovered,o="Recovered",c=null===a||void 0===a?void 0:a.deltarecovered,l="green-color-text";break;case 4:i=null===a||void 0===a?void 0:a.totaldeceased,o="Deceased",c=null===a||void 0===a?void 0:a.deltadeceased,l="gray-color-text"}return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,o),r.a.createElement(y.a,{component:"p",variant:"h4"},i),c>-1?r.a.createElement(y.a,{color:"textSecondary",className:"".concat(t.depositContext," ").concat(l)},"+[",c,"]"):r.a.createElement(y.a,{color:"textSecondary",className:"".concat(t.depositContext," visually-hidden")},"+[",c,"]"))}var ie=a(51),oe=a(52),ce=a(76),le=a(75),se=function(){function e(){Object(ie.a)(this,e)}return Object(oe.a)(e,[{key:"getState",value:function(e){var t;return null!==(t={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",TG:"Telangana",MH:"Maharashtra",DL:"Delhi",GJ:"Gujarat",RJ:"Rajasthan",TN:"Tamil Nadu",UP:"Uttar Pradesh",AN:"Andaman and Nicobar Islands",AS:"Assam",BR:"Bihar",CH:"Chandigarh",CT:"Chattisgarh",DN:"Daman and Diu",GA:"Goa",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LA:"Lakshadweep Islands",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Pondicherry",PB:"Punjab",SK:"Sikkim",TR:"Tripura",UT:"Uttarakhand ",WB:"West Bengal",MP:"Madhya Pradesh",LD:"Ladakh"}[e.toUpperCase()])&&void 0!==t?t:e}}]),e}(),de=a(69),me=a.n(de),ue=function(e){Object(ce.a)(a,e);var t=Object(le.a)(a);function a(e){var n;return Object(ie.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,items:[],error:{message:""},totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0,deltaactive:0,deltaconfirmed:0,deltadeceased:0,deltarecovered:0,timeforeach5000:[],allstatescount:0,statesrecovered:[],stateRowStats:[],stateDateWise:[]},n.state={error:{message:""},isLoaded:!1,items:[],totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0,deltaactive:0,deltaconfirmed:0,deltadeceased:0,deltarecovered:0,timeforeach5000:[],allstatescount:0,statesrecovered:[],stateRowStats:[],stateDateWise:[]},n}return Object(oe.a)(a,[{key:"formatResponse",value:function(e){return{active:e.active,confirmed:e.confirmed,deaths:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeaths:e.deltadeaths,deltarecovered:e.deltarecovered,lastupdatedtime:e.lastupdatedtime,recovered:e.recovered,state:e.state,statecode:e.statecode,statenotes:e.statenotes}}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/states_daily.json").then((function(e){return e.json()})).then((function(t){for(var a=new Array,n=new Array,r=new Array,i=t.states_daily,o=0,c=0,l=0,s=new Array,d=1,m=0,u=new Array,h=(new Array,["mh","tg","tn","gj","dl","up","ap","br","or","rj","jk","pb","ka","kl","mp"]),p="",v=function(e){if("Confirmed"==i[e].status){var t=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(i[e].date));a[t]={data:[]};for(var v=function(n){var r=(new se).getState(h[n]),o=0;if(a[p]){var c=a[p].data.filter((function(e){return e.state==r}));o=0==c.length?0:c[0].count}a[t].data.push({state:(new se).getState(h[n]),count:o+parseInt(i[e][h[n]])})},f=0;f<h.length;f++)v(f);p=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(i[e].date))}var g=new Date(i[e].date),E=new Date,y=E.valueOf()-g.valueOf(),w=Math.ceil(y/864e5);if(g<=E)switch("Confirmed"==i[e].status&&(o+=parseInt(i[e].tt),r.push({total:o,date:i[e].date}),o>=2e4&&o%(2e4*d)<19999&&(s.push({mark:o,interval:m}),m=1,d++),m++),i[e].status){case"Recovered":c+=parseInt(i[e].tt);break;case"Deceased":l+=parseInt(i[e].tt)}if(w<=10&&g<=E&&"Confirmed"==i[e].status&&n.push({count:parseInt(i[e].tt),date:i[e].date}),w<=30&&g<=E&&("Confirmed"==i[e].status||"Recovered"==i[e].status)){var b=u.filter((function(t){return t.date==i[e].date}));b&&b.length>0?"Confirmed"==i[e].status?b[0].confirmed=o:"Recovered"==i[e].status&&(b[0].recovered=c,b[0].active=o-c-l):"Confirmed"==i[e].status?u.push({recovered:0,confirmed:o,date:i[e].date}):"Recovered"==i[e].status&&u.push({active:0,recovered:c,date:i[e].date})}},f=0;f<i.length;f++)v(f);for(var g=Object.keys(i[0]),E=i.reduce((function(e,t){for(var a=0;a<g.length;a++){var n=g[a];if("date"!=n&&"tt"!=n&&"status"!=n)if("Confirmed"==t.status){var r,i=parseInt(t[n]),o=0;if(e[n])i=e[n].confirmed+(isNaN(parseInt(t[n]))?0:parseInt(t[n])),o=null!==(r=e[n].recovered)&&void 0!==r?r:0;e[n]={confirmed:i,recovered:o}}else if("Recovered"==t.status){var c=parseInt(t[n]);e[n]&&(c=e[n].recovered+parseInt(t[n])),e[n]={confirmed:e[n].confirmed,recovered:c}}}return e}),{__array:[]}),y=i[i.length-3],w=i[i.length-2],b=0;b<g.length;b++){var x=g[b];"date"!=x&&"tt"!=x&&"status"!=x&&(E[x]={confirmed:E[x].confirmed,recovered:E[x].recovered,yesterdayConfirmed:parseInt(y[x]),yesterdayRecovered:parseInt(w[x])})}var S,j,O,k,F,C=new Array;for(var D in E)E[D]&&"__array"!=D&&C.push((S=(new se).getState(D),j=E[D].confirmed,O=E[D].recovered,k=E[D].yesterdayConfirmed,F=E[D].yesterdayRecovered,{name:S,confirmed:j,recovered:O,yesterdayConfirmed:k,yesterdayRecovered:F}));me.a.get("https://api.covid19india.org/data.json").then((function(t){for(var a=t.data.statewise.map((function(t){return e.formatResponse(t)})),n=[],r=[],i=0;i<a.length;i++)a[i].confirmed>700&&"TT"!=a[i].statecode&&n.push({state:a[i].state,count:parseInt(a[i].confirmed)}),"TT"!=a[i].statecode&&r.push({state:a[i].state,count:parseInt(a[i].active)});e.setState({isLoaded:!0,totalcases:a[0].confirmed,totalActive:a[0].active,totaldeceased:a[0].deaths,totalrecovered:a[0].recovered,statescount:n,deltarecovered:a[0].deltarecovered,deltadeceased:a[0].deltadeaths,deltaconfirmed:a[0].deltaconfirmed,deltaactive:a[0].deltaactive,allstatescount:r})})),s[s.length-1].interval=s[s.length-1].interval-1,e.setState({isLoaded:!0,items:r,statewise:n,timeforeach5000:s,statesrecovered:u,stateRowStats:C,stateDateWise:a})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,i=e.items,o=e.totalcases,c=e.statewise,l=e.statescount,s=e.totalActive,d=e.totaldeceased,m=e.totalrecovered,u=e.deltaconfirmed,h=e.deltaactive,p=e.deltadeceased,v={data:i,total:o,statewise:c,statescount:l,totalActive:s,totaldeceased:d,totalrecovered:m,deltaconfirmed:u,deltarecovered:e.deltarecovered,deltaactive:h,deltadeceased:p,timeforeach5000:e.timeforeach5000,allstatescount:e.allstatescount,statesrecovered:e.statesrecovered,stateRowStats:e.stateRowStats,stateDateWise:e.stateDateWise};return""!=t.message?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement(te,{value:v},r.a.createElement(n.Fragment,null,this.props.children)):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),he=a(74),pe=a(14),ve=function(e){var t=e.x,a=e.y,n=e.width,i=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("circle",{cx:t+n/2,cy:a-10,r:0}),r.a.createElement("text",{x:t+n/2,y:a-10,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle"},i))};function fe(){Object(he.a)();var e=Object(n.useContext)(ee),t=new Date(null===e||void 0===e?void 0:e.statewise[0].date),a=(new Date).valueOf()-t.valueOf(),i=Math.ceil(a/864e5),o=(null===e||void 0===e?void 0:e.statewise.reduce((function(e,t){return void 0==e.count&&(e.count=0),e.count+=parseInt(t.count),e}),{__array:[]})).count/(i-1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,"Daily cases - "," ",Math.round(o)," "," per day for last 8 days"),r.a.createElement(pe.f,{width:"99%",height:400},r.a.createElement(pe.b,{data:null===e||void 0===e?void 0:e.statewise,height:400,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(pe.c,{strokeDasharray:"3 3"}),r.a.createElement(pe.h,{dataKey:"date"}),r.a.createElement(pe.i,{domain:[0,"dataMax + 500"]}),r.a.createElement(pe.g,null),r.a.createElement(pe.e,null),r.a.createElement(pe.a,{dataKey:"count",fill:"#6495ED",minPointSize:0},r.a.createElement(pe.d,{dataKey:"count",content:ve})))))}var ge=function(e){var t=e.x,a=e.y,n=e.width,i=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("text",{x:t+n+20,y:a+20,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle"},i))};function Ee(e){Object(he.a)();var t=Object(n.useContext)(ee),a=Object(n.useState)(),i=Object(d.a)(a,2),o=i[0],c=i[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){var e="14-Mar-20",a=setInterval((function(){var n=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e));if(null===t||void 0===t?void 0:t.stateDateWise[n]){c(null===t||void 0===t?void 0:t.stateDateWise[n].data.sort((function(e,t){return t.count-e.count}))),u(n);var r=new Date(n);r.setDate(r.getDate()+2);var i=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(new Date);new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit"}).format(r)===i&&clearInterval(a),e=r.toString()}else clearInterval(a)}),300);return function(){return clearInterval(a)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,"Statewise Cases as on ",m),r.a.createElement(pe.f,{width:"99%",height:600},r.a.createElement(pe.b,{height:600,layout:"vertical",data:o,margin:{top:5,right:50,left:50,bottom:5}},r.a.createElement(pe.c,{strokeDasharray:"3 3",horizontal:!1}),r.a.createElement(pe.h,{type:"number",dataKey:"count",axisLine:!0,stroke:"#a0a0a0",domain:[0,"dataMax + 1000"]}),r.a.createElement(pe.i,{type:"category",dataKey:"state",width:40}),r.a.createElement(pe.g,null),r.a.createElement(pe.e,null),r.a.createElement(pe.a,{dataKey:"count",fill:"#6495ED",minPointSize:0},r.a.createElement(pe.d,{dataKey:"count",content:ge})))))}var ye=function(e){var t=e.x,a=e.y,n=e.width,i=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("circle",{cx:t+n/2,cy:a-10,r:10,fill:"#fff"}),r.a.createElement("text",{x:t+n/2,y:a-10,fill:"#3f5776",textAnchor:"middle",dominantBaseline:"middle"},i))};function we(){var e=Object(n.useContext)(ee);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,"Days for each 20000 cases"),r.a.createElement(pe.f,{width:"99%",height:400},r.a.createElement(pe.b,{data:null===e||void 0===e?void 0:e.timeforeach5000,height:400,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(pe.c,{strokeDasharray:"3 3"}),r.a.createElement(pe.h,{dataKey:"mark"}),r.a.createElement(pe.i,{dataKey:"interval",domain:[0,"dataMax + 10"]}),r.a.createElement(pe.g,null),r.a.createElement(pe.e,null),r.a.createElement(pe.a,{dataKey:"interval",fill:"#6495ED",minPointSize:0},r.a.createElement(pe.d,{dataKey:"interval",content:ye})))))}var be=function(e){var t=e.x,a=e.y,n=e.width,i=(e.height,e.value);return r.a.createElement("g",null,r.a.createElement("circle",{cx:t+n/2,cy:a-10,r:0}),r.a.createElement("text",{x:t+n/2,y:a-10,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle"},i))};function xe(){Object(he.a)();var e=Object(n.useContext)(ee),t=new Date(null===e||void 0===e?void 0:e.statewise[0].date),a=(new Date).valueOf()-t.valueOf(),i=Math.ceil(a/864e5);(null===e||void 0===e?void 0:e.statewise.reduce((function(e,t){return void 0==e.count&&(e.count=0),e.count+=parseInt(t.count),e}),{__array:[]})).count;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,"Recovered vs Active"),r.a.createElement(pe.f,{width:"99%",height:400},r.a.createElement(pe.b,{data:null===e||void 0===e?void 0:e.statesrecovered,height:400,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(pe.c,{strokeDasharray:"3 3"}),r.a.createElement(pe.h,{dataKey:"date"}),r.a.createElement(pe.i,{domain:[0,"dataMax + 2000"]}),r.a.createElement(pe.g,null),r.a.createElement(pe.e,null,r.a.createElement("div",{style:{background:"#82ca9d",height:"20px",width:"20px"}}),r.a.createElement("div",{style:{background:"#8884d8",height:"20px",width:"20px"}})),r.a.createElement(pe.a,{dataKey:"active",stackId:"a",fill:"#6495ED",minPointSize:0},r.a.createElement(pe.d,{dataKey:"count",content:be})),r.a.createElement(pe.a,{dataKey:"recovered",stackId:"a",fill:"#4CC417",minPointSize:0},r.a.createElement(pe.d,{dataKey:"count",content:be})))))}function Se(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(q.a,{color:"inherit",href:"https://material-ui.com/"},"Covid Dashboard")," ",(new Date).getFullYear(),".")}var je=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{}}}));function Oe(){var e=je(),t=Object(u.a)(e.paper,e.fixedHeight);return r.a.createElement(ue,null,r.a.createElement(V.a,{maxWidth:"lg",className:e.container},r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(t," red-border-left")},r.a.createElement(re,{type:1}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(t," blue-border-left")},r.a.createElement(re,{type:2}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(t," green-border-left")},r.a.createElement(re,{type:3}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(t," gray-border-left")},r.a.createElement(re,{type:4}))),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement($.a,{className:e.paper},r.a.createElement(xe,null))),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement($.a,{className:e.paper},r.a.createElement(Ee,{title:"States with cases > 700"}))),r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:6},r.a.createElement($.a,{className:e.paper},r.a.createElement(fe,null))),r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:6},r.a.createElement($.a,{className:e.paper},r.a.createElement(we,null)))),r.a.createElement(X.a,{pt:4},r.a.createElement(Se,null))))}var ke=function(e){Object(ce.a)(a,e);var t=Object(le.a)(a);function a(e){var n;return Object(ie.a)(this,a),(n=t.call(this,e))._props={state:"Test",statecode:"test"},n.state={isLoaded:!1,items:[],error:{message:""},totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0,deltaactive:0,deltaconfirmed:0,deltadeceased:0,deltarecovered:0},n._props=e,n.state={error:{message:""},isLoaded:!1,items:[],totalcases:0,statewise:[],statescount:[],totalrecovered:0,totaldeceased:0,totalActive:0,deltaactive:0,deltaconfirmed:0,deltadeceased:0,deltarecovered:0},n}return Object(oe.a)(a,[{key:"formatResponse",value:function(e){return{active:e.active,confirmed:e.confirmed,deaths:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeaths:e.deltadeaths,deltarecovered:e.deltarecovered,lastupdatedtime:e.lastupdatedtime,recovered:e.recovered,state:e.state,statecode:e.statecode,statenotes:e.statenotes}}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(t){console.log(e._props.state);var a=e._props.state,n=e._props.statecode,r=new Array,i=new Array;if(void 0!=t[a]){for(var o=t[a].districtData,c=[],l=Object.keys(o),s=0;s<l.length;s++){var d=l[s],m=parseInt(o[d].confirmed);m>10&&c.push({state:d,count:m})}me.a.get("https://api.covid19india.org/data.json").then((function(t){for(var a=0,r=t.data.statewise.map((function(t){return e.formatResponse(t)})),i=0;i<r.length;i++)r[i].confirmed>0&&"TT"!=r[i].statecode&&r[i].statecode==n&&(a=i);e.setState({isLoaded:!0,totalcases:r[a].confirmed,totalActive:r[a].active,totaldeceased:r[a].deaths,totalrecovered:r[a].recovered,deltarecovered:r[a].deltarecovered,deltadeceased:r[a].deltadeaths,deltaconfirmed:r[a].deltaconfirmed,deltaactive:r[a].deltaactive})})),e.setState({isLoaded:!0,items:i,statewise:r,statescount:c})}}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,i=e.items,o=e.totalcases,c=e.statewise,l=e.statescount,s=e.totalActive,d=e.totaldeceased,m=e.totalrecovered,u=e.deltaconfirmed,h=e.deltaactive,p=e.deltadeceased,v={data:i,total:o,statewise:c,statescount:l,totalActive:s,totaldeceased:d,totalrecovered:m,deltaconfirmed:u,deltarecovered:e.deltarecovered,deltaactive:h,deltadeceased:p,timeforeach5000:[],allstatescount:0,statesrecovered:[],stateRowStats:[],stateDateWise:[]};return""!=t.message?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement(te,{value:v},r.a.createElement(n.Fragment,null,this.props.children)):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);function Fe(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(q.a,{color:"inherit",href:"https://material-ui.com/"},"Covid Dashboard")," ",(new Date).getFullYear(),".")}var Ce=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{}}}));function De(e){var t=Ce(),a=Object(u.a)(t.paper,t.fixedHeight);return r.a.createElement(r.a.Fragment,null,["mh","tg","tn","gj","dl","up","ap","br","or","rj","jk","pb","ka","kl","mp"].map((function(e){return r.a.createElement(ke,{state:(new se).getState(e.toUpperCase()),statecode:e.toUpperCase()},r.a.createElement(V.a,{maxWidth:"lg",className:t.container},r.a.createElement(Q,null,(new se).getState(e.toUpperCase())),r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(a," red-border-left")},r.a.createElement(re,{type:1}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(a," blue-border-left")},r.a.createElement(re,{type:2}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(a," green-border-left")},r.a.createElement(re,{type:3}))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement($.a,{className:"".concat(a," gray-border-left")},r.a.createElement(re,{type:4}))))))})),r.a.createElement(X.a,{pt:4},r.a.createElement(Fe,null)))}var Be=a(54),Ie=a(147),Re=a.n(Ie),ze=a(230),Ae=a(212),Ne=a(211),Pe=a(210),Le=a(213),Me=(a(472),{city:[{name:"Maharashtra",coordinates:[75.300293,19.66328],activecases:0,color:"#FF7733"},{name:"West Bengal",coordinates:[87.747803,22.978624],activecases:0,color:"#FFE033"},{name:"Tamil Nadu",coordinates:[78.387451,11.059821],activecases:0,color:"#FF7733"},{name:"Telangana",coordinates:[79.208824,17.123184],activecases:0,color:"#33B2FF"},{name:"Madhya Pradesh",coordinates:[77.947998,23.473324],activecases:0,color:"#FF7733"},{name:"Chattisgarh",coordinates:[81.828232,21.295132],activecases:0,color:"#FFC733"},{name:"Delhi",coordinates:[76.040497,29.065773],activecases:0,color:"#FF7733"},{name:"Rajasthan",coordinates:[73.432617,27.391277],activecases:0,color:"#FFE033"},{name:"Himachal Pradesh",coordinates:[77.571167,32.084206],activecases:0,color:"#33B2FF"},{name:"Karnataka",coordinates:[75.71389,15.317277],activecases:0,color:"#33B2FF"},{name:"Kerala",coordinates:[76.27108,10.850516],activecases:0,color:"#8AFF33"},{name:"Gujarat",coordinates:[72.13623,22.309425],activecases:0,color:"#FF7733"},{name:"Andhra Pradesh",coordinates:[79.74,15.9129],activecases:0,color:"#FFE033"},{name:"Uttar Pradesh",coordinates:[80.9462,26.8467],activecases:0,color:"#FF7733"},{name:"Punjab",coordinates:[75.3412,31.1471],activecases:0,color:"#FFE033"},{name:"Bihar",coordinates:[85.3131,25.0961],activecases:0,color:"#33B2FF"},{name:"Jammu and Kashmir",coordinates:[76.5762,33.7782],activecases:0,color:"#33B2FF"},{name:"Odisha",coordinates:[85.0985,20.9517],activecases:0,color:"#33B2FF"},{name:"Jharkhand",coordinates:[85.2799,23.6102],activecases:0,color:"#33B2FF"},{name:"Assam",coordinates:[92.9376,26.2006],activecases:0,color:"#33B2FF"},{name:"Uttarakhand",coordinates:[79.0193,30.0668],activecases:0,color:"#33B2FF"}],minLat:-6.1751,maxLat:55.7558,minLong:37.6173,maxLong:139.6917}),He=a(8),Te=a.n(He),Ge=a(115),Ke=a.n(Ge),We=a(231),_e=a.n(We),Je=function(e){Object(ce.a)(a,e);var t=Object(le.a)(a);function a(e){var n;return Object(ie.a)(this,a),(n=t.call(this,e))._editableFG={leafletElement:{addLayer:function(e){}}},n.state={isLoaded:!1,items:[],error:{message:""},height:"0",width:"0",zoom:5,mulfactor:20},n._onFeatureGroupReady=function(e){if(null!==e&&(n._editableFG=e,null!=n._editableFG&&n.state.items)){var t=new Te.a.GeoJSON(n.state.items);if(null!=n._editableFG){var a=n._editableFG&&n._editableFG.leafletElement;null!=a&&t.eachLayer((function(e){return a.addLayer(e)}))}}},n.state={error:{message:""},isLoaded:!1,items:[],height:"700px",width:"100%",zoom:5,mulfactor:15},n}return Object(oe.a)(a,[{key:"updateDimensions",value:function(){window.innerWidth>=992&&window.innerHeight;window.innerWidth<600&&this.setState({zoom:4,mulfactor:8,height:"500px"})}},{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentDidMount",value:function(){var e=Object(ze.a)(Re.a.mark((function e(){var t,a,n;return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.a.get("./data/custom.geo.json");case 2:t=e.sent,a=t.data,n=this.props.data,Me.city.forEach((function(e){var t=n.find((function(t){if(t.state==e.name)return t}));t?(e.activecases=t.count,t.count>=5e3&&(e.color="#FF7733"),t.count>1e3&&t.count<5e3&&(e.color="#FFE033"),t.count<=1e3&&(e.color="#33B2FF")):e.activecases=0})),this.setState({items:a}),window.addEventListener("resize",this.updateDimensions.bind(this));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.height,i=t.width,o=t.zoom,c=t.mulfactor;Ke()(a);return r.a.createElement(Ae.a,{key:Ke()(a),style:{height:n,width:i},center:[22.44212,78.391384],maxZoom:10,attributionControl:!0,zoomControl:!1,doubleClickZoom:!1,scrollWheelZoom:!1,dragging:!1,animate:!0,easeLinearity:.35,zoom:o},r.a.createElement(Ne.a,{ref:function(t){e._onFeatureGroupReady(t)}}),Me.city.map((function(e){return r.a.createElement(Pe.a,{key:Ke()(e.name),center:[e.coordinates[1],e.coordinates[0]],radius:c*Math.log(e.activecases/(e.activecases>200?400:500)),fillOpacity:.5,stroke:!1,fillColor:e.color},r.a.createElement(Le.a,{direction:"right",offset:[-8,-2],opacity:1},r.a.createElement("span",null,e.name+":  "+e.activecases)))})),r.a.createElement(_e.a,{position:"topleft"},r.a.createElement("div",{className:"info legend"},r.a.createElement(y.a,{component:"p",variant:"h4"},"Legend"),r.a.createElement("div",{style:{background:"#FF7733",height:"20px",width:"100px"}},r.a.createElement("p",null,"5000+")),r.a.createElement("div",{style:{background:"#FFE033",height:"20px",width:"100px",color:"black"}},r.a.createElement("p",null,"1000 - 5000")),r.a.createElement("div",{style:{background:"#33B2FF",height:"20px",width:"100px"}},r.a.createElement("p",null,"0 - 1000")))))}}]),a}(r.a.Component);function Ue(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(q.a,{color:"inherit",href:"https://material-ui.com/"},"Covid Dashboard")," ",(new Date).getFullYear(),".")}var Ye=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{}}}));function Xe(e){var t=Ye();Object(u.a)(t.paper,t.fixedHeight);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{maxWidth:"lg",className:t.container},r.a.createElement(Q,null,"Country wide Active Cases Spread (Hover on the Bubble to see the number)"),r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement($.a,{className:t.paper},r.a.createElement(ue,null,r.a.createElement(ae,null,(function(e){return r.a.createElement(Je,{data:null===e||void 0===e?void 0:e.allstatescount})}))))))),r.a.createElement(X.a,{pt:4},r.a.createElement(Ue,null)))}var Ve=a(519),Ze=a(523),$e=a(522),qe=a(518),Qe=a(520),et=a(521),tt=[{id:"name",label:"Name"},{id:"confirmed",label:"Total Confirmed",align:"right"},{id:"yesterdayConfirmed",label:"Yesterday Cases",align:"right"},{id:"recovered",label:"Total Recovered",align:"right"},{id:"yesterdayRecovered",label:"Yesterday Recovered",align:"right"}],at=Object(h.a)({root:{width:"100%"},container:{}});function nt(){var e=Object(n.useContext)(ee),t=null===e||void 0===e?void 0:e.stateRowStats,a=at(),i=r.a.useState(0),o=Object(d.a)(i,2),c=o[0],l=(o[1],r.a.useState(100)),s=Object(d.a)(l,2),m=s[0];s[1];return r.a.createElement($.a,{className:a.root},r.a.createElement(qe.a,{className:a.container},r.a.createElement(Ve.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(Qe.a,null,r.a.createElement(et.a,null,tt.map((function(e){return r.a.createElement($e.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(Ze.a,null,t.slice(c*m,c*m+m).map((function(e){return r.a.createElement(et.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.name},tt.map((function(t){console.log(e[t.id]);var a=e[t.id];return r.a.createElement($e.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))}))))))}function rt(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(q.a,{color:"inherit",href:"https://material-ui.com/"},"Covid Dashboard")," ",(new Date).getFullYear(),".")}var it=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{}}}));function ot(e){var t=it();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement(V.a,{maxWidth:"lg",className:t.container},r.a.createElement(Q,null,"Statewise data as on ",(new Date).toDateString()," "),r.a.createElement(Z.a,{container:!0,spacing:1},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(nt,null))))),r.a.createElement(X.a,{pt:4},r.a.createElement(rt,null)))}var ct=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function lt(){var e=ct(),t=r.a.useState(!1),a=Object(d.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)("Dashboard"),l=Object(d.a)(c,2);l[0],l[1],Object(u.a)(e.paper,e.fixedHeight);return r.a.createElement(z.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(f.a,{position:"absolute",className:Object(u.a)(e.appBar,i&&e.appBarShift)},r.a.createElement(g.a,{className:e.toolbar},r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(u.a)(e.menuButton,i&&e.menuButtonHidden)},r.a.createElement(S.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Covid19 India Dashboard"))),r.a.createElement(v.a,{variant:"permanent",classes:{paper:Object(u.a)(e.drawerPaper,!i&&e.drawerPaperClose)},open:i},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(b.a,{onClick:function(){o(!1)}},r.a.createElement(O.a,null))),r.a.createElement(w.a,null),r.a.createElement(E.a,null,U),r.a.createElement(w.a,null),r.a.createElement(E.a,null,Y)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(Be.c,null,r.a.createElement(Be.a,{key:"state-stats",path:"/StateStats"},r.a.createElement(ot,null)),r.a.createElement(Be.a,{key:"ap-State",path:"/States"},r.a.createElement(De,{state:"Andhra Pradesh",statecode:"AP"})),r.a.createElement(Be.a,{key:"countrymap",path:"/CountryMap"},r.a.createElement(Xe,{statecode:"tt",state:"test"})),r.a.createElement(Be.a,{path:"/Dashboard"},r.a.createElement(Oe,null)),r.a.createElement(Be.a,{path:"/"},r.a.createElement(Oe,null))))))}var st=Object(l.a)({palette:{type:"dark",primary:{light:"#757ce8",main:"#3f5776",dark:"#002877",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44776",dark:"#ba000d",contrastText:"#000"}}});st.typography.h4=Object(c.a)({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.2rem"},"@media (max-width:600px)":{fontSize:"1.0rem"}},st.breakpoints.up("md"),{fontSize:"1.8rem"}),st.typography.h6=Object(c.a)({fontSize:"1.0rem","@media (min-width:600px)":{fontSize:"1.1rem"}},st.breakpoints.up("md"),{fontSize:"1.7rem"});var dt=function(){return r.a.createElement(s.a,{theme:st},r.a.createElement("div",{className:"App"},r.a.createElement(lt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(dt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.acefdd58.chunk.js.map