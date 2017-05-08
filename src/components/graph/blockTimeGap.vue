<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <Button-group class="button">
                    <Button @click = "changePeriod(0)" style="font-weight: bold; color: #3a4a4d;">所有时间</Button>
                    <Button @click = "changePeriod(180) " style="font-weight: bold; color: #3a4a4d">近180天</Button>
                    <Button @click = "changePeriod(30)" style="font-weight: bold; color: #3a4a4d">近30天</Button>
                </Button-group>
                <div class = "graph" id="graph">
                    <div id = "blockTimeGap" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    块平均创建时间随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过调整不同的区块开采难度，以使得每十分钟左右生成一个新的区块。虽然有人说自2013年全网算力暴增，导致难度调整一直跟不上算力的增长速度，从而导致现在每个块的间隔时间不断缩小，但是从总体趋势来看，其仍然维持在10分钟左右，保证每小时大约生成6个块。</p>
                </Panel>
            </Collapse>
        </row>
    </Card>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import Collapse from "../../../node_modules/iview/src/components/collapse/collapse";
    import Panel from "../../../node_modules/iview/src/components/collapse/panel";

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
                period: 0,
                btimeGap: []
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.drawChart()
                }.bind(this));
            },

            changePeriod(period) {
                this.period = period;
                this.getChartData();
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('blockTimeGap'));
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
                        name: '分钟',
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
                        name: '块平均创建时间：',
                        data: this.btimeGap,
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
                        _self.btimeGap = [];
                        for (let i = 0; i < data.blocks_over_time.length; i ++) {
                            let o = data.blocks_over_time[i];
                            _self.btimeGap.push([o.date, o.btime/60])
                        }
                        max = _self.btimeGap[0][1]/60;
                        for (let i = 0; i < _self.btimeGap.length; i++) {
                            max = Math.max(max, _self.btimeGap[i][1]/60);
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
    .graph {
        height : 350px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
    .button{
        margin-left: 75px;
    }
</style>