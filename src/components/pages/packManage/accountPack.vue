<template>
    <div class="accountPack">
        <div class="accountHandle">
            <el-button type="warning" size="small" @click="dataInBtn('导入数据','in')">导入分包结算单</el-button>
            <el-button type="primary" size="small"  @click="dataInBtn('导入数据','in')">导入分包签认单</el-button>
           <div class="distance">
               <el-select v-model="value" placeholder="请选择分包队伍">
                   <el-option
                           v-for="item in packages"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
           </div>
           <div class="distance">
               <el-select v-model="dateTime" placeholder="请选择日期">
                   <el-option
                           v-for="item in packageDate"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
           </div>
           <div class="distance">
               <search-input></search-input>
           </div>
            <el-button type="primary" size="small">导出</el-button>
            <div class="madeBills">
                <el-button type="primary" size="small" @click="dataInBtn('结算通知单','notice')" :disabled="isSelected">结算通知单</el-button>
                <el-button type="primary" size="small"  @click="dataInBtn('签认单','confirm')" :disabled="isSelected">签认单</el-button>
            </div>
        </div>

        <!--表格-->
        <div class="accountTable">
            <table-account v-on:controlBtn="selectChange"></table-account>
        </div>

        <!--导入数据模态框-->
        <div class="accountInMask">
            <data-in ref="datain" :title="maskTitle" :identify="identify" :confirmData="confirmData"></data-in>
        </div>
    </div>
</template>
<script>
    import SearchInput from '../../common/searchInput'
    import TableAccount from '../../common/table/tableAccount'
    import DataIn from '../../common/dataIn'
    export default {
        name:"",
        components:{
            SearchInput,
            TableAccount,
            DataIn
        },
        data(){
            return{
                value:"",
                packages:[
                    {  value:"分包队伍1", label:"分包队伍1"},
                    { value:"分包队伍2",label:"分包队伍2"}
                ],
                dateTime:"",
                packageDate:[
                    { value:"2017.02",label:"2017.02"}
                ],
                maskTitle:"",
                identify:"",
                isSelected:true,
                confirmData:[],

            }
        },

        methods:{
            dataInBtn(title,identify){
                this.$refs.datain.openMask();
                this.maskTitle = title;
                this.identify = identify;
            },
            selectChange(data){
                if (data.length >0){
                    this.isSelected = false;
                    this.confirmData = data;
                }
                else {
                    this.isSelected = true;
                }
            }
        }
    }
</script>
<style scoped>
    .accountPack{
        /*padding-top: 10px;*/
    }
    .accountHandle{
        margin-left: 10px;
    }
    .distance{
        margin-left: 10px;
        display: inline-block;
    }
    .madeBills{
        margin-bottom: 10px;
    }

</style>
