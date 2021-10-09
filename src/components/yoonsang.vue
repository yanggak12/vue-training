<template>
  <div>
      <p>header</p>
      <slot name="header" yoonsangVar="slotVar"></slot>
      <p>body</p>
      <slot></slot>
      <p>footer</p>
      <slot></slot>
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
            slotVar:'Oh Good~!'
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