<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Yoonsang>
      <template v-slot:header={yoonsangVar}>
        <h2>Header Slot {{yoonsangVar}}</h2>
      </template>
      <template #default>
        <!-- v-slot #으로 단축가능 -->
        <h2>Default Slot</h2>
      </template>
    </Yoonsang>
  </div>
</template>

<script>
import Yoonsang from '../components/yoonsang.vue'
export default {
components:{
  Yoonsang
}
}
</script>

<style>

</style>
