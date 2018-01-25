<template>
    <!--构建数量统计-->
    <div class="modularNum">
       <top-section :showControl="showControl"></top-section>
        <!--表格-->
        <div class="modular-num-table">
            <model-tree :columns="columns" :tree-structure="true" :data-source="dataSource"></model-tree>
        </div>
        <div class="modularNum-chart">
            <e-chart id="modularNum" height="400px" width="90%"  :chart1="chart1"></e-chart>
        </div>
        <div class="modularNum-chart-progress">
            <e-chart id="chart-progress" height="400px" width="90%"  :chart1="chart2"></e-chart>
        </div>
    </div>
</template>

<script>
    import ModelTree from '../../common/treenTable/modelTree'
    import EChart from '../../common/echarts/echarts'
    import TopSection from '../../common/top-section'
    export default {
        data(){
            return{
                searchContent:"",
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
                        text:'构件名称',
                        dataIndex:'ComponentName'
                    },
                    {
                        text:'构件总个数',
                        dataIndex:'ComponentNum'
                    },
                    {
                        text:'个数单位',
                        dataIndex:'NumUnits'
                    },
                    {
                        text:'设计总量',
                        dataIndex:'TotalDesign'
                    },
                    {
                        text:'数量单位',
                        dataIndex:'quantityUnits'
                    },
                    {
                        text:'设计总体积',
                        dataIndex:'DesignTotalVo'
                    },
                    {
                        text:'完成体积',
                        dataIndex:'ComVo'
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
                        text:'本期与计划差值',
                        dataIndex:'thisPlantDiffer'
                    },
                    {
                        text:'完成比例',
                        dataIndex:'ComPer'
                    },
                    {
                        text:'开累确认数量',
                        dataIndex:'tiredSureNum'
                    },
                    {
                        text:'确认比例',
                        dataIndex:'SurePer'
                    },
                    {
                        text:'开累计量数量',
                        dataIndex:'tiredCalNum'
                    },
                    {
                        text:'计量比例',
                        dataIndex:'CalPer'
                    },
                    {
                        text:'工期',
                        dataIndex:'ProjectTime'
                    }
                ],
                dataSource:[
                    {
                        "id":1,
                        "parentId":0,
                        "no":"A123",
                        "deptName":"中铁七局铁道部",
                        "ComponentName":"台帽",
                        "ComponentNum":3,
                        "NumUnits":"个",
                        "TotalDesign":4,
                        "quantityUnits":1,
                        "DesignTotalVo":23,
                        "ComVo":13,
                        "thisPlantNum":2,
                        "thisComNum":3,
                        "thisPlantDiffer":1,
                        "ComPer":3,
                        "tiredSureNum":3,
                        "SurePer":4,
                        "tiredCalNum":3,
                        "CalPer":"20%",
                        "ProjectTime":56,
                        "children":[
                            {
                                "id":2,
                                "parentId":1,
                                "no":"A123",
                                "deptName":"中铁七局铁道部",
                                "ComponentName":"台帽",
                                "ComponentNum":3,
                                "NumUnits":"个",
                                "TotalDesign":4,
                                "quantityUnits":1,
                                "DesignTotalVo":23,
                                "ComVo":13,
                                "thisPlantNum":2,
                                "thisComNum":3,
                                "thisPlantDiffer":1,
                                "ComPer":3,
                                "tiredSureNum":3,
                                "SurePer":4,
                                "tiredCalNum":3,
                                "CalPer":"20%",
                                "ProjectTime":56
                            }
                        ]
                    },
                    {
                        "id":3,
                        "parentId":0,
                        "no":"A123",
                        "deptName":"中铁七局铁道部",
                        "ComponentName":"台帽",
                        "ComponentNum":3,
                        "NumUnits":"个",
                        "TotalDesign":4,
                        "quantityUnits":1,
                        "DesignTotalVo":23,
                        "ComVo":13,
                        "thisPlantNum":2,
                        "thisComNum":3,
                        "thisPlantDiffer":1,
                        "ComPer":3,
                        "tiredSureNum":3,
                        "SurePer":4,
                        "tiredCalNum":3,
                        "CalPer":"20%",
                        "ProjectTime":56,
                        "children":[
                            {
                                "id":4,
                                "parentId":3,
                                "no":"A123",
                                "deptName":"中铁七局铁道部",
                                "ComponentName":"台帽",
                                "ComponentNum":3,
                                "NumUnits":"个",
                                "TotalDesign":4,
                                "quantityUnits":1,
                                "DesignTotalVo":23,
                                "ComVo":13,
                                "thisPlantNum":2,
                                "thisComNum":3,
                                "thisPlantDiffer":1,
                                "ComPer":3,
                                "tiredSureNum":3,
                                "SurePer":4,
                                "tiredCalNum":3,
                                "CalPer":"20%",
                                "ProjectTime":56
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
                            interval: 0,
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
                            interval: 0,
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
                            xAxisIndex: [0],
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
                                        formatter(p) {
                                            return p.value > 0 ? p.value : '';
                                        }
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
                        data: ['完成进度']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    //  缩放条
                    dataZoom: [
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 20,
                            height: '80%',
                            bottom: 30,
                            showDataShadow: false,
                            left: '96%',
                            textStyle: {
                                color: '#fff'
                            },
                            borderColor: '#90979c',
                            /*手柄的 icon 形状，支持路径字符串*/
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: '#d3dee5'
                            },
                        }
                    ],
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            formatter:'{value}%'
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: ['桩基01','桩基02','桩基03','桩基04']
                    },
                    series: [
                        {
                            name: '完成进度',
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
            ModelTree,
            EChart,
            TopSection
        },
        created(){
//            this.getData()
        },
        methods:{
//            axios获取数据的方式，用不着了
              /*getData(){
                this.$ajax.get('/api/db').then((res) =>{
                    this.dataSource = res.data.modularNum;
                }).catch(function (err) {
                    console.log(err);
                })
            }*/

        }
    }
</script>

<style>
    .modularNum{
        width: 100%;
        color: white;
        padding-top: 10px;
        margin-left: 20px;
        position: relative;
    }


    .modularNum > .modular-num-table{
        margin-bottom: 10px;
    }
    .modularNum-chart{
        width: 50%;
        height: 402px;
        position: absolute;
        box-sizing: border-box;
        /*border: 1px solid #eceff4;*/
        text-align: center;
    }
    .modularNum-chart > #modularNum{
        padding-left: 5%;
    }
    .modularNum-chart-progress{
        width: 50%;
        position: absolute;
        right: 0;
    }


</style>
