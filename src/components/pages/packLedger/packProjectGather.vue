<!--分包工程汇总结算台账-->
<template>
    <div class="packProjectGether">
      <!--操作按钮 -->
        <div class="header">
              <!-- 搜索-->
              <div>
                  <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
              </div>
              <!--月份选择器 -->
              <div class="margin-left">
                  <el-date-picker v-model="monthDate" type="month" placeholder="选择月"></el-date-picker>
              </div>
              <!--导出-->
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
          <packProject-table :group="group" :tableData="tableData"></packProject-table>
        </div>
    </div>
</template>
<script>
  import PackProjectTable from '../../common/table/packProjectGatherTable.vue'
  export default{
        components:{
          PackProjectTable,
        },
        data(){
            return {
//            表格
              group:{
                columns:[
                    {
                      text:"清单编号",
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
                      text:"单价",
                      dataIndex:"price"
                    },
                    {
                      text:"本月合计",
                      dataIndex:"totalNum"
                    },
                  ],
                month:[
                  {
                    text:"工程量",
                    dataIndex:"monthProject"
                  },
                  {
                    text:"工作量",
                    dataIndex:"monthWork"
                  },
                ],
                addUp:[
                  {
                    text:"工程量",
                    dataIndex:"addUpProject"
                  },
                  {
                    text:"工作量",
                    dataIndex:"addUpWork"
                  },
                ],
              },
              tableData:[
                {
                    code:"01",
                    name:"没有名字",
                    unit:"单位",
                    price:"84212",
                    totalNum:"451230",
                    monthProject:"300章",
                    monthWork:"200章",
                    addUpProject:"200章",
                    addUpWork:"100章"
                },
                {
                  code:"01",
                  name:"没有名字",
                  unit:"单位",
                  price:"84212",
                  totalNum:"451230",
                  monthProject:"300章",
                  monthWork:"200章",
                  addUpProject:"200章",
                  addUpWork:"100章"
                },
                {
                  code:"01",
                  name:"没有名字",
                  unit:"单位",
                  price:"84212",
                  totalNum:"451230",
                  monthProject:"300章",
                  monthWork:"200章",
                  addUpProject:"200章",
                  addUpWork:"100章"
                }
              ],
//            时间选择器
              monthDate:'',
//            搜索
              search:'',
//            导出
              fileList:[],
            }
        },
        methods:{
//          搜索
            handleIconClick(ev) {
              console.log(ev);
            },
//          导出
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
        .packProjectGether{
          margin: 10px 10px;
        }
        .header{
          display: flex;
          margin-bottom: 20px;
        }
        .margin-left{
          margin-left: 10px;
        }
</style>
