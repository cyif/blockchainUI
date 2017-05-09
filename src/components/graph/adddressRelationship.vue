<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "12">
                <div class = "graph" id="graph">
                    <div id = "addRel" class = "chart"></div>
                </div>
            </i-col>
            <i-col span="12">
                <div class="graph" >
                    <div id="coinsRel" class="chart">
                    </div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import data from '../../data/relationship.json';
    import data2 from '../../data/relationship2.json'

    const e = 2.718281828459;
    function mapValue(x) {
        if (x > 1) {
            return 1 - Math.pow(e, 0.5*(1 - x));
        } else {
            return 1 - Math.pow(e, 0.5*(-x));
        }
    }
    let categories = [];
    let colors = ['#ec407a','#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#66bb6a', '#9ccc65', '#d4e157', '#ffb74d', '#78909c'];
    export default {
        components: {
            ICol
        },
        data() {
            return {
                myChart: {},
                myChart2: {},
                graph1: {
                    nodes: [],
                    links: []
                },
                graph2: {
                    nodes: [],
                    links: []
                }
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    this.drawChart()
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('addRel'));
                myChart.setOption({
                    title: {
                        text: '块内所含交易关系图（第166000块）',
                        subtext: 'Circular layout',
                        top: 'bottom',
                        left: 'center'
                    },
                    tooltip: {
                    },
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                        {
                            name: '块内所含交易关系图',
                            type: 'graph',
                            layout: 'circular',
                            circular: {
                                rotateLabel: true
                            },
                            data: this.graph1.nodes,
                            links: this.graph1.links,
                            categories: categories,
                            roam: true,
                            lineStyle: {
                                normal: {
                                    color: 'source',
                                    curveness: 0.3
                                }
                            }
                        }
                    ]
                });
                let myChart2 = this.$echarts.init(document.getElementById('coinsRel'));
                myChart2.setOption({
                    title: {
                        text: '块内所含交易关系图(第374916块）',
                        subtext: 'Circular layout',
                        top: 'bottom',
                        left: 'center'
                    },
                    tooltip: {
                    },
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                        {
                            name: '块内所含交易关系图',
                            type: 'graph',
                            layout: 'circular',
                            circular: {
                                rotateLabel: true
                            },
                            data: this.graph2.nodes,
                            links: this.graph2.links,
                            categories: categories,
                            roam: true,
                            lineStyle: {
                                normal: {
                                    color: 'source',
                                    curveness: 0.3
                                }
                            }
                        }
                    ]
                });
            },

            getChartData() {
                for (let i = 0; i < data.nodes.length; i++) {
                    let o = data.nodes[i];
                    categories.push({
                        name: o.name
                    });
                    this.graph1.nodes.push({
                        name: o.name,
                        itemStyle: {
                            normal: {
                                color: colors[i * 3 % colors.length]
                            }
                        },
                        value: mapValue(o.value),
                        symbolSize: mapValue(o.value) * 20,
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        category: i,
                        tooltip: {
                            formatter: '{b} :' + o.value
                        }
                    });
                }
                for (let i = 0; i < data.links.length; i++) {
                    let o = data.links[i];
                    this.graph1.links.push({
                        source: o.source,
                        target: o.target
                    });
                }
                for (let i = 0; i < data2.nodes.length; i++) {
                    let o = data2.nodes[i];
                    categories.push({
                        name: o.name
                    });
                    this.graph2.nodes.push({
                        name: o.name,
                        itemStyle: {
                            normal: {
                                color: colors[i * 3 % colors.length]
                            }
                        },
                        value: mapValue(o.value),
                        symbolSize: mapValue(o.value) * 20,
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        category: i,
                        tooltip: {
                            formatter: '{b} :' + o.value
                        }
                    });
                }
                for (let i = 0; i < data2.links.length; i++) {
                    let o = data2.links[i];
                    this.graph2.links.push({
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