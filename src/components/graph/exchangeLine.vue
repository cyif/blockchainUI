<template>
  <Card class = "graph_canvas">
    <row class = "block">
      <i-col span = "18">
        <div class = "graph" id="graph">
          <div id = "exchangeLine" class = "chart"></div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="graph_info">
          <span>
            <img src="../../image/exchange.png" width="120px" height="120px">
          </span>
          <br><br>
          <span style="font-size: 20px; font-weight: bold">比特币指数</span>
          <br><br>
          <span :USD="USD" style="font-size: 30px; font-weight: bold">${{USD.toFixed(2)}}</span>
        </div>
      </i-col>
    </row>
    <row>
      <Collapse v-model="value1">
        <Panel name="1" style="font-size: 14px">
          比特币市场价格随时间变化
          <p slot="content" style="font-size: 16px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;迄今为止，第一次泡沫是2011年4月到6月之间，比特币的价格从0.75美元飙升至30美元，随后暴跌至2美元。之后又一次历史性新高出现在2013年12月份，涨幅近850%，半个月的时间便折损一半，之后稳定在200多。于2015年10月开始新一轮的增长，目前处于相对高点，涨幅已达200%以上。类似目前的房地产市场，人们看涨比特币的价格走势，并买入比特币，导致比特币的价格上升，并持续这样的循环，直到泡沫破灭，价格暴跌。</p>
        </Panel>
      </Collapse>
    </row>
  </Card>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    import data from '../../data/exchangeLine.json'


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
                value1: '1',
                USD: data.values[data.values.length-1][1]
            }
        },
        methods: {
            _init() {
                this.myChart = this.$echarts.init(document.getElementById('exchangeLine'));
                window.addEventListener('resize', function () {
                    if (this.$route.name === 'marketChart') {
                        this.drawChart()
                    }
                }.bind(this));
            },

            drawChart() {
                this.myChart.setOption({
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
                        name: '美元',
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
                        name: '平均市场价格（美元）',
                        data: values,
                        type: 'line',
                        smooth:true,
                        symbol: 'none',
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
  .graph_info {
    align-items: left;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    min-height:300px;
    padding-top: 50px;
    padding-bottom: 50px;
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