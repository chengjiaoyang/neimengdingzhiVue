<template>
    <div class="top">
        <!--章节选择-->
        <el-select v-model="nodeValue" placeholder="请选择" v-if="showControl.nodeSelect">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <!--开始时间-->
        <div class="top-start-time" v-if="showControl.startTimeShow">
            <span>开始时间：</span>
            <el-date-picker
                    v-model="startTime"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>
        </div>
        <!--结束时间-->
        <div class="top-end-time" v-if="showControl.endTimeShow">
            <span>结束时间：</span>
            <el-date-picker
                    v-model="endTime"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerEndTime">
            </el-date-picker>
        </div>
        <!--按钮-->
        <div class="top-btns">
            <el-button size="small" type="primary" v-if="showControl.btnShow.addbtn">查询</el-button>
            <el-button size="small" type="primary" v-if="showControl.btnShow.outbtn">导出</el-button>
            <el-button size="small" type="warning" v-if="showControl.btnShow.printbtn">打印</el-button>
            <el-button size="small" type="success" v-if="showControl.btnShow.savebtn">保存</el-button>
        </div>

        <!--复选框-->
        <div class="top-checkbox" v-if="showControl.showcheckbox">
            <el-checkbox v-model="checked">开累</el-checkbox>
        </div>
        <!--搜索-->
        <div class="top-search" v-if="showControl.searchShow">
            <!--<el-input v-model="searchContent" placeholder="请输入内容，按回车键检索"></el-input>-->
            <search-input></search-input>
        </div>
    </div>
</template>

<script>
    import SearchInput from '../common/searchInput'
    export default {
        props:{
           showControl:{
               type:Object,
               default:function () {
                   return false
               }
           }
        },
        data(){
            return{
                nodeValue:'',
                options: [
                    {
                        value: '选项1',
                        label: '第100章'
                    },
                    {
                        value: '选项2',
                        label: '第200章'
                    },
                    {
                        value: '选项3',
                        label: '第300章'
                    },
                    {
                        value: '选项4',
                        label: '第400章'
                    },
                    {
                        value: '选项5',
                        label: '第100章'
                    }
                ],
                startTime: '',
                endTime:'',
                pickerEndTime:{
                    disabledDate:current => {
                        // 禁用的时间
                        return current && current.valueOf() < this.startTime.valueOf();
                    }
                },
                checked:true
            }
        },
        components:{
            SearchInput
        }

    }
</script>

<style>
    .top .el-select{
        margin-right:20px;
    }
    .top .top-start-time{
        color: black;
        display: inline-block;
        margin-right: 20px;
    }
    .top .top-end-time{
        color: black;
        display: inline-block;
        margin-right: 20px;
    }
    .top-btns{
        display: inline-block;
        margin-right: 20px;
    }
    .top-checkbox{
        display: inline-block;
    }
    .top-search{
    }
    .top-search .el-input{
        width: 200px;
    }
</style>