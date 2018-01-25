<!--工程变更审批单-->
<template>
    <div class="projectChange">
        <div class="handleArea">
            <el-button type="warning" size="small">打印</el-button>
            <el-button type="warning" size="small">导出</el-button>
            <el-input
                    placeholder="请输入查询内容"
                    icon="search"
                    v-model="searchValue"
                    :on-icon-click="handleIconClick">
            </el-input>
        </div>
        <project-table :columns="columns" :tableData="original"></project-table>

    </div>
</template>

<script>
    import ProjectTable from '../../common/table/changLedgerTable/proChangeTable'
    export default {
        components:{ProjectTable},
        data(){
            return{
                searchValue:"",
                columns:[
                    {
                        text:"工程",
                        dataIndex:"project"
                    },
                    {
                        text:"工程细目",
                        dataIndex:"projectDetail"
                    },
                    {
                        text:"施工桩号",
                        dataIndex:"execPile"
                    },
                    {
                        text:"施工单位",
                        dataIndex:"execUnit"
                    },
                    {
                        text:"变更内容",
                        dataIndex:"changeCon"
                    },
                    {
                        text:"变更原因",
                        dataIndex:"changeCause"
                    },
                    {
                        text:"附件",
                        dataIndex:"affix"
                    },
                    {
                        text:"工程量增减",
                        dataIndex:"proRegulation"
                    },
                    {
                        text:"工作量增减",
                        dataIndex:"workRegulation"
                    },
                    {
                        text:"负责人",
                        dataIndex:"manager"
                    },
                    {
                        text:"技术员",
                        dataIndex:"Technician"
                    }
                ],
                original:[
                    {
                        id:1,
                        project:"￥%工程",
                        projectDetail:"工程细目",
                        execPile:"施工桩号",
                        execUnit:"施工单位",
                        changeCause:"变更原因",
                        affix:"附件",
                        proRegulation:"增",
                        workRegulation:"增",
                        manager:"西西",
                        Technician:"张**"
                    }
                ]
            }
        },
        methods:{
            handleIconClick(){
            }
        }

    }
</script>

<style scoped>
    .projectChange{
        padding-top: 10px;
    }
    .projectChange .handleArea{
        margin-bottom: 10px;
    }
    .handleArea .el-input{
        margin-left: 10px;
    }
    .handleArea .el-input, .handleArea .el-input__inner{
        width: 200px;
    }
</style>