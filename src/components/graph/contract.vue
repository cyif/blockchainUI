<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "contract" class = "chart"></div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import {webApi} from '../../service/WebApi';

    let data = webApi.getJsonData('contract.json');

    let categories = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J'];


    let colors = ['#ec407a','#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#66bb6a', '#9ccc65', '#d4e157', '#ffb74d'];
    export default {
        components: {
            ICol
        },
        data() {
            return {
                myChart: {},
                graph: {
                    nodes: [],
                    links: []
                },
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
                let myChart = this.$echarts.init(document.getElementById('contract'));
                myChart.setOption({

                    series : [
                        {
                            name: '智能合约',
                            type: 'graph',
                            layout: 'none',
                            symbolSize: 50,
                            edgeSymbol: ['circle', 'arrow'],
                            edgeSymbolSize: [4, 10],
                            // 连接线上的文字
                            edgeLabel: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 20
                                    }
                                }
                            },
                            lineStyle: {
                                normal: {
                                    opacity: 1,
                                    width: 2,
                                    curveness: 0.1
                                }
                            },
                            // 圆圈内的文字
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            data: this.graph.nodes,
                            links: this.graph.links,
                            roam: true,
                        }
                    ]
                });
            },

            getChartData() {
                for (let i = 0; i < data.nodes.length; i++) {
                    let o = data.nodes[i];
                    this.graph.nodes.push({
                        name: o.name,
                        value: o.value,
                        symbolSize: 1,
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        tooltip: {
                            formatter: '{b} :' + o.value
                        }
                    });
                }
                for (let i = 0; i < 3; i++) {
                    let o = data.links[i];
                    this.graph.links.push({
                        source: o.source,
                        target: o.target
                    });
                }

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
        height : 500px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
</style>