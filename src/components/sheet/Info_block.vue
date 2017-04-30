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
                       :columns="blockColumns"
                       :data="blockData"
                       :show-header="showHeader"></Table>
            </div>
        </div>
        <hr/>
        <div class="transactions">
            <div class="table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="txsColumns"
                       :data="txsData"
                       :show-header="showHeader">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                blockId: '',
                showHeader: false,
                blockColumns: [
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

                blockData: [],

                txsColumns:[
                    {
                        title: 'txHash',
                        key: 'hash',
                    },
                    {
                        title: 'coins',
                        key: 'coins'
                    }
                ],

                txsData: []
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
                            _self.blockData.push(d);
                        }
                    }
                });
            _self.$webApi.getBlockTxs(_self.blockId)
                .then(res => {

                });
        }
    }
</script>

<style scoped>
    .title{
        margin-left: 40px;
        font-size: medium;
        font-weight: 500;
        text-align: left;
        vertical-align: bottom;
    }
    .block , .transactions {
        margin: 20px;
    }
    .table {
        height : 100%;
        margin : 10px;
        padding-bottsom: 20px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
