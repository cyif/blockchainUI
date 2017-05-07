//blocks with most coin days destroyed

//blocks with highest fees
//blocks with the most transactions

// addresses with max coins

<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Blocks with most coin days destroyed</h1>
            <h2>区块交易量指标排名</h2>
        </div>
        <row class = "block">
            <div class = "rank">
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
