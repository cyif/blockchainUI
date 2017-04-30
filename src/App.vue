// layout
<template>
  <div>
    <div style="background-color: white; min-height: 800px; padding: 10px">
      <div class="layout">
        <div class="layout-nav">
          <c-nav></c-nav>
        </div>
        <div class="layout-content">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">首页</Breadcrumb-item>
              <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          <hr style="margin-bottom: 20px"/>
          <span style="">2017 &copy; Yushu Wang</span>
        </div>
      </div>
      <Back-top></Back-top>
    </div>
  </div>
</template>

<script>
  import Submenu from "../node_modules/iview/src/components/menu/submenu";
  import ICol from '../node_modules/iview/src/components/grid/col';
  import cNav from './components/layout/nav';
  import cSearchTop from './components/layout/searchTop.vue';

  export default {
    components: {
        Submenu, ICol, cNav, cSearchTop
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
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 800px;
    margin: 10px;
    /*overflow: scroll;*/
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 5px;
    color: #9ea7b4;
    font-size: 20px;
    font-weight: 300;
    font-family: dancing;
    min-height: 60px;
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
    font-family: shadows, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
