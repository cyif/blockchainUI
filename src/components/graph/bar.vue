<template>
  <div class = "graph_canvas">
    <row class = "block">
      <i-col span = "16">
        <div class = "graph">
          <div id = "bar" class = "chart"></div>
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
  import echarts from 'echarts';   // 图单独引用
  import ICol from "../../../node_modules/iview/src/components/grid/col";
  export default {
    components: {ICol},
    data() {
        return {
            myChart: {}
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
      this.myChart = echarts.init(document.getElementById("bar"));
      this.myChart.setOption({
        xAxis: [{
          name: '产品',
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#323c48',
              width: 2.5,
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
          nameLocation:'end',
          data: ['产品1', '产品2', '产品3', '产品4', '产品5']
        }],

        yAxis: [{
          name: '数量',
          type: 'value',
          boundaryGap: [0, '100%'],
          nameTextStyle: {
            color: '#323c48',
            fontSize: 12,
            fontWeight: 900
          },
          nameGap: 10,
          axisTick: {
            length: 0,
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
          nameLocation:'end'
        }],
        series: [{
          name: '预算拜访',
          stack: '拜访',
          type: 'bar',
          data: [2.0, 4.9, 5.9, 3, 6],
          barWidth: 16,
          barGap: 0
        }, {
          name: '预算阅读',
          stack: '阅读',
          type: 'bar',
          data: [2.6, 5.9, 3.6, 6, 8],
          barWidth: 16,
          barGap: 0
        }, {
          name: '预算调研',
          stack: '调研',
          type: 'bar',
          data: [2.0, 6.4, 6.0, 4, 5],
          barWidth: 16,
          barGap: 0
        }, {
          name: '实际拜访',
          stack: '拜访',
          type: 'bar',
          data: [4.0, 5.9, 3, 3, 6],
          barWidth: 16,
          barGap: 0
        }, {
          name: '实际阅读',
          stack: '阅读',
          type: 'bar',
          data: [5.6, 4.9, 6, 5, 5],
          barWidth: 16,
          barGap: 0
        }, {
          name: '实际调研',
          stack: '调研',
          type: 'bar',
          data: [2.0, 3.4, 8],
          barWidth: 16,
          barGap: 0
        }]
      });
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
