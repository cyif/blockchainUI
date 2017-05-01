<template>
    <div class = "graph_canvas">
        <row class = "block">
            <i-col span = "16">
                <div class = "graph">
                    <div id = "line" class = "chart"></div>
                </div>
            </i-col>
            <i-col span = "8">
                <div class = graph_info>
                    <p> "信息" </p>
                    <p> {{data}}</p>
                </div>
            </i-col>
        </row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";

    export default {
        props: ['data'],
        components: {ICol},
        data() {
            return {
                myChart : {},
                category: [],
                dottedBase : +new Date(),
            }
        },
        created() {
            this.dottedBase = new Date();
            for (let i = 0; i <= 30; i++) {
                let date = new Date(this.dottedBase);
                this.category.unshift([
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                ].join('-'));
                this.dottedBase -= 1000 * 3600 * 24
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function() {
                    this.echarts.resize()
                }.bind(this));
            }

        },

        mounted() {
            this.myChart = echarts.init(document.getElementById("line"));
            this.myChart.setOption({

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            backgroundColor: '#fff'
                        }
                    }
                },
                legend: {
                    data: ['区块数'],
                    textStyle: {
                        color: '#333'
                    }
                },
                xAxis: {
                    data: this.category,
                    axisLine: {
                        lineStyle: {
                            color: '#333'
                        }
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#333'
                        }
                    }
                },
                series: [{
                    name: '区块数',
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#14c8d4'},
                                    {offset: 1, color: '#43eec6'}
                                ]
                            )
                        }
                    },
                    data: this.data
                }]
            })
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
        background: #f5f7f9;
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
