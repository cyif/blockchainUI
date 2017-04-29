<template>
    <div class = 'sheet_canvas'>
        <div class = 'title'>
            <br>
            <h1>BlockChain</h1>
        </div>
        <hr/>
        <row class = "block">
            <div class = "table" style="box-shadow: #30c9e8">
                <Table stripe
                       :columns="chainColumns"
                       :data="chainData"
                       :show-header="showHeader">
                </Table>
            </div>
        </row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showHeader: false,
                chainColumns: [
                    {
                        title: '属性',
                        key: 'attribute',
                        width: 250,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '值',
                        key: 'value',
                        className: 'demo-table-info-key'
                    }
                ],

                chainNames: [
                    {
                        attribute: '区块总数',
                        name: 'nb_blocks',
                    },
                    {
                        attribute: '创世时间',
                        name: 'first_block_time_utc'
                    },
                    {
                        attribute: '创世块',
                        value: 'Genesis',
                    },
                    {
                        attribute: '所有交易数总计',
                        name: 'nb_txs'
                    },
                    {
                        attribute: '所有可用地址总计',
                        name: 'nb_addresses'
                    },
                    {
                        attribute: '第一个获得比特币的地址',
                        name: 'first_address'
                    },
                    {
                        attribute: '第一笔往来交易',
                        name: 'first_real_tx'
                    },
                    {
                        attribute: '流通中的比特币总数',
                        name: 'nb_coins'
                    },
                    {
                        attribute: '当前区块的创建费用',
                        name: 'block_creation_fee'
                    }
                ],
                chainData: []
            }
        },
        mounted () {
            var _self = this;
            _self.$webApi.getBlockChainInfo()
                .then(res => {
                    let chainInfo = res.data.data;
                    for (let i = 0; i < _self.chainNames.length; i++) {
                        let name = _self.chainNames[i].name;
                        let attribute = _self.chainNames[i].attribute;
                        let value = chainInfo[name] || _self.chainNames[i].value;
                        _self.chainData.push({
                            attribute: attribute,
                            value: value
                        })
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
