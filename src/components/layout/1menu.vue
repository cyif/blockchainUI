<template>
  <div style="background-color: #30c9e8;">
    <div class="layout-logo-left"></div>
    <Affix :offset-top="20">
      <span class="demo-affix" style="background-color: transparent">
        <Menu width="auto" style="background-color: transparent ">
      <router-link to="/">
        <Menu-item name="0">
          <Icon type="earth"></Icon>
          首页
        </Menu-item>
      </router-link>
      <Menu-item name="1">
        <Icon type="social-bitcoin"></Icon>
        比特币
      </Menu-item>
      <Menu-item name="2">
        <Icon type="ios-albums"></Icon>
        区块链
      </Menu-item>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-browsers"></Icon>
          区块
        </template>
        <Menu-item name="3-1">排行榜单</Menu-item>
        <router-link to="/block">
          <Menu-item name="3-2">详细信息</Menu-item>
        </router-link>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-people"></Icon>
          交易
        </template>
        <Menu-item name="4-1">排行榜单</Menu-item>
        <Menu-item name="4-2">详细信息</Menu-item>
      </Submenu>
      <Submenu name="5">
        <template slot="title">
          <Icon type="map"></Icon>
          地址
        </template>
        <Menu-item name="5-1">排行榜单</Menu-item>
        <Menu-item name="5-2">详细信息</Menu-item>
      </Submenu>
    </Menu>
      </span>
    </Affix>
  </div>
</template>
<script>
  import ICol from "../../../node_modules/iview/src/components/grid/col";
  export default {
    components: {ICol},
    name: 'menu',
    data () {
      return {

      }
    }
  }
</script>


<style scoped>
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #30c9e8;
    border-radius: 3px;
  }

</style>
