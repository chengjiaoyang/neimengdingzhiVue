<template>
    <div class="subChange">
        <div class="subChangeHandle">
            <el-button size="small" type="primary">数据导入</el-button>
            <el-button size="small" type="warning">新增数据</el-button>
            <el-input
                    placeholder="请选择日期"
                    icon="search"
                    v-model="input"
                    :on-icon-click="handleIconClick">
            </el-input>
        </div>
        <!--表格部分-->
        <div class="subTableContent">
            <table-sub-change v-on:changeDialog="changeDialog"></table-sub-change>
        </div>

        <!--导入数据弹框-->
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                size="tiny">
            <!--上传-->
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传excel/word文件，且不超过500kb</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import TableSubChange from '../../common/table/tableSubChange';
    export default {
        data(){
            return{
                input:'',
                dialogVisible:false,
            }
        },
        components:{
            TableSubChange
        },
        methods:{
            handleIconClick(v){
                console.log(v);
            },
            handleChange(){

            },
            changeDialog(){
                this. dialogVisible = true;
            }
        }
    }
</script>

<style>
    .subChange{
        padding: 0 10px;
        box-sizing: border-box;
    }
    .subChangeHandle{
        margin-top: 20px;
        display: flex;
    }
    .subChangeHandle .el-input, .el-input__inner{
        width: 200px;
    }
    .search{
        margin-left: 10px;
    }
    .subTableContent{
        margin-top:20px;
    }
    .subChange .el-table .cell, .el-table th>div{
        padding-right: 8px;
        padding-left: 10px;
    }
</style>
