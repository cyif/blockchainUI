<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <span style="font-weight: bold; font-size: 20px; align-items: center"> 在线矿工分布 </span>
                    <div id = "onlineMap" class = "chart"></div>
                </div>
            </i-col>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import world from './world'

    let points = [];
    export default {
        components: {ICol},
        data() {
            let data = this.$webApi.getJsonData('geo.json');
            for (let i = 0; i < data.onlineNow.length; i += 3) {
                points.push([data.onlineNow[i+1], data.onlineNow[i]]);
            }
            return {
                myChart: {},
                value1: '1'
            }
        },
        methods: {
            _init() {
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'miningChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            drawChart() {
                let myChart = this.$echarts.init(document.getElementById('onlineMap'));
                myChart.setOption({
                    backgroundColor: '#f1f2f0',
                    geo: {
                        map: 'world',
                        left: 0,
                        right: 0,
                        roam: true,
                        itemStyle: {
                            normal: {
                                borderColor: '#f1f2f0',
                                color: '#1784cd'
                            },
                            emphasis: {
                                areaColor: '#0d47a1'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: points,
                        symbolSize: 6,
                        // large: true,
                        largeThreshold: 100,
                        // 设置混合模式为叠加
                        blendMode: 'screen',
                        itemStyle: {
                            normal: {
                                color: '#ec407a',
                            }
                        }
                    }]
                });
            }
        },
        mounted() {
            this._init();
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
        height : 600px;
        margin : 10px;
    }
    .chart {
        width : 100%;
        height : calc(100% - 20px);
        margin : 10px;
    }
</style>