<template>
  <div class = "graph_canvas">
    <row class = "block">
      <i-col span = "16">
        <div class = "graph">
          <div id = "line" class = "chart"></div>
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

  var data = [];
  var now = +new Date(2000, 8, 29);
  var oneDay = 24 * 3600 * 1000;
  var value = Math.random() * 1000;
  for(var i = 0; i < 1000; i++){
    data.push(randomData());
  }

  function updateData(chart) {
    for (let i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }
    chart.setOption({
      series: [{
        data: data
      }]
    })
  }

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
          this.echarts.resize()
        }.bind(this));
      }

    },

    mounted() {
      this.myChart = echarts.init(document.getElementById("line"));
      this.myChart.setOption({
        title: {
          text: 'Market - bitcoin'
        },
        xAxis: {
          name: '时间',
          type: 'time',
          axisLine: {
            lineStyle: {
              color: '#323c48',
              width: 2,
              type: 'solid'
            }
          },
          axisTick: {
            length: '0'
          },
          axisLabel: {
            textStyle: {
              color: '#323c48',
              fontSize: 12,
              rotate: 25,
              fontWeight: 900
            }
          },
          splitLine: {
            show: false
          },
          nameTextStyle: {     //名称的样式
            color: '#323c48',
            fontSize: 12,
            fontWeight: 900,
          },
          nameLocation: 'end'
        },

        yAxis: {
          type: 'value',
          name: '兑换率',
          boundaryGap: [0, '100%'],
          nameTextStyle: {
            color: '#323c48',
            fontSize: 12,
            fontWeight: 900
          },
          nameGap: 10,
          axisTick: {
            length: 0
          },
          axisLine: {
            lineStyle: {
              color: '#323c48',
              width: 2,
              type: 'solid'
            }
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: true
          },
          axisLabel: {
            margin: 5,
            textStyle: {
              color: '#323c48',
              fontSize: 12,
              fontWeight: 900
            }
          },
          nameLocation: 'end'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          itemStyle: {  //折线拐点的样式
            normal: {
              color: '#20aefc',
              symbol: 'droplet',
              symbolSize: 5
            }
          },
          lineStyle: {  //线条的样式
            normal: {
              color: '#323c48',  //折线颜色
            }
          },
//          areaStyle: { //区域填充样式
//            normal: {
//              //线性渐变
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                offset: 0, color: '#b1e3fe' // 0% 处的颜色
//              }, {
//                offset: 1, color: '#fff' // 100% 处的颜色
//              }], false)
//            }
//          },
          data: data
        }]
      });
      setInterval(updateData, 1000, this.myChart);
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
