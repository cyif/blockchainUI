<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph">
                    <div id = "txsAddress" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    不同地址的交易数分布情况
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        图中每个点所代表的意思是有y（纵坐标对应值）个地址仅发生过x（横坐标对应值）笔交易。可以看到，长尾明显，这也就表明，从概率角度而言，绝大部分地址仅发生过1-2次交易，但这并不意味着发生高频交易的地址没有，发生800次交易的地址都能筛选出69个，可见比特币网络的复杂程度。</p>
                </Panel>
            </collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import Collapse from "../../../node_modules/iview/src/components/collapse/collapse";
    import Panel from "../../../node_modules/iview/src/components/collapse/panel";
    import $ from 'jquery';

    let max = 0;
    export default {
        components: {
            Panel,
            Collapse,
            ICol},
        data() {
            return {
                myChart: {},
                value1: '1',
                period: 0,
                nbAddresses: []
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.getChartData()
                }.bind(this));
            },

            changePeriod(period) {
                this.period = period;
                this.getChartData();
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('txsAddress'));
                myChart.setOption({
                    color: ['#3398DB'],
                    backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 1,
                        color: 'transparent'
                    }]),
                    tooltip: {
                        trigger: 'axis'
                    },
                    visualMap: {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: Math.ceil(max),
                        color: ['#f54123', '#ffeb00'],
                    },
                    xAxis: {
                        type: 'value',
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
                        max: 6000,
                    },
                    yAxis: {
                        name: '数目',
                        type: 'value',
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
                        start: 0,
                        end: 2
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
                        name: '参与交易数达到该值的地址数统计',
                        data: this.nbAddresses,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                    }]
                });
            },

            getChartData() {
                let _self = this;
                _self.$Loading.start();
                _self.$webApi.getChartData(_self.period)
                    .then(res => {
                        let data = res.data.data;
                        _self.nbAddresses = [];
                        for (let i = 0; i < data.txs_per_address.length; i++) {
                            let o = data.txs_per_address[i];
                            _self.nbAddresses.push([o.tx_nb, o.nb_addresses])
                        }
                        max = _self.nbAddresses[0][1];
                        for (let i = 0; i < _self.nbAddresses.length; i ++) {
                            max = Math.max(max, _self.nbAddresses[i][1]);
                        }
                        _self.$Loading.finish();
                        _self.drawChart();
                    })
                    .catch(err => {
                        console.log(err);
                        _self.$Loading.error();
                    });
            }
        },
        mounted(){
            this._init();
            this.getChartData();
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
    .button{
        margin-left: 75px;
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