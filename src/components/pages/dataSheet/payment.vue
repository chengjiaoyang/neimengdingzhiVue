<template>
    <!--计量支付-->
    <div class="payment">
        <div class="payment-top">
            <div>
                <el-col :xs="8" :sm="5" :md="5" :lg="3">
                    <!--select-->
                    <el-select v-model="nodeValue" placeholder="请选择要检索的节点">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :xs="4" :sm="9" :md="9" :lg="7">
                    <div class="payment-start-time">
                        <span>开始时间：</span>
                        <el-date-picker
                                v-model="paymentStartTime"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :xs="4" :sm="9" :md="9" :lg="7">
                    <div class="payment-end-time">
                        <span>结束时间：</span>
                        <el-date-picker
                                v-model="paymentEndTime"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerEndTime">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :xs="8" :sm="1" :md="1" :lg="1">
                    <el-button type="primary" icon="search" size="small">查询</el-button>
                </el-col>
                <el-col :xs="8" :sm="0" :md="0" :lg="6">
                </el-col>
            </div>
            <div class="payment-search">
                <el-input
                        placeholder="请输入内容"
                        icon="search"
                        v-model="searchContent"
                        :on-icon-click="handleIconClick">
                </el-input>
            </div>
        </div>
        <div class="payment-table">
            <div class="table-tree">
                <payment-tree :columns="columns" :thisComplete="thisComplete" :thisSupervision="thisSupervision" :thisCalculate="thisCalculate" :thisCompleteNoCalculate="thisCompleteNoCalculate" :thisCompleteNoSure="thisCompleteNoSure"  :tiredComplete="tiredComplete"  :tiredSupervisionSure="tiredSupervisionSure"  :tiredCalculate="tiredCalculate" :tiredCompleteNoCalculate="tiredCompleteNoCalculate" :tiredCompleteNoSure="tiredCompleteNoSure" :tree-structure="true" :data-source="payment" :editMarkVisible="editMarkVisible" @fatherEditMaskShow="changeEidit"></payment-tree>
            </div>
        </div>

        <!--编辑弹出层-->
        <div class="edit-mark">
            <el-dialog :title="dialogTitle" :visible.sync="editMarkVisible">
                <div class="tabel-data clearfix">
                    <div class="commonData">
                        <div class="data-item" v-for="(column , index) in columns">
                            <label for="Qused">{{column.text}}:</label>
                            <input type="text" name="Qused" v-model="showMaskDatas[column.dataIndex]">
                        </div>
                    </div>
                    <div class="monthData">
                        <p>当月：</p>
                        <div class="data-item" v-for="(column , index) in thisComplete">
                            <label for="Qused">{{column.text}}:</label>
                            <input type="text" name="Qused" v-model="showMaskDatas[column.dataIndex]">
                        </div>
                    </div>
                    <div class="quartData">
                        <p>当季：</p>
                        <div class="data-item" v-for="(column , index) in thisSupervision">
                            <label for="Qused">{{column.text}}:</label>
                            <input type="text" name="Qused" v-model="showMaskDatas[column.dataIndex]">
                        </div>
                    </div>
                    <div class="yeartData">
                        <p>当年：</p>
                        <div class="data-item" v-for="(column , index) in thisCalculate">
                            <label for="Qused">{{column.text}}:</label>
                            <input type="text" name="Qused" v-model="showMaskDatas[column.dataIndex]">
                        </div>
                    </div>

                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancelEdit()">取 消</el-button>
                    <el-button type="primary" @click="submitEidit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import PaymentTree from '../../../components/common/treenTable/paymentTree'
    export default {
        data(){
            return{
                nodeValue: '',
                options: [
                    {
                        value: '选项1',
                        label: '第100章'
                    },
                    {
                        value: '选项2',
                        label: '第200章'
                    },
                    {
                        value: '选项3',
                        label: '第300章'
                    },
                    {
                        value: '选项4',
                        label: '第400章'
                    },
                    {
                        value: '选项5',
                        label: '第100章'
                    }
                ],
                pickerEndTime:{
                    disabledDate:current => {
                        // 禁用的时间
                        return current && current.valueOf() < this.paymentStartTime.valueOf();
                    }
                },
                paymentStartTime: '',
                paymentEndTime:'',
                searchContent:'',
                columns: [
                    {
                        text: '编码',
                        dataIndex: 'no'
                    },
                    {

                        text: '名称',
                        dataIndex: 'Name'
                    },
                    {

                        text: '单位',
                        dataIndex: 'unit'
                    },
                    {

                        text:'设计数量',
                        dataIndex:'designNum'
                    },
                    {
                        text:'设计合价',
                        dataIndex:'designPrice'
                    },
                    {

                        text:'剩余数量',
                        dataIndex:'residue'
                    },
                ],
                /*本期完成*/
                thisComplete:[
                    {
                        text:'计划数量',
                        dataIndex:'thisPlantNum'
                    },
                    {

                        text:'变更数量',
                        dataIndex:'thisChangeNum'
                    },
                    {
                        text:'变更合价',
                        dataIndex:'thisChangePrice'
                    },
                    {
                        text:'未批复变更合价',
                        dataIndex:'thisNoReplyPrice'
                    },
                    {
                        text:'完成数量',
                        dataIndex:'thisCompleteNum'
                    },
                    {
                        text:'完成合价',
                        dataIndex:'thisCompletePrice'
                    },
                    {
                        text:'完成比例',
                        dataIndex:'thisCompletePer'
                    },
                    {
                        text:'完成产值',
                        dataIndex:'thisCompleteOutPut'
                    }
                ],
                thisSupervision:[
                    {
                        text:'本期数量',
                        dataIndex:'thisSuperNum',
                    },
                    {
                        text:'变更数量',
                        dataIndex:'thisSuperChangeNum',
                    },
                    {
                        text:'变更合价',
                        dataIndex:'thisSuperChangePrice',
                    },
                    {
                        text:'确认比例',
                        dataIndex:'thisSuperSurePer',
                    },
                    {
                        text:'本期合价',
                        dataIndex:'thisSuperPrice',
                    },
                    {
                        text:'确认产值',
                        dataIndex:'thisSuperOutput',
                    },
                ],
                thisCalculate:[
                    {
                        text:'本期数量',
                        dataIndex:'thisCalNum',
                    },
                    {
                        text:'变更数量',
                        dataIndex:'thisCalChangeNum',
                    },
                    {
                        text:'本期合价',
                        dataIndex:'thisCalPrice',
                    },
                    {
                        text:'计量比例（数量）',
                        dataIndex:'thisCalPer',
                    },
                    {
                        text:'变更合价',
                        dataIndex:'thisCalChangePrice',
                    },
                    {
                        text:'计量产值',
                        dataIndex:'thisCalOutput',
                    }
                ],
                /*本期已完成未计量*/
                thisCompleteNoCalculate:[
                    {
                        text: '数量',
                        dataIndex:'thisComNum'
                    },
                    {
                        text: '合价',
                        dataIndex:'thisComPrice'
                    }
                ],
                /*本期已完成未确认*/
                thisCompleteNoSure:[
                    {
                        text: '数量',
                        dataIndex:'thisComNoNum'
                    },
                    {
                        text: '合价',
                        dataIndex:'thisComNoPrice'
                    }
                ],
                /*开累完成*/
                tiredComplete:[
                    {
                        text:'完成数量',
                        dataIndex:'tiredComNum',
                    },
                    {
                        text:'变更数量',
                        dataIndex:'tiredComChangeNum',
                    },
                    {
                        text:'未批复变更数量',
                        dataIndex:'tiredComNoPassChangeNum',
                    },
                    {
                        text:'合价',
                        dataIndex:'tiredComPrice',
                    },
                    {
                        text:'占比',
                        dataIndex:'tiredComPer',
                    },
                    {
                        text:'变更合价',
                        dataIndex:'tiredComChangePrice',
                    },
                    {
                        text:'未批复变更数量',
                        dataIndex:'tiredComNoPassChangePrice',
                    },
                    {
                        text:'开累产值',
                        dataIndex:'tiredComOutput',
                    },
                ],
                /*开累监理确认*/
                tiredSupervisionSure:[
                    {
                        text:'完成数量',
                        dataIndex:'tiredSuperComNum',
                    },
                    {
                        text:'变更数量',
                        dataIndex:'tiredSuperChangeNum',
                    },
                    {
                        text:'合价',
                        dataIndex:'tiredSuperPrice',
                    },
                    {
                        text:'占比',
                        dataIndex:'tiredSuperPer',
                    },
                    {
                        text:'变更合价',
                        dataIndex:'tiredSuperChangePrice',
                    },
                    {
                        text:'计量产值',
                        dataIndex:'tiredSuperOutput',
                    },
                ],
                /*开累计量*/
                tiredCalculate:[
                    {
                        text:'完成数量',
                        dataIndex:'tiredCalComNum',
                    },
                    {
                        text:'变更数量',
                        dataIndex:'tiredCalChangeNum',
                    },
                    {
                        text:'合价',
                        dataIndex:'tiredCalPrice',
                    },
                    {
                        text:'占比',
                        dataIndex:'tiredCalPer',
                    },
                    {
                        text:'变更合价',
                        dataIndex:'tiredCalChangePrice',
                    },
                    {
                        text:'计量产值',
                        dataIndex:'tiredCalOutput',
                    }
                ],
                /*开累已完未计量*/
                tiredCompleteNoCalculate:[
                    {
                        text: '数量',
                        dataIndex:'tiredComNoCalNum'
                    },
                    {
                        text: '合价',
                        dataIndex:'tiredComNoCalPrice'
                    }
                ],
                /*开累已完未确认*/
                tiredCompleteNoSure:[
                    {
                        text: '数量',
                        dataIndex:'tiredComNoSureNum'
                    },
                    {
                        text: '合价',
                        dataIndex:'tiredComNoSurePrice'
                    }
                ],
                /*数据源*/
                payment:[
                    {
                        "id":1,
                        "parentId":0,
                        "edit":"false",
                        "no":"00A1",
                        "Name":"厦门公路总项目",
                        "unit":"厦门公路部门",
                        "designNum":"2458",
                        "designPrice":25475695.24,
                        "residue":2104,
                        "thisPlantNum":2,
                        "thisChangeNum":3,
                        "thisChangePrice":4,
                        "thisNoReplyPrice":5,
                        "thisCompleteNum":6,
                        "thisCompletePrice":7,
                        "thisCompletePer":8,
                        "thisCompleteOutPut":2,
                        "thisSuperNum":2,
                        "thisSuperChangeNum":3,
                        "thisSuperChangePrice":4,
                        "thisSuperSurePer":5,
                        "thisSuperPrice":6,
                        "thisSuperOutput":7,
                        "thisCalNum":8,
                        "thisCalChangeNum":2,
                        "thisCalPrice":3,
                        "thisCalPer":4,
                        "thisCalChangePrice":5,
                        "thisCalOutput":6,
                        "thisComNum":7,
                        "thisComPrice":8,
                        "thisComNoNum":8,
                        "thisComNoPrice":8,
                        "tiredComNum":8,
                        "tiredComChangeNum":8,
                        "tiredComNoPassChangeNum":8,
                        "tiredComPrice":8,
                        "tiredComPer":8,
                        "tiredComChangePrice":8,
                        "tiredComNoPassChangePrice":8,
                        "tiredComOutput":8,
                        "tiredSuperComNum":8,
                        "tiredSuperChangeNum":8,
                        "tiredSuperPrice":8,
                        "tiredSuperPer":8,
                        "tiredSuperChangePrice":8,
                        "tiredSuperOutput":8,
                        "tiredCalComNum":8,
                        "tiredCalChangeNum":8,
                        "tiredCalPrice":8,
                        "tiredCalPer":8,
                        "tiredCalChangePrice":8,
                        "tiredCalOutput":8,
                        "tiredComNoCalNum":8,
                        "tiredComNoCalPrice":8,
                        "tiredComNoSureNum":8,
                        "tiredComNoSurePrice":8,
                        "children":[{
                            "id":2,
                            "parentId":1,
                            "edit":"false",
                            "no":"00A1",
                            "Name":"厦门公路总项目",
                            "unit":"厦门公路部门",
                            "designNum":"2458",
                            "designPrice":25475695.24,
                            "residue":2104,
                            "thisPlantNum":2,
                            "thisChangeNum":3,
                            "thisChangePrice":4,
                            "thisNoReplyPrice":5,
                            "thisCompleteNum":6,
                            "thisCompletePrice":7,
                            "thisCompletePer":8,
                            "thisCompleteOutPut":2,
                            "thisSuperNum":2,
                            "thisSuperChangeNum":3,
                            "thisSuperChangePrice":4,
                            "thisSuperSurePer":5,
                            "thisSuperPrice":6,
                            "thisSuperOutput":7,
                            "thisCalNum":8,
                            "thisCalChangeNum":2,
                            "thisCalPrice":3,
                            "thisCalPer":4,
                            "thisCalChangePrice":5,
                            "thisCalOutput":6,
                            "thisComNum":7,
                            "thisComPrice":8,
                            "thisComNoNum":8,
                            "thisComNoPrice":8,
                            "tiredComNum":8,
                            "tiredComChangeNum":8,
                            "tiredComNoPassChangeNum":8,
                            "tiredComPrice":8,
                            "tiredComPer":8,
                            "tiredComChangePrice":8,
                            "tiredComNoPassChangePrice":8,
                            "tiredComOutput":8,
                            "tiredSuperComNum":8,
                            "tiredSuperChangeNum":8,
                            "tiredSuperPrice":8,
                            "tiredSuperPer":8,
                            "tiredSuperChangePrice":8,
                            "tiredSuperOutput":8,
                            "tiredCalComNum":8,
                            "tiredCalChangeNum":8,
                            "tiredCalPrice":8,
                            "tiredCalPer":8,
                            "tiredCalChangePrice":8,
                            "tiredCalOutput":8,
                            "tiredComNoCalNum":8,
                            "tiredComNoCalPrice":8,
                            "tiredComNoSureNum":8,
                            "tiredComNoSurePrice":8
                        }]
                    },
                    {
                        "id":3,
                        "parentId":0,
                        "edit":"false",
                        "no":"00A1",
                        "Name":"厦门公路总项目",
                        "unit":"厦门公路部门",
                        "designNum":"2458",
                        "designPrice":25475695.24,
                        "residue":2104,
                        "thisPlantNum":2,
                        "thisChangeNum":3,
                        "thisChangePrice":4,
                        "thisNoReplyPrice":5,
                        "thisCompleteNum":6,
                        "thisCompletePrice":7,
                        "thisCompletePer":8,
                        "thisCompleteOutPut":2,
                        "thisSuperNum":2,
                        "thisSuperChangeNum":3,
                        "thisSuperChangePrice":4,
                        "thisSuperSurePer":5,
                        "thisSuperPrice":6,
                        "thisSuperOutput":7,
                        "thisCalNum":8,
                        "thisCalChangeNum":2,
                        "thisCalPrice":3,
                        "thisCalPer":4,
                        "thisCalChangePrice":5,
                        "thisCalOutput":6,
                        "thisComNum":7,
                        "thisComPrice":8,
                        "thisComNoNum":8,
                        "thisComNoPrice":8,
                        "tiredComNum":8,
                        "tiredComChangeNum":8,
                        "tiredComNoPassChangeNum":8,
                        "tiredComPrice":8,
                        "tiredComPer":8,
                        "tiredComChangePrice":8,
                        "tiredComNoPassChangePrice":8,
                        "tiredComOutput":8,
                        "tiredSuperComNum":8,
                        "tiredSuperChangeNum":8,
                        "tiredSuperPrice":8,
                        "tiredSuperPer":8,
                        "tiredSuperChangePrice":8,
                        "tiredSuperOutput":8,
                        "tiredCalComNum":8,
                        "tiredCalChangeNum":8,
                        "tiredCalPrice":8,
                        "tiredCalPer":8,
                        "tiredCalChangePrice":8,
                        "tiredCalOutput":8,
                        "tiredComNoCalNum":8,
                        "tiredComNoCalPrice":8,
                        "tiredComNoSureNum":8,
                        "tiredComNoSurePrice":8
                    },
                    {
                        "id":4,
                        "parentId":0,
                        "edit":"false",
                        "no":"00A1",
                        "Name":"厦门公路总项目",
                        "unit":"厦门公路部门",
                        "designNum":"2458",
                        "designPrice":25475695.24,
                        "residue":2104,
                        "thisPlantNum":2,
                        "thisChangeNum":3,
                        "thisChangePrice":4,
                        "thisNoReplyPrice":5,
                        "thisCompleteNum":6,
                        "thisCompletePrice":7,
                        "thisCompletePer":8,
                        "thisCompleteOutPut":2,
                        "thisSuperNum":2,
                        "thisSuperChangeNum":3,
                        "thisSuperChangePrice":4,
                        "thisSuperSurePer":5,
                        "thisSuperPrice":6,
                        "thisSuperOutput":7,
                        "thisCalNum":8,
                        "thisCalChangeNum":2,
                        "thisCalPrice":3,
                        "thisCalPer":4,
                        "thisCalChangePrice":5,
                        "thisCalOutput":6,
                        "thisComNum":7,
                        "thisComPrice":8,
                        "thisComNoNum":8,
                        "thisComNoPrice":8,
                        "tiredComNum":8,
                        "tiredComChangeNum":8,
                        "tiredComNoPassChangeNum":8,
                        "tiredComPrice":8,
                        "tiredComPer":8,
                        "tiredComChangePrice":8,
                        "tiredComNoPassChangePrice":8,
                        "tiredComOutput":8,
                        "tiredSuperComNum":8,
                        "tiredSuperChangeNum":8,
                        "tiredSuperPrice":8,
                        "tiredSuperPer":8,
                        "tiredSuperChangePrice":8,
                        "tiredSuperOutput":8,
                        "tiredCalComNum":8,
                        "tiredCalChangeNum":8,
                        "tiredCalPrice":8,
                        "tiredCalPer":8,
                        "tiredCalChangePrice":8,
                        "tiredCalOutput":8,
                        "tiredComNoCalNum":8,
                        "tiredComNoCalPrice":8,
                        "tiredComNoSureNum":8,
                        "tiredComNoSurePrice":8,
                        "children":[{
                            "id":5,
                            "parentId":4,
                            "edit":"false",
                            "no":"00A1",
                            "Name":"厦门公路总项目",
                            "unit":"厦门公路部门",
                            "designNum":"2458",
                            "designPrice":25475695.24,
                            "residue":2104,
                            "thisPlantNum":2,
                            "thisChangeNum":3,
                            "thisChangePrice":4,
                            "thisNoReplyPrice":5,
                            "thisCompleteNum":6,
                            "thisCompletePrice":7,
                            "thisCompletePer":8,
                            "thisCompleteOutPut":2,
                            "thisSuperNum":2,
                            "thisSuperChangeNum":3,
                            "thisSuperChangePrice":4,
                            "thisSuperSurePer":5,
                            "thisSuperPrice":6,
                            "thisSuperOutput":7,
                            "thisCalNum":8,
                            "thisCalChangeNum":2,
                            "thisCalPrice":3,
                            "thisCalPer":4,
                            "thisCalChangePrice":5,
                            "thisCalOutput":6,
                            "thisComNum":7,
                            "thisComPrice":8,
                            "thisComNoNum":8,
                            "thisComNoPrice":8,
                            "tiredComNum":8,
                            "tiredComChangeNum":8,
                            "tiredComNoPassChangeNum":8,
                            "tiredComPrice":8,
                            "tiredComPer":8,
                            "tiredComChangePrice":8,
                            "tiredComNoPassChangePrice":8,
                            "tiredComOutput":8,
                            "tiredSuperComNum":8,
                            "tiredSuperChangeNum":8,
                            "tiredSuperPrice":8,
                            "tiredSuperPer":8,
                            "tiredSuperChangePrice":8,
                            "tiredSuperOutput":8,
                            "tiredCalComNum":8,
                            "tiredCalChangeNum":8,
                            "tiredCalPrice":8,
                            "tiredCalPer":8,
                            "tiredCalChangePrice":8,
                            "tiredCalOutput":8,
                            "tiredComNoCalNum":8,
                            "tiredComNoCalPrice":8,
                            "tiredComNoSureNum":8,
                            "tiredComNoSurePrice":8
                        },
                            {
                                "id":6,
                                "parentId":4,
                                "edit":"false",
                                "no":"00A1",
                                "Name":"厦门公路总项目",
                                "unit":"厦门公路部门",
                                "designNum":"2458",
                                "designPrice":25475695.24,
                                "residue":2104,
                                "thisPlantNum":2,
                                "thisChangeNum":3,
                                "thisChangePrice":4,
                                "thisNoReplyPrice":5,
                                "thisCompleteNum":6,
                                "thisCompletePrice":7,
                                "thisCompletePer":8,
                                "thisCompleteOutPut":2,
                                "thisSuperNum":2,
                                "thisSuperChangeNum":3,
                                "thisSuperChangePrice":4,
                                "thisSuperSurePer":5,
                                "thisSuperPrice":6,
                                "thisSuperOutput":7,
                                "thisCalNum":8,
                                "thisCalChangeNum":2,
                                "thisCalPrice":3,
                                "thisCalPer":4,
                                "thisCalChangePrice":5,
                                "thisCalOutput":6,
                                "thisComNum":7,
                                "thisComPrice":8,
                                "thisComNoNum":8,
                                "thisComNoPrice":8,
                                "tiredComNum":8,
                                "tiredComChangeNum":8,
                                "tiredComNoPassChangeNum":8,
                                "tiredComPrice":8,
                                "tiredComPer":8,
                                "tiredComChangePrice":8,
                                "tiredComNoPassChangePrice":8,
                                "tiredComOutput":8,
                                "tiredSuperComNum":8,
                                "tiredSuperChangeNum":8,
                                "tiredSuperPrice":8,
                                "tiredSuperPer":8,
                                "tiredSuperChangePrice":8,
                                "tiredSuperOutput":8,
                                "tiredCalComNum":8,
                                "tiredCalChangeNum":8,
                                "tiredCalPrice":8,
                                "tiredCalPer":8,
                                "tiredCalChangePrice":8,
                                "tiredCalOutput":8,
                                "tiredComNoCalNum":8,
                                "tiredComNoCalPrice":8,
                                "tiredComNoSureNum":8,
                                "tiredComNoSurePrice":8
                            }
                        ]
                    }
                ],

                dataSource:[],
                editMarkVisible:false,
                dialogTitle:'',
                showMaskDatas:'',
                /*提交编辑内容，更新表格*/
                submitEidit(){
                    for (const v of this.dataSource) {
                        if (v.id === this.showMaskDatas.id) {
                            console.log(this.showMaskDatas.id);
                            const index = this.dataSource.indexOf(v);
                            this.dataSource.splice(index, 1, this.showMaskDatas);
                            break;
                        }
                    }
                    this.dialogTitle='部门编号:';
                    this.editMarkVisible = false;
                },
                /*--处理编辑--*/
                changeEidit(row,index){
                    alert(0);
                    let self = this;
                    self.editMarkVisible = true;
                    /*使用深拷贝，否则共用一个对象，双向绑定问题*/
                    self.showMaskDatas = Object.assign({},row);
                    self.dialogTitle = self.dialogTitle + self.showMaskDatas.deptno;
                },
            }
        },
        components:{
            PaymentTree
        },
        created(){
        },
        methods:{
            handleIconClick(v){
                console.log(v);
            }
        }
    }
</script>

<style>
    .payment{
        width: 100%;
        height: 1000px;
        color: white;
        padding-top: 15px;
        text-align: left;
    }
    .payment> .payment-top{
        text-align: center;
    }
    .payment> .payment-top > .payment-search{
        padding-top:30px;
        padding-bottom:20px;
    }
    .payment> .payment-top > .payment-search .el-input{
        width: 200px;
        display: block;
        margin-top:20px;
    }
    .payment-start-time span{
        color: #999999;
    }
    .payment-end-time span{
        color: #999999;
    }

</style>
