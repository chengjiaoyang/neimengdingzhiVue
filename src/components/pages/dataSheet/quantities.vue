<!--工程量统计-->
<template>
    <div class="quantities">
        <!--顶部操作-->
        <top-section :showControl="showControl"></top-section>

        <!--表格-->
        <div class="quantities-table">
            <model-tree :columns="columns" :tree-structure="true" :data-source="dataSource"></model-tree>
        </div>

        <!--图表-->
        <div class="quantities-char">
            <e-chart id="quantitiesChar" height="400px" width="90%"  :chart1="chart1"></e-chart>
        </div>

    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import ModelTree from '../../common/treenTable/modelTree'
    import EChart from '../../common/echarts/echarts'
    export default {
        data(){
            return{
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
                        text:'工程量名称',
                        dataIndex:'quantityName'
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
                        dataIndex:'thisCompleteNum'
                    },
                    {
                        text:'数量差值',
                        dataIndex:'numDiffer'
                    },
                    {
                        text:'本期完成比例',
                        dataIndex:'thisCompletePer'
                    },
                    {
                        text:'开累完成数量',
                        dataIndex:'triedCompleteNum'
                    },
                    {
                        text:'开累完成比例',
                        dataIndex:'triedCompletePer'
                    },
                    {
                        text:'开累确认数量',
                        dataIndex:'triedSureNum'
                    },
                    {
                        text:'开累确认比例',
                        dataIndex:'triedSurePer'
                    },
                    {
                        text:'开累计量数量',
                        dataIndex:'triedQuantityNum'
                    },
                    {
                        text:'开累计量比例',
                        dataIndex:'triedQuantityPer'
                    },
                ],
                dataSource:[
                    {
                        id:1,
                        parentId:0,
                        no:'A123',
                        deptName:'中铁七局铁道部',
                        quantityName:'挖土方',
                        DesignNum:3,
                        unit:'个',
                        thisPlantNum:4,
                        thisCompleteNum:1,
                        numDiffer:23,
                        thisCompletePer:13,
                        triedCompleteNum:2,
                        triedCompletePer:3,
                        thisComNum:3,
                        thisPlantDiffer:1,
                        triedSureNum:3,
                        triedSurePer:4,
                        triedQuantityNum:3,
                        triedQuantityPer:'20%',
                        children:[
                            {
                                id:2,
                                parentId:1,
                                no:'A123',
                                deptName:'中铁七局铁道部',
                                quantityName:'挖土方001',
                                DesignNum:3,
                                unit:'个',
                                thisPlantNum:4,
                                thisCompleteNum:1,
                                numDiffer:23,
                                thisCompletePer:13,
                                triedCompleteNum:2,
                                thisComNum:3,
                                thisPlantDiffer:1,
                                triedSureNum:9,
                                triedSurePer:4,
                                triedQuantityNum:3,
                                triedQuantityPer:'20%',
                            }
                        ]
                    },
                    {
                        id:3,
                        parentId:0,
                        no:'A123',
                        deptName:'中铁七局铁道部',
                        quantityName:'挖石方',
                        DesignNum:3,
                        unit:'个',
                        thisPlantNum:4,
                        thisCompleteNum:1,
                        numDiffer:23,
                        thisCompletePer:13,
                        triedCompleteNum:2,
                        thisComNum:3,
                        thisPlantDiffer:1,
                        triedSureNum:3,
                        triedSurePer:4,
                        triedQuantityNum:3,
                        triedQuantityPer:'20%',
                        children:[
                            {
                                id:4,
                                parentId:4,
                                no:'A123',
                                deptName:'中铁七局铁道部',
                                quantityName:'挖石方001',
                                DesignNum:3,
                                unit:'个',
                                thisPlantNum:4,
                                thisCompleteNum:1,
                                numDiffer:23,
                                thisCompletePer:13,
                                triedCompleteNum:2,
                                thisComNum:3,
                                thisPlantDiffer:1,
                                triedSureNum:3,
                                triedSurePer:4,
                                triedQuantityNum:3,
                                triedQuantityPer:'20%',
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
                        data: ['设计数量', '开累完成数量', '开累确认数量','开累计量数量']
                    },
                    calculable: true,
                    xAxis: [
                        {
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
                            data: ['挖土方','挖石方','挖土方001','xx'],
                            name:'工程分类'
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
                        },
                        name:'数量'
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
                            name: '设计数量',
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
                            name: '开累完成数量',
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
                            name: '开累确认数量',
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
                            name: '开累计量数量',
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
    .quantities{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
</style>