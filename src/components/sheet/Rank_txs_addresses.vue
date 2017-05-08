
<template>
    <Card :bordered="false"  class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Transactions with most addresses</h1>
            <h2>交易动用账户数排名</h2>
        </div>
        <row class = "block">
            <div class = "rank">
                <Table stripe
                       :context="context"
                       :columns="columns"
                       :data="data"
                       :show-header="showHeader"></Table>
            </div>
        </row>
    </Card>
</template>

<script>
    export default {
        props: ['data'],
        data () {
            return {
                context : this,
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
                        key: 'tx',
                        width: 600,
                        align: 'center',
                        className: 'demo-table-info-tx',
                        render (row, column, index) {
                            return `<a href="#/txs/info/${row.tx}">${row.tx}</a>`;
                        }
                    },
                    {
                        title: '动用账户数目',
                        key: 'nb_addresses',
                        align: 'center',
                        className: 'demo-table-info-sum'
                    }
                ]
            }
        },
        methods: {
            goToTxsInfo: function (txsId) {
                this.$router.push({
                    path: "/txs/info/" + txsId
                });
            }
        }
    }
</script>

<style scoped>
    .sheet_canvas {
        margin: 10px;
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
