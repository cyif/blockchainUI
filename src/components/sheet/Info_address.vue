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
                        attribute: '哈希值',
                        key: '0000000000000000014ed96dd764b2940782cb167bc5632ccd4bc5ab368c2d16'
                    },
                    {
                        attribute: '余额',
                        key: '23283982.2',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '收入总计',
                        key: '23283982.2',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '交易次数',
                        key:30
                    },
                    {
                        attribute: '未确认交易金额',
                        key: '6582.45437875'
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
