<!--分包结算管理台账-->
<template>
    <div class="packAccountManage">
      <!-- 操作按钮-->
        <div class="operation">
            <!-- 查询-->
              <div>
                <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
              </div>
            <!-- 导出-->
              <div class="margin-left">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList">
                  <el-button size="small" type="primary">导出</el-button>
                </el-upload>
              </div>
            <!-- 打印-->
              <div class="margin-left">
                <el-button type="success" size="small">打印</el-button>
              </div>
        </div>
      <!-- 表格-->
        <div class="table">
          <packAccountManage-table :columns="columns" :tableData="tableData"></packAccountManage-table>
        </div>
    </div>
</template>
<script>
  import PackAccountManageTable from '../../common/table/packAccountManageTable.vue'
  export default{
            components:{
              PackAccountManageTable,
            },
            data(){
                  return {
//                  查询
                    search:'',
//                  导出
                    fileList:[],
//                  表格
                    columns:[
                      {
                        text:"细目编号",
                        dataIndex:"code"
                      },
                      {
                        text:"细目名称",
                        dataIndex:"name"
                      },
                      {
                        text:"单位",
                        dataIndex:"unit"
                      },
                      {
                        text:"原合同数量",
                        dataIndex:"count"
                      },
                      {
                        text:"变更数量",
                        dataIndex:"changeCount"
                      },
                      {
                        text:"变更后数量",
                        dataIndex:"inChangeCount"
                      },
                      {
                        text:"自行与分包累计完成",
                        dataIndex:"finish"
                      },
                      {
                        text:"自行完成工程数量",
                        dataIndex:"projectFinish"
                      },
                      {
                        text:"队伍1至本期末累计结算数量",
                        dataIndex:"oneCount"
                      },
                      {
                        text:"队伍2至本期末累计结算数量",
                        dataIndex:"twoCount"
                      },
                      {
                        text:"备注",
                        dataIndex:"remark"
                      },
                    ],
                    tableData:[
                      {
                        code:"01",
                        name:"细目名称",
                        unit:"单位",
                        count:"544121",
                        changeCount:"664512",
                        inChangeCount:"35954545",
                        finish:"5423131",
                        projectFinish:"756541",
                        oneCount:"784521",
                        twoCount:"8764564",
                        remark:"暂无"
                      },
                      {
                        code:"02",
                        name:"细目名称",
                        unit:"单位",
                        count:"544121",
                        changeCount:"664512",
                        inChangeCount:"35954545",
                        finish:"5423131",
                        projectFinish:"756541",
                        oneCount:"784521",
                        twoCount:"8764564",
                        remark:"暂无"
                      },
                      {
                        code:"03",
                        name:"细目名称",
                        unit:"单位",
                        count:"544121",
                        changeCount:"664512",
                        inChangeCount:"35954545",
                        finish:"5423131",
                        projectFinish:"756541",
                        oneCount:"784521",
                        twoCount:"8764564",
                        remark:"暂无"
                      },
                      {
                        code:"04",
                        name:"细目名称",
                        unit:"单位",
                        count:"544121",
                        changeCount:"664512",
                        inChangeCount:"35954545",
                        finish:"5423131",
                        projectFinish:"756541",
                        oneCount:"784521",
                        twoCount:"8764564",
                        remark:"暂无"
                      }
                    ]
                  }
            },
            methods:{
//                  搜索
                    handleIconClick(ev) {
                        console.log(ev);
                    },
//                  导出
                    handleRemove(file, fileList) {
                        console.log(file, fileList);
                    },
                    handlePreview(file) {
                        console.log(file);
                    }
            }
  }
</script>
<style scoped>
          .packAccountManage{
            margin: 10px 10px;
          }
          .operation{
            display: flex;
            margin-bottom: 20px;
          }
          .margin-left{
            margin-left: 10px;
          }
</style>
