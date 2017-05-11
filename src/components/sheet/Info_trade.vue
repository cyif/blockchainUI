<template>
    <Card :bordered="false" class="sheet_canvas">
        <Row class="whoTowho">
            <i-col span="12" id="from">
                <Table :columns="addColumnFrom"
                       :data="addFrom"
                       :show-header="showHeader"
                       :no-data-text="noDataText"></Table>
            </i-col>
            <i-col span="12" id="to">
                <Table :columns="addColumnTo"
                       :data="addTo"
                       :show-header="showHeader"
                       :no-data-text="noDataText"></Table>
            </i-col>
        </Row>
        <Row>
            <div align="right" style="position: relative">
                <div class="total" style="position: absolute; right: 5%;">
                    <p>总计: {{total}}</p>
                </div>
            </div>
        </Row>
    </Card>
</template>

<script>
    export default {
        props: ['trade'],
        data () {
            return {
                noDataText: '',
                showHeader: true,
                addColumnFrom: [
                    {
                        title: '地址(from)',
                        key: 'address',
                        width: 400,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'amount',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '-{value}BTC'
                    }
                ],
                addColumnTo: [
                    {
                        title: '地址(to)',
                        key: 'address',
                        width: 400,
                        className: 'demo-table-info-attribute'
                    },
                    {
                        title: '金额',
                        key: 'amount',
                        className: 'demo-table-info-key',
                        width: 150,
                        formatter: '+{value}BTC'
                    }
                ],
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
                totalData: []
            }
        },
        computed: {
            addFrom : function () {
                let data = [];
                for (let i = 0; i < this.trade.vins.length; i++) {
                    let vin = this.trade.vins[i];
                    data.push({
                        address: vin.address,
                        amount: vin.amount
                    })
                }
//                console.log(data);
                return data;
            },
            addTo: function () {
                let data = [];
                for (let i = 0; i < this.trade.vouts.length; i++) {
                    let vout = this.trade.vouts[i];
                    data.push({
                        address: vout.address,
                        amount: vout.amount
                    })
                }
                return data;
            },
            total: function () {
                let total = 0;
                for (let i = 0; i < this.trade.vouts.length; i++) {
                    total += this.trade.vouts[i].amount;
                }
                return total;
            }
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
    p {
        font-size: 15px;
    }
</style>