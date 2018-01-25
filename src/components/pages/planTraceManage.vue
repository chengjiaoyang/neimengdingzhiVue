<template>
    <!--形象计划跟踪管理-->
    <div class="planTraceManage">
        <!--<h3>形象计划跟踪管理</h3>-->
        <div class="traceManage">
            <div class="handleArea">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <!--搜索框-->
                <el-input
                        placeholder="请输入查询内容"
                        icon="search"
                        v-model="searchInput"
                        :on-icon-click="handleIconClick">
                </el-input>

                <el-button type="primary" size="small">查 询</el-button>
                <el-button type="warning" size="small">导 出</el-button>
                <div class="colorDes">
                    <span class="color" v-for="box in colorBox">
                        <span class="colorBox" :style="'background-color:'+box.color"></span>
                        <span>{{box.text}}</span>
                    </span>
                </div>
            </div>
            <el-table
                    :data="traceManageData"
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="date"
                        label="细目号"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="name"
                        label="细目名称"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="province"
                        label="分部名称"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="city"
                        label="分项名称"
                        width="120">
                </el-table-column>
                <el-table-column v-for="(month,index) in monthDay" :label="month.day+month.weather" width="120" :key="index" :render-header="renderIcon" aling="center">
                    <template scope="scope">
                      <div class="workMark">
                          <!--计划开工-->
                        <span style="display: block; width: 100%; height: 20px;" :class="{plantStart:month.state.plantStart}"></span>
                          <!--正在进行-->
                          <span style="display: block; width: 100%; height: 20px;" :class="{working:month.state.working}"></span>
                          <!--未开工-->
                          <span style="display: block; width: 100%; height: 20px;" :class="{unStart:month.state.unStart}"></span>
                        <!--完成-->
                          <span style="display: block; width: 100%; height: 20px;" :class="{unFinish:month.state.unFinish}"></span>
                      </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

</template>

<script>
    const sunny =require('../../assets/images/home/sunny.png');
    const snow = require('../../assets/images/home/snow.png');
    const rain = require('../../assets/images/home/rain.png');
    const overcas = require('../../assets/images/home/overcas.png');
    export default {
        data() {
            return {
                value: '',
                options: [
                    {
                        value: '01',
                        label: '2017-01'
                    },
                    {
                        value: '02',
                        label: '2017-02'
                    },
                    {
                        value: '03',
                        label: '2017-03'
                    },
                    {
                        value:'04',
                        label:'2017-04'
                    }
                ],
                searchInput:'',
                colorBox:[
                    {
                        text:'计划开工时间',
                        color:'#33CCFF'
                    },
                    {
                        text:'正在进行',
                        color:'#FFCC33'
                    },
                    {
                        text:'未开工',
                        color:'#00CC66'
                    },
                    {
                        text:'完成',
                        color:'#FF0000'
                    },


                ],
                //表格数据
                traceManageData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-08',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-06',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }
                ],
//                每月的天数
                monthDay:[
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'01号',weather:"sunny"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'02号',weather:"sunny"},
                    {
                        state:{
                            plantStart:1,
                            working:0,
                            unStart:1,
                            unFinish:0,
                        },
                        day:'03号',weather:"rain"},
                    {
                        state:{
                            plantStart:1,
                            working:0,
                            unStart:1,
                            unFinish:0,
                        },
                        day:'04号',weather:"overcas"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'05号',weather:"sunny"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'06号',weather:"sunny"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'07号',weather:"overcas"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'08号',weather:"overcas"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'09号',weather:"overcas"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'10号',weather:"sunny"},
                    {
                        state:{
                            plantStart:1,
                            working:1,
                            unStart:0,
                            unFinish:0,
                        },
                        day:'11号',weather:"snow"},
                    {
                        state:{
                            plantStart:1,
                            working:0,
                            unStart:1,
                            unFinish:0,
                        },
                        day:'12号',weather:"rain"},
                    {
                        state:{
                            plantStart:1,
                            unStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'13号',weather:"overcas"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'14号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'15号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:1,
                            working:1
                        },
                        day:'16号',weather:"overcas"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'17号',weather:"overcas"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'18号',weather:"overcas"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'19号',weather:"sunny"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'20号',weather:"snow"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'21号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'22号',weather:"overcas"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'23号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'24号',weather:"sunny"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'25号',weather:"sunny"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'26号',weather:"sunny"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'27号',weather:"sunny"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'28号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'29号',weather:"rain"},
                    {
                        state:{
                            unStart:0,
                            plantStart:0,
                            unFinish:0,
                            working:1
                        },
                        day:'30号',weather:"rain"}
                ],
                weatherList:[],
                processData:[]
            }
        },
        computed:{
            weather(){
                for (let item in this.monthDay){
                    this.weatherList.push(this.monthDay[item].weather);
                }

            }
        },
        methods:{
            handleIconClick(){

            },
            renderIcon(createElement,{column,$index}){
                let self = this;
                let url='';
                if (column.label.substring(3) =='rain'){
                    url=rain
                }
                else if (column.label.substring(3) =='overcas'){
                    url=overcas
                }
                else if (column.label.substring(3) =='sunny'){
                    url=sunny
                }
                else {
                    url=snow
                }
                let text =column.label.substring(0,3);
                return createElement('div',{attrs:{
                        class:'columnBack'
                    }},
                    [
                        createElement('a',[text],{attrs:{
                            style:"vertical-align: middle"
                        }}),

                        createElement('span',{attrs:{
                                class:'weather',
                                style:" display: inline-block;\n" +
                                "        width: 16px;\n" +
                                "        height: 16px;\n" +
                                "        background: url("+url+") no-repeat; background-size: 16px 16px;"+
                                "        margin-left:10px; vertical-align: middle;"
                            },
                            },
                        )
                    ]
                )
            }
        }
    }
</script>

<style>
    .planTraceManage{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .planTraceManage .handleArea{
        width: 100%;
        margin-bottom:20px;
    }
    .planTraceManage .handleArea .el-select{
        margin-right: 10px;
    }
    .planTraceManage .handleArea .el-input{
        display: inline-block;
        position: relative;
        width: 200px;
        margin-right: 10px;
    }
    .planTraceManage .handleArea .el-input .el-input__inner{
        width: 200px;
    }
    .planTraceManage .handleArea .el-input i{
        position: absolute;
        right: 0px;
    }
    .colorDes{
        display: inline-block;
        float: right;
    }
    .colorDes .color{
        padding: 8px 10px;
    }
    .colorDes .color .colorBox{
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .colorDes .color span{
        vertical-align: middle;
    }
    .workMark{
        height: 80px;
        /*background-color: #e7cfc8;*/
        width: 100%;
        padding-top: 1px;
    }
    .workMark span{
        background-color: white;
    }
    .plantStart{
        background-color: rgb(51, 204, 255) !important;
    }
    .working{
        background-color: rgb(255, 204, 51) !important;
    }
    .unStart{
        background-color: rgb(0, 204, 102) !important;
    }
    .unFinish{
        background-color: rgb(255, 0, 0) !important;
    }
    .traceManage  table tbody .el-table__row td{

        padding: 0;
        margin: 0;
        line-height: 0;
    }
    .traceManage .el-table .cell, .el-table th>div{
        padding: 0;
    }
</style>