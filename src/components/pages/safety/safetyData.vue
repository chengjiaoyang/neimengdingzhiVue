<template>
  <div class="safetyData">
    <!-- 操作导航-->
    <div class="operation">
      <!-- 推送-->
      <div>
        <el-button type="success" size="small">推送</el-button>
      </div>
      <!-- 新增-->
      <div>
        <el-button type="warning" size="small" @click="addBtn=true">新增</el-button>
      </div>
      <!-- 查询-->
      <div>
        <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
      </div>
    </div>
    <!-- 表格-->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text"  :prop="list.dataIndex">
            <template scope="scope">
                {{scope.row[list.dataIndex]}}
            </template>
        </el-table-column>
        <el-table-column prop="enclosure" label="附件" align="center">
          <template scope="scope">
            <el-button type="text"  @click="upload = true" class="upload">附件上传</el-button>
            <el-dialog title="附件上传" :visible.sync="upload" size="tiny">
                      <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList">
                          <el-button size="small" type="primary">附件上传</el-button>
                      </el-upload>
              <span slot="footer" class="dialog-footer">
                <el-button @click="upload = false">取 消</el-button>
                <el-button type="primary" @click="upload = false">确 定</el-button>
              </span>
            </el-dialog>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button type="danger" size="small">删除</el-button>
            <el-button type="warning" size="small" @click="amend(scope.row,scope.$index)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗口-->
    <div class="window">
      <!-- 新增-->
      <el-dialog title="新增" :visible.sync="addBtn" size="tiny">
        <el-form :label-position="labelPosition" label-width="80px" :model="addForm" :inline="true" >
          <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="addForm[list.dataIndex]">
            <el-input v-model="addForm[list.dataIndex]"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addBtn= false">取 消</el-button>
          <el-button type="primary" @click="addData()">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 修改-->
      <el-dialog title="修改" :visible.sync="amendBtn" size="tiny">
        <el-form :label-position="labelPosition" label-width="80px" :model="amendForm" :inline="true" >
          <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
            <el-input v-model="amendForm[list.dataIndex]"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="amendBtn= false">取 消</el-button>
          <el-button type="primary" @click="addDataList()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
//        新增
        addBtn:false,
        addForm:{},
        labelPosition: 'right',
//        修改
        amendBtn:false,
        amendForm:{},
//        表头
        columns:[
          {
            text:"序号",
            dataIndex:"serialNumber"
          },
          {
            text:"合同名称",
            dataIndex:"contractName"
          },
          {
            text:"甲方",
            dataIndex:"firstParty"
          },
          {
            text:"联系电话",
            dataIndex:"aContactNumber"
          },
          {
            text:"乙方",
            dataIndex:"secondParty"
          },
          {
            text:"联系电话",
            dataIndex:"bContactNumber"
          },
          {
            text:"签订时间",
            dataIndex:"signingTime"
          },
          {
            text:"备注",
            dataIndex:"remarks"
          }
        ],
//        表格
        tableData: [
          {
            serialNumber:"1",
            contractName:"安全质量合同",
            firstParty:"上海建材有限公司",
            aContactNumber:"1305849545256",
            secondParty:"浙江材料有限公司",
            bContactNumber:"138945454223",
            signingTime:"2017-10-1",
            remarks:"暂无",
            enclosure:"附件"

          },
          {
            serialNumber:"1",
            contractName:"安全质量合同",
            firstParty:"上海建材有限公司",
            aContactNumber:"1305849545256",
            secondParty:"浙江材料有限公司",
            bContactNumber:"138945454223",
            signingTime:"2017-10-1",
            remarks:"暂无",
            enclosure:"附件"
          },
          {
            serialNumber:"1",
            contractName:"安全质量合同",
            firstParty:"上海建材有限公司",
            aContactNumber:"1305849545256",
            secondParty:"浙江材料有限公司",
            bContactNumber:"138945454223",
            signingTime:"2017-10-1",
            remarks:"暂无",
            enclosure:"附件"
          },
          {
            serialNumber:"1",
            contractName:"安全质量合同",
            firstParty:"上海建材有限公司",
            aContactNumber:"1305849545256",
            secondParty:"浙江材料有限公司",
            bContactNumber:"138945454223",
            signingTime:"2017-10-1",
            remarks:"暂无",
            enclosure:"附件"
          }
        ],
//        附件上传
        fileList:[],
        upload:false,
//        查询
        search:'',
      }
    },
    methods:{
//    新增
      addData(){
        this.addBtn=false
        console.log(this.addForm)
      },
//    修改
      amend(row,index){
        this.amendForm=row
        this.amendBtn=true
      },
      addDataList(){
          this.amendBtn=false
      },
//    查询
      handleIconClick(ev) {
        console.log(ev);
      },
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
    margin: 30px 0 30px 0;
    display: flex;
  }
  .operation>div{
    margin-left: 30px;
  }
  .upload{
    /*color:red;*/
    font-size: 12px;
  }
</style>
