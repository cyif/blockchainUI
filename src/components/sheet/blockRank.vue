// 用于首页展示最近的比特币
<template>
  <Card :bordered="false" class = 'sheet_canvas'>
    <div class = 'title'>
      <br>
      <h1 style="font-family: istokbold; font-weight: bold">Last Bitcoin Blocks</h1>
      <h2>最新生成的区块</h2>
    </div>
    <row class = "block">
      <div class = "rank">
        <Table stripe
               :columns="columns"
               :data="data"
               :show-header="showHeader"></Table>
      </div>
    </row>
  </Card>
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
    background: #f1f2f0;
    border-radius: 8px;
    font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
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
