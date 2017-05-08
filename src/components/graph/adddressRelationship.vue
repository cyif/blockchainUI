<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "blockTimeGap" class = "chart"></div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import data from '../../data/relationship.json';

    const e = 2.718281828459;
    function mapValue(x) {
        if (x > 1) {
            return 1 - Math.pow(e, 0.5*(1 - x));
        } else {
            return 1 - Math.pow(e, 0.5*(-x));
        }
    }
    let categories = [];
    let colors = ['red', 'yellow', 'blue'];
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
                let myChart = this.$echarts.init(document.getElementById('blockTimeGap'));
                myChart.setOption({
                    title: {
                        text: '钱包地址',
                        subtext: 'Circular layout',
                        top: 'bottom',
                        left: 'right'
                    },
                    tooltip: {
                    },
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                        {
                            name: '钱包地址',
                            type: 'graph',
                            layout: 'circular',
                            circular: {
                                rotateLabel: true
                            },
                            data: this.graph.nodes,
                            links: this.graph.links,
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
                    this.graph.nodes.push({
                        name: o.name,
                        itemStyle: {
                            normal: {
                                color: colors[i % 3]
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