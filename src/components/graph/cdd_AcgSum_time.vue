<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <Button-group class="button">
                <Button @click = "changePeriod(0)" style="font-weight: bold; color: #3a4a4d;">所有时间</Button>
                <Button @click = "changePeriod(180) " style="font-weight: bold; color: #3a4a4d">近180天</Button>
                <Button @click = "changePeriod(30)" style="font-weight: bold; color: #3a4a4d">近30天</Button>
            </Button-group>
            <i-col span = "24">
                <div class = "graph">
                    <div id = "cddTime" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    币天销毁随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        币天销毁是指一个人积累的币天被"销毁"了，那他积累的币天又是指一笔交易到手时收到了N比特币，距今已经过去M天仍未花费，M*N就是积累的币天。假使今天消耗了这些比特币，那其积累的币天就被销毁了。这里最重要的区分点在于，一个人转手买卖会增加交易量，但却不会改变币天销毁。可以看到日均币天销毁数与销毁总数整体趋势完全一致。</p>
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
    let max2 = 0;
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
                cdd: [],
                cddSum: [],
            }
        },
        methods: {
            _init() {
                this.myChart = this.$echarts.init(document.getElementById('cddTime'));
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'marketChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            changePeriod(period) {
                this.period = period;
                this.getChartData();
            },

            drawChart() {
                this.myChart.setOption({
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
                    legend: {
                        icon: 'rect',
                        itemWidth: 14,
                        itemHeight: 5,
                        itemGap: 13,
                        data: ['平均每日币天销毁数', '每日币天销毁总数'],
                        right: '4%',
                        textStyle: {
                            fontSize: 12,
                            color: '#000'
                        }
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
                        name: '日均币天销毁数',
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
                    yAxis: [{
                        name: '日均币天销毁数',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        scale: true,
                        axisTick: {
                            show: false
                        },

                    },{name: '币天销毁总数',
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
                        name: '平均每日币天销毁数',
                        data: this.cdd,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                        yAxisIndex: 0,
                    },{
                        name: '每日币天销毁总数',
                        data: this.cddSum,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
                        yAxisIndex : 1
                    }]
                });
            },

            getChartData() {
                let _self = this;
                _self.$Loading.start();
                _self.$webApi.getChartData(_self.period)
                    .then(res => {
                        let data = res.data.data;
                        _self.cdd = [];
                        _self.cddSum = [];
                        for (let i = 0; i < data.blocks_over_time.length - 1; i ++) {
                            let o = data.blocks_over_time[i];
                            _self.cdd.push([o.date, o.days_destroyed]);
                            _self.cddSum.push([o.date, o.sum_days_destroyed])
                        }
                        max = _self.cdd[0][1];
                        max2 = _self.cddSum[0][1];
                        for (let i = 0; i < _self.cdd.length; i++) {
                            max = Math.max(max, _self.cdd[i][1]);
                            max2 = Math.max(max, _self.cddSum[i][1]);
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
        margin-top: 25px;
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