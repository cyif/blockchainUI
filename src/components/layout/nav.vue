<template>
  <Row class="nav">
    <i-col span="14">
      <Menu mode="horizontal" theme="light" style="background-color: transparent; font-size: 16px; font-weight: bold; color:#3a4a4d" width="auto">
        <div class="layout-logo">
          <c-logo></c-logo>
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="university"></Icon>
            原理
          </template>
          <router-link to="/docs">
            <Menu-item name="1-1" font-size="15px">原理</Menu-item>
          </router-link>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            图表
          </template>
          <router-link to="/overview">
            <Menu-item name="2-1" font-size="15px">总览</Menu-item>
          </router-link>
          <router-link to="/charts">
            <Menu-item name="2-2" font-size="15px">可视化</Menu-item>
          </router-link>
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
          <input type="text" placeholder="输入块号、地址、相关Hash值..." v-model="inputdata" required>
          <button type="submit" @click="goToResult">查询</button>
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
        },
        data () {
            return {
                inputdata: ''
            }
        },
        methods : {
            goToResult() {
                console.log(this.inputdata);
                let _self = this;
                _self.$Loading.start();
                _self.$webApi.getSearchResult(_self.inputdata)
                    .then(res => {
                        let type = res.data.data.type;
                        let id;
                        switch (type) {
                            case 'block':
                                id = res.data.data.nb;
                                break;
                            case 'tx':
                                id = res.data.data.tx;
                                type = "txs";
                                break;
                            case 'address':
                                id = res.data.data.address;
                                break;
                            default:
                                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
                                _self.$Loading.finish();
                                return;
                        }
                        _self.$router.push({
                            path: '/' + type + '/info/' + id
                        });
                    })
                    .catch(err => {
                        _self.$Loading.error();
                    });
            }
        }
  }
</script>

<style scoped>
  Menu-item{
    font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
    color: #3a4a4d;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
  }
  Submenu{
    color: #3a4a4d;
    background-color: #E5EDF5;
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

    font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;

    font-size: 25px;

    border: 0;

    background: #f1f2f0;

    border-radius: 3px 0 0 3px;
    border: #f1f2f0;

  }

  .form-wrapper input:focus {

    outline: 0;

    background: #f1f2f0;

  }

  .form-wrapper input::-webkit-input-placeholder {

    color: #35342f;

    font-weight: normal;

    font-size: 18px;


  }

  .form-wrapper input:-moz-placeholder {

    color: ;

    font-weight: normal;

    font-size: 18px;

  }

  .form-wrapper input:-ms-input-placeholder {

    color: #35342f;

    font-weight: normal;

    font-size: 18px;

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

    font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;

    font-size: 18px;

    font-weight: 500;

    color: #fff;

    text-transform: uppercase;

    background: #37bbe4;

    border-radius: 0 3px 3px 0;


  }

  .form-wrapper button:hover{

    background: #1784cd;

  }

  .form-wrapper button:active,

  .form-wrapper button:focus{

    background: #37bbe4;

    outline: 0;

  }

  .form-wrapper button:before { /* left arrow */

    content: '';

    position: absolute;

    border-width: 8px 8px 8px 0;

    border-style: solid solid solid none;

    border-color: transparent #37bbe4 transparent;

    top: 12px;

    left: -6px;

  }

  .form-wrapper button:hover:before{

    border-right-color: #37bbe4;

  }

  .form-wrapper button:focus:before,

  .form-wrapper button:active:before{

    border-right-color: #37bbe4;

  }

  .form-wrapper button::-moz-focus-inner { /* remove extra button spacing for Mozilla Firefox */

    border: 0;

    padding: 0;

  }
</style>