<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <c-menu></c-menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <c-header></c-header>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2017 &copy; Yushu Wang
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import ICol from '../node_modules/iview/src/components/grid/col';
  import cNav from './components/layout/nav';
  import cMenu from './components/layout/menu';
  import cHeader from './components/layout/header';

  export default {
    name: "home",
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    components: {
      ICol, cNav, cMenu, cHeader
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 8px;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
    border-radius: 8px;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: scroll;
    background: #fff;
    border-radius: 8px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #fff;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>

<style>


  @font-face {
    font-family: 'dancing_scriptbold';
    src: url('font/dancing.woff2') format('woff2'),
    url('font/dancing.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }




  @font-face {
    font-family: 'shadows_into_lightregular';
    src: url('font/shadows.woff2') format('woff2'),
    url('font/shadows.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }




  @font-face {
    font-family: 'flamencoregular';
    src: url('font/flamenco.woff2') format('woff2'),
    url('font/flamenco.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }
</style>
