<template>
  <div>
    <h1>This is Home page</h1>
   <Yoonsang/>
  </div>
</template>

<script>
import Yoonsang from '../components/yoonsang.vue';
export default{
  components:{
    Yoonsang
  }
  }

</script>

<style scoped>
  h1 {
    color:red;
  }
  
</style>