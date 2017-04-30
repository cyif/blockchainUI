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
                <Row>
                    <i-col span="12" id="from">
                       <Table :columns="addColumnFrom"
                              :data="addDataFrom"
                              :show-header="showHeader"></Table>
                    </i-col>
                    <i-col span="12" id="to">
                        <Table :columns="addColumnTo"
                               :data="addDataTo"
                               :show-header="showHeader"></Table>
                    </i-col>
                </Row>
                <Row>
                    <div align="right" style="position: relative">
                        <div class="total" style="position: absolute; right: 5%;">
                            <Table :columns="totalColumn"
                                   :data="totalData"
                                   :show-header="showHeader"></Table>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        components: {ICol},
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
                        className: 'demo-table-info-key'
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
                addColumnFrom: [
                    {
                        title: '地址A',
                        key: 'address1',
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'value1',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '-{value}'
                    }
                ],
                addDataFrom: [],
                addColumnTo: [
                    {
                        title: '地址B',
                        key: 'address2',
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'value2',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '+{value}'
                    }
                ],
                addDataTo: [],
                totalColumn: [
                    {
                        title: '属性', // 小费 交易值 总计
                        key: 'attribute',
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '{value}'
                    }
                ],
                totalData: [],
            }
        },
        created () {
            this.txsId = this.$route.params.txsId;
        },
        mounted () {
            var _self = this;
            _self.$webApi.getTxInfo(_self.txsId)
                .then(res => {
                    let blockInfo = res.data.data;
                    for (let i = 0; i < _self.txNames.length; i++) {
                        let name = _self.txNames[i].name;
                        let attribute = _self.txNames[i].attribute;
                        let value = blockInfo[name];
                        _self.txData.push({
                            attribute: attribute,
                            value: value
                        })
                    }
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
