// 已完成
<template>
    <Card :bordered="false"class="sheet_canvas">
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Block</h1>
            <h2>区块</h2>
        </div>
        <br>
        <hr/>
        <br>
        <div class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="blockColumns"
                       :data="blockData"
                       :show-header="showInfoHeader"></Table>
            </div>
        </div>
        <hr/>
        <br>
        <div class="transactions">
            <Collapse>
                <Panel v-for="txInfo in txsData" :key="txInfo.tx" style="margin-top: 5px; margin-bottom: 5px;">
                    <router-link :to="'/txs/info/'+ txInfo.tx">{{ txInfo.tx }}</router-link>
                    <div slot="content">
                        <div class="tradeInfo" style="box-shadow: #30c9e8">
                            <trade-info :trade="txInfo.trade"></trade-info>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    </Card>
</template>

<script>
    import tradeInfo from './Info_trade.vue'
    export default {
        components: {
            tradeInfo
        },
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
                        className: 'demo-table-info-key',
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
    .sheet_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: #f1f2f0;
        border-radius: 8px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
    }
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
    .table, .tradeInfo {
        height : 100%;
        margin : 10px;
        padding-bottsom: 20px;
        }
    .transactions {
        font-size: 15px;
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
