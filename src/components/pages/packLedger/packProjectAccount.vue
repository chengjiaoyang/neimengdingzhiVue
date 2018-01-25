<!--分包工程结算会签单-->
<template>
    <div class="packProjectAccount">
        <div class="handleArea">
            <el-button type="warning" size="small" @click="addRecord">新增</el-button>
            <el-button type="warning" size="small">导出</el-button>
            <el-button type="success" size="small">打印</el-button>
        </div>
        <div class="accountForm">
            <span class="item">合同编号：
                <input type="text">
            </span>
            <span  class="item">分包单位：
                <input type="text">
            </span>
            <span  class="item">年度：
                <input type="text"> 次
            </span>
        </div>
        <ledger-table :columns="columns" :tableData="original" ></ledger-table>

    </div>
</template>

<script>
    import LedgerTable from '../../common/table/packLedgerTable/LedgerTable'
    export default {
        data(){
            return{
                columns:[
                    {
                        text:"项目编号",
                        dataIndex:"proNo"
                    },
                    {
                        text:"细目名称",
                        dataIndex:"detailName"
                    },
                    {
                        text:"完成工程量",
                        dataIndex:"comAmount"
                    },
                    {
                        text:"附件",
                        dataIndex:"affix"
                    },
                    {
                        text:"工程部审核工程量",
                        dataIndex:"checkAmount"
                    },
                    {
                        text:"材料设备部扣款情况",
                        dataIndex:"chargeCase"
                    },
                    {
                        text:"综合办",
                        dataIndex:"generalOffice"
                    },
                    {
                        text:"地方",
                        dataIndex:"place"
                    },
                    {
                        text:"项目总工程师",
                        dataIndex:"proEngineer"
                    },
                    {
                        text:"项目总",
                        dataIndex:"proAll"
                    },
                    {
                        text:"项目",
                        dataIndex:"pro"
                    },
                    {
                        text:"现场负责人",
                        dataIndex:"manager"
                    } ,
                    {
                        text:"技术员",
                        dataIndex:"technical"
                    },
                    {
                        text:"内部监理",
                        dataIndex:"innerSup"
                    }
                ],
                original:[
                    {
                        id:1,
                        proNo:"3#120",
                        detailName:"#路1",
                        comAmount:"231",
                        affix:"附件111",
                        checkAmount:"234",
                        chargeCase:"正常",
                        generalOffice:"内蒙综合办",
                        place:"内蒙中央",
                        proEngineer:"谢峰",
                        proAll:"",
                        pro:"内蒙铁路建设，，，",
                        manager:"姜夔",
                        technical:"高志强",
                        innerSup:"黄灿江"
                    },
                    {
                        id:1,
                        proNo:"3#120",
                        detailName:"#路1",
                        comAmount:"231",
                        affix:"附件111",
                        checkAmount:"234",
                        chargeCase:"正常",
                        generalOffice:"内蒙综合办",
                        place:"内蒙中央",
                        proEngineer:"谢峰",
                        proAll:"",
                        pro:"内蒙铁路建设，，，",
                        manager:"姜夔",
                        technical:"高志强",
                        innerSup:"黄灿江"
                    },
                    {
                        id:1,
                        proNo:"3#120",
                        detailName:"#路1",
                        comAmount:"231",
                        affix:"附件111",
                        checkAmount:"234",
                        chargeCase:"正常",
                        generalOffice:"内蒙综合办",
                        place:"内蒙中央",
                        proEngineer:"谢峰",
                        proAll:"",
                        pro:"内蒙铁路建设，，，",
                        manager:"姜夔",
                        technical:"高志强",
                        innerSup:"黄灿江"
                    }
                ]

            }
        },
        components:{LedgerTable},
        methods:{
            addRecord(){

            }
        }
    }
</script>

<style>
    .packProjectAccount{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .packProjectAccount .handleArea{
        margin-bottom: 10px;
    }
    .accountForm{
        margin-bottom:10px;
    }
    .accountForm .item{
        display: inline-block;
        margin-right: 10px;
    }
</style>