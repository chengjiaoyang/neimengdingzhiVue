<!--分包队工程进度台账-->
<template>
    <div class="packProjectProcess">
        <div class="handleArea">
            <el-button type="warning" size="small" @click="addRecord">新增</el-button>
            <el-button type="warning" size="small">导出</el-button>
            <el-button type="success" size="small">打印</el-button>
        </div>
        <div class="handle">
            <span>施工队伍名称：
                <input type="text">
            </span>
        </div>
        <ledger-table :columns="columns" :tableData="original"></ledger-table>
    </div>
</template>

<script>
    import LedgerTable from '../../common/table/packLedgerTable/LedgerTable'
    export default {
        components:{
            LedgerTable
        },
        data(){
            return{
                columns:[
                    {
                        text:"清单编号",
                        dataIndex:"listNo"
                    },
                    {
                        text:"细目名称",
                        dataIndex:"detailName"
                    },
                    {
                        text:"单位",
                        dataIndex:"unit"
                    },
                    {
                        text:"单价",
                        dataIndex:"price"
                    },
                    {
                        text:"合计",
                        dataIndex:"total"
                    }
                ],
                original:[
                    {
                        id:2,
                        listNo:"3#23",
                        detailName:"哈哈还是",
                        unit:"内蒙",
                        price:"3455",
                        total:"14532"
                    },
                    {
                        id:3,
                        listNo:"3#23",
                        detailName:"哈哈还是",
                        unit:"内蒙",
                        price:"3455",
                        total:"14532"
                    }
                ]
            }
        }

    }
</script>

<style>
    .packProjectProcess{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .packProjectProcess .handleArea{
        margin-bottom: 10px;
    }
</style>