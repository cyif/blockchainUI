// layout
<template>
  <div style="background-color: white; min-height: 800px; padding: 10px">
    <div class="layout">
      <div class="layout-nav">
        <c-nav></c-nav>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view></router-view>
        </div>
      </div>
      <div class="layout-copy">
        2017 &copy; Yushu Wang
      </div>
    </div>
  </div>
</template>

<script>
  import Submenu from "../node_modules/iview/src/components/menu/submenu";
  import ICol from '../node_modules/iview/src/components/grid/col';
  import cNav from './components/layout/nav';
  export default {
    components: {
        Submenu, ICol, cNav
    }
  }
</script>

<style scoped>
  .layout{
    background: #fff;
    width: 100%;
  }
  .layout-nav{
    width: 100%;
    margin: 0;
  }
  .layout-content{
    min-height: 800px;
    margin: 10px;
    overflow: scroll;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 5px 0 5px;
    color: #9ea7b4;
    font-weight: bold;
  }
</style>
<style>
  .graph_info {
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    padding-top: 10%;
    padding-bottom: 10%;
  }
  template{
    color: #3a4a4d;
  }
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
