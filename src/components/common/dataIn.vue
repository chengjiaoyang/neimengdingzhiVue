<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            size="small"
            :before-close="handleClose"
            class="maskBox">
        <input type="file" v-if="identify=='in'">
        <div class="notice" v-if="identify=='notice'">
            <div class="handleBtnTop">
                <el-button size="small">导出</el-button>
                <el-button size="small">打印</el-button>
                <el-button size="small">附件上传</el-button>
            </div>
            <div class="msgContent">
                <p>各职能部门：</p>
                <p>现在正在办理  施工队 的  期工程结算，请清理有关债权债务手续并交经营及财务部门。</p>
            </div>
            <div class="tableContent">
                <el-table
                        border
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="部门名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="经办人签字"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="债权债务及遗留问题说明">
                    </el-table-column>
                </el-table>
            </div>
            <div class="msgContentMask clearfix">
                <p>经营部:</p>
                <span>2017年  月  日</span>
            </div>
            <div class="handleBtnBottom">
                <el-button size="small">保存</el-button>
                <el-button size="small">提交</el-button>
            </div>
        </div>
        <div class="confirm" v-if="identify =='confirm'">
            <div class="confirm-btn-top">
                <el-button size="small">导出</el-button>
                <el-button size="small">打印</el-button>
                <el-button size="small">上传附件</el-button>
            </div>
            <div class="confirm-msg-top">
                <p class="clearfix">
                    <span>劳务层名称：</span>
                    <span>日期：2017年 月 日   至2017年 月 日</span>
                </p>

            </div>
            <div class="confirm-table">
                <el-table
                        border
                        :data="confirmData"
                        style="width: 100%">
                    <el-table-column v-for="(column,index) in columnPart" :label="column.text" :key="column.dataIndex">
                        <template scope="scope">
                            <span>{{scope.row[column.dataIndex]}}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="confirm-msg-bottom clearfix">
                <el-col :sm="8" :md="8" :lg="8">
                   <span>现场技术员：</span>
                </el-col>
                <el-col :sm="8" :md="8" :lg="8">
                    <span>工程技术质量部：</span>
                </el-col>
                <el-col :sm="8" :md="8" :lg="8">
                    <span>经营部：</span>
                </el-col>
                <el-col :sm="8" :md="8" :lg="8">
                    <span>总工程师：</span>
                </el-col>
                <el-col :sm="8" :md="8" :lg="8">
                    <span>生产副经理：</span>
                </el-col>
                <el-col :sm="8" :md="8" :lg="8">
                    <span>日期：</span>
                </el-col>

            </div>
            <div class="confirm-btn-bottom">
                <el-button size="small">保存</el-button>
                <el-button size="small">申报</el-button>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:function () {
                    return ""
                }

            },
            identify:{
                type:String,
                default:function () {
                    return ""
                }

            },
            confirmData:{
                type:Array,
                default:function () {
                    return [];
                }
            }
        },
        data(){
            return{
                dialogVisible:false,
                tableData: [
                    {
                        date: '工程技术质量部',
                        name: '王小虎',
                    },
                    {
                        date: '实验室',
                        name: '王小虎',
                    },
                    {
                        date: '测量组',
                        name: '王小虎',
                    },
                    {
                        date: '生产管理部',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    },
                    {
                        date: '物资装备部',
                        name: '王小虎',
                    },
                    {
                        date: '安保部',
                        name: '王小虎',
                    },
                    {
                        date: '办公室',
                        name: '王小虎',
                    },
                    {
                        date: '经营部',
                        name: '王小虎',
                    },
                    {
                        date: '人财部',
                        name: '王小虎',
                    },
                ],
                columnPart:[
                    {
                        text:'序号',
                        dataIndex:'no'
                    },
                    {
                        text:'细目号',
                        dataIndex:"detailNo"
                    },
                    {
                        text:'细目名称',
                        dataIndex:"detailName"
                    },
                    {
                        text:'单位',
                        dataIndex:"unit"
                    },
                    {
                        text:'部位',
                        dataIndex:"park"
                    },
                    {
                        text:'完成数量',
                        dataIndex:'completeNum'
                    }
                ]
            }
        },
        methods:{
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            openMask(){
                this.dialogVisible = true;
            }
        }
    }

</script>

<style>
    .maskBox .el-dialog .el-dialog__header{
        text-align: center;
        font-size: 24px;
    }
    .maskBox .el-dialog .el-dialog__body{
        padding: 10px 30px 40px 30px;
    }

    /*通知单*/
    .notice{
        position: relative;
    }
    .handleBtnTop{
        text-align: right;
    }
    .msgContent{
        margin-top: 10px;
    }
    /*表格*/
    .notice .tableContent{
        margin-top: 10px;
    }

    .notice .msgContentMask{
        float: right;
        margin-right: 120px;
        padding: 10px 0;
    }
    .notice .handleBtnBottom{
        margin-top: 20px;
    }

    /*签认单*/
    .confirm .confirm-btn-top{
        text-align: right;
        margin-bottom:10px;
    }
    .confirm .confirm-msg-top p>span:nth-of-type(1){
        float: left;
    }
    .confirm .confirm-msg-top p>span:nth-of-type(2){
        float: right;
    }
    .confirm .confirm-table{
        margin-top:10px;
    }
    .confirm-msg-bottom{
        margin-top: 10px;
        margin-bottom:10px;
    }
    .confirm-btn-bottom{
    }

</style>