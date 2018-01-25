<!--已批复工程变更明细-->
<template>
    <div class="approveProject">
        <!--操作-->
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
        <project-table :columns="columns" :projectData="projectData"></project-table>
        <tree-table :columns="treeColumn" :dataSource="dataSource" :levelColumns="levelColumns" :tree-structure="true"></tree-table>
    </div>
</template>

<script>
    import ProjectTable from '../../common/table/changLedgerTable/projectTable'
    import TreeTable from '../../common/table/changLedgerTable/treeTable'
    export default {
        components: {ProjectTable,TreeTable},
        data(){
            return{
                columns:[
                    {
                        text:"项目名称",
                        dataIndex:"proName"
                    },
                    {
                        text:"承建单位",
                        dataIndex:"buildUnit"
                    },
                    {
                        text:"合同号",
                        dataIndex:"contractNum"
                    },
                    {
                         text:"截止日期",
                         dataIndex:"deadlineTime"
                    },
                    {
                         text:"监理单位",
                         dataIndex:"supUnit"
                    },
                    {
                         text:"编号",
                         dataIndex:"no"
                    }
                ],
                projectData:[
                    {
                        id:1,
                        proName:"厦门铁路项目",
                        buildUnit:"中铁七局",
                        contractNum:"1#56",
                        deadlineTime:"2017-02-12",
                        supUnit:"央企",
                        no:"3021"
                    },
                    {
                        id:2,
                        proName:"厦门铁路项目",
                        buildUnit:"中铁七局",
                        contractNum:"1#56",
                        deadlineTime:"2017-02-12",
                        supUnit:"央企",
                        no:"3021"
                    },
                ],
                searchValue:"",
                originalColumn: [
                    {
                        text:'细目号',
                        dataIndex:'detail'
                    },
                    {
                        text:'细目名称',
                        dataIndex:'detailName'
                    },
                    {
                        text:'单位',
                        dataIndex:'unit'
                    },
                    {
                        text:'单价',
                        dataIndex:'price'
                    },
                    {
                        multiLevel:{
                            level:"变更问号",
                            childrenColumn:[
                                {
                                    text:"变更数量",
                                    dataIndex:"changeNum1"
                                },
                                {
                                     text:"变更金额",
                                     dataIndex:"changePrice1"
                                }
                            ]
                        }
                    },
                    {
                        multiLevel:{
                            level:"变更问号2",
                            childrenColumn:[
                                {
                                    text:"变更数量",
                                    dataIndex:"changeNum2"
                                },
                                {
                                    text:"变更金额",
                                    dataIndex:"changePrice2"
                                }
                            ]
                        }
                    },
                ],
                dataSource:[
                    {
                        id:1,
                        parentId:0,
                        edit:"false",
                        detail:"01",
                        detailName:"道路建设",
                        unit:"中铁七局",
                        price:123445,
                        changeNum1:"23333",
                        changePrice1:"223445",
                        changeNum2:"32560",
                        changePrice2:"1200",
                        children:[
                            {
                                id:2,
                                parentId:1,
                                edit:"false",
                                detail:"01",
                                detailName:"道路建设",
                                unit:"中铁七局",
                                price:123445,
                                changeNum1:"23333",
                                changePrice1:"223445",
                                changeNum2:"32560",
                                changePrice2:"1200"
                            }
                        ]
                    },
                    {
                        id:3,
                        parentId:0,
                        edit:"false",
                        detail:"01",
                        detailName:"道路建设",
                        unit:"中铁七局",
                        price:123445,
                        changeNum1:"23333",
                        changePrice1:"223445",
                        changeNum2:"32560",
                        changePrice2:"1200",
                        children:[
                            {
                                id:4,
                                parentId:1,
                                edit:"false",
                                detail:"01",
                                detailName:"道路建设",
                                unit:"中铁七局",
                                price:123445,
                                changeNum1:"23333",
                                changePrice1:"223445",
                                changeNum2:"32560",
                                changePrice2:"1200"
                            }
                        ]
                    }
                ],
            }
        },
        computed:{
            treeColumn(){
                return this.originalColumn.filter((item) =>{
                    if (item.text){
                        return item
                    }
                })
            },
            levelColumns(){
                return this.originalColumn.filter((item) =>{
                    if (item.multiLevel){
                        return item
                    }
                })
            }
        },
        methods:{
            handleIconClick(){},
        }
    }
</script>

<style>
    .approveProject{
        padding: 10px;
        box-sizing: border-box;
    }
    .approveProject .handleArea{
        margin-bottom:10px;
    }
    .handleArea .el-input{
        margin-left: 10px;
    }
    .handleArea .el-input, .handleArea .el-input__inner{
        width: 200px;
    }
</style>