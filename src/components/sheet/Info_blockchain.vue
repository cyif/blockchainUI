<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>BlockChain</h1>
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
                        attribute: '区块总数',
                        key: 477823
                    },
                    {
                        attribute: '创世时间',
                        key: '2009-1-9 10：54：25',
                    },
                    {
                        attribute: '创世块',
                        key: 'Genesis',
                    },
                    {
                        attribute: '所有交易数总计',
                        key:2910290192
                    },
                    {
                        attribute: '所有可用地址总计',
                        key: '12898312'
                    },
                    {
                        attribute: '第一个获得比特币的地址',
                        key: '12898312'
                    },
                    {
                        attribute: '第一笔往来交易',
                        key: '2u81jshdu2h891wjlbxwue38'
                    },
                    {
                        attribute: '流通中的比特币总数',
                        key: '12898312'
                    },
                    {
                        attribute: '当前区块比特币发行量',
                        key: '12898312'
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
