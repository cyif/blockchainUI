// 格式完成
<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>Transaction</h1>
        </div>
        <hr/>
        <div class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="txColumns"
                       :data="txData"
                       :show-header="showHeader"></Table>
            </div>
            <hr/>
            <div>
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
