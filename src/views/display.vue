// 改成原理版面
<template>
  <div class="layout">
    <div class="nav">
      <c-nav></c-nav>
    </div>
    <div class="title">
      <p style="font-size: 100px">My Graduation Project</p>
      <p style="font-size: 30px">Yushu Wang</p>
    </div>
    <div style="text-align: center; margin: 0 auto; border-color: #F5F5F5; vertical-align: bottom">
      <p style="font-size: 30px; font-family: shadows; font-weight: bold;">SHOW BEGIN</p>
    </div>
  </div>
</template>
<script>
  import cNav from './components/layout/nav';
  export default {
    name: "display",
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        msg:"show"
      }
    },
    components: { cNav
    }
  }
</script>
<style scoped>
  template{
  }
  .layout{
    border-bottom: 2px solid #d7dde4;
    position: relative;
    border-radius: 8px;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
    min-height: 700px;
  }
  .nav{
    margin: 2px;
    padding: 1px;
    height: 60px;
  }
  .title{
    background-color: #f7f8fa;
    font-family: dancing;
    padding: 5%;
    margin-top: 3%;
    margin-bottom: 5%;
    color: #000;
  }


</style>
<style>
  @font-face {
    font-family: 'dancing';
    src: url('font/dancing.woff2') format('woff2'),
    url('font/dancing.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }




  @font-face {
    font-family: 'shadows';
    src: url('font/shadows.woff2') format('woff2'),
    url('font/shadows.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }




  @font-face {
    font-family: 'flamenco';
    src: url('font/flamenco.woff2') format('woff2'),
    url('font/flamenco.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }
</style>
