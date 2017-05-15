<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "costTxsVolume" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <collapse v-model="value1">
                <Panel name="1" style="font-size: 14px; background-color: #3a4a4d">
                    矿工小费收益占总交易量的比随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        该图显示近两年的收益情况，可见，整体收益较之交易量而言是有所下降的，一方面可能是因为交易量增加的趋势明显更快于小费的增长，目前比特币还未饱和，给予小费与否还是看交易者的意愿，需求并没有那么强烈。一旦比新的特币不再产生，矿工的收入仅来源于小费时，该百分比必定有走强的趋势。
                    </p>
                </Panel>
            </collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import Collapse from "../../../node_modules/iview/src/components/collapse/collapse";
    import Panel from "../../../node_modules/iview/src/components/collapse/panel";
    import {webApi} from '../../service/WebApi';

    let data = webApi.getJsonData('costTxsVolume.json');

    let max = 0;

    export default {
        components: {
            Panel,
            Collapse,
            ICol
        },
        data() {
            return {
                myChart: {},
                value1: '1',
                costTxsVolume: []
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'txsChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            getData() {
                let _self = this;
                _self.$Loading.start();
                for (let i = 0; i < data.values.length; i ++) {
                    let o = data.values[i];
                    _self.costTxsVolume.push([o.x*1000, o.y]);
                }
                max = _self.costTxsVolume[0][1];
                for (let i = 0; i < _self.costTxsVolume.length; i++) {
                    max = Math.max(max, _self.costTxsVolume[i][1]);
                }
                _self.$Loading.finish();
                _self.drawChart();
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('costTxsVolume'));
                myChart.setOption({
                    backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
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
                        max: Math.ceil(max),
                        color: ['#f54123', '#ffeb00'],
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
                        name: '百分之（%）',
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
                        name: '矿工小费收入占总交易量的百分比：',
                        data: this.costTxsVolume,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                    }]
                });
            },
        },
        mounted(){
            this._init();
            this.getData();
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