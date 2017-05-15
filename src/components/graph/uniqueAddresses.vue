<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "uniqueAdd" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row>
            <collapse v-model="value1">
                <Panel name="1" style="font-size: 14px; background-color: #3a4a4d">
                    每天交易地址数随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        地址，就好比我们的账户，现实生活中，账户是有限的，只有一些银行可以开户，但在比特币这里，一个人可以拥有100+不同的地址数目，每一个都对应一个私钥和公钥，用于交易过程中的签名认证和转账。再者，比特币找零机制中曾经提到，每次交易也许用到不止一个地址，这些地址中的比特币一旦全部用尽，就要立刻将这个账户上的数字清空，这就意味着双重支付是不可能的。将时间周期拉到全长，可以看到随指数增长的一个形态图，这也充分印证着比特币市场的发展。而其中小范围的上下波动，主要与比特币市价的变动有关。
                    </p>
                </Panel>
            </collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import {webApi} from '../../service/WebApi';

    let data = webApi.getJsonData('uniqueAdd.json');

    var values = data.values;
    var max = values[0][1];
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
                    if (this.$route.name === 'addChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('uniqueAdd'));
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
                        name: '每天进行交易的地址数',
                        data: values,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
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