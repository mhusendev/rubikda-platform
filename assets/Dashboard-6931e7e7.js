import{T as d,S as p}from"./Topbar-560421af.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{r as s,o as m,c as h,a as r,b as e}from"./index-bf7f2086.js";import"./logo-30c9d580.js";console.log(document.cookie);const _={name:"dashboard",components:{Topbar:d,Sidebar:p},data(){return{toptitle:"Dashboard"}},methods:{},mounted:function(){},created:function(){let o="http://localhost:3000",a="/users/isloggedin",n="Bearer "+localStorage.getItem("token");fetch(o+a,{method:"GET",credentials:"include",headers:{Authorization:n,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{(t.status!==200||t.isAdmin==!1)&&this.$router.push({name:"login"}),console.log(t.status)}).catch(t=>{this.$router.push({name:"login"})})}},f={class:"flex bg-white"},b={class:"w-full"},g=e("div",{class:"w-full px-[15%] py-[5%]"},[e("h1",{class:"w-full p-10 text-center mt-[10%] font-bold text-2xl shadow-xl rounded-2xl text-gray-500"},"Selamat datang di System Ruang Publik Inovasi Daerah")],-1);function x(o,a,n,t,l,S){const i=s("Sidebar"),c=s("Topbar");return m(),h("div",f,[r(i),e("div",b,[r(c,{toptitle:l.toptitle},null,8,["toptitle"]),g])])}const y=u(_,[["render",x]]);export{y as default};
