<template>
    <div class="classPackIn">
        <!-- 导航操作-->
        <div class="operation">
          <!-- 数据导入-->
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <!-- 添加-->
          <div>
            <el-button type="success" size="small" @click="add=true">添加</el-button>
          </div>
          <!-- 查询-->
          <div>
            <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
          </div>
          <!-- 隐藏一列-->
          <div class="line">
            <div class="lineHeader" @click="showClick">
              隐藏当前列
              <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
              <i class="el-icon-caret-top icon" v-show="isHide"></i>
            </div>
            <div class="lineBox" v-show="isHide" @mouseleave="showData">
              <ul>
                <li>
                  <el-checkbox-group v-model="checkList" v-for="(list,index) in column" :key="list.dataIndex" >
                    <el-checkbox :label="list.dataIndex" @change="changeData">{{list.text}}</el-checkbox>
                  </el-checkbox-group>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 表格-->
        <div>
          <el-table :data="classPackInDatas" border style="width: 100%">
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column show-overflow-tooltip v-for="(list,index) in newColumn" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
              <template scope="scope">
                {{scope.row[list.dataIndex]}}
              </template>
            </el-table-column>
            <el-table-column prop="operation" label="操作" width="150">
                <template scope="scope">
                  <el-button type="warning" size="small" @click="revampList(scope.$index,scope.row)">修改</el-button>
                  <el-button type="danger" size="small" @click="deleteRow(scope.$index,classPackInData)">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 弹出框-->
        <div class="addBox">
          <!-- 添加弹出框-->
          <el-dialog title="添加" :visible.sync="add" size="small" :before-close="addHandleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="150px" :model="addForm">
              <el-form-item v-for="(list,index) in column" :label="list.text" :key="list.dataIndex" :prop="addForm[list.dataIndex]">
                <el-input v-model="addForm[list.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="add = false">取 消</el-button>
              <el-button type="primary" @click="addData()">确 定</el-button>
            </span>
          </el-dialog>
          <!-- 修改的弹出框-->
          <el-dialog title="修改" :visible.sync="revamp" size="small" :before-close="revampHandleClose">
          <el-form  :inline="true" :label-position="labelPosition" label-width="150px" :model="revampForm">
            <el-form-item v-for="(list,index) in column" :key="list.dataIndex" :label="list.text" :prop="revampForm[list.dataIndex]">
              <el-input v-model="revampForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="revamp = false">取 消</el-button>
            <el-button type="primary" @click="revampData()">确 定</el-button>
          </span>
        </el-dialog>
        </div>
    </div>
