<template>
</template>

<script>
  var option = {
    tooltip : {  //提示框
      trigger: 'axis',  //触发类型(坐标轴触发)
      alwaysShowContent:false,  //是否永远显示提示框的内容
      backgroundColor:'rgba(32,174,252,0.7)', //提示框的背景颜色
      textStyle:{  //提示框浮层的文本样式
      },
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        name:'时间',        //X轴名称单位
        nameLocation:'end', //名称的位置
        nameTextStyle:{     //名称的样式
          color:'#999',
          fontSize:'12px'
        },
        nameGap:0,  //名称与X轴的距离
        boundaryGap: true,//坐标的刻度是否在中间
        min:'3',//坐标轴刻度最小值
        max:'dataMax', //坐标轴刻度的最大值
        axisLine:{//坐标轴线条相关设置(颜色等)
          lineStyle:{
            color:'#ccc'
          }
        },
        axisTick:{ //坐标轴刻度相关设置
          length:'0' //我把长度设置成0了
        },
        axisLabel:{ //坐标轴刻度标签
          margin:7, //刻度标签与轴线之间的距离
          textStyle:{
            color:"#999",  //坐标轴刻度文字的颜色
            fontSize:'12px' //坐标轴刻度文字的大小
          }
        }
      }
    ],//X轴设置
    yAxis : [
      {
        type : 'value', //类型数值轴
        name:'(人)',    //坐标轴名称
        nameTextStyle:{     //名称的样式
          color:'#999',
          fontSize:'12px'
        },
        nameGap:3,  //名称与Y轴的距离
        axisTick:{ //坐标轴刻度相关设置
          length:'0' //我设置成0了
        },
        axisLine:{//坐标轴线条相关设置(颜色等)
          lineStyle:{
            color:'#ccc'
          }
        },
        axisLabel:{//坐标轴标签相关设置,距离颜色等
          margin:7,
          //formatter: '{value} °C',//标签内容内置的格式转化器比如这个表示在后面加一个c
          textStyle:{
            color:"#999",  //坐标轴刻度文字的颜色
            fontSize:'12px' //坐标轴刻度文字的大小
          },
        },
        splitLine:{    //坐标轴分隔线。默认数值轴显示，类目轴不显示。
          show:false
        }
      }
    ],
    grid:{ //直角坐标系内绘图网格
      left:36  //由于1000显示被挡住了,所以我让他左移36px;这个功能类似于paddingleft
    },
    series : [  //系列列表
      {
        name:'人',   //系列名称 用于tooltip的显示
        type:'line',
        data:[360, 500, 400, 600, 530, 840, 540,350],
        itemStyle:{  //折线拐点的样式
          normal:{
            color:'#20aefc',  //折线拐点的颜色
          }
        },
        lineStyle:{  //线条的样式
          normal:{
            color:'#20aefc',  //折线颜色
          }
        },
        areaStyle:{ //区域填充样式
          normal:{
            //线性渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#b1e3fe' // 0% 处的颜色
            }, {
              offset: 1, color: '#fff' // 100% 处的颜色
            }], false)
          }
        },
        markPoint : { //图标标注
          data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name: '平均值'}
          ]
        }
      }

    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
</script>
