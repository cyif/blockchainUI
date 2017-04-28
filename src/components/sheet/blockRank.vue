<template>
  <div class = 'sheet_canvas'>
    <div class = 'title'>
      <br>
      <h1>Block Top 10</h1>
    </div>
    <row class = "block">
      <div class = "rank">
        <Table stripe
               :columns="columns1"
               :data="data1"
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
        columns1: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '块号',
            key: 'height',
            width: 150,
            align: 'center',
            className: 'demo-table-info-height'
          },
          {
            title: '创建时间',
            key: 'time',
            align: 'center',
            className: 'demo-table-info-time'
          },
          {
            title: '交易单数',
            key: 'transactions',
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
            key: 'days',
            align: 'center',
            className: 'demo-table-info-days'
          }
        ],
        data1: [
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          },
          {
            height: '435687',
            time: '20170319',
            transactions: '2809',
            fee: '1.5634342',
            size: '121.231',
            align: 'center',
            days: '212012.13'
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .sheet_canvas {
    margin-left: 5px;
    margin-right: 5px;
    background: #f5f7f9;
    border-radius: 8px;
  }
  .title{
    margin-left: 35px;
    font-size: medium;
    font-weight: 500;
    text-align: left;
    vertical-align: bottom;
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
