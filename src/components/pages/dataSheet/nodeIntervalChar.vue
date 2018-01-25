<!--节点延时图-->
<template>
    <div class="nodeInterval">
        <top-section :showControl="showControl"></top-section>
        <!--图表-->
        <div class="node-progress">
            <e-chart id="node-interval" height="400px" width="90%"  :chart1="thisChart"></e-chart>
        </div>
    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import EChart from '../../common/echarts/echarts'
    export default {
        components:{
            TopSection,
            EChart
        },
        data(){
            return{
                showControl:{
                    nodeSelect:false,
                    startTimeShow:false,
                    endTimeShow:false,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:false
                    },
                    showcheckbox:true,
                    searchShow:true
                },
                thisChart: {
                    backgroundColor:'#fff',
                    /*标题组件，包含主标题和副标题*/
                    title:{
                        text:'统计',
                        x:'4%',
                        textStyle:{
                            color:'#fff',
                            fontSize:'22'
                        },
                        subtextStyle: {
                            color: '#90979c',
                            fontSize: '16'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    /*直角坐标系内绘图网格*/
                    grid: {
                        borderWidth: 0,
                        top: 110,
                        bottom: 95,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    /*图例组件，展现不同系列的标记*/
                    legend: {
                        x: '15%',
                        top: '10%',
                        textStyle: {
                            color: '#90979c'
                        },
                        data: ['计划用时','实际用时']
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#90979c'
                            }
                        },
                        /*坐标轴在 grid 区域中的分隔线*/
                        splitLine: {
                            show: false
                        },
                        /*坐标轴刻度相关设置*/
                        axisTick: {
                            show: false
                        },
                        /*坐标轴在 grid 区域中的分隔区域*/
                        splitArea: {
                            show: false
                        },
                        /*坐标轴刻度标签的相关设置*/
                        axisLabel: {
                            /*坐标轴刻度标签的显示间隔*/
                            interval: 0
                        },
                        /*图例的数据数组*/
                        data: ['一分队','二分队','三分队']
                    }],
                    yAxis: [{
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#90979c'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0
                        },
                        splitArea: {
                            show: false
                        }
                    }],
                    /* 用于区域缩放*/
                    dataZoom: [
                        {
                            show: true,
                            height: 30,
                            xAxisIndex: [
                                0
                            ],
                            bottom: 30,
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
                    /*在多个 ECharts option 间进行切换、播放等操作的功能*/
                    series: [
                        {
                            name: '计划用时',
                            type: 'bar',
//                        barMaxWidth: 35,
                            barGap: '10%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,144,128,1)',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        },
                                        position: 'insideTop',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : '';
                                        }
                                    }
                                }
                            },
                            data: [1,3,5,2]
                        },
                        {
                            name: '实际用时',
                            type: 'bar',
//                        barMaxWidth: 35,
                            barGap: '10%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(21,102,29,1)',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        },
                                        position: 'insideTop',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : '';
                                        }
                                    }
                                }
                            },
                            data: [2,4,6,10]
                        },

                    ]
                }
            }
        }
    }
</script>

<style>
    .nodeInterval{
        padding-left: 10px;
        padding-top: 10px;
        box-sizing: border-box;
    }

</style>