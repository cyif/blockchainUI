// layout
<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            原理
          </template>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            图表
            <Menu-item>General</Menu-item>
            <Menu-item>Special</Menu-item>
          </template>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="more"></Icon>
            图表
            <Menu-item>区块链</Menu-item>
            <Menu-item>区块</Menu-item>
            <Menu-item>交易</Menu-item>
            <Menu-item>地址</Menu-item>
          </template>
        </Submenu>
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <i-col span="2" style="background-color: white">
        </i-col>
        <i-col span="22">
          <div class="layout-content-main">内容区域</div>
        </i-col>
      </Row>
    </div>
    <div class="layout-copy">
      2017 &copy; Yushu Wang
    </div>
  </div>
</template>
<script>
  import Submenu from "../../../node_modules/iview/src/components/menu/submenu";
  export default {
    components: {Submenu}

  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: scroll;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
