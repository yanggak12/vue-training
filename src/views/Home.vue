<template>
  <div>
    <h1>This is Home page</h1>
   <form action="">
     <InputField v-model="name"/>
     <br><button @click="update">submit</button>
   </form>
   {{name}}
  </div>
</template>

<script>
import InputField from '../components/InputField.vue';

export default{
  data(){
    return{
      name:'Yoonsang'
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this.name)
  },
  created(){
    console.log('created',this.name)
  },
  beforeMount(){
    alert('beforeMount')
  },
  mounted(){
    alert('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate',this.name)
  },
  updated(){
    alert('updated')
  },
  beforeDestroy(){
    alert('destroyed')
  },
  components:{
    InputField
  },
  methods:{
    update(){
      this.name = 'Hello!'
    }
  }
  }

</script>

<style scoped>
  h1 {
    color:red;
  }
  
</style>