</template>
<script>
    export default {
          data(){
                return {
          //          隐藏一列
                    isHide:false,
                    checkList:[],
                    newColumn:[],
                    labelPosition: 'right',
          //          修改
                    revamp:false,
                    revampForm:{},
          //          添加
                    add:false,
                    addForm: {},
          //          表头
                    column:[
                      {
                        text:"合同编码",
                        dataIndex:"contractCode"
                      },
                      {
                        text:"合同名称",
                        dataIndex:"contractName"
                      },
                      {
                        text:"队伍名称",
                        dataIndex:"teamName"
                      },
                      {
                        text:"分包商名称",
                        dataIndex:"subContractorName"
                      },
                      {
                        text:"分包类别",
                        dataIndex:"subcontractingCategory"
                      },
                      {
                        text:"合同暂定金额",
                        dataIndex:"provisionalContractAmount"
                      },
                      {
                        text:"附件",
                        dataIndex:"enclosure"
                      },
                      {
                        text:"签订日期",
                        dataIndex:"dateOfSigning"
                      },
                      {
                        text:"编制人",
                        dataIndex:"compilingPersonnel"
                      },
                      {
                        text:"编制日期",
                        dataIndex:"compilationDate"
                      },
                      {
                        text:"备注",
                        dataIndex:"remarks"
                      }
                    ],
          //          表格
                    classPackInData: [
                      {
                        contractCode:"01",
                        contractName:"道路绿化",
                        teamName:"道路绿化",
                        subContractorName:"一分队",
                        subcontractingCategory:"A11分包",
                        provisionalContractAmount:"道路绿化",
                        enclosure:"无",
                        dateOfSigning:"2017-10-1",
                        compilingPersonnel:"周星驰",
                        compilationDate:"2017-10-1",
                        remarks:"暂无"
                    },
                      {
                        contractCode:"02",
                        contractName:"道路绿化",
                        teamName:"道路绿化",
                        subContractorName:"一分队",
                        subcontractingCategory:"A12分包",
                        provisionalContractAmount:"道路绿化",
                        enclosure:"无",
                        dateOfSigning:"2017-10-1",
                        compilingPersonnel:"周星驰",
                        compilationDate:"2017-10-1",
                        remarks:"暂无"
                    },
                      {
                        contractCode:"03",
                        contractName:"道路绿化",
                        teamName:"道路绿化",
                        subContractorName:"一分队",
                        subcontractingCategory:"A13分包",
                        provisionalContractAmount:"道路绿化",
                        enclosure:"无",
                        dateOfSigning:"2017-10-1",
                        compilingPersonnel:"周星驰",
                        compilationDate:"2017-10-1",
                        remarks:"暂无"
                    },
                      {
                        contractCode:"04",
                        contractName:"道路绿化",
                        teamName:"道路绿化",
                        subContractorName:"一分队",
                        subcontractingCategory:"A14分包",
                        provisionalContractAmount:"道路绿化",
                        enclosure:"无",
                        dateOfSigning:"2017-10-1",
                        compilingPersonnel:"周星驰",
                        compilationDate:"2017-10-1",
                        remarks:"暂无"
                    }
                    ],
          //          搜索
                    search:'',
          //          文件上传
                    fileList:[]
                }
          },
          computed:{
                classPackInDatas:function(){
                    var search=this.search
                    if(search){
                      return this.classPackInData.filter(function(filterData){
                          return Object.keys(filterData).some(function(key){
                            return String(filterData[key]).toLowerCase().indexOf(search)>-1
                          })
                      })
                    }
                    return this.classPackInData
                },
                lineList(){
                     return this.column.map((item,index)=>{
                          return item.dataIndex
                     })
                },
          },
          mounted(){
                this.newColumn=this.column;
                this.checkList=this.lineList;
          },
          methods:{
    //        隐藏一行
            showClick(){
                this.isHide=!this.isHide
            },
            showData(){
                this.isHide=false
            },
            changeData(value){
                this.newColumn=[];
                this.column.forEach((item,index)=>{
                    this.checkList.forEach((value,index)=>{
                        if(value==item.dataIndex){
                              this.newColumn.push(item)
                    }
                })
                })
            },
    //        删除
            deleteRow(index, rows) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                })
                .then(() => {
                  rows.splice(index,1)
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                })
                .catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
            },
    //        修改
            revampHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                })
                .catch(_ => {});
            },
            revampList:function(index,row){
                this.$confirm('此操作将永久修改该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    this.selected=index
                    this.revampForm=JSON.parse(JSON.stringify(this.classPackInData[index]))
                    this.revamp=true
                })
                .catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消'
                    });
                });
            },
            revampData:function(){
                this.$set(this.classPackInData,this.selected,this.revampForm)
                this.revamp=false
                this.$message({
                  type: 'success',
                  message: '修改成功!'
                });
            },
    //        添加
            addHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                })
                .catch(_ => {});
          },
          addData:function(){
              this.classPackInData.push(this.addForm)
              this.addFormReset()
              this.add=false;
            },
          addFormReset:function(){
              this.addForm={
                contractCode:"",
                contractName:"",
                teamName:"",
                subContractorName:"",
                subcontractingCategory:"",
                provisionalContractAmount:"",
                enclosure:"",
                dateOfSigning:"",
                compilingPersonnel:"",
                compilationDate:"",
                remarks:""
              }
            },
    //        搜索
          handleIconClick(ev) {
              console.log(ev);
          },
    //        文件上传
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
  .operation{
    margin:30px 0 30px 0;
    display:flex;
  }
  .operation>div{
    margin-left:20px;
  }
  .lineHeader{
    width:200px;
    height:36px;
    line-height:36px;
    text-align: center;
    border:1px solid #BFCBD9;
    border-radius:5px;
    color:#97A8BE;
    box-sizing: border-box;
  }
  .icon{
    margin-left: 10px;
  }
  .line{
    position:relative;
  }
  .lineBox{
    width:200px;
    border:1px solid #BFCBD9;
    background: #fff;
    border-radius:5px;
    box-sizing: border-box;
    padding:5px 0 5px 40px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    position:absolute;
    top:40px;
    z-index: 100;
    overflow: auto;
  }
</style>
