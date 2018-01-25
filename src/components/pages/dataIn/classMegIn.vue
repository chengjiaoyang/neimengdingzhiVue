<template>
    <div class="classMegIn">
      <!-- 操作导航-->
      <div class="operation">
        <!-- 数据导入-->
        <div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList">
            <el-button size="small" type="primary">数据导入</el-button>
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
        <!-- 选择某一列隐藏-->
        <div class="line">
          <div class="lineHeader" @click="lineShow">
              隐藏当前行
            <i class="el-icon-caret-bottom icon" v-show="!isHide"></i>
            <i class="el-icon-caret-top icon" v-show="isHide"></i>
          </div>
          <div class="lineBox" v-show="isHide" @mouseleave="showHide">
            <ul>
              <li>
                <el-checkbox-group v-model="checked" v-for="(list,index) in columns" :key="list.dataIndex" show-overflow-tooltip>
                  <el-checkbox :label="list.dataIndex" @change="listChange">{{list.text}}</el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 表格-->
      <div>
        <el-table :data="classMegDatas" border style="width: 100%">
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column v-for="(list,index) in newColumns"  :key="list.dataIndex"  :label="list.text" header-align="center" show-overflow-tooltip  align="center" :prop="list.dataIndex">
            <template scope="scope">
              {{scope.row[list.dataIndex]}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template scope="scope">
              <el-button size="small" @click="amendBtn(scope.$index,scope.row)">修改</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, classMegData)" type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 弹出框-->
      <div>
        <!-- 修改数据弹出框-->
        <el-dialog title="修改" :visible.sync="amend" size="small" :before-close="handleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="150px" :model="amendForm">
            <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
              <el-input v-model="amendForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="amend = false">取 消</el-button>
            <el-button type="primary" @click="classMegBtn()">确 定</el-button>
          </span>
        </el-dialog>
        <!--添加弹出框-->
        <el-dialog title="添加" :visible.sync="add" size="small" :before-close="addHandleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="150px" :model="addForm">
            <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="addForm[list.dataIndex]">
              <el-input v-model="addForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="add = false">取 消</el-button>
            <el-button type="primary" @click="addClassMeg()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
  export default{
        data(){
            return{
        //        隐藏一行
                isHide:false,
                newColumns:[],
                checked:[],
                value: '',
        //    增加
                add:false,
                addForm: {},
        //    修改
                amend: false,
                labelPosition: 'right',
                amendForm: {},
        //    表头
                columns:[
                  {
                    text:"队伍名称",
                    dataIndex:"teamName"
                  },
                  {
                    text:"合同签订单位",
                    dataIndex:"signingUnit"
                  },
                  {
                    text:"工程类别",
                    dataIndex:"engineeringCategory"
                  },
                  {
                    text:"现场队伍联系人",
                    dataIndex:"contacts"
                  },
                  {
                    text:"营业执照号",
                    dataIndex:"businessLicense"
                  },
                  {
                    text:"身份证号",
                    dataIndex:"ID"
                  },
                  {
                    text:"电话",
                    dataIndex:"telephone"
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
                  },
                ],
        //    表格
                classMegData: [
                  {
                    teamName:"一分队",
                    signingUnit:"#A10",
                    engineeringCategory:"道路绿化",
                    contacts:"韦小宝",
                    businessLicense:"1305296874584X",
                    ID:"8594621853234x",
                    telephone:"13703965425",
                    compilingPersonnel:"小双",
                    compilationDate:"2017-10-1",
                    remarks:"暂无",
                  },
                  {
                    teamName:"二分队",
                    signingUnit:"#A11",
                    engineeringCategory:"道路绿化",
                    contacts:"张无忌",
                    businessLicense:"1305296874584X",
                    ID:"8594621853234x",
                    telephone:"13703965425",
                    compilingPersonnel:"小双",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  },
                  {
                    teamName:"三分队",
                    signingUnit:"#A12",
                    engineeringCategory:"道路绿化",
                    contacts:"李小龙",
                    businessLicense:"1305296874584X",
                    ID:"8594621853234x",
                    telephone:"13703965425",
                    compilingPersonnel:"小双",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  }
                ],
        //    搜索
                search:'',
        //    文件导入
                fileList:[]
            }
        },
        computed:{
                classMegDatas:function(){
                      var search=this.search;
                      if(search){
                        return  this.classMegData.filter(function(classMeg){
                          return Object.keys(classMeg).some(function(key){
                            return String(classMeg[key]).toLowerCase().indexOf(search) > -1
                          })
                        })
                      }
                      return this.classMegData
                },
                lineList(){
                      return this.columns.map((item,index)=>{
                          return item.dataIndex
                        })
                },
        },
        mounted(){
                this.newColumns=this.columns;
                this.checked=this.lineList
        },
        methods:{
      //    隐藏一行
          showHide:function(){
            this.isHide=false
          },
          lineShow:function(){
            this.isHide=!this.isHide
          },
          listChange(index){
            this.newColumns=[];
            this.columns.forEach((item,index)=>{
              this.checked.forEach((val,data)=>{
                if(val ==item.dataIndex){
                  this.newColumns.push(item)
               }
            })
            })
          },
      //    添加
          addClassMeg:function(){
            this.classMegData.push(this.addForm)
            this.add=false;
            this.reset()
          },
          reset(){
            this.addForm={
              teamName:"",
              signingUnit:"",
              engineeringCategory:"",
              contacts:"",
              businessLicense:"",
              ID:"",
              telephone:"",
              compilingPersonnel:"",
              compilationDate:"",
              remarks:""
            }
          },
          addHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                  })
                .catch(_ => {});
          },
      //    修改
          handleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                 })
                .catch(_ => {});
          },
          amendBtn(index,row){
                this.$confirm('此操作将修改该信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    this.selected=index;
                    this.amendForm=JSON.parse(JSON.stringify(this.classMegData[index]))
                    this.amend=true
                })
                .catch(() => {
                    this.amend=false
                    this.$message({
                      type: 'info',
                      message: '已取消操作'
                    });
                });
          },
      //  修改保存按钮
          classMegBtn(){
            this.$set(this.classMegData,this.selected,this.amendForm)
            this.amend=false;
          },
      //    删除
          deleteRow(index, rows) {
              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              })
              .then(() => {
                  rows.splice(index, 1);
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
      //    搜索
          handleIconClick(ev) {
            console.log(ev);
          },
      //    文件导入
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
  /*隐藏列*/
    .lineHeader{
      width:200px;
      height:36px;
      border:1px solid #BFCBD9;
      border-radius:5px;
      text-align: center;
      line-height: 36px;
      color:#97A8BE;
      box-sizing: border-box;
    }
    .icon{
      margin-left: 10px;
    }
    .line{
      position: relative;
    }
    .lineBox{
      width: 200px;
      border:1px solid #BFCBD9;
      background: #fff;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      padding:5px 0 5px 20px;
      overflow: auto;
      position:absolute;
      top:40px;
      z-index: 100;
    }
</style>
