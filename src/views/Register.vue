<template>
    <div class="bg-slate-900 w-full h-screen  overflow-auto px-[5%]">
        <div class="w-full h-full flex justify-center items-center ">
            <div class="px-[5%]  py-[5%] bg-slate-950  rounded-3xl">
                <div class="w-full ">
                    <h1 class="text-white text-center font-bold text-2xl border-b border-white mb-5 pb-5">Register</h1>
                     
                    <div :class="hidden?'hidden':''"  class="w-full h-10  text-white rounded-lg mb-5 ">
                       <div class="w-full h-10 px-2 py-2 flex rounded-lg" :class="success?'bg-green-800':'bg-red-800'">
                        <svg v-if="success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                       

                        <h1 class="ml-3"> {{ message }} </h1>

                       </div>

                     </div>
                    <div class="w-full flex">
                     <div class="w-full mr-2">
                        <p class="text-white mb-2 pl-3 font-bold">Fullname</p>
                    <input
                    v-model="register.fullname"
                  class="text-slate-500  placeholder:text-sm w-full rounded-full text-lg py-2 px-5 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Full Name"
                />
                     </div>
                    <div class="w-full ml-2">
                        <p class="text-white mb-2 pl-3 font-bold">Email</p>
                <input
                v-model="register.email"
                  class="text-slate-500  placeholder:text-sm w-full  rounded-full px-5 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type="email"
                  v-on:keypress="isEmail()"
                  placeholder="Mike@gmail.com"
                />
                     <p :class="validating.isEmail ?'hidden':''"  class="text-xs ml-5 text-red-600">harap menggunakan email * </p>
                    </div>
                 </div>   
                 <div class="w-full flex mt-10">
                     <div class="w-full mr-2">
                        <p class="text-white mb-2 pl-3 font-bold">Phone</p>
                    <input
                    v-model="register.phone"
                  v-on:keypress="isNumber()"
                  class="text-slate-500  placeholder:text-sm w-full rounded-full text-lg py-2 px-5 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="08123456789"
                />
                <p :class="validating.isNumber ?'hidden':''"  class="text-xs ml-5 text-red-600">harap masukan nomor * </p>
                     </div>
                    <div class="w-full ml-2">
                        <p class="text-white mb-2 pl-3 font-bold">Instansi</p>
                <input
                v-model="register.instansi"
                  class="text-slate-500 w-full  rounded-full px-5 text-lg py-2 placeholder:text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="huruf kecil"
                />
                    </div>
                 </div>
                 <p class="text-white mb-2 pl-3 font-bold mt-5">Password</p>
                 <input
                v-model="register.password"
                  class="text-slate-500 w-full  rounded-full px-5 text-lg py-2 placeholder:text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type="password"
                  placeholder="Password"
                />
                <button v-on:click="handleRegisterclick()" class="w-full hover:bg-blue-800 hover:text-yellow-400 rounded-full bg-blue-600 px-5 py-3 mt-12 text-white font-bold">Login</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'register',
    data(){
        return {
            register: {
                fullname:'',
                email:'',
                password:'',
                phone:'',
                instansi:''
            },
            validating:{
              isEmail:true,
              isNumber:true
            },
            message:'',
            success:false,
            hidden:true
        }
    },
    methods: {
      isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
},
       isNumber() {

        if(!this.isNumeric(this.register.phone)) {
          this.validating.isNumber = false
        }else {
          this.validating.isNumber = true
        }
       },
        async isEmail() {
          let vald =await  this.register.email.includes('@') ? true :false
          if(!vald) {
            this.validating.isEmail = false
          } else {
            this.validating.isEmail = true
          }
        },
        handleRegisterclick() {
        let baseURL = import.meta.env.VITE_API_URL
        let endpoint = import.meta.env.VITE_API_REGISTER
        console.log(endpoint)
        let data =  this.register
        console.log(data)
        fetch(baseURL+endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((res) =>{
             if(res.status === "OK") {
                this.message = "Registrasi Berhasil Silahkan Login"
                this.hidden = false
                this.success = true
                setTimeout(()=> {this.hidden =true },5000)

             } else {
                this.message = "Registrasi Gagal"
                this.hidden = false
                this.success = false
                setTimeout(()=> {this.hidden =true },5000)
             }
          }) 
         
      }

        }

    }

</script>