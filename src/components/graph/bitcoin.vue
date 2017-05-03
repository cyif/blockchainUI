
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
              myChart: {},
              category: [],
              data1: [],
              data2: []
          }
      },
      methods:{

      },
      created() {
          this.data1 = [220, 182, 191, 134, 150,
              120, 110, 125, 145, 122,
              165, 122];
          this.data2 = [120, 110, 125, 145, 122,
              165, 122, 220, 182, 191,
              134, 150];
          let dottedBase = new Date();
          for (let i = 0; i <= 11; i++) {
              let date = new Date(dottedBase);
              this.category.unshift([
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate()
              ].join('-'));
              dottedBase -= 1000 * 3600 * 24
          }
      },
      mounted(){
          this.myChart = echarts.init(document.getElementById("bitcoin"));
          this.myChart.setOption({

              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow',
                      label: {
                          show: true,
                          backgroundColor: '#fff'
                      }
                  }
              },
              legend: {
                  data: ['比特币兑换率', '比特币增长率'],
                  textStyle: {
                      color: '#333'
                  }
              },
              xAxis: {
                  data: this.category,
                  axisLine: {
                      lineStyle: {
                          color: '#333'
                      }
                  }
              },
              yAxis: [{
                  name: '兑换率',
                  type: 'value',
                  position: 'left',
                  splitLine: {show: false},
                  axisLine: {
                      lineStyle: {
                          color: '#333'
                      }
                  }
              },{
                  name: '增长率',
                  position: 'right',
                  type: 'value',
                  splitLine: {show: false},
                  axisLine: {
                      lineStyle: {
                          color: '#333'
                      }
                  }
              }],
              series: [{
                  name: '比特币兑换率',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                      normal: {
                          barBorderRadius: 5,
                          color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                  {offset: 0, color: '#14c8d4'},
                                  {offset: 1, color: '#43eec6'}
                              ]
                          )
                      }
                  },
                  data: this.data1
              },{
                  name: '比特币增长率',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                      normal: {
                          barBorderRadius: 5,
                          color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                  {offset: 0, color: '#d49b23'},
                                  {offset: 1, color: '#eeda1e'}
                              ]
                          )
                      }
                  },
                  yAxisIndex: 1,
                  data: this.data2
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