<template>
    <Card id="d3tree" class="container-fluid">
        <div class = "graph" id="graph">
            <div id = "txsTree" class = "chart"></div>
        </div>
    </Card>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";

    export default {
        props: ['trade'],
        data () {
            return {
                nodes: [],
                links: []
            }
        },
        mounted(){
            this._init();
            this.getChartData();
            this.drawChart();
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.drawChart()
                }.bind(this));
            },
            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('txsTree'));
                myChart.setOption({
                    title: {
                        text: '交易流向图'
                    },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                        {
                            type: 'graph',
                            layout: 'none',
                            symbolSize: 30,
                            roam: true,
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            edgeSymbol: ['circle', 'arrow'],
                            edgeSymbolSize: [4, 10],
                            edgeLabel: {
                                normal: {
                                    textStyle: {
                                        fontSize: 20
                                    }
                                }
                            },
                            data: this.nodes,
                            links: this.links,
                            lineStyle: {
                                normal: {
                                    opacity: 0.9,
                                    width: 2,
                                    curveness: 0
                                }
                            }
                        }
                    ]
                });
            },
            getChartData() {
                this.nodes.push({
                    name: "交易",
                    x: 600,
                    y: 300
                });
                console.log(this.trade);
                let k = 1;
                for (let i = 0; i < this.trade.vins.length; i++) {
                    let vin = this.trade.vins[i];
                    this.nodes.push({
                        name: vin.address,
                        x: 0,
                        y: 300 + i * 50 * k
                    });
                    k *= -1;
                    this.links.push({
                        source: vin.address,
                        target: "交易",
                        value: Math.abs(vin.amount),
                        lineStyle: {
                            normal: { curveness: 0.2 }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}'
                            }
                        }
                    });
                }
                for (let i = 0; i < this.trade.vouts.length; i++) {
                    let vout = this.trade.vouts[i];
                    this.nodes.push({
                        name: vout.address,
                        x: 1600,
                        y: 300 + i * 50 * k
                    });
                    k *= -1;

                    this.links.push({
                        source: "交易",
                        target: vout.address,
                        value: Math.abs(vout.amount),
                        lineStyle: {
                            normal: { curveness: 0.2 }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}'
                            }
                        }
                    });
                }
//                console.log(this.links);
            }
        }
    }
</script>

<style scoped>
    #d3tree {
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }
    .chart {
        min-height: 500px;
        width: 90%;
    }
</style>
