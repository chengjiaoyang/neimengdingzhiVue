<!--全栈构造物汇总-->
<template>
    <div class="fabric">
        <!--顶部操作-->
        <top-section :showControl="showControl"></top-section>

        <!--图表-->
        <div class="fabric-chart">
            <e-chart id="materials" height="400px" width="90%"  :chart1="chart1"></e-chart>
        </div>
        <div class="fabric-chart">
            <e-chart id="materials1" height="400px" width="90%"  :chart1="chart2"></e-chart>
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
                    startTimeShow:true,
                    endTimeShow:true,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:true
                    },
                    showcheckbox:true,
                    searchShow:false
                },
                chart1:{
                    title: {
                        text: '数量',
                    },
                    color: ['#66FF66','#FF3366','#FFFF33'],
                    legend: {
                        data: ['已完成','总设计量','未完成']
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
                            data : ['1#桥', '1#涵洞', '1#隧道'],
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
                    series : [
                        {
                            name:'已完成',
                            type:'bar',
                            barWidth: '20%',
                            data:[1500, 2500, 3500]
                        },
                        {
                            name:'总设计量',
                            type:'bar',
                            barWidth: '20%',
                            data:[4500, 4000, 5000]
                        },
                        {
                            name:'未完成',
                            type:'bar',
                            barWidth: '20%',
                            data:[2000, 3200, 5500]
                        },
                    ]
                },
                chart2:{
                    title: {
                        text: '产值',
                    },
                    color: ['#66FF66','#FF3366','#FFFF33'],
                    legend: {
                        data: ['已完成','总设计量','未完成']
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
                            data : ['1#桥', '1#涵洞', '1#隧道'],
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
                    series : [
                        {
                            name:'已完成',
                            type:'bar',
                            barWidth: '20%',
                            data:[1500, 2500, 3500]
                        },
                        {
                            name:'总设计量',
                            type:'bar',
                            barWidth: '20%',
                            data:[4500, 4000, 5000]
                        },
                        {
                            name:'未完成',
                            type:'bar',
                            barWidth: '20%',
                            data:[2000, 3200, 5500]
                        },
                    ]
                },

            }
        },
    }
</script>

<style>
    .fabric{
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;

    }
    .fabric-chart{
        width: 50%;
        margin-top: 20px;
        float: left;
    }

</style>