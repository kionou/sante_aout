<template>

<div>
  <ComponentNavbarConnect/>
  <ComponentContainer :users="users"/>


</div>

</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentContainer from '../components/ComponentContainer.vue';
import axios from 'axios'


export default {
    name:"CarnetView",
    props:['id'],
    components:{
        ComponentNavbarConnect,
        ComponentContainer
    },
    data() {
      return {
        users:''
       
      }
    },
    created(){
      const auth = localStorage.getItem('patient')
      console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }
    },
     async mounted(){
      const auth = localStorage.getItem('patient')

        if (auth) {
           console.log("sfsdfg",auth);
          axios.get('http://localhost:5000/users/detailuser',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
             console.log('response',response);
             this.users= response.data.user
         })
        // const response = await fetch("http://localhost:5000/users/detailuser",{ headers: {patient : localStorage.getItem('patient')}});
        // const data = await response.json();
        // console.log("dsFdsq",JSON.parse(data));
          
        }else{
          console.log('nono');
        }
      
    }
   
  
}
</script>

<style>

</style>