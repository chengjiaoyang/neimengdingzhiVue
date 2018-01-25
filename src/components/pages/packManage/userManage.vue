<template>
    <div class="userManage">
        <!--操作部分的按钮、搜索框等-->
        <div class="userHandel">
            <el-button type="success" size="small" icon="plus" @click="addPackUser">添 加</el-button>
           <div class="searchGroup">
               <el-input
                       placeholder="请输入内容"
                       icon="search"
                       v-model="input"
                       :on-icon-click="handleIconClick">
               </el-input>
           </div>
            <!--右边操作-->
            <ul class="frBtns" @mouseleave="rowMaskHide" tabindex="1">
              <li>
                  <el-button type="default" @click="changeRowMaskShow">
                    <span>列隐藏操作</span>
                    <i class="el-icon-caret-bottom" v-show="!rowControl"></i>
                    <i class="el-icon-caret-top" v-show="rowControl"></i>
                </el-button>
              </li>
                <li>
                  <ul class="rowControl" v-show="rowControl">
                      <el-checkbox-group v-model="checkboxVal" v-for="(column,index) in columns" :key="column.dataIndex">
                        <el-checkbox :label="column.dataIndex" @change="getNewColumn">{{column.text}}</el-checkbox>
                    </el-checkbox-group>
                  </ul>
                </li>
            </ul>
        </div>

        <!--表格部分-->
      <table-model :columns="newColumn" :modelData="modelData"></table-model>

        <!--新增弹出蒙版-->
        <div class="addMask">
            <el-dialog
                    title="新增分包队伍人员"
                    :visible.sync="dialogVisible"
                    size="tiny"
                    :before-close="handleClose">
                <el-form ref="form" :model="form" label-width="100px" :inline="true">
                    <el-form-item label="序号">
                        <el-input v-model="form.no"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>

                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input v-model="form.idCard"></el-input>
                    </el-form-item>
                    <el-form-item label="qq号">
                        <el-input v-model="form.qq"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱号">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位">
                        <el-select v-model="form.job" placeholder="请选择所在岗位">
                            <el-option label="技术员" value="技术员"></el-option>
                            <el-option label="经理" value="经理"></el-option>
                            <el-option label="组长" value="组长"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="部门">
                        <el-select v-model="form.parts" placeholder="请选择所在部门">
                            <el-option label="公司" value="公司"></el-option>
                            <el-option label="子分部" value="子分部"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="组织机构">
                        <el-select v-model="form.org" placeholder="请选择所在组织机构">
                            <el-option label="集团" value="集团"></el-option>
                            <el-option label="局" value="局"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="工作状态">
                        <el-radio-group v-model="form.workState">
                            <el-radio label="在职"></el-radio>
                            <el-radio label="离职"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="进场时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.inTime" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="离场时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.outTime" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="是否安全培训">
                        <el-switch on-text="" off-text="" v-model="form.isSafeTrain"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否安全交底">
                        <el-switch on-text="" off-text="" v-model="form.isSafeExplanation"></el-switch>
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>

    </div>
