<!--分包队伍产值数量排名-->
<template>
    <div class="teamsRank">
        <!--顶部操作-->
        <top-section :showControl="showControl"></top-section>
        <!--表格-->
        <single-table :columns="columns" :tableData="tableData"></single-table>

        <!--图表-->
        <div class="output-progress">
            <e-chart id="this-output" height="400px" width="90%"  :chart1="thisChart"></e-chart>
        </div>
        <div class="num">
            <e-chart id="this-num" height="400px" width="90%"  :chart1="thisChart1"></e-chart>
        </div>
        <div class="output-progress">
            <e-chart id="tried-output" height="400px" width="90%"  :chart1="triedChart"></e-chart>
        </div>
        <div class="num">
            <e-chart id="tried-num" height="400px" width="90%"  :chart1="triedChart1"></e-chart>
        </div>
    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import SingleTable from '../../common/table/singleTable'
    import EChart from '../../common/echarts/echarts'

    export default {
        data(){
            return{
//                控制头部操作展示
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
                    showcheckbox:false,
                    searchShow:true
                },
                tableData:[
                    {
                        id:1,
                        teamName:"一分队",
                        workContent:"道桥",
                        unit:"内蒙**的项目",
                        thisComNum:45,
                        triedComNum:132,
                        triedComOutput:344

                    },
                    {
                        id:2,
                        teamName:"二分队",
                        workContent:"道桥",
                        unit:"内蒙**的项目",
                        thisComNum:45,
                        triedComNum:132,
                        triedComOutput:344

                    },
                ],
                columns:[
                    {
                        text:"分包队伍名称",
                        dataIndex:'teamName'
                    },
                    {
                        text:"工作内容",
                        dataIndex:'workContent'
                    },
                    {
                        text:"单位",
                        dataIndex:'unit'
                    },
                    {
                        text:"本期完成数量",
                        dataIndex:'thisComNum'
                    },
                    {
                        text:"开累完成数量",
                        dataIndex:'triedComNum'
                    },
                    {
                        text:"开累完成产值",
                        dataIndex:'triedComOutput'
                    }
                ],
                thisChart:{
                    title: {
                        text:'统计',
                        x:'4%',
                        textStyle:{
                            color:'#fff',
                            fontSize:'22'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['本期产值']
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
                        data: ['一分队','二分队']
                    },
                    series: [
                        {
                            name: '本期产值',
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
                                }
                            ]
                        }
                    ],
                },
                thisChart1: {
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
                        data: ['本期数量']
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
                            name: '本期数量',
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
                        }

                    ]
                },
                triedChart:{
                    title: {
                        text:'统计',
                        x:'4%',
                        textStyle:{
                            color:'#fff',
                            fontSize:'22'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['开累产值']
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
                        data: ['一分队','二分队']
                    },
                    series: [
                        {
                            name: '开累产值',
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
                                    value:30,
                                    itemStyle:{
                                        normal:{color:'orange'}
                                    }
                                },
                                {
                                    value:50,
                                    itemStyle:{
                                        normal:{color:'#44ffbc'}
                                    }
                                }
                            ]
                        }
                    ],
                },
                triedChart1:{
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
                        data: ['开累数量']
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
                            name: '开累数量',
                            type: 'bar',
//                        barMaxWidth: 35,
                            barGap: '10%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(45,144,128,1)',
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
                        }

                    ]
                },
            }
        },
        components:{
            TopSection,
            SingleTable,
            EChart,
        }
    }
</script>

<style>
    .teamsRank{
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .output-progress{
        margin-top:20px;
        width: 50%;
        float: left;
    }
    .num{
        margin-top:20px;
        width: 50%;
        float: right;
    }
</style>