<!--变更动态汇总-->
<template>
    <div class="changeDynamic">
        <div class="handleArea">
            <el-button type="warning" size="small" @click="addRecord">新增</el-button>
            <el-button type="warning" size="small">导出</el-button>
            <el-button type="success" size="small">打印</el-button>
        </div>
        <project-table :columns="columns" :tableData="original" :lookDetail="true"></project-table>
        <!--新增蒙版-->
        <div class="changeAddMask">
            <el-dialog
                    title="新增变更记录"
                    :visible.sync="dialogVisible"
                    size="tiny"
                    :before-close="handleClose">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="变更事项:">
                        <el-input v-model="form.changeItem"></el-input>
                    </el-form-item>
                    <el-form-item label="经办部门:">
                        <el-input v-model="form.handlePart"></el-input>
                    </el-form-item>
                    <el-form-item label="经办人:">
                        <el-input v-model="form.handler"></el-input>
                    </el-form-item>
                    <el-form-item label="附件上传:">
                        <el-radio-group v-model="form.affix">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="变更部位状态:">
                        <el-radio-group v-model="form.changeStatus">
                            <el-radio label="已施工"></el-radio>
                            <el-radio label="部分已施工"></el-radio>
                            <el-radio label="未施工"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="提出人:">
                        <el-radio-group v-model="form.adviser">
                            <el-radio label="发起人"></el-radio>
                            <el-radio label="设计人"></el-radio>
                            <el-radio label="施工单位"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="变更原因:">
                            <div class="reason">
                                <span>现场施工类：</span>
                                   <el-checkbox-group v-model="form.reason.reason1">
                                   <el-checkbox label="现场条件变化" name="type"></el-checkbox>
                                   <el-checkbox label="其他" name="type"></el-checkbox>
                            </el-checkbox-group>
                            </div>
                           <div class="reason">
                               <span>设计类：</span>
                               <el-checkbox-group v-model="form.reason.reason2">
                                   <el-checkbox label="设计漏项" name="type"></el-checkbox>
                                   <el-checkbox label="设计完善" name="type"></el-checkbox>
                                   <el-checkbox label="其他" name="type"></el-checkbox>
                                </el-checkbox-group>
                           </div>
                          <div class="reason">
                              <span>其他类：</span>
                              <el-checkbox-group v-model="form.reason.reason3">
                                  <el-checkbox label="发起人要求" name="type"></el-checkbox>
                                  <el-checkbox label="政府要求" name="type"></el-checkbox>
                                  <el-checkbox label="材料说明" name="type"></el-checkbox>
                              </el-checkbox-group>
                          </div>

                    </el-form-item>
                    <el-form-item label="变更内容:">
                        <el-input v-model="form.content"></el-input>
                    </el-form-item>
                    <el-form-item label="描述:">
                        <el-input v-model="form.des"></el-input>
                    </el-form-item>
                    <el-form-item label="工期形式:">
                        <el-radio-group v-model="form.workState">
                            <el-radio label="正常"></el-radio>
                            <el-radio label="缩短"></el-radio>
                            <el-radio label="提前"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="监理审批意见:">
                        <el-input v-model="form.idea" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button  @click="dialogVisible = false">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import ProjectTable from '../../common/table/changLedgerTable/proChangeTable'
    export default {
        components:{
            ProjectTable
        },
        data(){
            return{
                columns:[
                    {
                        text:"变更事项",
                        dataIndex:"changeItem"
                    },
                    {
                        text:"经办部门",
                        dataIndex:"handlePart"
                    },
                    {
                        text:"经办人",
                        dataIndex:"handler"
                    },
                    {
                        text:"附件上传",
                        dataIndex:"affixUp"
                    },
                ],
                original:[
                    {
                        id:1,
                        changeItem:"￥%工程",
                        handlePart:"工程细目",
                        handler:"施工桩号",
                        affixUp:"施工单位"
                    },
                    {
                        id:2,
                        changeItem:"￥%工程",
                        handlePart:"工程细目",
                        handler:"施工桩号",
                        affixUp:"施工单位"
                    }
                ],
                dialogVisible:false,
                form:{
                    changeItem:"",
                    handlePart:"",
                    handler:"",
                    affix:"",
                    changeStatus:"",
                    adviser:"",
                    reason:{
                        reason1:[],
                        reason2:[],
                        reason3:[]
                    },
                    content:"",
                    des:"",
                    workState:"",
                    idea:""
                }
            }
        },
        methods:{
            handleClose(){
                this.dialogVisible = false;
            },
            onSubmit(){

            },
            /*新增*/
            addRecord(){
                this.dialogVisible = true;
            }
        }

    }
</script>

<style>
    .changeDynamic{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .handleArea{
        margin-bottom: 10px;
    }
    .changeDynamic .el-dialog--tiny{
        width: 50%;
        top: 10%;
    }
    .changeDynamic .el-dialog__body{
        padding-top:10px;
        padding-bottom:0;
        padding-left:40px;
    }
    .changeDynamic .el-form-item__content .el-input{
        width: 300px;
    }
    .reason .el-checkbox-group{
        display: inline-block;
    }
</style>