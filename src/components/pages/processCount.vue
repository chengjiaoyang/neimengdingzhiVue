<template>
    <div class="processCount">
        <!--操作-->
        <div class="processCountHandle">
            <el-button size="small" type="primary">数据导入</el-button>
            <!--日期-->
            <div class="timePicker">
                <span class="demonstration">统计日期选择</span>
                <el-date-picker
                        v-model="timePick"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </div>

            <!--选择-->
            <div class="contentSelect">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button size="small" type="primary">查 询</el-button>
            <el-button size="small" type="primary">保 存</el-button>
            <el-button size="small" type="primary">导 出</el-button>
            <!--对比-->
            <div class="contrast">
                <el-checkbox v-model="checked">与计划对比</el-checkbox>
            </div>
        </div>
        <search-input></search-input>
        <table-process></table-process>


    </div>
</template>

<script>
    import SearchInput from '../../components/common/searchInput'
    import TableProcess from '../../components/common/table/tableProcess'
    export default {
        data(){
          return{
              timePick:"",
              checked:"",
              options:[
                  {
                      value:"第100章",
                      label:"第100章"
                  },
                  {
                      value:"第200章",
                      label:"第200章"
                  },
                  {
                      value:"第300章",
                      label:"第300章"
                  },
                  {
                      value:"第100章",
                      label:"第100章"
                  }
              ],
              value:""
          }
        },
        components:{
            SearchInput,
            TableProcess
        }
    }
</script>

<style>
    .processCount{
        padding-top: 20px;
    }
    .processCountHandle{
        padding-left: 10px;
    }
    .processCountHandle .timePicker{
        display: inline-block;
        margin:0 10px;
    }
    .processCountHandle .contentSelect{
        display: inline-block;
        margin:0 10px;
    }
    .processCountHandle .contrast{
        display: inline-block;
        margin-left: 20px;
    }


</style>