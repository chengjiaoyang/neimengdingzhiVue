<!--月完成产值百分比-->
<template>
    <div class="outputPec">
        <top-section :showControl="showControl"></top-section>

        <!--图表-->
        <div class="outputPec-chart">
            <e-chart id="plantOf" height="400px" width="100%" :chart1="chart"></e-chart>
        </div>
        <!--下拉框-->
        <div class="output-select clearfix">
            <el-select v-model="selectValue">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!--图表-->
        <div class="outputPec-chart1">
            <e-chart id="plantOf4" height="400px" width="100%" :chart1="chart4">
            </e-chart>
        </div>
        <!--下拉框-->
        <div class="output-select1 ">
            <el-select v-model="selectValue">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
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
                selectValue:"",
                options:[
                    {
                        value:"构造物",
                        label:"构造物"
                    },
                    {
                        value:"构建",
                        label:"构建"
                    },
                    {
                        value:"材料",
                        label:"材料"
                    },
                    {
                        value:"工程量",
                        label:"工程量"
                    }
                ],
                chart: {
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
                        data: ['计划占总产值比', '实际占总产值比']
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
                        data:(function() {
                            const data = [];
                            for (let i = 1; i < 13; i++) {
                                data.push(i + '月份');
                            }
                            return data;
                        }()),
                        name:'月份'
                    }
                    ],
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
                        },
                        name:'数量',
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
                            handleSize: '100%',
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
                            name: '计划占总产值比',
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
                            name: '实际占总产值比',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,191,183,1)',
                                    label: {
                                        show: true,
                                        position: 'top',
//                                        formatter(p) {
//                                            return p.value > 0 ? p.value : '';
//                                        }
                                    }
                                }
                            },
                            data: [7,6,7,2,]
                        }
                    ]
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
                    legend: {
                        data: ['年计划占年产值','年计划占总产值']
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
                            handleSize: '100%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    yAxis: {
                        type: 'category',
                        data: ['2016年','2017年','2018年']
                    },
                    series: [
                        {
                            name: '年计划占年产值',
                            type: 'bar',
                            barWidth:'30%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(202,134,21,1)',
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[80,15,40]
                        },
                        {
                            name: '年计划占总产值',
                            type: 'bar',
                            barWidth:'30%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(104,12,21,1)',
                                    label: {
                                        show: true,
                                        position: 'top',//数据在中间显示
                                        formatter:'{c}%'//百分比显示
                                    }
                                }
                            },
                            data:[21,45,9]
                        }
                    ],
                }
            }
        }
    }
</script>

<style>
    .outputPec{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        width: 100%;
    }
    .outputPec .outputPec-chart{
        width: 50%;
        display: inline-block;
        float: left;
    }
    .output-select{
        float: left;
        margin-top: 20px;
    }
    .outputPec-chart1{
        width: 50%;
        margin-top: 40px;
    }
    .output-select1{
        margin-left: 50%;
    }

</style>