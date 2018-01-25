<template>
    <div class="teamsMeg">
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
          <el-button type="warning" size="small" @click="addList()">添加</el-button>
        </div>
        <!-- 查询-->
        <div>
          <el-input
            placeholder="请输入关键词"
            icon="search"
            v-model="search"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <!-- 隐藏一列-->
        <div class="line">
          <div class="line-header" @click="lineShow">
            隐藏当前列
            <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
            <i class="el-icon-caret-top icon" v-show="isHide"></i>
          </div>
          <div class="lineBox" v-show="isHide" @mouseleave="showHide">
            <ul>
              <li>
                <el-checkbox-group v-model="checkList" v-for="(list,index) in columns" :key="list.dataIndex">
                  <el-checkbox :label="list.dataIndex" @change="listChange">{{list.text}}</el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <!-- 表格-->
      <div class="table">
        <el-table
          :data="teamsDatas"
          border
          style="width: 100%">
          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column v-for="(list,index) in newColumns" :key="list.dataIndex" :label="list.text" header-align="center" show-overflow-tooltip  :prop="list.dataIndex">
            <template scope="scope">{{scope.row[list.dataIndex]}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template scope="scope">
              <el-button size="small" @click="amendBtn(scope.$index, scope.row)">修改</el-button>
              <el-button size="small" type="danger" @click="open2(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 三年内工程业绩-->
      <div class="enterprise">
        <div class="title">
          <div class="titleH1">
            <p>三年内工程业绩</p>
          </div>
          <div class="upload">
            <el-upload class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="enterpriseList">
              <el-button size="small" type="primary">附件导入</el-button>
            </el-upload>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="projectName" label="工程项目名称" width="500"></el-table-column>
          <el-table-column prop="evaluate" label="工程评定与联系方式（提供合同复印件以及业主联系方式）"></el-table-column>
        </el-table>
      </div>
      <!-- 弹出框-->
      <div>
        <!-- 修改数据的弹出框-->
        <el-dialog
          title="修改"
          :visible.sync="amend"
          size="small"
          :before-close="amendHandleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="200px" :model="amendForm">
            <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
              <el-input v-model="amendForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="amend = false">取 消</el-button>
            <el-button type="primary" @click="teamsBtn()">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 添加数据的弹出框-->
        <el-dialog
          title="添加"
          :visible.sync="add"
          size="small"
          :before-close="addHandleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="200px" :model="addForm">
            <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="addForm[list.dataIndex]">
              <el-input v-model="addForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="add = false">取 消</el-button>
            <el-button type="primary" @click="addData()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
  export default {
        data(){
            return{
        //        隐藏一列、
                isHide:false,
                checkList:[],
                newColumns:[],
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
                    text:"分包类别(劳务、非劳务)",
                    dataIndex:"subcontractingCategory"
                  },
                  {
                    text:"施工资质",
                    dataIndex:"constructionQualification"
                  },
                  {
                    text:"安全生产许可证号",
                    dataIndex:"licence"
                  },
                  {
                    text:"安全生产许可证有效期",
                    dataIndex:"licenseDate"
                  },
                  {
                    text:"现场队伍联系人",
                    dataIndex:"fieldTeamContact"
                  },
                  {
                    text:"营业执照",
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
                  }
                ],
        //       数据导入
                fileList:[],
        //        搜索
                search:'',
        //        修改
                amend:false,
                labelPosition: 'right',
                amendForm: {},
        //        添加数据
                add:false,
                labelPosition: 'right',
                addForm: {},
        //        表格
                teamsData: [
                  {
                    teamName:"一分队",
                    signingUnit:"#A11",
                    subcontractingCategory:"劳务",
                    constructionQualification:"道路建设",
                    licence:"325697412586242X",
                    licenseDate:"2020-10-1",
                    fieldTeamContact:"周润发",
                    businessLicense:"9687453215896",
                    ID:"1320529745562416",
                    telephone:"13785964845",
                    compilingPersonnel:"李小龙",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  },
                  {
                    teamName:"二分队",
                    signingUnit:"#A12",
                    subcontractingCategory:"劳务",
                    constructionQualification:"道路建设",
                    licence:"325697412586242X",
                    licenseDate:"2020-10-1",
                    fieldTeamContact:"周润发",
                    businessLicense:"9687453215896",
                    ID:"1320529745562416",
                    telephone:"13785964845",
                    compilingPersonnel:"周星驰",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  },
                  {
                    teamName:"三分队",
                    signingUnit:"#A13",
                    subcontractingCategory:"劳务",
                    constructionQualification:"道路建设",
                    licence:"325697412586242X",
                    licenseDate:"2020-10-1",
                    fieldTeamContact:"周润发",
                    businessLicense:"9687453215896",
                    ID:"1320529745562416",
                    telephone:"13785964845",
                    compilingPersonnel:"周星驰",
                    compilationDate:"2017-10-1",
                    remarks:"暂无"
                  }
                ],
        //        三年内工程业绩
                enterpriseList:[],
                tableData: [
                  {
                    projectName: '桥梁建筑',
                    evaluate: '优'
                },
                  {
                    projectName: '道路绿化',
                    evaluate: '优'
                },
                  {
                    projectName: '道路建设',
                    evaluate: '优'
                },
                  {
                    projectName: '隧道涵洞',
                    evaluate: '优'
                },

                ]
            }
        },
        computed:{
                teamsDatas:function(){
                      var search=this.search
                      if(search){
                        return this.teamsData.filter(function(teams){
                          return Object.keys(teams).some(function(key){
                            return String(teams[key]).toLowerCase().indexOf(search)> -1
                          })
                        })
                      }
                      return this.teamsData
                },
                lineList(){
                      return  this.columns.map((item,index)=>{
                          return item.dataIndex
                        })
                }
        },
        mounted(){
              this.checkList=this.lineList;
              this.newColumns=this.columns
        },
        methods:{
      //    隐藏一列
                showHide:function(){
                  this.isHide=false
                },
                lineShow:function(){
                  this.isHide=!this.isHide
                },
                listChange(index){
                  this.newColumns=[];
                  this.columns.forEach((item,index)=>{
                    this.checkList.forEach((value,data)=>{
                      if(value==item.dataIndex){
                          this.newColumns.push(item)
                    }
                    })
                  })
                },
      //    添加数据
                addHandleClose(done) {
                      this.$confirm('确认关闭？')
                        .then(_ => {
                        done();
                        })
                      .catch(_ => {});
                },
                addData:function(){
                  this.teamsData.push(this.addForm)
                  this.add=false;
                  this.reset();
                },
                reset(){
                  this.addForm={
                    teamName:'',
                    signingUnit:'',
                    subcontractingCategory:'',
                    constructionQualification:'',
                    licence:'',
                    licenseDate:'',
                    fieldTeamContact:'',
                    businessLicense:'',
                    ID:'',
                    telephone:'',
                    compilingPersonnel:'',
                    compilationDate:'',
                    remarks:''
                  }
                },
                addList(){
                  this.add=true
                },
      //    修改
                amendHandleClose(done) {
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
                                this.selected = index; // 修改的位置
                                this.amendForm = JSON.parse( JSON.stringify(this.teamsData[index]) );
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
              teamsBtn(){
                        this.$set(this.teamsData, this.selected, this.amendForm);
                        this.amend=false
                        this.$message({
                              type: 'success',
                              message: '修改成功!'
                        });
              },
      //  删除
              open2(index,row) {
                        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                  })
                    .then(() => {
                        for(var i=0;i<this.teamsData.length;i++){
                          this.teamsData.splice(index,1)
                        }
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
            //    数据导入
              handleRemove(file, fileList) {
                  console.log(file, fileList);
              },
              handlePreview(file) {
                  console.log(file);
              },
            //  搜索
              handleIconClick(ev) {
                console.log(ev);
              },
        }
  }
</script>
<style scoped>
    .operation{
      margin:30px 0 30px 0;
      display: flex;
    }
    .operation>div{
      margin-left:30px;
    }
    .enterprise{
      margin-top: 100px;
    }
    .title{
      height:40px;
      display: flex;
      line-height:40px;
      font-size: 14px;
      font-weight: 400;
      background: #435265;
      color:#333333
    }
    .title>.titleH1{
      height:30px;
      margin-top: 10px;
      line-height: 30px;
      color:#fff;
    }
    .title>div{
      margin:0 0 0 10px;
    }
    .title>.upload{
      margin-left:78%;
    }
  /*隐藏一列*/
    .line-header{
      border:1px solid #BFCBD9;
      width:200px;
      height:36px;
      border-radius: 5px;
      box-sizing: border-box;
      text-align: center;
      line-height: 36px;
      color:#97B0D5;
    }
    .icon{
      margin-left: 10px;
    }
    .line{
      position:relative;
    }
    .lineBox{
      width:200px;
      height:300px;
      border-radius: 5px;
      background: #fff;
      box-sizing: border-box;
      overflow: auto;
      border:1px solid #BFCBD9;
      padding:5px 0 0 10px;
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      position:absolute;
      top:40px;
      z-index: 100;
    }
</style>
