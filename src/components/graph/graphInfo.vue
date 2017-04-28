<template>
  <div class="graphInfo">
    <p>Bitcoin index</p>
    <p v-model="index"> {{index}}</p>
  </div>
</template>

<script>
  var data = {
    index: '符号+数值'
  }

  export default {
    name: "info",
    data(){
        return data;
    },
  }
</script>

<style scoped>
  .graphInfo{
    border: groove;
    border-color: #30c9e8;
    font-size: 50px;
    align-self: center;
    overflow: hidden;
  }
</style>
