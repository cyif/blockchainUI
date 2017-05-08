// layout
<template>
  <div>
    <div style="background-color: #e1e0dd; min-height: 800px; padding: 10px">
      <div class="layout">
        <div class="layout-nav">
          <c-nav></c-nav>
        </div>
        <div class="layout-content">
          <div class="layout-breadcrumb" style="margin-left: 40px; font-size: 18px">
            <c-breadcrumb :url="url"></c-breadcrumb>
          </div>
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          <span>2017 &copy; Yushu Wang</span>
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
  import cBreadcrumb from './components/layout/myBreadcrumb.vue'

  export default {
      computed: {
          url: function() {
              return this.$route.path;
          }
      },
      components: {
          Submenu, ICol, cNav, cSearchTop, cBreadcrumb
      }
  }
</script>

<style scoped>
  .layout{
    background: #e1e0dd;
    width: 100%;
    color: #35342f;
  }
  .layout-nav{
    width: 100%;
    margin-bottom: 10px;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 800px;
    margin: 10px;
    /*overflow: scroll;*/
    background: #e1e0dd;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding-top:17px;
    color: #424242;
    font-size: 25px;
    font-weight: 800;
    font-family: flamenco;
    min-height: 60px;
    background: transparent;
    top:30%;
  }
</style>
<style>
  .ivu-table td .demo-table-info-attribute {
    font-weight: bold;
    font-size: 15px;
  }
  .ivu-table td.demo-table-info-key {
    font-size: 15px;
  }
  .ivu-table td,th{
    font-size: 15px;
  }
  template{
    color: #3a4a4d;
    font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
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

  @font-face {
    font-family: 'istokweb';
    src: url('font/istokweb.woff2') format('woff2'),
    url('font/istokweb.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'istokbold';
    src: url('font/istokbold.woff2') format('woff2'),
    url('font/istokbold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'kreon';
    src: url('font/kreon.woff2') format('woff2'),
    url('font/kreon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'sacra';
    src: url('font/sacra.woff2') format('woff2'),
    url('font/sacra.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'walter';
    src: url('font/walter.woff2') format('woff2'),
    url('font/walter.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'codrop';
    src: url('font/codrop.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

</style>
