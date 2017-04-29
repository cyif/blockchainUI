<template>
  <div class="layout">
    <div class="nav"> // top + side   no change
      <c-nav></c-nav>
    </div>
    <div class="layout-main">
      <Row >
        <i-col :span="spanLeft" class="layout-menu-left">
          <c-menu></c-menu>
        </i-col>
        <i-col :span="spanRight">
          <div class="layout-content">   // 重点
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

  </div>
</template>
<script>
  import ICol from '../node_modules/iview/src/components/grid/col';
  import cNav from './components/layout/nav';
  import cMenu from './components/layout/menu';
  import cHeader from './components/layout/header';
  export default {
    name: "app",
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
      }
    },
    components: {
      ICol, cNav, cMenu
    }
  }
</script>
<style scoped>
  template{
  }
  .layout{
    border-bottom: 2px solid #d7dde4;
    background-color: #30c9e8;
    position: relative;
    border-radius: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    min-height: 700px;
    margin: 30px;
  }
  .nav{
    margin: 2px;
    padding: 1px;
    height: 60px;
  }
  .layout-main{
    padding: 3%;
  }
  .layout-breadcrumb{
    padding: 10px 10px 0;
    border-radius: 8px;
  }
  .layout-content{
    min-height: 200px;
    margin: 10px;
    overflow: scroll;
    background: #fff;
    border-radius: 8px;
  }
  .layout-content-main{
    padding: 10px;
    min-height: 500px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #fff;
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
