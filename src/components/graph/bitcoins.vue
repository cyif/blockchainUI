<template>
    <Card class = "graph_canvas">
        <row class = "block">
            <i-col span = "18">
                <div class = "graph" id="graph">
                    <div id = "bitcoins" class = "chart"></div>
                </div>
            </i-col>
            <i-col span="6">
                <div class = "circle" align="left">
                    <div style="padding-top: 30%;
        padding-bottom: 10%;">
                        <i-circle
                                :size="200"
                                :trail-width="5"
                                :stroke-width="5"
                                :percent="percent"
                                stroke-linecap="round"
                                stroke-color="#1784cd">
                            <div class="demo-i-circle-custom">
                                <h1>{{coinsCount}}</h1>
                                <br>
                                <h3>目前已发行比特币</h3>
                                <br>
                                <h3>
                总占数
                <h3>{{percent}}%</h3>
            </h3>
                            </div>
                        </i-circle>
                    </div>
                </div>
            </i-col>
        </row>
        <row class = "block">
            <Collapse v-model="value1">
                <Panel name="1" style="font-size: 14px; background-color: #3a4a4d">
                    比特币数目随时间变化
                    <p slot="content" style="font-size: 16px;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自2009年1月4日（北京时间），"中本聪"生成了创世区块并获得50比特币奖励开始，随着每一个块的生成，会有新的比特币发行，直到市场上的比特币数目达到2100万个后不再有新的比特币生成，目前已有百分之{{percent}}%的比特币流动于市场中。从时间上来看，从一开始比特币刚刚诞生时较为平缓的增长速度，到2009年12月出现明显拐点，比特币增长速度大幅提升，这与初始块挖掘难度较低，以及越来越高的关注热度有很大的关系。但由百度指数搜索比特币可以看到，在中国，首次关注波峰出现于2013年第二季度，再之后直到2013年第四季度迎来关注热潮，而那时比特币的增长速度已开始减缓，从某种意义上而言，可以说我们错过了比特币发展正盛的阶段。再仔细观察，可以看到2016年7月份又出现一个轻微的拐点，在比特币挖掘的后期，这明显意味着挖矿难度的加大。</p>
                </Panel>
            </Collapse>
        </row>
    </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import data from '../../data/totalBitcoins.json'


    var values = data.values;
    var max = values[0][1];
    for (let i = 0; i < values.length; i++) {
        max = Math.max(max, values[i][1]);
    }



    export default {
        components: {ICol},
        data() {
            return {
                myChart: {},
                coinsCount: data.values[data.values.length-1][1],
                value1: '1'
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
                 let myChart = this.$echarts.init(document.getElementById('bitcoins'));
                 myChart.setOption({
                     backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
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
                         color: ['#f54123', '#ffeb00'],
                         min: 0,
                         max: Math.ceil(max),
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
                         name: '比特币数目',
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
                         name: '已发行比特币数目',
                         data: values,
                         type: 'line',
                         smooth:true,
                         symbol: 'none',
                     }]
                 });
             }
        },
        mounted(){
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