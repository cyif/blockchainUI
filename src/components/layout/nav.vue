<template>
  <Menu mode="horizontal" theme="light" style="background-color: white; font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 18px; font-weight: bold; color:#3a4a4d" min-width="800px" accordion>
    <div class="layout-logo">
        <!--<Row>-->
        <!--<i-col span="8"></i-col>-->
        <!--<i-col span="16"></i-col>-->
        <!--</Row>-->
        <img src="../../image/logo.png" width="45px" height="45px">
        <img src="../../image/title.png" height="45px">
      </div>
    <Submenu name="1">
      <template slot="title">
        <Icon type="university"></Icon>
        原理
      </template>
      <Menu-item name="1-1" font-size="15px">原理</Menu-item>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        图表
      </template>
      <Menu-item name="2-1" font-size="15px">总览</Menu-item>
      <Menu-item name="2-2" font-size="15px">可视化</Menu-item>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        细则
      </template>
      <Menu-item name="3-1" font-size="15px">区块链</Menu-item>
      <Menu-item name="3-2" font-size="15px">区块</Menu-item>
      <Menu-item name="3-3" font-size="15px">交易</Menu-item>
      <Menu-item name="3-4" font-size="15px">地址</Menu-item>
    </Submenu>
  </Menu>
</template>

<style scoped>
  .layout-logo{
    width: 280px;
    height: 50px;
    background: white;
    border-radius: 8px;
    float: left;
    position: relative;
    top: 5px;
    left: 20px;
    margin-right: 20px;
    padding: 5px;
  }
  Menu-item{
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    color: #3a4a4d;
    font-size: 18px;
  }
  Submenu{
    color: #3a4a4d;
  }
</style>
