<!--实际完成占比-->
<template>
    <div class="completeof">
       <!--顶部操作-->
        <top-section :showControl="showControl"></top-section>

        <!-- 可视图表-->
        <div class="chart">
            <e-chart id="modularNum1" height="400px" width="90%"  :chart1="chart1"></e-chart>
        </div>
        <div class="chart">
            <e-chart id="modularNum2" height="400px" width="90%"  :chart1="chart2"></e-chart>
        </div>
        <div class="chart">
            <e-chart id="modularNum3" height="400px" width="90%"  :chart1="chart3"></e-chart>
        </div>
        <div class="chart">
            <e-chart id="modularNum4" height="400px" width="90%"  :chart1="chart4"></e-chart>
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
                    nodeSelect:true,
                    startTimeShow:false,
                    endTimeShow:false,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:false
                    },
                    showcheckbox:false,
                    searchShow:false
                },
                chart1:{
                    title: {
                        text: '数量',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['占章节比例','占设计总量比例','占年计划比例','占季计划比例']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            formatter:'{value}%'
                        },
                    },
                    //                    缩放条
                    dataZoom: [
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 25,
                            height: '77%',
                            showDataShadow: false,
                            left: '96%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                            textStyle: {
                                color: '#fff' },
                            borderColor: '#90979c',
                            /*手柄的 icon 形状，支持路径字符串*/
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    yAxis: {
                        type: 'category',
                        data: ['一月']
                    },
                    series: [
                        {
                            name: '占章节比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[80]
                        },
                        {
                            name: '占设计总量比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[60]
                        },
                        {
                            name: '占年计划比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[50]
                        },
                        {
                            name: '占季计划比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[30]
                        },
                    ],
                },
                chart2:{
                    title: {
                        text: '产值',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    color:['#DEEFFE','blue','red','green'],
                    legend: {
                        data: ['占章节比例','占设计总量比例','占年计划比例','占季计划比例']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            formatter:'{value}%'
                        },
                    },
                    //                    缩放条
                    dataZoom: [
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 25,
                            height: '77%',
                            showDataShadow: false,
                            left: '96%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                            textStyle: {
                                color: '#fff' },
                            borderColor: '#90979c',
                            /*手柄的 icon 形状，支持路径字符串*/
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    yAxis: {
                        type: 'category',
                        data: ['']
                    },
                    series: [
                        {
                            name: '占章节比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[80]
                        },
                        {
                            name: '占设计总量比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[60]
                        },
                        {
                            name: '占年计划比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[
                                {
                                    value:80,
                                    itemStyle:{
                                        normal:{color:'red'}
                                    }
                                }
                            ]
                        },
                        {
                            name: '占季计划比例',
                            type: 'bar',
                            barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[30]
                        },
                    ],
                },
                chart3:{
                    title: {
                        text: '数量',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    color:['#fff'],
                    legend: {
                        data: ['数量占设章节比例']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            formatter:'{value}%'
                        },
                    },
                    //                    缩放条
                    dataZoom: [
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 25,
                            height: '77%',
                            showDataShadow: false,
                            left: '96%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                            textStyle: {
                                color: '#fff' },
                            borderColor: '#90979c',
                            /*手柄的 icon 形状，支持路径字符串*/
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    yAxis: {
                        type: 'category',
                        data: ['100章','200章','300章','400章']
                    },
                    series: [
                        {
                            name: '数量占设章节比例',
                            type: 'bar',
                            barWidth:'30%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[
                                {
                                    value:80,
                                    itemStyle:{
                                        normal:{color:'gray'}
                                    }
                                },
                                {
                                    value:30,
                                    itemStyle:{
                                        normal:{color:'green'}
                                    }
                                },
                                {
                                    value:50,
                                    itemStyle:{
                                        normal:{color:'#20A0FF'}
                                    }
                                },
                                {
                                    value:30,
                                    itemStyle:{
                                        normal:{color:'red'}
                                    }
                                }
                            ]
                        }
                    ],
                },
                chart4:{
                    title: {
                        text: '产值',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    color:['#fff'],
                    legend: {
                        data: ['产值占设章节比例']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            formatter:'{value}%'
                        },
                    },
                    //                    缩放条
                    dataZoom: [
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 25,
                            height: '77%',
                            showDataShadow: false,
                            left: '96%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                            textStyle: {
                                color: '#fff' },
                            borderColor: '#90979c',
                            /*手柄的 icon 形状，支持路径字符串*/
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    yAxis: {
                        type: 'category',
                        data: ['100章','200章','300章','400章']
                    },
                    series: [
                        {
                            name: '产值占设章节比例',
                            type: 'bar',
                            barWidth:'30%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[
                                {
                                    value:80,
                                    itemStyle:{
                                        normal:{color:'gray'}
                                    }
                                },
                                {
                                    value:30,
                                    itemStyle:{
                                        normal:{color:'green'}
                                    }
                                },
                                {
                                    value:50,
                                    itemStyle:{
                                        normal:{color:'#20A0FF'}
                                    }
                                },
                                {
                                    value:30,
                                    itemStyle:{
                                        normal:{color:'red'}
                                    }
                                }
                            ]
                        }
                    ],
                },
            }
        }
    }
</script>

<style>
    .completeof{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .chart{
        width: 50%;
        float: left;
        margin-top:20px;
    }

</style>