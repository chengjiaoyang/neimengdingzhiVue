<template>
  <div class="safetyCheckList">
    <!--操作按钮-->
    <div class="operation">
      <!-- 查询-->
      <div>
        <el-date-picker v-model="searchDate" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
      </div>
      <!-- 查询按钮-->
      <div>
        <el-button type="primary" icon="search" size="small">查询</el-button>
      </div>
      <!-- 保存-->
      <div>
        <el-button type="success" size="small">保存</el-button>
      </div>
      <!-- 提交-->
      <div>
        <el-button type="warning" size="small">提交</el-button>
      </div>
      <!-- 新增-->
      <div>
        <el-button type="danger" size="small" @click="addBtn=true">新增</el-button>
      </div>
    </div>
    <!-- 表格-->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column v-for="(list,index) in columns"  :prop="list.dataIndex" :label="list.text" :key="list.dataIndex" align="center">
          <template scope="scope">
            <span v-if="list.dataIndex !='dispose'">{{scope.row[list.dataIndex]}}</span>
            <span v-if="list.dataIndex == 'dispose'">
                <el-select v-model="scope.row.dispose" placeholder="请选择" size="small">
                  <el-option
                    v-for="item in optionsTable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="success" size="small" @click="examine=true">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹出框-->
    <div class="card">
      <!-- 查看-->
      <div>
        <el-dialog title="查看" :visible.sync="examine" size="small" :before-close="handleClose">
          <el-form  :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :inline="true">
            <el-form-item label="落实人">
              <el-input v-model="formLabelAlign.ImplementingPerson"></el-input>
            </el-form-item>
            <el-form-item label="落实时间">
              <el-input v-model="formLabelAlign.ImplementationTime"></el-input>
            </el-form-item>
            <el-form-item label="落实方案">
              <el-input v-model="formLabelAlign.ImplementationPlan"></el-input>
            </el-form-item>
            <el-form-item label="日志编号(自动生成)">
              <el-input v-model="formLabelAlign.logNumber"></el-input>
            </el-form-item>
            <el-form-item label="检查日期">
              <el-input v-model="formLabelAlign.date"></el-input>
            </el-form-item>
            <el-form-item label="项目名称">
              <el-input v-model="formLabelAlign.entryName"></el-input>
            </el-form-item>
            <el-form-item label="质检员">
              <el-input v-model="formLabelAlign.inspector"></el-input>
            </el-form-item>
            <el-form-item label="清单编号">
              <el-input v-model="formLabelAlign.listNumber"></el-input>
            </el-form-item>
            <el-form-item label="现场技术员">
              <el-input v-model="formLabelAlign.fieldTechnician"></el-input>
            </el-form-item>
            <el-form-item label="检查项目">
              <el-input v-model="formLabelAlign.checkItem"></el-input>
            </el-form-item>
            <el-form-item label="检查桩号">
              <el-input v-model="formLabelAlign.pileNo"></el-input>
            </el-form-item>
          </el-form>
          <!--textarea文本域-->
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="检查情况">
              <el-input type="textarea" v-model="formLabelAlign.inspectionStatus"></el-input>
            </el-form-item>
            <el-form-item label="纠正、防御措施">
              <el-input type="textarea" v-model="formLabelAlign.correct"></el-input>
            </el-form-item>
            <el-form-item label="附件">
              <el-input type="textarea" v-model="formLabelAlign.enclosure"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="formLabelAlign.remarks"></el-input>
            </el-form-item>
            <el-form-item label="部门经理审批">
              <el-input type="textarea" v-model="formLabelAlign.divisionManager"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="danger" size="small" @click="examine = false">关闭</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- 新增-->
      <div>
        <el-dialog title="新增" :visible.sync="addBtn" size="tiny" :before-close="handleClose">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="addForm">
            <el-form-item v-for="(list,index) in columns" :label="list.text" :key="list.dataIndex" :prop="addForm[list.dataIndex]">
              <el-input v-model="addForm[list.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addBtn = false">取 消</el-button>
            <el-button type="primary" @click="addBtn = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
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
//        按日期查询
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        searchDate:"",
//        查看权限的查看弹出框
        examine:false,
//        控制权限
        toggle:false,
//        表格
        columns:[
          {
            text:"日志编号",
            dataIndex:"number"
          },
          {
            text:"项目名称",
            dataIndex:"entryName"
          },
          {
            text:"制表人",
            dataIndex:"watchmaker"
          },
          {
            text:"检查日期",
            dataIndex:"date"
          },
          {
            text:"处理状态",
            dataIndex:"dispose"
          },
        ],
        tableData: [
          {
            number: '02568',
            entryName:'绿化项目',
            watchmaker: '王小虎',
            date: '2017-10-1',
            dispose:"后期处理"
          },
          {
            number: '02567',
            entryName:'隧道项目',
            watchmaker: '张晓娜',
            date: '2017-10-1',
            dispose:"后期处理"
          },
          {
            number: '02566',
            entryName:'隧道项目',
            watchmaker: '张敏敏',
            date: '2017-10-1',
            dispose:"后期处理"
          },
          {
            number: '02565',
            entryName:'隧道项目',
            watchmaker: '林青霞',
            date: '2017-10-1',
            dispose:"后期处理"
          }
        ],
        optionsTable: [
              {
                  value: '选项1',
                  label: '现场处理'
              },
              {
                  value: '选项2',
                  label: '后期处理'
              }
        ],
//        导出
        fileList:[],
//        现场处理按钮
        dispose: [
          {
            value: 'select1',
            label: '现场处理'
          },
          {
            value: 'select2',
            label: '后期处理'
          }
        ],
        disposeList: '',
//        表单
        labelPosition: 'right',
        formLabelAlign: {
          ImplementingPerson:"",
          ImplementationTime:"",
          ImplementationPlan:"",
          logNumber: "02569",
          date: "",
          entryName: "",
          inspector: "",
          listNumber: "",
          fieldTechnician: "",
          checkItem: "",
          pileNo: "",
          inspectionStatus: "",
          correct: "",
          enclosure: "",
          remarks: "",
          divisionManager: "",
        }
      }
    },
    methods:{
//      查看权限的弹出框
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
          done();
      })
    .catch(_ => {});
    },
//      表单
      onSubmit() {
        console.log('submit!');
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
  .form{
    width: 70%;
    padding: 5% 10% 5% 10%;
    margin: 0 auto;
    border:1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: .2s;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .btn{
    display: flex;
    margin-left: 75%;
  }
  .upload{
    margin-left: 20px;
  }
  /*卡片*/
  .item {
    padding: 5px 0;
  }
  .box-card {
    width: 70%;
    margin:0 auto 2% auto;
    cursor:pointer;
  }
</style>
