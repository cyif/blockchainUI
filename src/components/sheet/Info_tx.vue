// 格式完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Transaction</h1>
            <h2>交易</h2>
        </div>
        <br>
        <hr/>
        <br>
        <div class = "block">
            <div class = "table">
                <Table stripe
                       :columns="txColumns"
                       :data="txData"
                       :show-header="showHeader"></Table>
            </div>
            <hr/>
            <br>
            <div class="subTable">
                <Tabs type="card">
                    <Tab-pane label="交易流向">
                        <trade-info :trade="tradeFlow"></trade-info>
                    </Tab-pane>
                    <Tab-pane label="树形图">
                        <txs-tree :trade="tradeFlow"></txs-tree>
                    </Tab-pane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import tradeInfo from './Info_trade.vue'
    import txsTree from '../graph/txsTree.vue'

    export default {
        components: {ICol, tradeInfo, txsTree},
        data () {
            return {
                txId : '',
                showHeader: false,
                txColumns: [
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 180,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-key',
                        render (row, column, index) {
                            if (index === 7) {
                                return `<a href="#/block/info/${row.value}">${row.value}</a>`;
                            } else {
                                return row.value
                            }
                        }
                    }
                ],

                txNames: [
                    {
                        attribute: '哈希值',
                        name: 'tx'
                    },
                    {
                        attribute: '时间',
                        name: 'time_utc'
                    },
//                    {
//                        attribute: '发行比特币',
//                        key: 'none',  // 根据情况判断的
//                    },
                    {
                        attribute: 'outgoing txs总计',
                        name: 'outgoing',
                        formatter: '{value} BTC'
                    },
                    {
                        attribute: '交易额',
                        name: 'trans_sum',
                    },
                    {
                        attribute: '确认数',
                        name: 'confirmations'
                    },
                    {
                        attribute: '小费',
                        name: 'fee'
                    },
                    {
                        attribute: '币天',
                        name: 'days_destroyed'
                    },
                    {
                        attribute: '所属块',
                        name: 'block'
                    }
                ],

                txData: [],
                tradeFlow: {
                    vins: [],
                    vouts: []
                }
            }
        },
        created () {
            this.txsId = this.$route.params.txsId;
            var _self = this;
            _self.$Loading.start();
            _self.$webApi.getTxInfo(_self.txsId)
                .then(res => {
                    let txsInfo = res.data.data;
                    for (let i = 0; i < _self.txNames.length; i++) {
                        let name = _self.txNames[i].name;
                        let attribute = _self.txNames[i].attribute;
                        let value = txsInfo[name];
                        _self.txData.push({
                            attribute: attribute,
                            value: value
                        })
                    }
                    _self.tradeFlow = txsInfo.trade;
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
        background: transparent;
        border-radius: 8px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
    }
    .title {
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
    .table {
        height : 100%;
        margin : 10px;
        padding-bottom: 20px;

    }
    .subTable {
        margin: 20px;
    }
</style>
