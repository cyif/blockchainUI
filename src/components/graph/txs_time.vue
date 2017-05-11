<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <Button-group class="button">
                <Button @click = "changePeriod(0)" style="font-weight: bold; color: #3a4a4d">所有时间</Button>
                <Button @click = "changePeriod(180) " style="font-weight: bold; color: #3a4a4d">近180天</Button>
                <Button @click = "changePeriod(30)" style="font-weight: bold; color: #3a4a4d">近30天</Button>
            </Button-group>
            <i-col span = "24">
                <div class = "graph">
                    <div id = "txsTime" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <collapse v-model="value1">
                <Panel name="1" style="font-size: 14px; background-color: #3a4a4d">
                    新增交易数随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    这张图标示着人们操作频率的快慢，无论看涨看跌，当行情很疯狂的时候，人们都会买入比特币到钱包中，又或许将比特币挂入交易市场变现。2012年一款基于区块链运作的赌博游戏Satoshi Dice上线后，明显导致比特币交易数的暴增，2014年为止，这个赌博网站的交易量就占比特币总交易量的一半。</p>
                </Panel>
            </collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import Collapse from "../../../node_modules/iview/src/components/collapse/collapse";
    import Panel from "../../../node_modules/iview/src/components/collapse/panel";

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
                nbTxs: []
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

            changePeriod(period) {
                this.period = period;
                this.getChartData();
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('txsTime'));
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
                        name: '所含交易的个数',
                        data: this.nbTxs,
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
                        _self.nbTxs = [];
                        for (let i = 0; i < data.blocks_over_time.length; i++) {
                            let o = data.blocks_over_time[i];
                            _self.nbTxs.push([o.date, o.nb_txs])
                        }
                        max = _self.nbTxs[0][1];
                        for (let i = 0; i < _self.nbTxs.length; i++) {
                            max = Math.max(max, _self.nbTxs[i][1]);
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