</template>
<script>
//    const defaultTableThead=[];
    import TableModel from '../../common/table/tableModel'
    export default {
        name:'userManage',
        components:{
            TableModel
        },
        data(){
            return{
                input:'',
                columns:[
                    {
                        text:'序号',
                        dataIndex:'no'
                    },
                    {
                        text:'姓名',
                        dataIndex:"name"
                    },
                    {
                        text:'性别',
                        dataIndex:"sex"
                    },
                    {
                        text:'身份证号',
                        dataIndex:"idCard"
                    },
                    {
                        text:'qq号',
                        dataIndex:"qq"
                    },
                    {
                        text:'邮箱号',
                        dataIndex:"email"
                    },
                    {
                        text:'岗位',
                        dataIndex:"job"
                    },
                    {
                        text:'部门',
                        dataIndex:"parts"
                    },
                    {
                        text:'组织机构',
                        dataIndex:"org"
                    },
                    {
                        text:'工作状态',
                        dataIndex:"workState"
                    },
                    {
                        text:'进场时间',
                        dataIndex:"inTime"
                    },
                    {
                        text:'离场时间',
                        dataIndex:"outTime"
                    },
                    {
                        text:'是否安全培训',
                        dataIndex:"isSafeTrain"
                    },
                    {
                        text:'是否安全交底',
                        dataIndex:"isSafeExplanation"
                    }
                ],
                modelData:[
                    {
                        id:1,
                        no:'2017001',
                        name:"赵包",
                        sex:"男",
                        idCard:"311245199202153251",
                        qq:"105212301",
                        email:"105212301@qq.com",
                        job:"技术员",
                        parts:"一分部",
                        org:"公司",
                        workState:"在职",
                        inTime:"2017-02-01 09:01:21",
                        outTime:"2017-02-01 21:01:21",
                        isSafeTrain:"是",
                        isSafeExplanation:"是"


                    },
                    {
                        id:2,
                        no:'2017002',
                        name:"高离",
                        sex:"男",
                        idCard:"211245199202153251",
                        qq:"105212301",
                        email:"105212301@qq.com",
                        job:"技术员",
                        parts:"一分部",
                        org:"公司",
                        workState:"良好",
                        inTime:"2017-02-01 09:01:21",
                        outTime:"2017-02-01 21:01:21",
                        isSafeTrain:"是",
                        isSafeExplanation:"是"


                    },
                    {
                        id:3,
                        no:'2017005',
                        name:"任清",
                        sex:"男",
                        idCard:"511245199202153251",
                        qq:"105212301",
                        email:"105212301@qq.com",
                        job:"技术员",
                        parts:"一分部",
                        org:"公司",
                        workState:"良好",
                        inTime:"2017-02-01 09:01:21",
                        outTime:"2017-02-01 21:01:21",
                        isSafeTrain:"是",
                        isSafeExplanation:"是"
                    },
                ],
                form: {
                    no:'',
                    name: '',
                    sex:"",
                    idCard:'',
                    qq:'',
                    email:'',
                    job: '',
                    parts: '',
                    org: '',
                    workState: '',
                    inTime: '',
                    outTime: '',
                    isSafeTrain:true,
                    isSafeExplanation:false,
                },
                dialogVisible:false,
//                咧操作
                rowControl:false,
                checkboxVal:[],
                newColumn:[],
            }
        },

        computed:{
            theadArr() {
                return this.columns.map((item, index) => {
                    return item.dataIndex;
                });
            }

        },
        methods:{
//            新增分包用户
            addPackUser(){
                this.dialogVisible =true;

            },
//            新增项
            onSubmit() {
                this.modelData.push(this.form);
                this.dialogVisible = false;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
//            列隐藏
            changeRowMaskShow(){
                this.rowControl = !this.rowControl;
            },
            rowMaskHide(){
//                alert(1);
                this.rowControl = false;
            },
            getNewColumn(){
                this.newColumn =[];
                this.columns.forEach((item,index) =>{
                    this.checkboxVal.forEach((val,ind) =>{
                        if (val ==item.dataIndex){
                            this.newColumn.push(item);
                        }
                    })
                })
            },
            handleIconClick(ev) {
                console.log(ev);
            }
        },
        mounted(){
//          初始化checkboxVal
            this.checkboxVal = this.theadArr;
            this.newColumn = this.columns;
        }

    }

</script>
<style>
    .userManage{
        padding-top: 20px;
        position: relative;
    }
    .userManage> .userHandel{
        margin-bottom: 20px;
        position: relative;
    }

    .searchGroup{
        margin-left: 20px;
        position: absolute;
        display: inline-block;
    }
    .inputs{
        width: 200px;
        height: 32px;
        position: absolute;
        left: 3px;
    }
    .searchGroup .inputs input{
        height: 32px;
        padding: 2px 3px;

    }
    .searchGroup .btns{
        position: absolute;
        left: 200px;
    }

    /*新增蒙版*/
    .addMask{

    }
    .userManage .el-dialog{
        width: 700px;
    }
    .userManage .el-form--inline .el-form-item:last-child {
        margin-top: 20px;
        margin-left: 240px;
    }
    .userManage .el-form-item{
        width: 300px;
    }
    /*列隐藏*/
    .frBtns{
        position: absolute;
        right: 10px;
        z-index: 999;
        top: 0px;
    }
    .rowControl{
        border: 1px solid #eee;
        width: 100px;
        box-shadow:0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.12);
        z-index: 9999;
        padding: 6px 10px;
        margin-top: 6px;
        /*position: absolute;*/
        background-color: white;
    }
    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
    .clearfix {
        zoom: 1;
    }

</style>