import{N as b}from"./Navbar-327b1a56.js";import{r as v,o as n,c as i,a as m,b as t,w as g,v as f,n as x,t as o,F as h,d as _}from"./index-bf7f2086.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-c11b1bdc.js";const w={name:"inovasiku",components:{Navbar:b},data(){return{title:"Inovasiku",baseURL:"http://localhost:3000/",contact:[],tableInovasi:[],datamodal:"",search:""}},methods:{scrollTo(){document.querySelector("#events").scrollTo({bottom:500,behavior:"smooth"})},async Cari(){if(this.search){let l=this.tableInovasi.filter(s=>{if(s.nama_inovasi===this.search)return s.nama_inovasi===this.search;if(s.acc===this.search)return s.acc===this.search;if(s.inisiator===this.search)return s.inisiator===this.search;if(s.inovator===this.search)return s.inovator===this.search});this.tableInovasi=l}else this.getAll()},showDetail(l){this.datamodal=l,my_modal_2.showModal()},getAll(){let l="http://localhost:3000",s="/inovasi/getbyuser",c="Bearer "+localStorage.getItem("token");fetch(l+s,{method:"GET",credentials:"include",headers:{Authorization:c,Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{this.tableInovasi=r,console.log(this.tableInovasi)})}},created:function(){this.getAll()}},k={class:"w-full h-screen overflow-auto bg-white text-black",style:{"scroll-behavior":"smooth"}},j=t("div",{class:"flex justify-center items-center"},[t("h1",{class:"mt-10 border-b-2 border-black pb-2 text-xl font-bold"},"Inovasiku")],-1),C={class:"w-full px-[5%] py-[5%]"},A={class:"relative overflow-x-auto sm:rounded-lg"},I={class:"flex items-center justify-between"},T=t("div",null,null,-1),B=t("label",{for:"table-search",class:"sr-only"},"Search",-1),L={class:"relative"},M=t("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t("svg",{class:"w-5 h-5 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),N={class:"w-full max-h-96 mt-10 overflow-y-scroll"},D={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},S=t("thead",{class:"text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"nama inovasi"),t("th",{scope:"col",class:"px-6 py-3"},"jenis"),t("th",{scope:"col",class:"px-6 py-3"},"inovator"),t("th",{scope:"col",class:"px-6 py-3"},"inisiator"),t("th",{scope:"col",class:"px-6 py-3"},"ACC"),t("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),z={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},U={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},R={class:"px-6 py-4"},V={class:"px-6 py-4"},E={class:"px-6 py-4"},F={class:"px-6 py-4"},H={class:"px-6 py-4"},P={class:"flex gap-2"},q=["onClick"],G={id:"my_modal_2",class:"modal"},J={class:"modal-box w-11/12 max-w-5xl"},K=t("h3",{class:"font-bold pb-2 text-center"},"Detail Pengajuan",-1),O={class:"font-light text-xs border-b pb-2 text-center"},Q={class:"w-full"},W={class:"flex gap-4 mt-3"},X=t("p",{class:"w-[37%]"},"nama perangkat daerah",-1),Y={class:"flex gap-4"},Z=t("p",{class:"w-[37%]"},"tahapan inovasi ",-1),$={class:"flex gap-4"},tt=t("p",{class:"w-[41%]"},"bentuk inovasi ",-1),st={class:"flex gap-4"},et=t("p",{class:"w-[37%]"},"inovasi thdp covid19 ",-1),ot={class:"flex gap-4"},at=t("p",{class:"w-[37%]"},"jenis urusan invoasi ",-1),lt={class:"flex gap-4"},nt=t("p",{class:"w-[37%]"},"tema ",-1),it={class:"mt-5"},rt=t("p",{class:"w-fit border-b pb-1 pr-3"},"keterangan ",-1),ct=["innerHTML"],dt={class:"w-full h-fit overflow-y-scroll"},ht={class:"w-full flex"},_t=["href"],pt=t("form",{method:"dialog",class:"modal-backdrop"},[t("button",null,"close")],-1);function ut(l,s,c,r,e,d){const p=v("Navbar");return n(),i("div",k,[m(p,{title:e.title},null,8,["title"]),j,t("div",C,[t("div",A,[t("div",I,[T,B,t("div",L,[M,g(t("input",{type:"text",id:"table-search",class:"block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Pencarian","onUpdate:modelValue":s[0]||(s[0]=a=>e.search=a),onChange:s[1]||(s[1]=a=>d.Cari())},null,544),[[f,e.search]])])])]),t("div",{class:x([l.warning?l.background+"block":"hidden","w-full px-5 py-2 text-center"])},o(l.alertmessage),3),t("div",N,[t("table",D,[S,t("tbody",null,[(n(!0),i(h,null,_(e.tableInovasi,a=>(n(),i("tr",z,[t("td",U,o(a.nama_inovasi),1),t("td",R,o(a.jenis),1),t("td",V,o(a.inovator),1),t("td",E,o(a.inisiator),1),t("td",F,o(a.acc==1?"Sudah Acc":"Belum Acc"),1),t("td",H,[t("div",P,[t("button",{class:"btn",onClick:u=>d.showDetail(a)},"detail",8,q)])])]))),256))])])])]),t("dialog",G,[t("div",J,[K,t("h3",O,o(e.datamodal.tanggal),1),t("div",Q,[t("div",W,[X,t("p",null,": "+o(e.datamodal.nama_perangkat_daerah),1)]),t("div",Y,[Z,t("p",null,": "+o(e.datamodal.tahapan),1)]),t("div",$,[tt,t("p",null,": "+o(e.datamodal.bentuk),1)]),t("div",st,[et,t("p",null,": "+o(e.datamodal.inovasi_thdp_covid),1)]),t("div",ot,[at,t("p",null,": "+o(e.datamodal.jenis_urusan_inovasi),1)]),t("div",lt,[nt,t("p",null,": "+o(e.datamodal.tema),1)]),t("div",it,[rt,t("p",{innerHTML:e.datamodal.keterangan,class:"h-60 overflow-y-auto"},null,8,ct)]),t("div",dt,[t("div",ht,[(n(!0),i(h,null,_(e.datamodal.docs,(a,u)=>(n(),i("a",{href:e.baseURL+a.url_dokumen,target:"_blank",class:"btn mt-2 mr-2"},o(a.jenis_docs),9,_t))),256))])])])]),pt])])}const ft=y(w,[["render",ut]]);export{ft as default};
