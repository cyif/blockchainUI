<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "txsNum" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一次明显的高峰出现于2012.6.14,随着比特币数量的增多，比特币持有者的增多，比特币交易越来越频繁，每天所有处理的交易数暴增，这需要算力越来越强的矿工处理当前的事务，也就意味着更加困难的块需要被开采。值得一提的是，区块链本身的不可瓦解性，意味着从最一开始的林林总总都会被完整记录保存，只要被承认的就始终会被承认。所有的都有迹可循，不可磨灭，也许有一天你不记得自己曾经做过什么，但是它记得。</p>
                </Panel>
            </Collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import $ from 'jquery';
    import data from '../../data/txsNum.json'

    var values1 = data.values1;
    var values2 = data.values2;
    let max = 0;
    let max2 = 0;
    for (let i = 0; i < values1.length; i++) {
        max = Math.max(max, values1[i][1]);
    }
    for (let i = 0; i < values2.length; i++) {
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
                    this.drawChart()
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('txsNum'));
                myChart.setOption({
                    backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 1,
                        color: 'transparent'
                    }]),
                    legend: {
                        icon: 'rect',
                        itemWidth: 14,
                        itemHeight: 5,
                        itemGap: 13,
                        data: ['记忆池中未处理交易数', '记忆池所占大小'],
                        right: '4%',
                        textStyle: {
                            fontSize: 12,
                            color: '#000'
                        }
                    },
                    visualMap: [{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: Math.ceil(max),
                        color: ['#f54123', '#ffeb00'],
                    }, {
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
                        name: '数目',
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
                            name: '大小（KB）',
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            scale: true,
                            axisTick: {
                                show: false
                            },
                            position: 'right'
                        }],
                    dataZoom: [{
                        type: 'inside',
                        start: 80,
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
                        name: '记忆池中未处理交易数',
                        data: values1,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                        yAxisIndex: 0
                    },{
                        name: '记忆池所占大小',
                        data: values2,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                        yAxisIndex: 1
                    }]
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