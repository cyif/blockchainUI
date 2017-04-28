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
  function makeCategoryData() {
    var categoryData = [];
    for (var i = 0; i < lineCount; i++) {
      categoryData.push(i + 'a');
    }
    return categoryData;
  }

  function makeSeriesData(year, negative) {
    // make a fake value just for demo.
    var r = (year - beginYear + 1) * 10;
    var seriesData = [];

    for (var i = 0; i < lineCount; i++) {
      var sign = (negative ? -1 * ((i % 3) ? 0.9 : 1): 1 * (((i + 1) % 3) ? 0.9 : 1));
      seriesData.push({
        value: 0,
        value: sign * (
          year <= beginYear + 1
            ? (Math.abs(i - lineCount / 2 + 0.5) < lineCount / 5 ? 5 : 0)
            : (lineCount - Math.abs(i - lineCount / 2 + 0.5)) * r
        ),
        symbolOffset: (i % 2) ? ['50%', 0] : null
      });
    }
    return seriesData;
  }



  // Set dynamic data.
  var currentYear = beginYear;
  setInterval(function () {
    currentYear++;
    if (currentYear > endYear) {
      currentYear = beginYear;
    }
    myChart.setOption({
      xAxis: {
        name: currentYear
      },
      series: [{
        data: makeSeriesData(currentYear)
      }, {
        data: makeSeriesData(currentYear, true)
      }]
    });
  }, 800);

  var treeDataURI = 'http://pic.58pic.com/58pic/15/67/14/88c58PICNFg_1024.jpg';

  var beginYear = 2016;
  var endYear = 2050;
  var lineCount = 10;


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
          this.echarts.resize()
        }.bind(this));
      }

    },

    mounted() {
      this.myChart = echarts.init(document.getElementById("bitcoin"));
      this.myChart.setOption({
        color: ['#e54035'],
        xAxis: {
          axisLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          splitLine: {show: false},
          name: beginYear,
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            color: 'green',
            fontSize: 30,
            fontFamily: 'Arial'
          },
          min: -2800,
          max: 2800
        },
        yAxis: {
          data: makeCategoryData(),
          show: false
        },
        grid: {
          top: 'center',
          height: 280
        },
        series: [{
          name: 'all',
          type: 'pictorialBar',
          symbol: 'image://' + treeDataURI,
          symbolSize: [30, 55],
          symbolRepeat: true,
          data: makeSeriesData(beginYear),
          animationEasing: 'elasticOut'
        }, {
          name: 'all',
          type: 'pictorialBar',
          symbol: 'image://' + treeDataURI,
          symbolSize: [30, 55],
          symbolRepeat: true,
          data: makeSeriesData(beginYear, true),
          animationEasing: 'elasticOut'
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
