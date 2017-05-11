<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "calendar" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <!--<Collapse v-model="value1">-->
                <!--<Panel name="1" style="font-size: 14px">-->
                    <!--比特币数目随时间变化-->
                    <!--<p slot="content" style="font-size: 16px;">-->
                        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自2009年1月4日（北京时间），"中本聪"生成了创世区块并获得50比特币奖励开始，随着每一个块的生成，会有新的比特币发行，直到市场上的比特币数目达到2100万个后不再有新的比特币生成，目前已有百分之{{percent}}%的比特币流动于市场中。从时间上来看，从一开始比特币刚刚诞生时较为平缓的增长速度，到2009年12月出现明显拐点，比特币增长速度大幅提升，这与初始块挖掘难度较低，以及越来越高的关注热度有很大的关系。但由百度指数搜索比特币可以看到，在中国，首次关注波峰出现于2013年第二季度，再之后直到2013年第四季度迎来关注热潮，而那时比特币的增长速度已开始减缓，从某种意义上而言，可以说我们错过了比特币发展正盛的阶段。再仔细观察，可以看到2016年7月份又出现一个轻微的拐点，在比特币挖掘的后期，这明显意味着挖矿难度的加大。</p>-->
                <!--</Panel>-->
            <!--</Collapse>-->
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";

    export default {
        components: {ICol},
        data() {
            return {
                myChart: {},
                value1: '1',
                nbBlocks: []
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
                    if (this.$route.name === 'marketChart') {
                        this.drawChart();
                    }
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('calendar'));
                myChart.setOption({
                    backgroundColor: '#404a59',

                    title: {
                        top: 30,
                        text: '2016年某人每天的步数',
                        left: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {
                        top: '30',
                        left: '100',
                        data:['步数', 'Top 12'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    calendar: [{
                        top: 100,
                        left: 'center',
                        range: ['2016-01-01', '2016-06-30'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#000',
                                width: 4,
                                type: 'solid'
                            }
                        },
                        yearLabel: {
                            formatter: '{start}  1st',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#323c48',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        }
                    }],
                    series : [
                        {
                            name: '步数',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: nbBlocks,
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ddb926'
                                }
                            }
                        },
                        {
                            name: 'Top 12',
                            type: 'effectScatter',
                            coordinateSystem: 'calendar',
                            data: data.sort(function (a, b) {
                                return b[1] - a[1];
                            }).slice(0, 12),
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                });
            },

            getChartData() {
                let _self = this;
                _self.$Loading.start();
                _self.$webApi.getChartData(180)
                    .then(res => {
                        let data = res.data.data;
                        for (let i = 0; i < data.blocks_over_time.length; i++) {
                            let o = data.blocks_over_time[i];
                            _self.nbBlocks.push([echarts.format.formatTime('yyyy-MM-dd', o.date), o.nb_blocks])
                        }
                        _self.drawChart();
                        _self.$Loading.finish();
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