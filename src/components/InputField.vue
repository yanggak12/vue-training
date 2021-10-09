<template>
<div>
    <label for="">Name</label>
    <input 
    type="text" 
    :value="value"
    style="padding: 30px; border: 2px solid green;"
    @input="$emit('input',$event.target.value)"
    >
</div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            require:true,
        }
    }
}
</script>

<style>

</style>