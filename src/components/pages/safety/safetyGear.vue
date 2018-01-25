<template>
  <div class="safetyGear">
    <!--操作导航-->
    <div class="operation">
      <!-- 查询-->
      <div>
        <el-input
          placeholder="请输入关键字"
          icon="search"
          v-model="search"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
    </div>
    <!-- 主体-->
    <div class="table">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="安全生产第一责任人" name="first">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="principalForm">
            <el-form-item label="姓名">
              <el-input v-model="principalForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="principalForm.gender" placeholder="请输入性别"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="principalForm.phoneNumber" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <template scope="scope">
                <el-button type="success" size="small">新增</el-button>
              </template>
            </el-form-item>
          </el-form>
          <div class="table">
            <el-table
              :data="tableData2"
              style="width: 100%"
              border>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="phoneNumber"
                label="联系方式">
              </el-table-column>
              <el-table-column
                label="操作">
                <template scope="scope">
                  <el-button type="danger" size="small">删除</el-button>
                  <el-button type="warning" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="安全生产直接责任人" name="two">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="mainForm">
            <el-form-item label="姓名">
              <el-input v-model="mainForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="mainForm.gender" placeholder="请输入性别"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="mainForm.phoneNumber" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <template scope="scope">
                <el-button type="success" size="small">新增</el-button>
              </template>
            </el-form-item>
          </el-form>
          <div class="table">
            <el-table
              :data="mainTable"
              style="width: 100%"
              border>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="phoneNumber"
                label="联系方式">
              </el-table-column>
              <el-table-column
                label="操作">
                <template scope="scope">
                  <el-button type="danger" size="small">删除</el-button>
                  <el-button type="warning" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="业主安全工程师" name="three">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="safetyForm">
            <el-form-item label="姓名">
              <el-input v-model="safetyForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="safetyForm.gender" placeholder="请输入性别"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="safetyForm.phoneNumber" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <template scope="scope">
                <el-button type="success" size="small">新增</el-button>
              </template>
            </el-form-item>
          </el-form>
          <div class="table">
            <el-table
              :data="safetyTable"
              style="width: 100%"
              border>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="phoneNumber"
                label="联系方式">
              </el-table-column>
              <el-table-column
                label="操作">
                <template scope="scope">
                  <el-button type="danger" size="small">删除</el-button>
                  <el-button type="warning" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="监理安全工程师" name="four">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="supervisionForm">
            <el-form-item label="姓名">
              <el-input v-model="supervisionForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="supervisionForm.gender" placeholder="请输入性别"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="supervisionForm.phoneNumber" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <template scope="scope">
                <el-button type="success" size="small">新增</el-button>
              </template>
            </el-form-item>
          </el-form>
          <div class="table">
            <el-table
              :data="supervisionTable"
              style="width: 100%"
              border>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="phoneNumber"
                label="联系方式">
              </el-table-column>
              <el-table-column
                label="操作">
                <template scope="scope">
                  <el-button type="danger" size="small">删除</el-button>
                  <el-button type="warning" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目安全员" name="five">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="projectForm">
            <el-form-item label="姓名">
              <el-input v-model="projectForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="projectForm.gender" placeholder="请输入性别"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="projectForm.phoneNumber" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <template scope="scope">
                <el-button type="success" size="small">新增</el-button>
              </template>
            </el-form-item>
          </el-form>
          <div class="table">
            <el-table
              :data="projectTable"
              style="width: 100%"
              border>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="gender"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="phoneNumber"
                label="联系方式">
              </el-table-column>
              <el-table-column
                label="操作">
                <template scope="scope">
                  <el-button type="danger" size="small">删除</el-button>
                  <el-button type="warning" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
//    安全生产第一责任人
        labelPosition: 'first',
        principalForm: {
          name: '',
          gender: '',
          phoneNumber: ''
        },
        activeName2: 'first',
//      安全生产直接责任人
        mainForm: {
          name: '',
          gender: '',
          phoneNumber: ''
        },
//        业主安全工程师
        safetyForm: {
          name: '',
          gender: '',
          phoneNumber: ''
        },
//        监理安全工程师
        supervisionForm: {
          name: '',
          gender: '',
          phoneNumber: ''
        },
//        项目安全工程师
        projectForm: {
          name: '',
          gender: '',
          phoneNumber: ''
        },
//    查询
        search:'',
//        表格
//      安全生产第一责任人
        tableData2: [
          {
              name: '张敏',
              gender: '女',
              phoneNumber: '1896575234521'
          },
          {
              name: '张敏',
              gender: '女',
              phoneNumber: '1896575234521'
          },
          {
              name: '张敏',
              gender: '女',
              phoneNumber: '1896575234521'
          }
        ],
//        安全生产直接责任人
        mainTable:    [
          {
            name: '刘德华',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '刘德华',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '刘德华',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '刘德华',
            gender: '男',
            phoneNumber: '1896575234521'
          }
        ],
//        业主安全工程师
        safetyTable: [
          {
              name: '周杰伦',
              gender: '男',
              phoneNumber: '1896575234521'
          },
          {
              name: '周杰伦',
              gender: '男',
              phoneNumber: '1896575234521'
          },
          {
              name: '周杰伦',
              gender: '男',
              phoneNumber: '1896575234521'
          },
          {
              name: '周杰伦',
              gender: '男',
              phoneNumber: '1896575234521'
          }
        ],
//        监理安全工程师
        supervisionTable: [
          {
              name: '桂纶镁',
              gender: '女',
              phoneNumber: '1896575234521'
          },
          {
              name: '桂纶镁',
              gender: '女',
              phoneNumber: '1896575234521'
          },
          {
              name: '桂纶镁',
              gender: '女',
              phoneNumber: '1896575234521'
          },
          {
              name: '桂纶镁',
              gender: '女',
              phoneNumber: '1896575234521'
          }
        ],
//        项目安全工程师
        projectTable: [
          {
            name: '周星驰',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '周星驰',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '周星驰',
            gender: '男',
            phoneNumber: '1896575234521'
          },
          {
            name: '周星驰',
            gender: '男',
            phoneNumber: '1896575234521'
          }
        ],
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
//      查询
      handleIconClick(ev) {
        console.log(ev);
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
</style>
