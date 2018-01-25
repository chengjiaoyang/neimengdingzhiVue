<!--材料数量统计-->
<template>
    <div class="materials">
        <!--顶部操作-->
        <top-section :showControl="showControl"></top-section>
        <!--表格-->
        <div class="materials-table">
            <model-tree :columns="columns" :tree-structure="true" :data-source="dataSource"></model-tree>
        </div>

        <!--图-->
        <div class="materials-chart">
            <e-chart id="materials" height="400px" width="90%"  :chart1="chart1"></e-chart>
        </div>
        <div class="materials-chart-progress">
            <e-chart id="chart-progress" height="400px" width="90%"  :chart1="chart2"></e-chart>
        </div>
    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import ModelTree from '../../common/treenTable/modelTree'
    import EChart from '../../common/echarts/echarts'
    export default {
        name:"meterials",
        data(){
            return{
                columns:[
                    {
                        text:'编码',
                        dataIndex:'no'
                    },
                    {
                        text:'部位名称',
                        dataIndex:'deptName'
                    },
                    {
                        text:'构造物名称',
                        dataIndex:'fabricName'
                    },
                    {
                        text:'材料名称',
                        dataIndex:'materialName'
                    },
                    {
                        text:'设计数量',
                        dataIndex:'DesignNum'
                    },
                    {
                        text:'单位',
                        dataIndex:'unit'
                    },
                    {
                        text:'本期计划数量',
                        dataIndex:'thisPlantNum'
                    },
                    {
                        text:'本期完成数量',
                        dataIndex:'thisComNum'
                    },
                    {
                        text:'数量差值',
                        dataIndex:'numDiffer'
                    },
                    {
                        text:'完成比例',
                        dataIndex:'ComPer'
                    },
                    {
                        text:'开累完成数量',
                        dataIndex:'tiredComNum'
                    },
                    {
                        text:'开累完成比例',
                        dataIndex:'tiredComPer'
                    },
                    {
                        text:'开累确认数量',
                        dataIndex:'tiredSureNum'
                    },
                    {
                        text:'开累确认比例',
                        dataIndex:'tiredSurePer'
                    },
                    {
                        text:'开累计量数量',
                        dataIndex:'tiredCalNum'
                    },
                    {
                        text:'开累计量比例',
                        dataIndex:'tiredCalPer'
                    },

                ],
                showControl:{
                    nodeSelect:true,
                    startTimeShow:true,
                    endTimeShow:true,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:false
                    },
                    showcheckbox:false,
                    searchShow:true
                },
                dataSource:[
                    {
                        id:1,
                        parentId:0,
                        no:'A123',
                        deptName:'中铁七局铁道部',
                        fabricName:4,
                        materialName:1,
                        DesignNum:23,
                        unit:13,
                        thisPlantNum:2,
                        thisComNum:3,
                        numDiffer:1,
                        ComPer:3,
                        tiredComNum:3,
                        tiredComPer:4,
                        tiredSureNum:3,
                        tiredSurePer:56,
                        tiredCalNum:89,
                        tiredCalPer:'20%',
                        children:[
                            {
                                id:2,
                                parentId:1,
                                no:'A123',
                                deptName:'中铁七局铁道部',
                                fabricName:4,
                                materialName:1,
                                DesignNum:23,
                                unit:13,
                                thisPlantNum:2,
                                thisComNum:3,
                                numDiffer:1,
                                ComPer:3,
                                tiredComNum:3,
                                tiredComPer:4,
                                tiredSureNum:3,
                                tiredSurePer:56,
                                tiredCalNum:89,
                                tiredCalPer:'20%',
                            }
                        ]
                    },
                    {
                        id:3,
                        parentId:0,
                        no:'A123',
                        deptName:'中铁七局铁道部',
                        fabricName:4,
                        materialName:1,
                        DesignNum:23,
                        unit:13,
                        thisPlantNum:2,
                        thisComNum:3,
                        numDiffer:1,
                        ComPer:3,
                        tiredComNum:3,
                        tiredComPer:4,
                        tiredSureNum:3,
                        tiredSurePer:56,
                        tiredCalNum:89,
                        tiredCalPer:'20%',
                        children:[
                            {
                                id:4,
                                parentId:4,
                                no:'A123',
                                deptName:'中铁七局铁道部',
                                fabricName:4,
                                materialName:1,
                                DesignNum:23,
                                unit:13,
                                thisPlantNum:2,
                                thisComNum:3,
                                numDiffer:1,
                                ComPer:3,
                                tiredComNum:3,
                                tiredComPer:4,
                                tiredSureNum:3,
                                tiredSurePer:56,
                                tiredCalNum:89,
                                tiredCalPer:'20%',
                            }
                        ]
                    }
                ],
                chart1: {
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
                        data: ['设计总量', '计划数量', '完成数量','开累完成']
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
                        data: ['台帽','台身','承台','xx']
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
                            name: '设计总量',
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
                            name: '计划数量',
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
                        },
                        {
                            name: '完成数量',
                            type: 'bar',
//                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(202,134,21,1)',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : '';
                                        }
                                    }
                                }
                            },
                            data: [3,1,5,2]
                        },
                        {
                            name: '开累完成',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(145,199,174,1)',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : '';
                                        }}}
                            },
                            data: [ 7,6,5, 1]
                        },
                    ]
                },
                chart2:{
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
                        data: ['材料需用量统计']
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
                        data: ['钢筋','水泥','混凝土','圆钢筋']
                    },
                    series: [
                        {
                            name: '材料需用量统计',
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
                }
            }
        },
        components:{
            TopSection,
            ModelTree,
            EChart
        }
    }
</script>

<style>
    .materials{
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        position: relative;
    }
    .materials-chart{
        width: 45%;
        height: 402px;
        position: absolute;
    }
    .materials-chart-progress{
        width: 45%;
        height: 402px;
        position: absolute;
        right: 0;
    }
</style>