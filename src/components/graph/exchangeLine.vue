<template>
  <div class = "graph_canvas">
    <row class = "block">
      <i-col span = "16">
        <div class = "graph">
          <div id = "exchangeLine" class = "chart"></div>
        </div>
      </i-col>
      <i-col span = "8">
        <div class = graph_info>
          <c-graphInfo style="display:table-cell; vertical-align: middle"></c-graphInfo>
        </div>
      </i-col>
    </row>
  </div>
</template>
<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import cGraphInfo from  './graphInfo.vue'

    export default{
        components: {ICol, cGraphInfo},
        data(){
            return{
                myChart: {}
            }
        },

        methods:{

        },

        mounted(){
            this.myChart = echarts.init(document.getElementById("exchangeLine"));
            this.myChart.setOption({
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
                    max: 600
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
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
                },
                yAxis: {
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
                series: [{
                    name: 'exchangeRate',
                    data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
                    type: 'line',
                }
                ]
            })
        }
    }
</script>

<style scoped>
  .block {
    background-color: inherit;
    min-height: 410px;
  }
  .graph_canvas {
    background: white;
    border-radius: 8px;
    width: 100%;
    border: groove #30c9e8;
  }
  .graph_info {
    text-align: center;
    border-radius: 8px;
    padding-top: 10%;
    padding-bottom: 10%;
    margin: 0 auto;
    height: 400px;
    display: table;
  }
  .graph {
    padding : 10px;
    height: 400px;
    min-width: 500px;
    /*overflow: scroll; */
  }
  .chart {
    width : 95%;
    height : calc(100% - 20px);
    margin : 0 auto;
    /*overflow: scroll;*/
  }
  .grid{

  }
</style>
