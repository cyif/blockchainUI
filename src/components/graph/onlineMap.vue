<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "24">
                <div class = "graph" id="graph">
                    <div id = "onlineMap" class = "chart"></div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px">
                    标题
                    <p slot="content" style="font-size: 16px;">
                        描述
                    </p>
                </Panel>
            </Collapse>
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
                    backgroundColor: '#003',
                    geo: {
                        map: 'world',
                        left: 0,
                        right: 0,
                        silent: true,
                        itemStyle: {
                            normal: {
                                borderColor: '#003',
                                color: '#005'
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: points,
                        symbolSize: 3,
                        // large: true,
                        largeThreshold: 100,
                        itemStyle: {
                            normal: {
                                opacity: 0.4
                            }
                        },
                        // 设置混合模式为叠加
                        blendMode: 'lighter'
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