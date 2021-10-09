<template>
<div>
    <label for="">Name</label>
    <input 
    type="text" 
    :value="name"
    style="padding: 30px; border: 2px solid green;"
    @input="$emit('update-name',$event)"
    >
</div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            require:true,
        }
    }
}
</script>

<style>

</style>