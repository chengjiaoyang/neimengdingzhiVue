<template>
  <div class="safetySubcontractor">
    <!--操作按钮导航-->
    <div class="operation">
      <!-- 新增-->
      <div>
        <el-button type="success" size="small">新增</el-button>
      </div>
      <!-- 删除-->
      <div>
        <el-button type="danger" size="small">删除</el-button>
      </div>
      <!-- 更改-->
      <div>
        <el-button type="warning" size="small">更改</el-button>
      </div>
      <!-- 搜索-->
      <div>
        <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
      </div>
    </div>
    <!-- 表格-->
    <div class="table">
      <el-table :data="showTable" border style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column v-for="(list,index) in columns"  :prop="list.dataIndex" :label="list.text" :key="list.dataIndex" align="center">
                <template scope="scope">
                  <span v-if="list.dataIndex !='state'">{{scope.row[list.dataIndex]}}</span>
                  <span v-if="list.dataIndex == 'state'">
                        <el-select v-model="scope.row.state" placeholder="请选择" size="small">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                  </span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template scope="scope">
                  <el-button type="success" size="small" @click="lookData(scope.roe,scope.$index)">查看</el-button>
                </template>
            </el-table-column>
      </el-table>
    </div>
    <!-- 弹出框-->
    <div class="window">
        <el-dialog title="查看" :visible.sync="look" size="large">
          <!-- 主体-->
          <div>
            <div>
              <el-form :inline="true" :model="subjectForm" class="demo-form-inline">
                <el-form-item label="分包单位名称:">
                  <el-input v-model="subjectForm.name" placeholder="分包单位名称"></el-input>
                </el-form-item>
                <el-form-item label="分包队伍人数:">
                  <el-input v-model="subjectForm.number" placeholder="分包队伍人数"></el-input>
                </el-form-item>
                <el-form-item label="日期:">
                  <el-input v-model="subjectForm.date" placeholder="日期"></el-input>
                </el-form-item>
                <el-form-item>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" width="100"></el-table-column>
                <el-table-column v-for="(list,index) in tableColumn" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
                  <template scope="scope">
                    <span v-if="list.dataIndex == 'akey'">{{scope.row[list.dataIndex]}}</span>
                      <span v-if="list.dataIndex !='akey'">
                         <el-input v-model="scope.row[list.dataIndex]"></el-input>
                      </span>
                  </template>
                </el-table-column>
                <el-table-column label="附件导入" width="80">
                  <template scope="scope">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList">
                      <el-button size="small" type="text">附件导入</el-button>
                    </el-upload>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="look = false">取 消</el-button>
            <el-button type="primary" @click="lookDataList()">确 定</el-button>
          </span>
        </el-dialog>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
//        表格
        columns:[
          {
            text:"日志编号",
            dataIndex:"logCode"
          },
          {
            text:"项目名称",
            dataIndex:"itemName"
          },
          {
            text:"制表人",
            dataIndex:"lister"
          },
          {
            text:"检查日期",
            dataIndex:"date"
          },
          {
            text:"处理状态",
            dataIndex:"state"
          }
        ],
        showTable: [
          {
              logCode: '1',
              itemName: '第一隧道',
              lister: '张小虎',
              date: '2017-10-1',
              state: '现场处理'
          },
          {
              logCode: '2',
              itemName: '第一隧道',
              lister: '张小虎',
              date: '2017-10-1',
              state: '现场处理'
          },
          {
              logCode: '3',
              itemName: '第一隧道',
              lister: '张小虎',
              date: '2017-10-1',
              state: '后期处理'
          },
          {
              logCode: '4',
              itemName: '第一隧道',
              lister: '张小虎',
              date: '2017-10-1',
              state: '现场处理'
          }
        ],
        options: [
          {
              value: '选项1',
              label: '现场处理'
          },
          {
              value: '选项2',
              label: '后期处理'
          },
         ],
//        查看
        look:false,
        subjectForm:{
          name:"",
          number:"",
          date:""
        },
        tableColumn:[
          {
            text:"检查项目及要点",
            dataIndex:"akey"
          },
          {
            text:"检查结果",
            dataIndex:"result"
          },
          {
            text:"检查情况",
            dataIndex:"situation"
          },
          {
            text:"存在问题及整改要求",
            dataIndex:"problem"
          }
        ],
        tableData: [
          {
            akey:"须建立分包商安全管理制度及台账",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"安全生产许可证须在有效期内",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"营业执照、资质证书有效，且与承建工程相符",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"特种设备有检验合格证并在有效期内",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"特种作业及特殊工种人员须持证上岗",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"现场主要负责人、安全管理人员须持相应岗位安全资格证",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"现场负责人须有有效的法人授权委托",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"须与分包商签订安全协议，双方安全责任清晰",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"严禁安全防护不完善及国家规定淘汰的设备入场",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"现场作业执行操作规程情况",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"检查现场作业人员安全防护用品的佩戴情况",
            result:"",
            situation:"",
            problem:""
          },
          {
            akey:"检查入场人员安全教育培训记录",
            result:"",
            situation:"",
            problem:""
          }
        ],
//        附件导入
        fileList:[],
//   搜索
        search:'',
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods:{
//      查看、
      lookData(row,index){
          this.look=true
      },
      lookDataList(){
        console.log(this.tableData[0].result)
        this.look=false
      },
//      附件导入
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
//      搜索
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>
<style scoped>
  .operation{
    margin:20px 0;
    display: flex;
  }
  .operation>div{
    margin-left: 30px;
  }
</style>
