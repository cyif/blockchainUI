//blocks with most coin days destroyed

//blocks with highest fees
//blocks with the most transactions

// addresses with max coins

<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <p style="font-family: flamenco; font-size: 40px" >Blocks with most coin days destroyed</p>
            <p style="font-family: 'Hiragino Sans GB', 'Microsoft YaHei'; font-size: 20px" >区块交易量指标排名</p>
        </div>
        <row class = "block">
            <div class = "rank" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif">
                <Table stripe
                       :columns="columns"
                       :data="data"
                       :show-header="showHeader"
                       @on-row-dblclick="goToBlockInfo"></Table>
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
                        title: '区块',
                        key: 'nb',
                        align: 'center',
                        className: 'demo-table-info-block',
                        render (row, column, index) {
                            return `<a href="#/block/info/${row.nb}">${row.nb}</a>`
                        }
                    },
                    {
                        title: '交易确认时间（区块生成）',
                        key: 'time_utc',
                        align: 'center',
                        className: 'demo-table-info-time'
                    },
                    {
                        title: '币天（指标）',
                        key: 'days_destroyed',
                        align: 'center',
                        className: 'demo-table-info-cdd'
                    }
                ]
            }
        },
        methods : {
            goToBlockInfo: function(row) {
                this.$router.push({
                    path: '/block/info/' + row.nb
                });
            }
        },
        mounted() {

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
