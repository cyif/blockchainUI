// 已完成
<template>
    <div>
        <div class = 'title'>
            <br>
            <h1>Block</h1>
        </div>
        <hr/>
        <div class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="columns1"
                       :data="data1"
                       :show-header="showHeader"></Table>
            </div>
        </div>
        <hr/>
        <div class="transactions">
            <div class="table" style="box-shadow: #30c9e8">
                <table class="table2"
                       :columns="columns2"
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
                blockId: {},
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
                        key: 'value',
                        className: 'demo-table-info-key'
                    }
                ],

                data1: [],

                columns2:[
                    {
                        title: 'txHash',
                        key: 'hash',
                    },
                    {
                        title: 'coins',
                        key: 'coins'
                    }
                ],

                data2: []
            }
        },
        created () {
            this.blockId = this.$route.params.blockId;
        },
        mounted () {
            var _self = this;
            _self.$webApi.getBlockInfo(_self.blockId)
                .then(res => {
                    let blockInfo = res.data.data;
                    for (let key in blockInfo) {
                        let d = {};
                        d.attribute = _self.$nameMap.getName("Block", key);
                        if (typeof(d.attribute) !== 'undefined') {
                            d.value = blockInfo[key];
                            _self.data1.push(d);
                        }
                    }
                })
        }
    }
</script>

<style scoped>
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
    .table2{
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: rgb(211, 202, 221)
    }
    .table2 tr, thead{
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: rgb(211, 202, 221);
    }
    .table2 td, th{
        padding: 5px 10px;
        font-size: 12px;
        font-family: Verdana;
        color: rgb(95, 74, 121);
    }
    .table2 tr:nth-child(even){
        background: rgb(223, 216, 232);
    }
    .table2 tr:nth-child(odd){
        background: white;
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
