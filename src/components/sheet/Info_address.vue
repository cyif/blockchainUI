// 该地址的第一笔交易数据
// 该地址最近的一笔交易数据
// 看补充否
<template>
    <Card :bordered="false" class="sheet_canvas">
        <div class = 'title'>
            <br>
            <h1 style="font-family: istokbold; font-weight: bold">Address</h1>
        </div>
        <br>
        <hr/>
        <br>
        <div class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="columns1"
                       :data="data1"
                       :show-header="showHeader">
                </Table>
            </div>
            <hr>
            <Row>
                <i-col span="12">
                    <div class="first">
                        <table class="table2" style="box-shadow: #30c9e8"
                               :columns="columns2"
                               :data="data2"
                               :show-header="showHeader2">
                        </table>
                    </div>
                </i-col>
                <i-col span="12">
                    <div class="last">
                        <table class="table3"
                               :columns="columns3"
                               :data="data3"
                               :show-header="showHeader2">
                        </table>
                    </div>
                </i-col>
            </Row>
        </div>

    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        components: {ICol},
        data () {
            return {
                addressId: {},
                showHeader: false,
                showHeader2: true,
                columns1: [
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 200,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-key'
                    }
                ],
                data1: [],
                dataNames: {
                    addNames: [
                        {
                            attribute: '哈希值',
                            name: 'address'
                        },
                        {
                            attribute: '余额',
                            name: 'balance',
                            formatter: '{value} BTC'
                        },
                        {
                            attribute: '收入总计',
                            name: 'totalreceived',
                            formatter: '{value} BTC'
                        },
                        {
                            attribute: '交易笔数',
                            name: 'nb_txs'
                        },
                        {
                            attribute: '未确认交易金额',
                            key: '12898312'
                        }
                    ],
                    txsNames: [
                        {
                            attribute: '哈希值',
                            name: 'tx'
                        },
                        {
                            attribute: '总额',
                            name: 'value',
                        },
                        {
                            attribute: '确认数',
                            name: 'confirmation',
                        },
                        {
                            attribute: '交易时间',
                            name: 'time_utc'
                        },
                        {
                            attribute: '块号',
                            name: 'block_nb'
                        }
                    ]
                },

                columns2:[
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 200,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-value'
                    }
                ],

                data2: [],

                columns3:[
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 200,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-value'
                    }
                ],

                data3: []
            }
        },
        created () {
            this.addressId = this.$route.params.addressId;
        },
        mounted () {
            var _self = this;
            _self.$Loading.start();
            _self.$webApi.getAddressInfo(_self.addressId)
                .then(res => {
                    let addressInfo = res.data.data;
                    _self.dataNames.addNames.forEach(data => {
                        let name = data.name;
                        let attribute = data.attribute;
                        let value = addressInfo[name];
                        _self.data1.push({
                            attribute: attribute,
                            value: value
                        });
                    });
                    _self.dataNames.txsNames.forEach(data => {
                        let name = data.name;
                        let attribute = data.attribute;
                        let value = addressInfo.first_tx[name];
                        _self.data2.push({
                            attribute: attribute,
                            value: value
                        });
                    });
                    _self.dataNames.txsNames.forEach(data => {
                        let name = data.name;
                        let attribute = data.attribute;
                        let value = addressInfo.last_tx[name];
                        _self.data3.push({
                            attribute: attribute,
                            value: value
                        })
                    });
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
        min-height: 350px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
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
