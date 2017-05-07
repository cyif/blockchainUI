// 完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Transactions with highest fees</h1>
            <h2>交易支付小费排名</h2>
        </div>
        <row class = "block">
            <div class = "rank">
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
                        title: '小费',
                        key: 'fee',
                        align: 'center',
                        className: 'demo-table-info-fee'
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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
