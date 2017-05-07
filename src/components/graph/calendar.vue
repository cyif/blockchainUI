<template>
  <Card class = "graph_canvas">
    <row class = "block">
      <i-col span = "16">
        <div class = "graph">
          <div id = "calendar" class = "chart"></div>
        </div>
      </i-col>
      <i-col span = "8">
        <div class = graph_info>
          <p> "信息" </p>
        </div>
      </i-col>
    </row>
  </Card>
</template>

<script>
  import echarts from 'echarts';
  import ICol from "../../../node_modules/iview/src/components/grid/col";

  function getVirtualData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  var data = getVirtualData(2016);

  export default {
    components: {ICol},
    data() {
      return {
        myChart : {}
      }
    },

    methods: {
      _init() {
        window.addEventListener('resize', function() {
          this.drawChart()
        }.bind(this));
      }

    },

    mounted() {
      this.myChart = echarts.init(document.getElementById("calendar"));
      this.myChart.setOption({
        backgroundColor: '',

        title: {
          top: 5,
          text: '2016年每天的块创建数',
          left: 'center',
          textStyle: {
            color: '#212121',
            size: 35,
          },

        },
        tooltip : {
          trigger: 'item'
        },
        legend: {
          top: '30',
          left: '40',
          data:['步数', 'Top 10'],
          textStyle: {
            color: '#212121'
          },

        },
        calendar: [{
          top: 85,
          left: 'center',
          range: ['2016-01-01', '2016-06-30'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#000',
              width: 4,
              type: 'solid'
            }
          },
          yearLabel: {
            formatter: '{start}  1st',
            textStyle: {
              color: '#fff'
            },
            align: 'center'
          },
          itemStyle: {
            normal: {
              color: '#323c48',
              borderWidth: 1,
              borderColor: '#111'
            }
          }
        }, {
          top: 285,
          left: 'center',
          range: ['2016-07-01', '2016-12-31'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#000',
              width: 4,
              type: 'solid'
            }
          },
          yearLabel: {
            formatter: '{start}  2nd',
            textStyle: {
              color: '#fff'
            },
            align: 'center'
          },
          itemStyle: {
            normal: {
              color: '#323c48',
              borderWidth: 1,
              borderColor: '#111'
            }
          }
        }],
        series : [
          {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
              return val[1] / 500;
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data,
            symbolSize: function (val) {
              return val[1] / 500;
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data.sort(function (a, b) {
              return b[1] - a[1];
            }).slice(0, 10),
            symbolSize: function (val) {
              return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          },
          {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function (a, b) {
              return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
              return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
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
    background: #f1f2f0;
    border-radius: 8px;
  }
  .graph_info {
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
  }
  .graph {
    height : 450px;
    margin : 10px;
  }
  .chart {
    width : 100%;
    height : calc(100% - 20px);
    margin : 10px;
  }
</style>
