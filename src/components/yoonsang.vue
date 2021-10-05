<template>
  <div>
      <p>{{name}}</p>
      <button @click="updateName">Update</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:'Yoonsang Yang',
        }
    },
    methods:{
        updateName(){
            this.name = "Yang Yoonsang's Vue Project."
        }
    }
}
</script>

<style scoped>
    p {
        font-size: 50px;
        color: blue;
    }
</style>