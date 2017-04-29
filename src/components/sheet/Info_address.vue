// 该地址的第一笔交易数据
// 该地址最近的一笔交易数据
// 看补充否
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>Address</h1>
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
                        attribute: '哈希值',
                        key: 477823
                    },
                    {
                        attribute: '余额',
                        key: '12125',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '收入总计',
                        key: '1827337813',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '交易笔数',
                        key:2910290192
                    },
                    {
                        attribute: '未确认交易金额',
                        key: '12898312'
                    }
                ]
            }
        },
        mounted() {
            var _self = this;

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
