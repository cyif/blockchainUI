<template>
  <Row>
    <i-col span="14">
      <Menu mode="horizontal" theme="light" style="background-color: white; font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 16px; font-weight: bold; color:#3a4a4d" min-width="800px">
        <div class="layout-logo">
          <c-logo></c-logo>
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
          <router-link to="/blockchain">
            <Menu-item name="3-1" font-size="15px">区块链</Menu-item>
          </router-link>
          <router-link to="/block">
            <Menu-item name="3-2" font-size="15px">区块</Menu-item>
          </router-link>
          <router-link to="/txs">
            <Menu-item name="3-3" font-size="15px">交易</Menu-item>
          </router-link>
          <router-link to="/address">
            <Menu-item name="3-4" font-size="15px">地址</Menu-item>
          </router-link>
        </Submenu>
      </Menu>
    </i-col>
    <i-col span="10">
      <div class="search">
        <form class="cf form-wrapper">

          <input type="text" placeholder="Search here" required>

          <button type="submit">查询</button>

        </form>
      </div>
      <hr style="margin-top: 1.5px; color: #3a4a4d"/>
    </i-col>
  </Row>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import cLogo from './logo.vue'
  export default{
        components: {
            ICol,
            cLogo
        }
  }
</script>

<style scoped>
  Menu-item{
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    color: #3a4a4d;
    font-size: 16px;
  }
  Submenu{
    color: #3a4a4d;
  }
  .search{
    max-height: 60px;
    max-width: 600px;
  }
</style>


<style scoped>
  .cf:before,.cf:after{
    content: '';
    display: table;
  }
  .cf:after{
    clear: both;
  }
  .cf{
    zoom: 1;
  }

  .form-wrapper {
    height: 100%;

    max-width: 100%;

    padding: 8px 4px 4px 4px;

    background: transparent;

    border-radius: 10px;

  }

  /* Form text input */

  .form-wrapper input {

    width: 90%;

    height: 45px;

    padding: 3px 3px;

    float: left;

    font: bold 25px 'lucida sans', 'trebuchet MS', 'Tahoma';

    border: 0;

    background: #DDE2E2;

    border-radius: 3px 0 0 3px;
    border: #1784cd;

  }

  .form-wrapper input:focus {

    outline: 0;

    background: #fff;

  }

  .form-wrapper input::-webkit-input-placeholder {

    color: #999;

    font-weight: normal;

    font-style: italic;

  }

  .form-wrapper input:-moz-placeholder {

    color: #999;

    font-weight: normal;

    font-style: italic;

  }

  .form-wrapper input:-ms-input-placeholder {

    color: #999;

    font-weight: normal;

    font-style: italic;

  }

  /* Form submit button */

  .form-wrapper button {

    overflow: visible;

    position: relative;

    float: right;

    border: 0;

    padding: 0;

    cursor: pointer;

    height: 45px;

    width: 10%;

    font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';

    color: #fff;

    text-transform: uppercase;

    background: #1784cd;

    border-radius: 0 3px 3px 0;


  }

  .form-wrapper button:hover{

    background: #1784cd;

  }

  .form-wrapper button:active,

  .form-wrapper button:focus{

    background: #1784cd;

    outline: 0;

  }

  .form-wrapper button:before { /* left arrow */

    content: '';

    position: absolute;

    border-width: 8px 8px 8px 0;

    border-style: solid solid solid none;

    border-color: transparent #1784cd transparent;

    top: 12px;

    left: -6px;

  }

  .form-wrapper button:hover:before{

    border-right-color: #1784cd;

  }

  .form-wrapper button:focus:before,

  .form-wrapper button:active:before{

    border-right-color: #1784cd;

  }

  .form-wrapper button::-moz-focus-inner { /* remove extra button spacing for Mozilla Firefox */

    border: 0;

    padding: 0;

  }
</style>