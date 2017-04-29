// 已完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>Block</h1>
        </div>
        <row class = "block">
            <div class = "table">
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
        data () {
            return {
                blockId: {},
                showHeader: false,
                columns: [
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

                data: []
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
                            _self.data.push(d);
                        }
                    }
                })
        }
    }
</script>

<style scoped>
    .sheet_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: #f5f7f9;
        border-radius: 8px;
        min-height: 350px;
    }
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
