<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "minersRevenue" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    矿工赚取总收益随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        这里需要提到的概念分别如下："工作量机制"，这是最简单有效判断一个人工作情况的指标，不关心过程，只看结果。而在区块链当中，任务就是一个一个去尝试随机数以找到满足要求的nonce，过程已经确定就是一个一个去试，获胜的条件在于是否拥有最强大的算力，如果有，相应花费时间最短，最先完成任务，可以获得系统给予的比特币奖励，并拥有一次记账的权力，在记账工程中，可以获取小费。正是为了保证有人愿意充当矿工的角色去处理交易订单，所以这样的奖励机制恰到好处。随着比特币数目达到饱和，矿工的收益将主要来源于小费，而此时，交易数目必然会因为本身比特币基数扩大等原因童谣增加，这时，为了保证自己的交易优先被处理，就需要付出相应的小费以获取较高的处理优先级。2013.12.4矿工收益创历史最高，至今仍未突破。这相当一部分的原因在于当时比特币迎来中国时期，比特币市价创历史突破1000美元。</p>
                </Panel>
            </Collapse>
        </row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import $ from 'jquery';
    import data from '../../data/minersRevenue.json'


    var values = data.values;


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
            let myChart = this.$echarts.init(document.getElementById('minersRevenue'));
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
                    max: 400
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
                            // 格式化成月/日，只在第一个刻度显示年份
                            var date = new Date(value);
                            var texts = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
                            return texts.join('/');
                        }
                    }
                },
                yAxis: {
                    name: '收益（美元）',
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
                    name: '矿工的收益（挖矿奖励和小费收入）',
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
        background: #fff;
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