<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "exchangeVolume" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    比特币美元交易量随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图中显示主要几家比特币交易所交易量的总值情况，2013.12.6日的一个高峰出现，这是中国时刻，在中国买家的带动下，11.29日比特币攻破1000美元大关，最高达到1200美元，并一度接近一盎司黄金的价格。各大主流媒体争相报道比特币现象。中国的比特币交易所开始获得全球比特币的定价权，行情引领全球。此后，中国央行禁封比特币，国内三方支付机构开始不支持比特币交易平台的转帐和提现，受此影响Okcoin和比特币中国宣布暂停人民币充值。比特币价格大跌60%，随后在美国和欧洲买盘的推动下，价格企稳反弹，回到800美元左右。比特币并没有因为打击而崩盘，去中心化特性被市场进一步确认。中国因此丧失比特币定价权，比特币重回MtGox时代。2017年年初，比特币再次回归中国人的关注领域，成为最看好的投资品种，大幅上涨30%，直到央行约谈三家国内比特币交易平台后，出现崩塌。究其细致原因，普遍认为是汇率所致，外管局于跨年夜加强了对换汇套利行为的监管，于是将视线转向监管之外的比特币交易平台，通过人民币——比特币——外币这样的途径实现换汇，且能实现高额度换汇，三家平台便有意宣传人民币贬值，进而鼓动通过这种方式进行换汇操作，以此增加平台比特币交易量，这也是央行约谈的直接原因。</p>
                </Panel>
            </Collapse>
        </row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import $ from 'jquery';
    import data from '../../data/exchangeVolume.json'


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
            let myChart = this.$echarts.init(document.getElementById('exchangeVolume'));
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
                    name: '交易量美元总值',
                    data: values,
                    type: 'line',
                    smooth:true,
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