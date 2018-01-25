<!--分包队伍主要材料用量汇总表-->
<template>
    <div class="packTeamMaterial">
        <!--导航按钮操作-->
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
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
                <template scope="scope">
                  {{scope.row[list.dataIndex]}}
                </template>
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>
<script>
   export default{
        data(){
          return {
        //    队伍名称
              columns:[
                {
                  text:"队伍名称",
                  dataIndex:"teamName"
                },
                {
                  text:"一级钢筋",
                  dataIndex:"stair"
                },
                {
                  text:"二级钢筋",
                  dataIndex:"access"
                },
                {
                  text:"钢绞线",
                  dataIndex:"steel"
                },
                {
                  text:"混凝土",
                  dataIndex:"concrete"
                },
                {
                  text:"水泥",
                  dataIndex:"cement"
                },
                {
                  text:"碎石",
                  dataIndex:"stone"
                },

              ],
              tableData:[
                {
                  teamName:"一队伍",
                  stair:"2324",
                  access:"465467",
                  steel:"67868",
                  concrete:"87989",
                  cement:"3545",
                  stone:"4324234"
                },
                {
                  teamName:"一队伍",
                  stair:"2324",
                  access:"465467",
                  steel:"67868",
                  concrete:"87989",
                  cement:"3545",
                  stone:"4324234"
                },
                {
                  teamName:"一队伍",
                  stair:"2324",
                  access:"465467",
                  steel:"67868",
                  concrete:"87989",
                  cement:"3545",
                  stone:"4324234"
                },
                {
                  teamName:"一队伍",
                  stair:"2324",
                  access:"465467",
                  steel:"67868",
                  concrete:"87989",
                  cement:"3545",
                  stone:"4324234"
                },
              ],
        //    搜索
              search:'',
        //    导出
              fileList:[],
          }
        },
        methods:{
        //      搜索
              handleIconClick(ev) {
                console.log(ev);
              },
        //    导出
              handleRemove(file, fileList) {
                console.log(file, fileList);
              },
              handlePreview(file) {
                console.log(file);
              }
        }
   }
</script>
<style>
    .packTeamMaterial{
      margin: 10px 10px;
    }
    .header{
      display: flex;
      margin-bottom:20px;
    }
    .margin-left{
      margin-left: 10px;
    }
</style>
