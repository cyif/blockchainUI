// addresses with max coins

<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <p style="font-family: flamenco; font-size: 40px" >Addresses with max coins</p>
            <p style="font-family: 'Hiragino Sans GB', 'Microsoft YaHei'; font-size: 20px" >账户存款余额排名</p>
        </div>
        <row class = "block">
            <div class = "rank" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif">
                <Table stripe
                       :columns="columns"
                       :data="data"
                       :show-header="showHeader"
                       @on-row-dblclick="goToAddressInfo"></Table>
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
                        title: '地址（账户）',
                        width: 500,
                        key: 'address',
                        align: 'center',
                        className: 'demo-table-info-address',
                        render (row, column, index) {
                            return `<a href="#/address/info/${row.address}">${row.address}</a>`;
                        }
                    },
                    {
                        title: '最近一次交易时间',
                        key: 'last_tx_time_utc',
                        align: 'center',
                        className: 'demo-table-info-time'
                    },
                    {
                        title: '存款余额',
                        key: 'balance',
                        align: 'center',
                        className: 'demo-table-info-amount'
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
        },
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
