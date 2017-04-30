//Unspent ransactions with highest amounts
// 完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <p style="font-family: flamenco; font-size: 40px" >Unspent transactions with highest amounts</p>
            <p style="font-family: 'Hiragino Sans GB', 'Microsoft YaHei'; font-size: 20px" >比特币长期持有排名</p>
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
        props: ['data'],
        data () {
            return {
                showHeader: true,
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        title: 'No',
                        align: 'center',
                    },
                    {
                        title: '交易',
                        width: 600,
                        key: 'tx',
                        align: 'center',
                        className: 'demo-table-info-tx',
                        render (row, column, index) {
                            return `<a href="#/txs/info/${row.tx}">${row.tx}</a>`;
                        }
                    },
                    {
                        title: '收款账户',
                        key: 'address',
                        align: 'center',
                        ellipsis: true,
                        className: 'demo-table-info-address',
                        render (row, column, index) {
                            return `<a href="#/address/info/${row.address}">${row.address}</a>`;
                        }
                    },
                    {
                        title: '金额',
                        key: 'amount',
                        align: 'center',
                        className: 'demo-table-info-amount'
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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
