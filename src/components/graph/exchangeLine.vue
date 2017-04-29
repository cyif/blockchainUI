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
  import cGraphInfo from './graphInfo.vue';

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    }
  }

  var xData = function() {
    var data = [];
    for (var i =1; i < 15; i++) {
      data.push(i + "");
    }
    return data;
  }();

  export default {
    components: {ICol, cGraphInfo},
    data() {
      return {
        myChart: {}
      }
    },

    methods: {
      _init(){
        window.addEventListener('resize', () => {
          this.myChart.resize();
        })
      }
    },

    mounted() {
      this.myChart = echarts.init(document.getElementById("exchangeLine"));
      this.myChart.setOption({
//        title: {
//          text: '今日&昨日',
//          left: '10%',
//          textAlign: 'left'
//        },
        tooltip: {
          trigger: 'asix',
          axisPointer: {
            lineStyle: {
              color: '#ddd'
            }
          },
          backgroundColor: 'rgba(255,255,255,1)',
          padding: [5, 10],
          textStyle: {
            color: '#7588E4',
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
//        legend: {
//          right: 20,
//          orient: 'vertical',
//          data: ['今日', '昨日']
//        },
        xAxis: {
          type: 'category',
          data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', "22:00"],
          boundaryGap: false,
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: ['#D4DFF5']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#609ee9'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: ['#D4DFF5']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#609ee9'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 10,
          end: 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#D4DFF5',

          },
          textStyle: {
            color: '#7588E4'
          },
          borderColor: '#ddd'
        }, {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
          top:10,
        }],
        series: [{
          name: '今日',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 6,
          data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(199, 237, 250,0.5)'
              }, {
                offset: 1,
                color: 'rgba(199, 237, 250,0.2)'
              }], false)
            }
          },
          itemStyle: {
            normal: {
              color: '#f7b851'
            }
          },
          lineStyle: {
            normal: {
              width: 3
            }
          }
        }, {
          name: '昨日',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 6,
          data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822'],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(216, 244, 247,1)'
              }, {
                offset: 1,
                color: 'rgba(216, 244, 247,1)'
              }], false)
            }
          },
          itemStyle: {
            normal: {
              color: '#58c8da'
            }
          },
          lineStyle: {
            normal: {
              width: 3
            }
          }
        }]
      });
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
    overflow: scroll;
  }
  .chart {
    width : 95%;
    height : calc(100% - 20px);
    margin : 0 auto;
    overflow: scroll;
  }
</style>
