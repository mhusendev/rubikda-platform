import{i as y}from"./index-c11b1bdc.js";import{T as k,S as x}from"./Topbar-6a770fb2.js";import{Q as w}from"./vue-quill.snow-515423ed.js";import{r as _,o as n,c as d,a as g,b as e,w as h,g as u,F as m,d as p,n as b,t as c,v as M,i as D}from"./index-1ee89a4b.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./logo-30c9d580.js";console.log(document.cookie);const j={name:"adminmaster",components:{Topbar:k,Sidebar:x,QuillEditor:w},data(){return{toptitle:"Master",baseURL:"https://772e-116-206-14-60.ngrok-free.app",tableMaster:[],selectedMasterAdd:"--pilih--",message:{title:"gagal",text:""},dataMaster:[{id:1,nama:"Jenis Inovasi"},{id:2,nama:"Bentuk Inovasi"},{id:3,nama:"Inisiator Inovasi"},{id:4,nama:"Jenis Urusan Inovasi"},{id:5,nama:"Inovasi Terhadap Covid19 "},{id:6,nama:"Tahapan Inovasi"},{id:7,nama:"Tema Inovasi"}],selectedMaster:"--pilih--",warning:!1,background:"",alertmessage:"",modalTitle:"",datamodal:[],model_master:{id:"",nama:""},temp:[]}},methods:{getDataonTable(){switch(this.selectedMaster){case 1:this.fetchDatadynamis("/inovasi/jenis_inovasi");break;case 2:this.fetchDatadynamis("/inovasi/bentuk_inovasi");break;case 3:this.fetchDatadynamis("/inovasi/inisiator");break;case 4:this.fetchDatadynamis("/inovasi/jenis_urusan");break;case 5:this.fetchDatadynamis("/inovasi/inovasi_covid");break;case 6:this.fetchDatadynamis("/inovasi/tahapan");break;case 7:this.fetchDatadynamis("/inovasi/tema");break}},fetchDatadynamis(o){let s="https://772e-116-206-14-60.ngrok-free.app",l=o,i="Bearer "+localStorage.getItem("token");fetch(s+l,{method:"GET",credentials:"include",headers:{Authorization:i,Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{this.tableMaster=t})},deleteMaster(){switch(console.log("hapus"),this.selectedMaster){case 1:this.fetchDatadynamis_delete("/inovasi/jenis_inovasi");break;case 2:this.fetchDatadynamis_delete("/inovasi/bentuk_inovasi");break;case 3:this.fetchDatadynamis_delete("/inovasi/inisiator");break;case 4:this.fetchDatadynamis_delete("/inovasi/jenis_urusan");break;case 5:this.fetchDatadynamis_delete("/inovasi/inovasi_covid");break;case 6:this.fetchDatadynamis_delete("/inovasi/tahapan");break;case 7:this.fetchDatadynamis_delete("/inovasi/tema");break}},fetchDatadynamis_delete(o){let s="https://772e-116-206-14-60.ngrok-free.app",l=o,i="Bearer "+localStorage.getItem("token");fetch(s+l+"/d",{method:"POST",credentials:"include",headers:{Authorization:i,Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({id:this.model_master.id})}).then(t=>t.json()).then(t=>{t.status==="OK"?(this.message.title="success",this.message.text="Berhasil",my_modal_3.close(),this.setModelDefault(),this.messageModal(),setTimeout(()=>{window.location.href="/admin/master"},3e3)):(this.message.title="failed",this.message.text="Gagal",this.messageModal())}).catch(t=>{this.message.title="failed!",this.message.text="Gagal",this.messageModal(),console.log(t)})},showModaldelete(o){this.model_master.id=o.id,my_modal_5.showModal()},messageModal(){my_modal_4.showModal()},save(){switch(console.log(this.model_master),this.selectedMasterAdd){case 1:this.fetchDatadynamis_post("/inovasi/jenis_inovasi");break;case 2:this.fetchDatadynamis_post("/inovasi/bentuk_inovasi");break;case 3:this.fetchDatadynamis_post("/inovasi/inisiator");break;case 4:this.fetchDatadynamis_post("/inovasi/jenis_urusan");break;case 5:this.fetchDatadynamis_post("/inovasi/inovasi_covid");break;case 6:this.fetchDatadynamis_post("/inovasi/tahapan");break;case 7:this.fetchDatadynamis_post("/inovasi/tema");break}},fetchDatadynamis_post(o){let s="https://772e-116-206-14-60.ngrok-free.app",l=o,i="Bearer "+localStorage.getItem("token");fetch(s+l,{method:"POST",credentials:"include",headers:{Authorization:i,Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({nama:this.model_master.nama})}).then(t=>t.json()).then(t=>{t.status==="OK"?(this.message.title="success",this.message.text="Berhasil",my_modal_3.close(),this.setModelDefault(),this.messageModal()):(this.message.title="failed",this.message.text="Gagal",this.messageModal())}).catch(t=>{this.message.title="failed!",this.message.text="Gagal",this.messageModal(),console.log(t)})},setModelDefault(){},previewFiles(o){console.log(o.target.files[0]),this.model_event.poster=o.target.files[0]},async createMasterModal(){this.modalTitle="Create",await this.setModelDefault(),my_modal_3.showModal()},showDetail(o){this.datamodal=o,my_modal_2.showModal()},getAll(){let o="https://772e-116-206-14-60.ngrok-free.app",s="/events/";""+localStorage.getItem("token"),fetch(o+s,{method:"GET",credentials:"include",headers:{"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{this.tableMaster=l.data})}},mounted:function(){y()},created:function(){let o="https://772e-116-206-14-60.ngrok-free.app",s="/users/isloggedin",l="Bearer "+localStorage.getItem("token");fetch(o+s,{method:"GET",credentials:"include",headers:{Authorization:l,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{(i.status!==200||i.isAdmin==!1)&&this.$router.push({name:"login"}),console.log(i.status)}).catch(i=>{this.$router.push({name:"login"})})}},A={class:"flex bg-white"},S={class:"w-full"},C={class:"w-full px-[5%] py-[5%]"},B={class:"relative sm:rounded-lg"},I={class:"grid grid-cols-3 gap-20"},U={class:"flex"},z=e("p",{class:"w-1/3 mt-[5%]"},"Filter :",-1),R=e("option",{value:"--pilih--"},"--pilih--",-1),G=["selected","value"],L=D('<label for="table-search" class="sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pencarian"></div>',2),E={class:"w-full max-h-96 mt-10 overflow-y-scroll"},N={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},O=e("thead",{class:"text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"nama"),e("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),V={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},F={class:"px-6 py-4"},J={class:"px-6 py-4"},P={class:"flex gap-2"},K=["onClick"],Q={id:"my_modal_3",class:"modal"},H={class:"modal-box bg-white text-black"},Y={class:"font-bold pb-2 text-center"},q=e("h3",{class:"font-light text-xs border-b pb-2 text-center"},null,-1),W={class:"w-full"},X=e("p",null,null,-1),Z=e("option",{value:"--pilih--"},"--pilih jenis masterdata--",-1),$=["selected","value"],ee={class:"mt-[5%]"},te=e("label",null,"Nama",-1),se=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),ae={id:"my_modal_4",class:"modal bg-white"},oe={class:"font-bold text-lg text-center uppercase"},ie=e("p",{class:"py-4 text-center"},"Press ESC key or click the button below to close",-1),le=e("div",{class:"modal-action"},[e("button",{class:"btn w-full bg-slate-600 text-white"},"Close")],-1),ne={id:"my_modal_5",class:"modal"},de={method:"dialog",class:"modal-box bg-white"},re={class:"alert bg-red-600 text-white"},ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-info shrink-0 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),he=e("span",null,"Hapus ?",-1),me={class:"flex gap-2"},pe=e("button",{class:"btn btn-sm"},"Tidak",-1),_e=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1);function ge(o,s,l,i,t,r){const f=_("Sidebar"),v=_("Topbar");return n(),d("div",A,[g(f),e("div",S,[g(v,{toptitle:t.toptitle},null,8,["toptitle"]),e("div",C,[e("div",B,[e("div",I,[e("div",null,[e("button",{onClick:s[0]||(s[0]=a=>r.createMasterModal()),class:"btn btn-success text-white"},"Add")]),e("div",U,[z,h(e("select",{class:"w-full","onUpdate:modelValue":s[1]||(s[1]=a=>t.selectedMaster=a),onChange:s[2]||(s[2]=(...a)=>r.getDataonTable&&r.getDataonTable(...a))},[R,(n(!0),d(m,null,p(t.dataMaster,a=>(n(),d("option",{selected:t.selectedMaster===a.id,value:a.id},c(a.nama),9,G))),256))],544),[[u,t.selectedMaster]])]),L])]),e("div",{class:b([t.warning?t.background+"block":"hidden","w-full px-5 py-2 text-center"])},c(t.alertmessage),3),e("div",E,[e("table",N,[O,e("tbody",null,[(n(!0),d(m,null,p(t.tableMaster,a=>(n(),d("tr",V,[e("td",F,c(a.nama),1),e("td",J,[e("div",P,[e("button",{onClick:ue=>r.showModaldelete(a),class:"btn bg-red-700 text-white"},"delete",8,K)])])]))),256))])])])]),e("dialog",Q,[e("div",H,[e("h3",Y,c(t.modalTitle)+" Master",1),q,e("div",W,[X,h(e("select",{class:"w-full","onUpdate:modelValue":s[3]||(s[3]=a=>t.selectedMasterAdd=a)},[Z,(n(!0),d(m,null,p(t.dataMaster,a=>(n(),d("option",{selected:t.selectedMaster===a.id,value:a.id},c(a.nama),9,$))),256))],512),[[u,t.selectedMasterAdd]]),e("div",ee,[te,h(e("input",{type:"text",class:"w-full mt-2","onUpdate:modelValue":s[4]||(s[4]=a=>t.model_master.nama=a)},null,512),[[M,t.model_master.nama]])]),e("button",{class:"btn mt-[3%] w-full",onClick:s[5]||(s[5]=a=>r.save())},"Save")])]),se]),e("dialog",ae,[e("form",{method:"dialog",class:b(["modal-box",t.message.title==="success"?"bg-green-600":"bg-red-600"])},[e("h3",oe,c(t.message.title),1),ie,le],2)]),e("dialog",ne,[e("form",de,[e("div",re,[ce,he,e("div",me,[pe,e("button",{onClick:s[6]||(s[6]=a=>r.deleteMaster()),class:"btn btn-sm btn-primary"},"Ya")])])]),_e])])])}const we=T(j,[["render",ge]]);export{we as default};
