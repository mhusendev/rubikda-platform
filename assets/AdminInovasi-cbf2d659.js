import{i as v}from"./index-c11b1bdc.js";import{T as x,S as y}from"./Topbar-560421af.js";import{r as _,o as c,c as r,a as u,b as t,w,v as k,n as p,t as o,F as g,d as m}from"./index-bf7f2086.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./logo-30c9d580.js";console.log(document.cookie);const T={name:"admininovasi",components:{Topbar:x,Sidebar:y},data(){return{toptitle:"Inovasi",baseURL:"http://localhost:3000",tableInovasi:[],warning:!1,background:"",alertmessage:"",datamodal:[],search:""}},methods:{async Cari(){if(this.search){let n=this.tableInovasi.filter(s=>{if(s.nama_inovasi===this.search)return s.nama_inovasi===this.search;if(s.acc===this.search)return s.acc===this.search;if(s.inisiator===this.search)return s.inisiator===this.search;if(s.inovator===this.search)return s.inovator===this.search});this.tableInovasi=n}else this.getAll()},rejectInovasi(n){let s="http://localhost:3000",i="/inovasi/reject_inovasi",l="Bearer "+localStorage.getItem("token");fetch(s+i,{method:"POST",credentials:"include",headers:{Authorization:l,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(e=>e.json()).then(e=>{console.log(e),this.warning=!0,this.background="bg-green-600 text-white ",this.alertmessage="Berhasil Reject Pengajuan",setTimeout(()=>{this.warning="false",this.alertmessage="",this.background=""},1500),this.getAll()})},accInovasi(n){let s="http://localhost:3000",i="/inovasi/acc_inovasi",l="Bearer "+localStorage.getItem("token");fetch(s+i,{method:"POST",credentials:"include",headers:{Authorization:l,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(e=>e.json()).then(e=>{console.log(e),this.warning=!0,this.background="bg-green-600 text-white ",this.alertmessage="Berhasil Acc Pengajuan",setTimeout(()=>{this.warning="false",this.alertmessage="",this.background=""},1500),this.getAll()})},showDetail(n){this.datamodal=n,my_modal_2.showModal()},getAll(){let n="http://localhost:3000",s="/inovasi/";""+localStorage.getItem("token"),fetch(n+s,{method:"GET",credentials:"include",headers:{"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{this.tableInovasi=i})}},mounted:function(){v(),this.getAll()},created:function(){let n="http://localhost:3000",s="/users/isloggedin",i="Bearer "+localStorage.getItem("token");fetch(n+s,{method:"GET",credentials:"include",headers:{Authorization:i,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{(l.status!==200||l.isAdmin==!1)&&this.$router.push({name:"login"}),console.log(l.status)}).catch(l=>{this.$router.push({name:"login"})})}},A={class:"flex bg-white"},C={class:"w-full"},I={class:"w-full px-[5%] py-[5%]"},B={class:"relative overflow-x-auto sm:rounded-lg"},S={class:"flex items-center justify-between"},R=t("div",null,null,-1),L=t("label",{for:"table-search",class:"sr-only"},"Search",-1),U={class:"relative"},z=t("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t("svg",{class:"w-5 h-5 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),M={class:"w-full max-h-96 mt-10 overflow-y-scroll"},P={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},D=t("thead",{class:"text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"nama inovasi"),t("th",{scope:"col",class:"px-6 py-3"},"jenis"),t("th",{scope:"col",class:"px-6 py-3"},"inovator"),t("th",{scope:"col",class:"px-6 py-3"},"inisiator"),t("th",{scope:"col",class:"px-6 py-3"},"ACC"),t("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),N={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},O={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},E={class:"px-6 py-4"},F={class:"px-6 py-4"},V={class:"px-6 py-4"},G={class:"px-6 py-4"},H={class:"px-6 py-4"},J={class:"flex gap-2"},q=["onClick"],K=["onClick"],Q=["onClick"],W={id:"my_modal_2",class:"modal"},X={class:"modal-box w-11/12 max-w-5xl"},Y=t("h3",{class:"font-bold pb-2 text-center"},"Detail Pengajuan",-1),Z={class:"font-light text-xs border-b pb-2 text-center"},$={class:"w-full"},tt={class:"flex gap-4 mt-3"},et=t("p",{class:"w-[37%]"},"nama perangkat daerah",-1),st={class:"flex gap-4"},at=t("p",{class:"w-[37%]"},"tahapan inovasi ",-1),ot={class:"flex gap-4"},nt=t("p",{class:"w-[37%]"},"bentuk inovasi ",-1),lt={class:"flex gap-4"},it=t("p",{class:"w-[37%]"},"inovasi thdp covid19 ",-1),ct={class:"flex gap-4"},rt=t("p",{class:"w-[37%]"},"jenis urusan invoasi ",-1),dt={class:"flex gap-4"},ht=t("p",{class:"w-[37%]"},"tema ",-1),pt={class:"mt-5"},_t=t("p",{class:"w-fit border-b pb-1 pr-3"},"keterangan ",-1),ut=["innerHTML"],gt={class:"w-full h-fit overflow-y-scroll"},mt={class:"w-full flex"},bt=["href"],ft=t("form",{method:"dialog",class:"modal-backdrop"},[t("button",null,"close")],-1);function vt(n,s,i,l,e,d){const b=_("Sidebar"),f=_("Topbar");return c(),r("div",A,[u(b),t("div",C,[u(f,{toptitle:e.toptitle},null,8,["toptitle"]),t("div",I,[t("div",B,[t("div",S,[R,L,t("div",U,[z,w(t("input",{type:"text",id:"table-search",class:"block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Pencarian","onUpdate:modelValue":s[0]||(s[0]=a=>e.search=a),onChange:s[1]||(s[1]=a=>d.Cari())},null,544),[[k,e.search]])])])]),t("div",{class:p([e.warning?e.background+"block":"hidden","w-full px-5 py-2 text-center"])},o(e.alertmessage),3),t("div",M,[t("table",P,[D,t("tbody",null,[(c(!0),r(g,null,m(e.tableInovasi,a=>(c(),r("tr",N,[t("td",O,o(a.nama_inovasi),1),t("td",E,o(a.jenis),1),t("td",F,o(a.inovator),1),t("td",V,o(a.inisiator),1),t("td",G,o(a.acc),1),t("td",H,[t("div",J,[t("button",{class:"btn",onClick:h=>d.showDetail(a)},"detail",8,q),t("button",{class:p([a.acc==="sudah"?"hidden":"","btn btn-success text-white"]),onClick:h=>d.accInovasi(a.id)},"acc",10,K),t("button",{class:p([a.acc==="sudah"||a.acc==="rejected"?"hidden":"","btn bg-red-700 text-white"]),onClick:h=>d.rejectInovasi(a.id)},"reject",10,Q)])])]))),256))])])])]),t("dialog",W,[t("div",X,[Y,t("h3",Z,o(e.datamodal.tanggal),1),t("div",$,[t("div",tt,[et,t("p",null,": "+o(e.datamodal.nama_perangkat_daerah),1)]),t("div",st,[at,t("p",null,": "+o(e.datamodal.tahapan),1)]),t("div",ot,[nt,t("p",null,": "+o(e.datamodal.bentuk),1)]),t("div",lt,[it,t("p",null,": "+o(e.datamodal.inovasi_thdp_covid),1)]),t("div",ct,[rt,t("p",null,": "+o(e.datamodal.jenis_urusan_inovasi),1)]),t("div",dt,[ht,t("p",null,": "+o(e.datamodal.tema),1)]),t("div",pt,[_t,t("p",{innerHTML:e.datamodal.keterangan,class:"h-60 overflow-y-auto"},null,8,ut)]),t("div",gt,[t("div",mt,[(c(!0),r(g,null,m(e.datamodal.docs,(a,h)=>(c(),r("a",{href:e.baseURL+"/"+a.url_dokumen,target:"_blank",class:"btn mt-2 mr-2"},o(a.jenis_docs),9,bt))),256))])])])]),ft])])])}const Tt=j(T,[["render",vt]]);export{Tt as default};
