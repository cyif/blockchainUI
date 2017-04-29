// 格式完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>Transaction</h1>
        </div>
        <hr/>
        <div class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="columns1"
                       :data="data1"
                       :show-header="showHeader"></Table>
            </div>
            <hr/>
            <div>
                <table class="whoTowho" style="box-shadow: #30c9e8" :columns="columns2"
                       :data="data2"
                       :show-header="showHeader">
                </table>
            </div>
        </div>
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
                        attribute: '时间',
                        key: '2009-1-9 10：54：25',
                    },
                    {
                        attribute: '发行比特币',
                        key: 'none',  // 根据情况判断的
                    },
                    {
                        attribute: 'outgoing txs总计',
                        key:2910290192,
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '交易额',
                        key: '12898312'
                    },
                    {
                        attribute: '确认数',
                        key: '12898312'
                    },
                    {
                        attribute: '币天',
                        key: '2u81jshdu2h891wjlbxwue38'
                    },
                    {
                        attribute: '所属块',
                        key: '12898312'
                    }
                ],

                columns2: [
                    {
                        title: '地址A',
                        key: 'address1',
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'value1',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '-{value}'
                    },
                    {
                        title: '地址B',
                        key: 'address2',
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'value2',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '+{value}'
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
