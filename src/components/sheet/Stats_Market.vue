<template>
    <div class="sheet_canvas" style="padding-left: 20%; padding-right: 20%; padding-top:10px; padding-bottom: 5px; text-align: center">
        <row class = "block">
            <div class = "rank">
                <span style="font-size: 18px; font-weight: 500; color: #f1f2f0" v-for="stats in marketData" :key="stats.attribute">{{stats.attribute}} : {{stats.value}}<br></span>
            </div>
        </row>
    </div>
</template>

<script>
    import data from '../../data/stats.json';

    export default {
        data () {
            return {
                showHeader: false,
                columns: [
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
                    }
                ],
                marketData: [],
                Names: [
                    {
                        attribute: '24小时内市场价',
                        name: 'tx',
                        value: data.values.market_price_usd
                    },
                    {
                        attribute: '24小时内交易量(美元）',
                        name: 'tradeUSD',
                        value: data.values.trade_volume_usd
                    },
                    {
                        attribute: '24小时内交易量（比特币）',
                        name: 'transBTC',
                        value: data.values.trade_volume_btc
                    }
                ],
            }
        },
        mounted () {
            for (let i = 0; i < this.Names.length; i++) {
                let name = this.Names[i].name;
                let attribute = this.Names[i].attribute;
                let value = this.Names[i].value;
                this.marketData.push({
                    attribute: attribute,
                    value: value
                })
            }
        },
        components: {
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
        min-height:100px;
    }
    .ivu-table td{
        background-color: transparent;
    }
</style>
