<template>
  <div class = 'sheet_canvas'>
    <div class = 'title'>
      <br>
      <h1>Block</h1>
    </div>
    <row class = "block">
      <div class = "table">
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
        showHeader: false,
        columns1: [
          {
            title: '属性',
            key: 'attribute',
            width: 150,
            className: 'demo-table-info-attribute'
          },
          {
            title: '值',
            key: 'key',
            className: 'demo-table-info-key'
          }
        ],

        data1: [
          {
            attribute: '块号',
            key: '462986'
          },
          {
            attribute: '哈希值',
            key: '0000000000000000014ed96dd764b2940782cb167bc5632ccd4bc5ab368c2d16'
          },
          {
            attribute: '创建时间',
            key: '2017-04-22T08:56:04Z'
          },
          {
            attribute: '交易单数',
            key: '2370'
          },
          {
            attribute: '首笔交易单',
            key: 'ba8be6253e7f60bb01872f4a2489b5d54f63ebe3160ba8ecaa6c5edfa8c101ce'
          },
          {
            attribute: '比特币流',
            key: '6582.45437875'
          },
          {
            attribute: '手续费',
            key: '1.46334693'
          },
          {
            attribute: '币天',
            key: '6837.64'
          },
          {
            attribute: '开矿难度',
            key: '520808749422.14'
          },
          {
            attribute: '块大小',
            key: '998081'
          },
          {
            attribute: '版本号',
            key: '127'
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
    min-height: 350px;
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
  .table {
    height : 100%;
    margin : 10px;
    padding-bottom: 20px;
  }
</style>

<style>
  .ivu-table td.demo-table-info-attribute {
    font-weight: bold;
    font-size: 15px;
  }
  .ivu-table td.demo-table-info-key {
    font-size: 15px;
  }
</style>
