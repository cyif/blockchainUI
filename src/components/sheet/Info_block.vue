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
                       :show-header="showInfoHeader"></Table>
            </div>
        </div>
        <hr/>
        <div class="transactions">
            <Collapse>
                <Panel v-for="txInfo in txsData" :key="txInfo.tx">
                    <router-link :to="'/txs/info/'+ txInfo.tx">{{ txInfo.tx }}</router-link>
                    <div slot="content">
                        <!--<div class="table" style="box-shadow: #30c9e8">-->
                            <Table stripe
                                   :columns="txsColumns"
                                   :data="txInfo.trade.vouts"
                                   :show-header="showTxHeader">
                            </Table>
                        <!--</div>-->
                    </div>
                </Panel>
            </Collapse>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                blockId: '',
                showInfoHeader: false,
                showTxHeader: true,
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
                        title: '地址',
                        key: 'address',
//                        width: 500,
                        align: 'center',
                        render (row, column, index) {
                            return `<a href="#/address/info/${row.address}">${row.address}</a>`
                        }
                    },
                    {
                        title: '交易额',
//                        width: 450,
                        key: 'amount',
                        align: 'center',
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
            _self.$Loading.start();
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
                    _self.$Loading.finish();
                })
                .catch(err => {
                    console.log(err);
                    _self.$Loading.error();
                });
            _self.$webApi.getBlockTxs(_self.blockId)
                .then(res => {
                    _self.txsData = res.data.data.txs;
                    _self.$Loading.finish();
                })
                .catch(err => {
                    console.log(err);
                    _self.$Loading.error();
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
    .transactions {
        font-size: 15px;
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
