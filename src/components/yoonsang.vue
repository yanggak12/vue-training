<template>
  <div>
      <!-- html 소스를 추가하고 싶을때 슬롯을 쓴다. -->
      <h1>{{title}}</h1>
      <slot></slot>
      <p>{{name}}</p>
      <button @click="updateName">Update</button>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String, // string 아니면 오류메시지!
            // required:true, // title 안보내면 오류메시지!
            default:'Default Title!!'
        }
    },
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