"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[734],{7228:(n,t,o)=>{o.d(t,{Z:()=>D});var l=o(3396),e=o(7139),r=o(5010),u=o(6940),i=o(2221),c=function(n){return(0,l.dD)("data-v-73ae5454"),n=n(),(0,l.Cn)(),n},a=c((function(){return(0,l._)("img",{src:u,alt:""},null,-1)})),s=[a],d={class:"navigation"},f=(0,l.Uk)("Home"),m=(0,l.Uk)("Espace Professionnel"),_=c((function(){return(0,l._)("img",{src:i,alt:""},null,-1)})),v=[_],h={class:"dropdown-nav"},p=(0,l.Uk)("Home"),w=(0,l.Uk)("Espace Professionnel"),g=c((function(){return(0,l._)("li",null,[(0,l._)("p",{class:"link"},"Deconnecter")],-1)}));function b(n,t,o,u,i,c){var a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",{class:(0,e.C_)({"scrolld-nav":i.scrollNav})},[(0,l._)("nav",null,[(0,l._)("div",{class:"branding",onClick:t[0]||(t[0]=function(){return c.home&&c.home.apply(c,arguments)})},s),(0,l.wy)((0,l._)("ul",d,[(0,l._)("li",null,[(0,l.Wm)(a,{class:"link",to:{name:"home"}},{default:(0,l.w5)((function(){return[f]})),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{class:"link",to:{name:"doctor"}},{default:(0,l.w5)((function(){return[m]})),_:1})]),(0,l._)("li",null,[(0,l._)("p",{class:"link",onClick:t[1]||(t[1]=function(){return c.logout&&c.logout.apply(c,arguments)})},"Deconnecter")])],512),[[r.F8,!i.mobile]]),(0,l.wy)((0,l._)("div",{class:(0,e.C_)(["icon",{"icon-active":i.mobileNav}]),onClick:t[2]||(t[2]=function(){return c.toggleMobileNav&&c.toggleMobileNav.apply(c,arguments)})},v,2),[[r.F8,i.mobile]]),(0,l.Wm)(r.uT,{name:"mobile-nav"},{default:(0,l.w5)((function(){return[(0,l.wy)((0,l._)("ul",h,[(0,l._)("li",null,[(0,l.Wm)(a,{class:"link",to:{name:"home"}},{default:(0,l.w5)((function(){return[p]})),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{class:"link",to:{name:"doctor"}},{default:(0,l.w5)((function(){return[w]})),_:1})]),g],512),[[r.F8,i.mobileNav]])]})),_:1})])],2)}const k={name:"ComponentNavbar",data:function(){return{scrollNav:null,mobile:null,mobileNav:null,windowWith:null}},created:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{home:function(){this.$router.push({path:"/"})},logout:function(){localStorage.removeItem("patient"),this.$router.push({path:"/login"})},toggleMobileNav:function(){this.mobileNav=!this.mobileNav},updateScroll:function(){var n=window.scrollY;if(n>50)return this.scrollNav=!0,!0;this.scrollNav=!1},checkScreen:function(){this.windowWith=window.innerWidth,this.windowWith<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)}}};var N=o(89);const C=(0,N.Z)(k,[["render",b],["__scopeId","data-v-73ae5454"]]),D=C},5734:(n,t,o)=>{o.r(t),o.d(t,{default:()=>M});var l=o(3396);function e(n,t,o,e,r,u){var i=(0,l.up)("ComponentNavbarConnect"),c=(0,l.up)("ComponentDoctorInfo");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i),(0,l.Wm)(c,{doctors:r.doctors},null,8,["doctors"])])}var r=o(7228),u=o(7139),i=function(n){return(0,l.dD)("data-v-032b7288"),n=n(),(0,l.Cn)(),n},c={class:"container"},a=i((function(){return(0,l._)("div",{class:"navbar-top"},[(0,l._)("div",{class:"title"},[(0,l._)("h1",null,"Profile")])],-1)})),s={class:"main"},d=i((function(){return(0,l._)("h2",null,"IDENTITY",-1)})),f={class:"card"},m={class:"card-body"},_=i((function(){return(0,l._)("i",{class:"fa fa-pen fa-xs edit"},null,-1)})),v=i((function(){return(0,l._)("td",null,"Nom",-1)})),h=i((function(){return(0,l._)("td",null,":",-1)})),p=i((function(){return(0,l._)("td",null,"Prenom",-1)})),w=i((function(){return(0,l._)("td",null,":",-1)})),g=i((function(){return(0,l._)("td",null,"Addresse Email",-1)})),b=i((function(){return(0,l._)("td",null,":",-1)})),k=i((function(){return(0,l._)("td",null,"Numero",-1)})),N=i((function(){return(0,l._)("td",null,":",-1)})),C=i((function(){return(0,l._)("td",null,"Specialité",-1)})),D=i((function(){return(0,l._)("td",null,":",-1)})),I=i((function(){return(0,l._)("td",null,"Centre",-1)})),W=i((function(){return(0,l._)("td",null,":",-1)}));function S(n,t,o,e,r,i){return(0,l.wg)(),(0,l.iD)("div",c,[a,(0,l._)("div",s,[d,(0,l._)("div",f,[(0,l._)("div",m,[_,(0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.doctors,(function(n){return(0,l.wg)(),(0,l.iD)("tbody",{key:n.id},[(0,l._)("tr",null,[v,h,(0,l._)("td",null,(0,u.zw)(n.nom),1)]),(0,l._)("tr",null,[p,w,(0,l._)("td",null,(0,u.zw)(n.prenom),1)]),(0,l._)("tr",null,[g,b,(0,l._)("td",null,(0,u.zw)(n.email),1)]),(0,l._)("tr",null,[k,N,(0,l._)("td",null,(0,u.zw)(n.numero),1)]),(0,l._)("tr",null,[C,D,(0,l._)("td",null,(0,u.zw)(n.specialite),1)]),(0,l._)("tr",null,[I,W,(0,l._)("td",null,(0,u.zw)(n.centre),1)])])})),128))])])])])])}const y={name:"ComponentDoctorInfo",props:["doctors"]};var z=o(89);const E=(0,z.Z)(y,[["render",S],["__scopeId","data-v-032b7288"]]),Z=E;var P=o(6265),U=o.n(P);const F={name:"DoctorInfo",props:["doctors"],components:{ComponentDoctorInfo:Z,ComponentNavbarConnect:r.Z},data:function(){return{doctors:""}},created:function(){var n=localStorage.getItem("doctor");console.log("authhhh",n),null===n&&this.$router.push({path:"/login"})},mounted:function(){var n=this,t=localStorage.getItem("doctor");t?(console.log("sfsdfg",t),U().get("https://sante-kionou.herokuapp.com/doctor/detaildoctor",{headers:{doctor:localStorage.getItem("doctor")}}).then((function(t){console.log("response",t.data),n.doctors=t.data.doctor}))):console.log("nono")}},H=(0,z.Z)(F,[["render",e]]),M=H}}]);
//# sourceMappingURL=734.eb688f76.js.map