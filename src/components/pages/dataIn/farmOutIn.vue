<template>
    <div class="farmOutIn">
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
            <el-button type="success" size="small" @click="addFormList()">添加</el-button>
          </div>
          <!-- 导航-->
          <div>
            <el-input placeholder="请输入关键词" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
          </div>
          <!-- 隐藏一列-->
          <div class="line">
            <div class="lineHeader" @click="showClick">
              隐藏当前一列
              <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
              <i class="el-icon-caret-top icon" v-show="isHide"></i>
            </div>
            <div class="lineBox" v-show="isHide" @mouseleave="showHide">
              <ul>
                <li>
                  <el-checkbox-group v-model="checkList" v-for="(list,index) in column" :key="list.dataIndex">
                    <el-checkbox :label="list.dataIndex" @change="changeTable">{{list.text}}</el-checkbox>
                  </el-checkbox-group>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--表格 -->
        <div>
          <el-table :data="farmOutInDatas" border style="width: 100%">
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column show-overflow-tooltip v-for="(list,index) in newColumn" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
                  <template scope="scope">
                    {{scope.row[list.dataIndex]}}
                  </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template scope="scope">
                <el-button size="small" @click="amendList(scope.$index,scope.row)">修改</el-button>
                <el-button size="small" type="danger" @click="deleteRow(scope.$index,farmOutInData)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 弹出框-->
        <div>
        <!-- 添加弹出框-->
        <el-dialog title="添加" :visible.sync="add" size="small" :before-close="handleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="150px" :model="addForm">
            <el-form-item v-for="(list,index) in column" :key="list.dataIndex" :label="list.text" :prop="addForm[list.dataIndex]">
              <el-input v-model="addForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="add = false">取 消</el-button>
            <el-button type="primary" @click="addData()">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 修改的弹出框-->
        <el-dialog title="修改" :visible.sync="amend" size="small" :before-close="amendHandleClose">
          <el-form :inline="true"  :label-position="labelPosition" label-width="150px" :model="amendForm">
            <el-form-item v-for="(list,index) in column" :label="list.text" :key="list.dataIndex" :prop="amendForm[list.dataIndex]">
              <el-input v-model="amendForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="amend = false">取 消</el-button>
            <el-button type="primary" @click="amendListBtn()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
  export default{
        data(){
            return{
        //        隐藏列
                isHide:false,
                newColumn:[],
                checkList:[],
        //    添加
                add:false,
                labelPosition: 'right',
                addForm: {},
        //    修改
                amend:false,
                amendForm:{},
        //    搜索
                search:'',
        //    数据导入
                fileList:[],
        //    表头
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
                    text:"工作内容",
                    dataIndex:"jobContent"
                  },
                  {
                    text:"合同单价",
                    dataIndex:"unitContractPrice"
                  },
                  {
                    text:"合同暂定金额",
                    dataIndex:"provisionalContractAmount"
                  },
                  {
                    text:"签订日期",
                    dataIndex:"dateOfSigning"
                  },
                  {
                    text:"附件",
                    dataIndex:"enclosure"
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
                farmOutInData: [
                  {
                    contractCode:"01",
                    contractName:"#A10",
                    teamName:"一分队",
                    subContractorName:"一分队",
                    subcontractingCategory:"分包商名称",
                    jobContent:"道路绿化",
                    unitContractPrice:"道路绿化",
                    provisionalContractAmount:"854964",
                    dateOfSigning:"2017-10-1",
                    enclosure:"附件一",
                    compilingPersonnel:"周杰伦",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  },
                  {
                    contractCode:"02",
                    contractName:"#A11",
                    teamName:"二分队",
                    subContractorName:"二分队",
                    subcontractingCategory:"分包商名称",
                    jobContent:"道路绿化",
                    unitContractPrice:"道路绿化",
                    provisionalContractAmount:"854964",
                    dateOfSigning:"2017-10-1",
                    enclosure:"附件一",
                    compilingPersonnel:"李小龙",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  },
                  {
                    contractCode:"03",
                    contractName:"#A12",
                    teamName:"三分队",
                    subContractorName:"三分队",
                    subcontractingCategory:"分包商名称",
                    jobContent:"道路绿化",
                    unitContractPrice:"道路绿化",
                    provisionalContractAmount:"854964",
                    dateOfSigning:"2017-10-1",
                    enclosure:"附件一",
                    compilingPersonnel:"周星驰",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  }
                ]
            }
      },
      computed:{
          farmOutInDatas:function(){
                var search=this.search;
                if(search){
                  return this.farmOutInData.filter(function(list){
                    return Object.keys(list).some(function(key){
                      return String(list[key]).toLowerCase().indexOf(search)> -1
                    })
                  })
            }
                return this.farmOutInData
          },
          lineList(){
                return this.column.map((item,index)=>{
                  return item.dataIndex
                })
          },
      },
      mounted(){
        this.newColumn=this.column;
        this.checkList=this.lineList
      },
      methods:{
      //    隐藏一列
          showClick(){
                this.isHide=! this.isHide
          },
          showHide(){
                this.isHide=false
          },
          changeTable(value){
                this.newColumn=[];
                  this.column.forEach((item,index)=>{
                      this.checkList.forEach((value,data)=>{
                          if(value==item.dataIndex){
                            this.newColumn.push(item)
                      }
                    })
                })
          },
      //    修改一行内容
          amendHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                })
                .catch(_ => {});
          },
          amendList(index,row){
                this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
          })
                .then(() => {
                this.selected=index
                this.amendForm=JSON.parse(JSON.stringify(this.farmOutInData[index]))
                this.amend=true;
              })
        },
        amendListBtn(){
                this.$set(this.farmOutInData,this.selected,this.amendForm)
                this.amend=false
                this.$message({
                  type: 'success',
                  message: '修改成功!'
                });
        },
      //    添加
        handleClose(done) {
                this.$confirm('确认关闭？')
                      .then(_ => {
                      done();
                })
                .catch(_ => {});
        },
        addFormList(){
                this.add=true
        },
        addData(){
                this.farmOutInData.push(this.addForm)
                this.add=false;
                this.reset()
          },
        reset(){
            this.addForm={
              contractCode:"",
              contractName:"",
              teamName:"",
              subContractorName:"",
              subcontractingCategory:"",
              jobContent:"",
              unitContractPrice:"",
              provisionalContractAmount:"",
              dateOfSigning:"",
              enclosure:"",
              compilingPersonnel:"",
              compilationDate:"",
              remarks:""
            }
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
      //    数据导入
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
  /*隐藏一行*/
  .lineHeader{
    width:200px;
    height:36px;
    border:1px solid #BFCBD9;
    border-radius:5px;
    color:#97A8BE;
    text-align:center;
    line-height:36px;
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
  }
</style>
