<!--各分包队产值完成情况汇总表-->
<template>
    <div class="packOutputCom">
        <!--导航按钮-->
        <div class="header">
            <!--搜索-->
            <div>
              <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
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
            <!--打印-->
            <div class="margin-left">
              <el-button type="success" size="small">打印</el-button>
            </div>
        </div>
        <!--表格-->
        <div class="table">
          <packOutputCom-table :collect="collect" :tableData="tableData"></packOutputCom-table>
        </div>
    </div>
</template>
<script>
  import PackOutputComTable from '../../common/table/packOutputComTable.vue'
    export default{
      components:{
        PackOutputComTable
      },
      data(){
        return {
//      搜索
          search:'',
//      导出
          fileList:[],
//      表头
          collect:{
            columns:[
              {
                text:"队伍名称",
                dataIndex:"teamName"
              },
              {
                text:"年计划",
                dataIndex:"yearPlan"
              },
              {
                text:"季计划",
                dataIndex:"seasonPlan"
              },
              {
                text:"月计划",
                dataIndex:"monthPlan"
              }
            ],
            execution:[
              {
                text:"本月",
                dataIndex:"month"
              },
              {
                text:"本季",
                dataIndex:"season"
              },
              {
                text:"本年",
                dataIndex:"year"
              },
            ],
            column:[
              {
                text:"占月计划%",
                dataIndex:"monthRatio"
              },
              {
                text:"占季计划%",
                dataIndex:"seasonRation"
              },
              {
                text:"占年计划%",
                dataIndex:"yearRation"
              },
            ],
            owner:[
              {
                text:"本月",
                dataIndex:"ownerMonth"
              },
              {
                text:"本年",
                dataIndex:"ownerYear"
              },
            ],
            troops:[
              {
                text:"本月",
                dataIndex:"troopsMonth"
              },
              {
                text:"本年",
                dataIndex:"yearMonth"
              },
            ]
          },
          tableData:[
            {
              teamName:"一队伍",
              yearPlan:"300章",
              seasonPlan:"200章",
              monthPlan:"10章",
              month:"10%",
              season:"5%",
              year:"30%",
              monthRatio:"42354",
              seasonRation:"54543",
              yearRation:"57657",
              ownerMonth:"452354",
              ownerYear:"56757",
              troopsMonth:"6546",
              yearMonth:"534546"
            },
            {
              teamName:"一队伍",
              yearPlan:"300章",
              seasonPlan:"200章",
              monthPlan:"10章",
              month:"10%",
              season:"5%",
              year:"30%",
              monthRatio:"42354",
              seasonRation:"54543",
              yearRation:"57657",
              ownerMonth:"452354",
              ownerYear:"56757",
              troopsMonth:"6546",
              yearMonth:"534546"
            },
            {
              teamName:"一队伍",
              yearPlan:"300章",
              seasonPlan:"200章",
              monthPlan:"10章",
              month:"10%",
              season:"5%",
              year:"30%",
              monthRatio:"42354",
              seasonRation:"54543",
              yearRation:"57657",
              ownerMonth:"452354",
              ownerYear:"56757",
              troopsMonth:"6546",
              yearMonth:"534546"
            },
          ]
        }
      },
      methods:{
//      搜索
        handleIconClick(ev) {
          console.log(ev);
        },
//      导出
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
    .packOutputCom{
      margin:10px 10px;
    }
    .header{
      display: flex;
      margin-bottom:20px ;
    }
    .margin-left{
      margin-left: 10px;
    }
</style>
