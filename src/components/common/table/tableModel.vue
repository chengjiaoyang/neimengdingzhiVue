<template>
    <div class="tableModel">
        <el-table
                :data="modelData"
                border
                style="width: 100%"
                class="mode-tree">
            <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                             :label="column.text"  header-align="center" :sortable="index==0" :sort-method="sort" :fixed="index===0">
                <template scope="scope">
                    <p>{{scope.row[column.dataIndex]}}</p>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="130" fixed="right">
                <template scope="scope">
                    <el-button type="warning" @click='editMaskShow(scope.row,scope.$index)' size="small">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.row,scope.$index)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--编辑弹出蒙版-->
        <div class="editMask">
            <el-dialog
                    title="编辑分包队伍人员"
                    :visible.sync="editMask"
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
                        <el-button type="primary" @click="onSubmit">确认提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="editMask = false">取 消</el-button>
    <el-button type="primary" @click="editMask = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tableModel',
        props:{
            /*行名字*/
            columns:{
                type:Array,
                default:function () {
                    return []
                }
            },
            /*数据源*/
            modelData:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        data(){
            return{
                editMask:false,
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
            }
        },
        computed:{
        },
        methods:{
            handleDelete(row,index){
                this.modelData.splice(index,1);
            },
            /* 排序 */
            sort(a,b,c){
            },
            editMaskShow(row,index){
                for (let key in row){
                    if (row.hasOwnProperty(key)){
                        this.form[key] = row[key];
                    }
                }
                (this.form.isSafeTrain =='是') ? this.form.isSafeTrain =true:this.form.isSafeTrain=false;
                (this.form.isSafeExplanation =='是') ? this.form.isSafeExplanation =true :this.form.isSafeExplanation=false;
                this.editMask =true;
            },
            /* 关闭 */
            handleClose(){
                this.editMask =false;
            },
            /* 确认提交编辑 */
            onSubmit(){
                let id = this.form.id;
                /*
                通过 id 查找到改变了的数据，将其修改
                */
                for (let i=0; i<this.modelData.length; i++){
                    if (id === this.modelData[i].id){
                        for (let key in this.form){
                            if (this.form.hasOwnProperty(key)){
                                this.modelData[i][key] = this.form[key];
                            }
                        }
                        (this.modelData[i].isSafeTrain === true) ? this.modelData[i].isSafeTrain ="是":this.modelData[i].isSafeTrain="否";
                        (this.modelData[i].isSafeExplanation === true) ? this.modelData[i].isSafeExplanation ="是" :this.modelData[i].isSafeExplanation="否";
                    }
                }
                this.editMask =false;
            }
        }
    }
</script>

<style>
    .mode-tree .cell, .mode-tree  th>div{
        padding-left: 10px;
        padding-right: 10px;
    }
    .el-table__row td p{
        white-space:nowrap;
    }
</style>