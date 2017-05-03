<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "marketCap" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    市场中比特币价值（美元）随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </Panel>
            </Collapse>
        </row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import $ from 'jquery';
    import data from '../../data/marketCap.json'

    let values = [];
    for (let i = 0; i < data.values.length; i++) {
        let o = data.values[i];
        values.push([o.x * 1000, o.y]);
    }
    let max = values[0][1];
    for (let i = 0; i < values.length; i++) {
        max = Math.max(max, values[i][1]);
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
                    this.echarts.resize()
                }.bind(this));
            },
        },
        mounted(){
            let myChart = this.$echarts.init(document.getElementById('marketCap'));
            myChart.setOption({
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: 'transparent'
                }, {
                    offset: 1,
                    color: 'transparent'
                }]),
                visualMap: {
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: max
                },
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
                            var date = new Date(value);
                            var texts = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
                            return texts.join('/');
                        }
                    }
                },
                yAxis: {
                    name: '美元',
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
                dataZoom: [{
                    type: 'inside',
                    start: 70,
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
                    name: '市值（美元）',
                    data: values,
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                }]
            });
        }
    }
</script>

<style scoped>
    .block {
        margin: 10px;
    }
    .graph_canvas {
        margin-left: 5px;
        margin-right: 5px;
        background: #f5f7f9;
        border-radius: 8px;
    }
    .graph_info {
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        padding-top: 10%;
        padding-bottom: 10%;
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