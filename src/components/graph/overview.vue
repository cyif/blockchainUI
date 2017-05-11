<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "18">
                <div class = "graph" id="graph">
                    <div id = "exchangeLine" class = "chart"></div>
                </div>
            </i-col>
            <i-col span="6">
                <div class="graph_info">
                    <br><br>
                    <span style="font-size: 20px; font-weight: bold">最新比特币汇率</span>
                    <br><br>
                    <span :USD="USD" style="font-size: 25px; font-weight: bold">${{USD.toFixed(2)}}</span>

                    <div class = "circle" align="center">
                        <div style="padding-top: 5%;
            padding-bottom: 5%;">
                            <i-circle
                                :size="160"
                                :trail-width="5"
                                :stroke-width="5"
                                :percent="percent"
                                stroke-linecap="round"
                                stroke-color="#1784cd">
                                <div class="demo-i-circle-custom">
                                    <h2>{{coinsCount}}</h2>
                                    <br>
                                    <h3>目前已发行比特币</h3>
                                    <br>
                                    <h3>
                                        总占数
                                        <h3>{{percent}}%</h3>
                                    </h3>
                                </div>
                            </i-circle>
                        </div>
                    </div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import $ from 'jquery';
    import data2 from '../../data/totalBitcoins.json'
    import data from '../../data/exchangeLine.json'


    var values1 = data.values;
    var max1 = values1[0][1];
    for (let i = 0; i < values1.length; i++) {
        max1 = Math.max(max1, values1[i][1]);
    }

    export default {
        components: {ICol},
        data() {
            return {
                myChart: {},
                coinsCount: data2.values[data2.values.length-1][1],
                USD: data.values[data.values.length-1][1]
            }
        },
        computed: {
            percent:function(){
                return Math.round(this.coinsCount*100/21000000);
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.drawChart();
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('exchangeLine'));
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
                        color: ['#f54123', '#ffeb00'],
                        min: 0,
                        max: Math.ceil(max1),
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
                        name: '平均市场价格（美元）',
                        data: values1,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                    }]
                });

            }
        },
        mounted(){
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
    .circle{
        padding: 5px;
        position: relative;
        overflow: hidden;
        margin-top: 25px;
    }
    .graph_info {
        align-items: left;
        text-align: center;
        border-radius: 8px;
        min-height:100px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>

<style scoped>
    .demo-i-circle-custom. h1{
        color: #3f414d;
        font-size: 28px;
        font-weight: normal;
    }
    .demo-i-circle-custom. p{
        color: #657180;
        font-size: 14px;
        margin: 10px 0 15px;
    }
    .demo-i-circle-custom. span {
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 14px;
    }
    .demo-i-circle-custom. span::before{
        content: '';
        display: block;
        width: 50px;
        height: 1px;
        margin: 0 auto;
        background: #e0e3e6;
        position: relative;
        top: -15px;
    }
    .demo-i-circle-custom. span i{
        color: #3f414d;
    }
</style>