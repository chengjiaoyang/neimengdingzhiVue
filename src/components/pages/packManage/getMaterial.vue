<template>
    <div class="getMaterial">
        <!--操作部分-->
        <div class="materialHandle">
            <el-select v-model="teams" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input
                    placeholder="请选择日期"
                    icon="search"
                    v-model="input"
                    :on-icon-click="handleIconClick">
            </el-input>

            <div class="btnGroup">
                <el-button type="success" size="small" @click="addDivice">新增设备</el-button>
                <el-button type="success" size="small" @click="addMaterial">新增材料</el-button>
                <el-button type="success" size="small">删 除</el-button>
                <el-button type="success" size="small">更 改</el-button>
            </div>
        </div>
        <!--表格内容-->
        <div class="tableContent">
            <div class="tableLeft">
                <table-material :column1="column1" :tablelData="materialList.data" :tableLabel="materialList.name"></table-material>
            </div>
            <div class="tableRight">
                <table-material :column1="column2" :tablelData="diviceList.data" :tableLabel="diviceList.name"></table-material>
            </div>

        </div>

        <!--新增设备蒙版-->
        <div class="addDiviceMask">
            <el-dialog
                    :title="diviceList.name"
                    :visible.sync="dialogVisible"
                    size="small"
                    :before-close="handleClose">
                <el-form ref="form" :model="diviceForm" label-width="100px" :inline="true">
                    <el-form-item label="序号">
                        <el-input v-model="diviceForm.id"></el-input>
                    </el-form-item>
                    <el-form-item label="混凝土拌合设备">
                        <el-input v-model="diviceForm.mixingDevice"></el-input>
                    </el-form-item>
                    <el-form-item label="降尘设备">
                        <el-input v-model="diviceForm.dustFallDevice"></el-input>
                    </el-form-item>
                    <el-form-item label="喷淋设备">
                        <el-input v-model="diviceForm.rainmaker"></el-input>
                    </el-form-item>
                    <el-form-item label="混凝土喷射机">
                        <el-input v-model="diviceForm.shotcreteMachine"></el-input>
                    </el-form-item>
                    <el-form-item label="砂浆泵">
                        <el-input v-model="diviceForm.mortarPump"></el-input>
                    </el-form-item>
                    <el-form-item label="泥浆泵">
                        <el-input v-model="diviceForm.sludger"></el-input>
                    </el-form-item>

                    <div class="addForm">
                        <el-form-item >
                            <el-button type="primary" @click="onSubmit('divice')">立即新增</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </div>
                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>

        <!--新增材料蒙版-->
        <div class="addMaterialMask">
            <el-dialog
                    :title="materialList.name"
                    :visible.sync="materialMask"
                    size="small"
                    :before-close="handleClose">
                <el-form ref="form" :model="materialForm" label-width="100px" :inline="true">
                    <el-form-item label="序号">
                        <el-input v-model="materialForm.id"></el-input>
                    </el-form-item>
                    <el-form-item label="混凝土">
                        <el-input v-model="materialForm.beton"></el-input>
                    </el-form-item>
                    <el-form-item label="带肋钢筋">
                        <el-input v-model="materialForm.rebar"></el-input>
                    </el-form-item>
                    <el-form-item label="光圆钢筋">
                        <el-input v-model="materialForm.roundBar"></el-input>
                    </el-form-item>
                    <el-form-item label="钢管">
                        <el-input v-model="materialForm.steelPipe"></el-input>
                    </el-form-item>
                    <el-form-item label="钢板">
                        <el-input v-model="materialForm.steelPlate"></el-input>
                    </el-form-item>
                    <el-form-item label="钢绞丝">
                        <el-input v-model="materialForm.steelWire"></el-input>
                    </el-form-item>
                    <el-form-item label="砂浆">
                        <el-input v-model="materialForm.mortar"></el-input>
                    </el-form-item>

                    <div class="addForm">
                        <el-form-item >
                            <el-button type="primary" @click="onSubmit('material')">立即新增</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </div>
                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="materialMask = false">取 消</el-button>
    <el-button type="primary" @click="materialMask = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import TableMaterial from '../../common/table/tableMaterial'
    export default {
        name:'getMaterial',
        components:{
            TableMaterial
        },
        data(){
            return {
                teams: '',
                input: '',
                options: [
                    {
                        label: "一队伍",
                        value: "一队伍"
                    },
                    {
                        label: "二队伍",
                        value: "二队伍"
                    },
                    {
                        label: "三队伍",
                        value: "三队伍"
                    },
                ],
                diviceList: {
                    name: "领取设备",
                    data: [
                        {
                            "id": 1,
                            "mixingDevice": 6,
                            "dustFallDevice": 3,
                            "rainmaker": 3,
                            "shotcreteMachine": 2,
                            "mortarPump": 2,
                            "sludger": 4
                        },
                        {
                            "id": 2,
                            "mixingDevice": 6,
                            "dustFallDevice": 3,
                            "rainmaker": 3,
                            "shotcreteMachine": 2,
                            "mortarPump": 2,
                            "sludger": 4
                        },
                        {
                            "id": 3,
                            "mixingDevice": 6,
                            "dustFallDevice": 3,
                            "rainmaker": 3,
                            "shotcreteMachine": 2,
                            "mortarPump": 2,
                            "sludger": 4
                        }
                    ]
                },
                diviceForm: {
                    "mixingDevice": "",
                    "dustFallDevice": "",
                    "rainmaker": "",
                    "shotcreteMachine": "",
                    "mortarPump": "",
                    "sludger": ""
                },
                materialList: {
                    name: "领取材料",
                    data: [
                        {
                            "id": 1,
                            "beton": "23t",
                            "rebar": "450t",
                            "roundBar": "43t",
                            "steelPipe": "44t",
                            "steelPlate": "10t",
                            "steelWire": "66t",
                            "mortar": "901t",
                        },
                        {
                            "id": 2,
                            "beton": "23t",
                            "rebar": "450t",
                            "roundBar": "43t",
                            "steelPipe": "44t",
                            "steelPlate": "10t",
                            "steelWire": "66t",
                            "mortar": "901t",
                        },
                    ],
                },

                materialForm: {
                    "id": "",
                    "beton": "",
                    "rebar": "",
                    "roundBar": "",
                    "steelPipe": "",
                    "steelPlate": "",
                    "steelWire": "",
                    "mortar": ""
                },
                column1: [
                    {
                        label: "混凝土",
                        dataIndex: "beton",
                    },
                    {
                        label: "带肋钢筋",
                        dataIndex: "rebar"
                    },
                    {
                        label: "光圆钢筋",
                        dataIndex: "roundBar"
                    },
                    {
                        label: "钢管",
                        dataIndex: "steelPipe"
                    },
                    {
                        label: "钢板",
                        dataIndex: "steelPlate"
                    },
                    {
                        label: "钢绞丝",
                        dataIndex: "steelWire"
                    },
                    {
                        label: "砂浆",
                        dataIndex: "mortar"
                    }
                ],
                column2: [
                    {
                        label: "混凝土拌合设备",
                        dataIndex: "mixingDevice",
                    },
                    {
                        label: "降尘设备",
                        dataIndex: "dustFallDevice"
                    },
                    {
                        label: "喷淋设备",
                        dataIndex: "rainmaker"
                    },
                    {
                        label: "混凝土喷射机",
                        dataIndex: "shotcreteMachine"
                    },
                    {
                        label: "砂浆泵",
                        dataIndex: "mortarPump"
                    },
                    {
                        label: "泥浆泵",
                        dataIndex: "sludger"
                    }
                ],
                dialogVisible: false,
                materialMask:false
            }
        },
        methods:{
            handleIconClick(v){
                console.log(v);
            },
//            新增设备
            addDivice(){
                this.dialogVisible = true;
            },

//            确认新增
            onSubmit(type){
                if (type ==='divice'){
                    this.diviceList.data.push(this.diviceForm);
                    this.dialogVisible = false;
                }else if (type ==='material'){
                    this.materialList.data.push(this.materialForm);
                    this.materialMask = false;
                }

            },

//            新增材料
            addMaterial(){
                this.materialMask = true;
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },

        },
    }

</script>

<style>
    .getMaterial{
        padding-top:20px;
    }
    .materialHandle{
        margin-bottom: 20px;
        margin-left: 10px;
    }
    .materialHandle .el-input, .el-input__inner{
        width: 200px;
    }
    .btnGroup{
        padding-top: 20px;
    }
    .tableContent{
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
    }
    .tableContent .tableLeft{
        float: left;
        width: 49%;
    }
    .tableRight{
        float: right;
        width: 49%;
    }
    .addDiviceMask .el-form-item{
        margin-right: 100px;
    }
    .addForm{
        text-align: center;
        padding: 10px 0;
    }


</style>