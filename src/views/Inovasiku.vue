<template>
    <div class="w-full h-screen overflow-auto bg-white text-black" style="scroll-behavior: smooth;">
        <Navbar :title="title"/>
      
          
    <div class="flex justify-center items-center">
        <h1 class="mt-10 border-b-2 border-black pb-2 text-xl font-bold">Inovasiku</h1>
    </div>
    <div class="w-full px-[5%] py-[5%]">
        <div class="relative overflow-x-auto  sm:rounded-lg">
          <div class="flex items-center justify-between">
            <div>
              <!-- Dropdown menu -->
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pencarian"
                v-model="search"
                v-on:change="Cari()"
              />
            </div>
          </div>
        </div>
        <div :class="warning?background+'block':'hidden'" class="w-full  px-5 py-2 text-center ">{{ alertmessage }}</div>
        <div class="w-full max-h-96 mt-10 overflow-y-scroll">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">nama inovasi</th>
                <th scope="col" class="px-6 py-3">jenis</th>
                <th scope="col" class="px-6 py-3">inovator</th>
                <th scope="col" class="px-6 py-3">inisiator</th>
                <th scope="col" class="px-6 py-3">Informasi Keterangan</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="inovasi in tableInovasi"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ inovasi.nama_inovasi }}
                </td>

                <td class="px-6 py-4">
                  {{ inovasi.jenis }}
                </td>
                <td class="px-6 py-4">
                  {{ inovasi.inovator }}
                </td>
                <td class="px-6 py-4">
                  {{ inovasi.inisiator }}
                </td>
                <td class="px-6 py-4">
                  {{ inovasi.acc  }}
                </td>
                <td class="px-6 py-4">
                    <div class="flex gap-2">
                      <button class="btn" v-on:click="showDetail(inovasi)">detail</button>
                     
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_2" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold pb-2 text-center">Detail Pengajuan</h3>
    <h3 class="font-light text-xs border-b  pb-2 text-center">{{ datamodal.tanggal }}</h3>
    <div class="w-full">
        <div class="flex gap-4 mt-3"> 
            <p class="w-[37%]">nama perangkat daerah</p>
            <p>:  {{ datamodal.nama_perangkat_daerah }}</p>
        </div>
        <div class="flex gap-4"> 
            <p class="w-[37%]">tahapan inovasi </p>
            <p>:  {{ datamodal.tahapan }}</p>
        </div>
        <div class="flex gap-4"> 
            <p class="w-[41%]">bentuk inovasi </p>
            <p>:  {{ datamodal.bentuk }}</p>
        </div>
        <div class="flex gap-4"> 
            <p class="w-[37%]">inovasi thdp covid19 </p>
            <p>:  {{ datamodal.inovasi_thdp_covid }}</p>
        </div>
        <div class="flex gap-4"> 
            <p class="w-[37%]">jenis urusan invoasi </p>
            <p>:  {{ datamodal.jenis_urusan_inovasi }}</p>
        </div>
        <div class="flex gap-4"> 
            <p class="w-[37%]">tema </p>
            <p>:  {{ datamodal.tema }}</p>
        </div>
   
        <div class="mt-5"> 
            <p class="w-fit border-b pb-1 pr-3">keterangan </p>
            <p v-html="datamodal.keterangan" class="h-60 overflow-y-auto"></p>
        </div>
        
        <div class="w-full h-fit overflow-y-scroll">
         <div class="w-full flex" >
            <a v-for="(im,index) in datamodal.docs" :href="baseURL+im.url_dokumen" target="_blank" class="btn mt-2 mr-2" >{{ im.jenis_docs }}</a>
         </div>
        </div>
        

        
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
export default {
    name:'inovasiku',
    components: {Navbar},
    data(){
        return{
     
            title:'Inovasiku',
            baseURL:import.meta.env.VITE_API_URL+'/',
            contact:[],
            tableInovasi: [],
            datamodal:'',
            search:'',
          
        }
    },
    methods: {
        scrollTo() {
            document.querySelector('#events').scrollTo({
        bottom: 500,
        behavior: 'smooth'
    })
    },
    async Cari(){
         if(this.search) {
          let filter =  this.tableInovasi.filter((el)=> {
            if(el.nama_inovasi === this.search) {
              return el.nama_inovasi === this.search
            } else if (el.acc === this.search ) {
              return el.acc === this.search
            }
            else if (el.inisiator === this.search ) {
              return el.inisiator === this.search
            }
            else if (el.inovator === this.search ) {
              return el.inovator === this.search
            }
            
          })
         this.tableInovasi = filter
         } else {
          this.getAll()
         }

    },
    showDetail(modaldata){
        // console.log(modaldata)
        this.datamodal = modaldata
        my_modal_2.showModal()
    },
    getAll() {
      let baseURL = import.meta.env.VITE_API_URL;
      let endpoint = import.meta.env.VITE_GET_INOVASI_BY;
      let token = 'Bearer '+localStorage.getItem('token')
		//console.log(token)
        fetch(baseURL+endpoint, {
          method: "GET",
          credentials:'include',
          headers: {
          'Authorization':token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.tableInovasi = res;
          console.log(this.tableInovasi);
        });
    },

       
    },
    created: function() {
        this.getAll()

    }
    
}
</script>
