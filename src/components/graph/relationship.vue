<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph">
                    <div id = "relationship" class = "chart"></div>
                </div>
            </i-col>
        </row>
    </div>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import tradeInfo from '../../data/overview.json';

    let data1 = [];
    let data2 = [];
    let i = 14;
    let tx = tradeInfo.txs[i];
    let date = new Date();
    for (let j = 0; j < tx.trade.vins.length; j++) {
        let vin = tx.trade.vins[j];
        data1.push([new Date(date -= 1000 * 3600 * 24), 2 + j * 2, Math.abs(vin.amount)]);
    }
    for (let j = 0; j < tx.trade.vouts.length; j++) {
        let vout = tx.trade.vouts[j];
        data2.push([new Date(date -= 1000 * 3600 * 24), 4 - j * 1.7, Math.abs(vout.amount)]);
    }
    export default {
        components: {ICol},
        data() {
            return {
                myChart: {}
            }
        },

        methods: {
            _init(){
                window.addEventListener('resize', () => {
                    this.myChart.resize();
                })
            }
        },

        mounted() {
            this.myChart = this.$echarts.init(document.getElementById("relationship"));
            this.myChart.setOption({
                legend: {
                    data: ['From address', 'To address'],
                    left: 'right'
                },
                polar: {},
                tooltip: {
                    formatter: function (params) {
                        return "hello";
                    }
                },
                center: ['50%','50%'],
                radius: ['0','50%'],
                angleAxis: {
                    type: 'value',
                    boundaryGap: false,
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                radiusAxis: {
                    type: 'time',
                    max: '2018-1-1',
                    min: '2009-1-1',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        name: 'From address',
                        type: 'scatter',
                        coordinateSystem: 'polar',
                        symbolSize: function (val) {
                            return val[2] * 100;
                        },
                        data: data1,
                        animationDelay: function (idx) {
                            return idx * 5;
                        }
                    },
                    {
                        name: 'To address',
                        type: 'scatter',
                        coordinateSystem: 'polar',
                        symbolSize: function (val) {
                            return val[2] * 100;
                        },
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 5;
                        }
                    }]
            });
        }
    }
</script>

<style scoped>
    .block {
        background-color: inherit;
        min-height: 410px;
    }
    .graph_canvas {
        background: white;
        border-radius: 8px;
        width: 100%;
        border: groove #30c9e8;
    }
    .graph_info {
        text-align: center;
        border-radius: 8px;
        padding-top: 10%;
        padding-bottom: 10%;
        margin: 0 auto;
        height: 400px;
        display: table;
    }
    .graph {
        padding : 10px;
        height: 800px;
        min-width: 500px;
        /*overflow: scroll; */
    }
    .chart {
        width : 95%;
        height : calc(100% - 20px);
        margin : 0 auto;
        /*overflow: scroll;*/
    }
</style>
