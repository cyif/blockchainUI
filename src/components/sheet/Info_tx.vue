// 格式完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>Transaction</h1>
        </div>
        <row class = "block">
            <div class = "table">
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
                showHeader: false,
                columns: [
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 180,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-key'
                    }
                ],

                data: [
                    {
                        attribute: '哈希值',
                        name: 'hash'
                    },
                    {
                        attribute: '时间',
                        name: 'time_utc'
                    },
//                    {
//                        attribute: '发行比特币',
//                        key: 'none',  // 根据情况判断的
//                    },
                    {
                        attribute: 'outgoing txs总计',
                        name: '',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '交易额',
                        key: '12898312'
                    },
                    {
                        attribute: '确认数',
                        name: 'confirmations'
                    },
                    {
                        attribute: '小费',
                        name: 'fee'
                    },
                    {
                        attribute: '币天',
                        name: 'days_destroyed'
                    },
                    {
                        attribute: '所属块',
                        name: 'block'
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
