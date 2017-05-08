//addresses that were in most txs


// addresses with max coins

<template>
    <Card :bordered="false"  class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Addresses that were in most txs</h1>
            <h2>账户交易笔数排名</h2>
        </div>
        <row class = "block">
            <div class = "rank">
                <Table stripe
                       :columns="columns"
                       :data="data"
                       :show-header="showHeader"
                       @on-row-dblclick="goToAddressInfo"></Table>
            </div>
        </row>
    </Card>
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
                        title: '地址（账户）',
                        width: 600,
                        key: 'address',
                        align: 'center',
                        className: 'demo-table-info-address',
                        render (row, column, index) {
                            return `<a href="#/address/info/${row.address}">${row.address}</a>`;
                        }
                    },
                    {
                        title: '交易笔数',
                        key: 'tx_nb',
                        align: 'center',
                        className: 'demo-table-info-txs'
                    }
                ]
            }
        },
        methods : {
            goToAddressInfo: function(row) {
                this.$router.push({
                    path: '/address/info/' + row.address
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

