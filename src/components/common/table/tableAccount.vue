<template>
    <el-table
            ref="multipleTable"
            :data="tableAccount"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column v-for="(column,index) in columns" :label="column.text" :key="column.dataIndex">
            <template scope="scope">
                <span v-if="column.dataIndex !='keyProcess'">{{scope.row[column.dataIndex]}}</span>
                <span v-if="column.dataIndex =='keyProcess'">
                     <el-select v-model="keyProValue" placeholder="请选择日期">
                   <el-option
                           v-for="item in keyProOption"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
                </span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
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
</template>

<script>
    export default {
        data() {
            return {
                tableAccount:[
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
                        startWorkTime:"2017-02-01 09:01:21",
                        endWorkTime:"2017-02-01 21:01:21",
                        completeNum:'102',
                        amountNum:'555',
                        contractPrice:'33',
                        accountContract:'22',
                        accountPrice:'2323',
                        originator:'heheh',
                        originDate:'2017-02-01',
                        remark:''
                    },
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
                        startWorkTime:"2017-02-01 09:01:21",
                        endWorkTime:"2017-02-01 21:01:21",
                        completeNum:'102',
                        amountNum:'555',
                        contractPrice:'33',
                        accountContract:'22',
                        accountPrice:'2323',
                        originator:'heheh',
                        originDate:'2017-02-01',
                        remark:''
                    }
                ],
                multipleSelection: [],
                columns:[
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
                        text:'起桩号',
                        dataIndex:"startPileNo"
                    },
                    {
                        text:'止桩号',
                        dataIndex:"endPileNo"
                    },
                    {
                        text:'分部名称',
                        dataIndex:"branchName"
                    },
                    {
                        text:'分项名称',
                        dataIndex:"subName"
                    },
                    {
                        text:'结构形式（400章）',
                        dataIndex:"strucStyle"
                    },
                    {
                        text:'长度（300章）',
                        dataIndex:"length"
                    },
                    {
                        text:'桥长（300章）',
                        dataIndex:"bridgeLength"
                    },
                    {
                        text:'结构层宽度',
                        dataIndex:"strucWidth"
                    },
                    {
                        text:'关键工序',
                        dataIndex:"keyProcess"
                    },
                    {
                        text:'部位',
                        dataIndex:"park"
                    },
                    {
                        text:'具体位置',
                        dataIndex:"location"
                    },
                    {
                        text:'单位',
                        dataIndex:"unit"
                    },
                    {
                        text:'完成数量',
                        dataIndex:'completeNum'
                    },
                    {
                        text:'结算数量',
                        dataIndex:'amountNum'
                    },
                    {
                        text:'合同单价',
                        dataIndex:'contractPrice'
                    },
                    {
                        text:'结算合同',
                        dataIndex:'accountContract'
                    },
                    {
                        text:'结算金额',
                        dataIndex:'accountPrice'
                    },
                    {
                        text:'编制人',
                        dataIndex:'originator'
                    },
                    {
                        text:'编制日期',
                        dataIndex:'originDate'
                    },
                    {
                        text:'备注',
                        dataIndex:'remark'
                    }
                ],
                keyProValue:"",
                keyProOption:[
                    {
                        label:"一队伍",
                        value:"一队伍"
                    },
                    {
                        label:"二队伍",
                        value:"二队伍"
                    },
                    {
                        label:"三队伍",
                        value:"三队伍"
                    },
                ],
            }
        },

        methods: {
            ceshi(scope){
                console.log(scope);
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                this.$emit('controlBtn',val);
            }
        }
    }
</script>

<style>

</style>
