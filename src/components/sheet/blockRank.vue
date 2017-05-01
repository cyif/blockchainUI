// 用于首页展示最近的比特币
<template>
  <div class = 'sheet_canvas'>
    <div class = 'title'>
      <br>
      <p style="font-family: flamenco; font-size: 40px" >Last Bitcoin Blocks</p>
    </div>
    <row class = "block">
      <div class = "rank" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif">
        <Table stripe
               :columns="columns"
               :data="data"
               :show-header="showHeader"></Table>
      </div>
    </row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          showHeader: true,
          columns: [
            {
              title: '块号',
              key: 'nb',
              width: 150,
              align: 'center',
              className: 'demo-table-info-height'
            },
            {
              title: '创建时间',
              key: 'time_utc',
              align: 'center',
              className: 'demo-table-info-time'
            },
            {
              title: '交易单数',
              key: 'nb_txs',
              align: 'center',
              className: 'demo-table-info-transactions'
            },
            {
              title: '手续费',
              key: 'fee',
              align: 'center',
              className: 'demo-table-info-fee'
            },
            {
              title: '块大小(KB)',
              key: 'size',
              align: 'center',
              className: 'demo-table-info-size'
            },
            {
              title: '币天',
              key: 'days_destroyed',
              align: 'center',
              className: 'demo-table-info-days'
            }
          ],
          data: []
      }
    },
    mounted () {
        let _self = this;
        _self.$Loading.start();
        _self.$webApi.getLatestBlock()
            .then(res => {
                let rankData = res.data.data;
                _self.data = rankData;
                _self.$Loading.finish();
            })
            .catch(err => {
                console.log(err);
                _self.$Loading.error();
            });
    }
  }
</script>


<style scoped>
  .sheet_canvas {
    margin-left: 5px;
    margin-right: 5px;
    background: transparent;
    border-radius: 8px;
  }
  .title{
    margin-left: 35px;
    font-size: medium;
    font-weight: 800;
    text-align: left;
    vertical-align: bottom;
    margin-bottom: 5px;
  }
  .block {
    margin: 10px;
  }
  .rank {
    height : 100%;
    margin : 10px;
    padding-bottom: 20px;
  }
</style>
<style>
  .ivu-table .demo-table-info-column1 {
    font-weight: bold;
    font-size: 15px;
  }

  .ivu-table .demo-table-info-column2 {
    font-size: 15px;
  }

  .ivu-table td,th{
    font-size: 15px;
  }
</style>
