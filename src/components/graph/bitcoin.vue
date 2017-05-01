
<template>
  <div class = "graph_canvas">
    <row class = "block">
      <i-col span = "16">
        <div class = "graph">
          <div id = "bitcoin" class = "chart"></div>
        </div>
      </i-col>
      <i-col span = "8">
        <div class = graph_info>
          <p> "信息" </p>
        </div>
      </i-col>
    </row>
  </div>
</template>

<script>
    import echarts from 'echarts';
    import ICol from "../../../node_modules/iview/src/components/grid/col";

  export default{
      components: {ICol},
      data(){
          return{
              myChart: {}
          }
      },

      methods:{

      },

      mounted(){
          this.myChart = echarts.init(document.getElementById("bitcoin"));
          this.myChart.setOption({
              backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                  offset: 0,
                  color: '#f7f8fa'
              }, {
                  offset: 1,
                  color: '#cdd0d5'
              }]),
              title: {
                  text: '30天中比特币兑换率和比特币数目的增长率比对'
              },
              legend: {
                  right: 10,
                  data: ['1990', '2015']
              },
              xAxis: {
                  splitLine: {
                      lineStyle: {
                          type: 'dashed'
                      }
                  }
              },
              yAxis: {
                  splitLine: {
                      lineStyle: {
                          type: 'dashed'
                      }
                  },
                  scale: true
              },
              series: [{
                  name: '1990',
                  data: data[0],
                  type: 'scatter',
                  symbolSize: function (data) {
                      return Math.sqrt(data[2]) / 5e2;
                  },
                  label: {
                      emphasis: {
                          show: true,
                          formatter: function (param) {
                              return param.data[3];
                          },
                          position: 'top'
                      }
                  },
                  itemStyle: {
                      normal: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(120, 36, 50, 0.5)',
                          shadowOffsetY: 5,
                          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                              offset: 0,
                              color: 'rgb(251, 118, 123)'
                          }, {
                              offset: 1,
                              color: 'rgb(204, 46, 72)'
                          }])
                      }
                  }
              }, {
                  name: '2015',
                  data: data[1],
                  type: 'scatter',
                  symbolSize: function (data) {
                      return Math.sqrt(data[2]) / 5e2;
                  },
                  label: {
                      emphasis: {
                          show: true,
                          formatter: function (param) {
                              return param.data[3];
                          },
                          position: 'top'
                      }
                  },
                  itemStyle: {
                      normal: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(25, 100, 150, 0.5)',
                          shadowOffsetY: 5,
                          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                              offset: 0,
                              color: 'rgb(129, 227, 238)'
                          }, {
                              offset: 1,
                              color: 'rgb(25, 183, 207)'
                          }])
                      }
                  }
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