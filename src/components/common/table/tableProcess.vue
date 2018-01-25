<template>
    <div class="tableProcess">
        <el-table
                :data="processData"
                border
                style="width: 100%">
            <el-table-column v-for="(column, index) in columns" :label="column.label" :key="column.dataIndex">
               <template scope="scope">
                   {{scope.row[column.dataIndex]}}
               </template>
            </el-table-column>

            <el-table-column label="本期" align="center">
                <el-table-column v-for="(column,index) in presentList" :label="column.label" :key="column.dataIndex">
                    <template scope="scope">
                        {{scope.row[column.dataIndex]}}
                    </template>
                </el-table-column>

            </el-table-column>
            <el-table-column label="开累" align="center">
                <el-table-column v-for="(column,index) in triedList" :label="column.label" :key="column.dataIndex">
                    <template scope="scope">
                        {{scope.row[column.dataIndex]}}
                    </template>
                </el-table-column>

            </el-table-column>
            <el-table-column prop="output" label="cc" width="100" :render-header="renderSelect">
            </el-table-column>
            <el-table-column label="编制人" prop="maker">

            </el-table-column>
            <el-table-column label="编制日期" prop="makeDate">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                columns:[
                    {
                        label:'序号',
                        dataIndex:'no'
                    },
                    {
                        label:'细目号',
                        dataIndex:'detailNo'
                    },
                    {
                        label:'细目名称',
                        dataIndex:'detailName'
                    },
                    {
                        label:'起桩号',
                        dataIndex:'startPileNo'
                    },
                    {
                        label:'止桩号',
                        dataIndex:'endPileNo'
                    },
                    {
                        label:'分部名称',
                        dataIndex:'branchName'
                    },
                    {
                        label:'分项名称',
                        dataIndex:'subName'
                    },
                    {
                        label:'结构形式',
                        dataIndex:'strucStyle'
                    },
                    {
                        label:'长度',
                        dataIndex:'length'
                    },
                    {
                        label:'桥长',
                        dataIndex:'bridgeLength'
                    },
                    {
                        label:'结构宽度',
                        dataIndex:'strucWidth'
                    },
                    {
                        label:'关键工序',
                        dataIndex:'keyProcess'
                    },
                    {
                        label:'部位',
                        dataIndex:'park'
                    },
                    {
                        label:'具体位置',
                        dataIndex:'location'
                    },
                    {
                        label:'单位',
                        dataIndex:'unit'
                    },
                    {
                        label:'单价',
                        dataIndex:'price'
                    },
                    {
                        label:'图纸数量',
                        dataIndex:'dwgNum'
                    },
                    {
                        label:'剩余数量',
                        dataIndex:'remainNum'
                    }
                ],
                presentList:[
                    {
                        label:'完成数量',
                        dataIndex:'thisCompleteNum'
                    },
                    {
                        label:'监理确认数量',
                        dataIndex:'thisSupSureNum'
                    },
                    {
                        label:'业主计量数量',
                        dataIndex:'thisOwnerCalNum'
                    },
                    {
                        label:'已完成与计划差值',
                        dataIndex:'thisPlanDiff'
                    },
                    {
                        label:'已完成占总量比例',
                        dataIndex:'thisComNumPer'
                    },
                    {
                        label:'已完成占计划',
                        dataIndex:'thisComPer'
                    },
                    {
                        label:'完成产值',
                        dataIndex:'thisComOutput'
                    },
                    {
                        label:'确认产值',
                        dataIndex:'thisSureOutput'
                    },
                    {
                        label:'业主计量',
                        dataIndex:'thisOwnerCal'
                    },
                    {
                        label:'支付计量比',
                        dataIndex:'thisPayPer'
                    },
                    {
                        label:'计量产值比',
                        dataIndex:'thisCalOutputPer'
                    },
                    {
                        label:'开工时间',
                        dataIndex:'thisStartTime'
                    },
                    {
                        label:'结束时间',
                        dataIndex:'thisEndTime'
                    },
                    {
                        label:'工时',
                        dataIndex:'workTime'
                    },
                ],
                triedList:[
                    {
                        label:'完成数量',
                        dataIndex:'triedCompleteNum'
                    },
                    {
                        label:'确认数量',
                        dataIndex:'triedSureNum'
                    },
                    {
                        label:'计量数量',
                        dataIndex:'triedCalNum'
                    },
                    {
                        label:'完成比例',
                        dataIndex:'triedComPer'
                    },
                    {
                        label:'完成产值',
                        dataIndex:'triedComOutput'
                    },
                    {
                        label:'确认产值',
                        dataIndex:'triedSureOutput'
                    },
                    {
                        label:'业主计量',
                        dataIndex:'triedOwnerCal'
                    },
                    {
                        label:'支付计量比',
                        dataIndex:'triedPayPer'
                    },
                    {
                        label:'计量产值比',
                        dataIndex:'triedCalOutputPer'
                    },
                    {
                        label:'工时',
                        dataIndex:'triedWorkTime'
                    },
                ],
                processData:[
                    {
                        id:1,
                        no:'A-129#',
                        detailNo:"#3015",
                        detailName:"#3015-i",
                        startPileNo:"8#",
                        endPileNo:"30#",
                        branchName:"***##分部",
                        subName:"**分项",
                        strucStyle:"环形",
                        length:"12054Km",
                        bridgeLength:"12054Km",
                        strucWidth:"150Km",
                        keyProcess:"关键路线",
                        park:"1#桩",
                        location:"内蒙古***市",
                        unit:"XXX部",
                        price:2333,
                        dwgNum:22,
                        remainNum:12,
//                        本期
                        thisCompleteNum:21,
                        thisSupSureNum:22,
                        thisOwnerCalNum:32,
                        thisPlanDiff:32,
                        thisComNumPer:44,
                        thisComPer:88,
                        thisComOutput:12,
                        thisSureOutput:12,
                        thisOwnerCal:66,
                        thisPayPer:"12%",
                        thisCalOutputPer:"90%",
                        thisStartTime:"2017.10.20",
                        thisEndTime:"2017.12.02",
                        workTime:"3个月",
//                        开累
                        triedCompleteNum:11,
                        triedSureNum:21,
                        triedCalNum:1,
                        triedComPer:"23%",
                        triedComOutput:23,
                        triedSureOutput:23,
                        triedOwnerCal:11,
                        triedPayPer:"50%",
                        triedCalOutputPer:"56%",
                        triedWorkTime:"3个月",
                        output:"12584",
                        maker:"牟李雪",
                        makeDate:"2017.01.20"
                    },
                ]
            }
        },
        methods:{
            renderSelect(createElement,{ column }){
                return createElement(
                    'select',
                    {class:{
                     selectOption:true
                    },
                        on:{
                            change:function (event) {
                                console.log(event.target);
                               var index = event.target.selectedIndex;
                                console.log(event.target.options[index].value);
                            }
                        }
                    },

                    [
                        createElement('option',['2017年'],{
                            attrs:{
                                value:'2017'
                            }
                        }),
                        createElement('option',['2016年'],{
                            attrs:{
                                value:'2016'
                            }
                        })
                    ],
                )

            }
        }
    }

</script>

<style>
    .selectOption{
        width: 100%;
        height: 36px;
        border: 1px solid #b7b7b7;
        border-radius: 4px;
    }


</style>