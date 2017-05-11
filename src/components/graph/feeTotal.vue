<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "feeTotal" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    仅小费收入随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此图展示向矿工支付的所有交易小费的总价值，及其对应美元现值。可见，随着比特币市场的发展，要处理的交易数成倍增长，为矿工带来的收益仍然是十分可观的，这也就意味着看准利润，拥有实力相当算力的潜在矿工将不断地涌入市场，保证区块链能生生不息的继续运作下去。同样作为一个市场，就存在供需，当供大于求的时候，利润下降，消除弱者；供小于求得时候，利润上升，吸引强者，最终总体维持一个平衡。
                    </p>
                </Panel>
            </Collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import data from '../../data/feeTotal.json'

    let values1 = data.values1;
    let values2 = data.values2;
    let max = 0;
    let max2 = 0;
    for(let i = 0; i < data.values1.length; i ++)
    {
        max = Math.max(max, values1[i][1]);
    }
    for(let i = 0; i < data.values2.length; i ++)
    {
        values2[i][1] = data.values2[i][1]/10000;
        max2 = Math.max(max2, values2[i][1]);
    }

    export default {
        components: {ICol},
        data() {
            return {
                myChart: {},
                value1: '1'
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'blockChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('feeTotal'));
                myChart.setOption({
                    backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 1,
                        color: 'transparent'
                    }]),
                    visualMap: [{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: Math.ceil(max),
                        color: ['#f54123', '#ffeb00'],
                    },{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        min: 0,
                        max: Math.ceil(max2),
                        color: ['#2677bb', '#37bbe4'],
                    }],
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            },
                            show: true,
                            interval: 'auto',
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            formatter: function (value, index) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                var date = new Date(value);
                                var texts = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
                                return texts.join('/');
                            }
                        }
                    },
                    yAxis: [{
                        name: '收益（BTC）',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        scale: true,
                        axisTick: {
                            show: false
                        },
                    },
                        {
                            name: '收益（万美元）',
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            scale: true,
                            computable: true,
                            axisTick: {
                                show: false
                            },
                            position: 'right',
                        }],
                    dataZoom: [{
                        type: 'inside',
                        start: 90,
                        end: 100
                    }, {
                        start: 70,
                        end: 100,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [{
                        name: '矿工的小费收入(BTC)',
                        data: values1,
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        yAxisIndex: 0
                    },{
                        name: '矿工的小费收入(USD)',
                        data: values2,
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        yAxisIndex: 1
                    }
                    ]
                });
            }
        },
        mounted() {
            this._init();
            this.drawChart();
        }
    }
</script>

<style scoped>
    .graph_canvas {
        margin: 10px 5px 10px;
        background: #f1f2f0;
        border-radius: 8px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
    }
    .block {
        margin: 10px;
    }
    .graph {
        height : 350px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
</style>