<template>
  <div class="main_content">
    <div id="histogram"></div>
    <div id="outputValue"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'e-chart',
    data() {
    return {
      chart: null,
    }
  },
  methods: {
//    数量
    histogram (id) {
      this.chart = echarts.init(document.getElementById(id))
      this.chart.setOption({
        title: {
          text: '数量',
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 24,
            fontFamily: 'Helvetica',
            fontWeight: 400
          }
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        //      控制进度条
        /* 用于区域缩放*/
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 0,
            start: 10,
            end: 80,
            /*手柄的 icon 形状，支持路径字符串*/
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'
            },
            textStyle: {
              color: '#fff' },
            borderColor: '#90979c'
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        xAxis : [
          {
            type : 'category',
            data : ['设计总量', '完成总量', '计划总量'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'数量',
            type:'bar',
            barWidth: '30%',
            data:[3000, 4000, 5000,9000]
          }
        ]
      })
    },
//    产值
    outputValue (id) {
      this.chart = echarts.init(document.getElementById(id))
      this.chart.setOption({
        title: {
          text: '产值',
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 24,
            fontFamily: 'Helvetica',
            fontWeight: 400
          }
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['设计总量', '完成总量', '计划总量'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        //      控制进度条
        /* 用于区域缩放*/
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 0,
            start: 10,
            end: 80,
            /*手柄的 icon 形状，支持路径字符串*/
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'
            },
            textStyle: {
              color: '#fff' },
            borderColor: '#90979c'
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        itemStyle: {
          normal: {
            color: '#28727B',
          }
        },
        series : [
          {
            name:'产值',
            type:'bar',
            barWidth: '30%',
            data:[3000, 4000, 5000,9000]
          }
        ]
      })
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.histogram('histogram')
    })
    this.$nextTick(function() {
      this.outputValue('outputValue')
    })
  }
  }
</script>
<style scoped>
  #histogram {
    width: 700px;
    height: 600px;
    margin-left: 2%;
  }
  #outputValue{
    width: 700px;
    height: 600px;
    margin-left: 2%;
  }
  .main_content{
    display: flex;
  }
</style>
