<template>
  <div>
    <h1>This is Home page</h1>
   <form action="">
     <InputField v-model="name"/>
     <br><button>submit</button>
   </form>
   {{name}}
  </div>
</template>

<script>
import InputField from '../components/InputField.vue';

export default{
  data(){
    return{
      name:''
    }
  },
  components:{
    InputField
  },
  }

</script>

<style scoped>
  h1 {
    color:red;
  }
  
</style>