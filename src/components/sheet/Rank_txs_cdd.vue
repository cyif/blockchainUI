// 完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <p style="font-family: flamenco; font-size: 40px" >Transactions with most coin days destroyed</p>
            <p style="font-family: 'Hiragino Sans GB', 'Microsoft YaHei'; font-size: 20px" >单笔交易量指标排名</p>
        </div>
        <row class = "block">
            <div class = "rank" style="font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif">
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
                showHeader: true,
                columns1: [
                    {
                        type: 'index',
                        width: 60,
                        title: 'No',
                        align: 'center',
                    },
                    {
                        title: '交易',
                        key: 'tx',
                        align: 'center',
                        className: 'demo-table-info-tx'
                    },
                    {
                        title: '确认时间',
                        key: 'time',
                        align: 'center',
                        className: 'demo-table-info-time'
                    },
                    {
                        title: '币天（指标）',
                        key: 'cdd',
                        align: 'center',
                        className: 'demo-table-info-cdd'
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
