<template>
    <div class="headPlanPop">
          <div>
            <!-- 同级新增弹出框-->
            <el-dialog title="同级新增" :visible.sync="peerData.peer" size="large" :before-close="peerHandleClose">
              <el-form :label-position="peerData.labelPosition" label-width="80px" :model="peerData.peerForm" :inline="true">
                <el-form-item v-for="(list,index) in totalColumns.columns" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!--月-->
                <div><span>月计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.monthPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 月用量-->
                <el-form-item v-for="(list,index) in totalColumns.monthMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 季-->
                <div><span>季计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.seasonPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 季用量-->
                <el-form-item v-for="(list,index) in totalColumns.seasonMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 年-->
                <div><span>年计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.yearPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 年用量-->
                <el-form-item v-for="(list,index) in totalColumns.yearMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.peerForm[list.dataIndex]">
                  <el-input v-model="peerData.peerForm[list.dataIndex]"></el-input>
                </el-form-item>
              </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="peerData.peer = false">取 消</el-button>
                    <el-button type="primary" @click="peerData.peer = false">确 定</el-button>
                  </span>
            </el-dialog>
          </div>
          <!-- 下级新增弹出框-->
          <div>
            <el-dialog title="下级新增" :visible.sync="peerData.junior" size="large" :before-close="juniorHandleClose">
              <el-form :label-position="peerData.labelPosition" label-width="160px" :model="peerData.juniorForm" :inline="true">
                <el-form-item v-for="(list,index) in totalColumns.columns" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!--月-->
                <div><span>月计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.monthPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 月用量-->
                <el-form-item v-for="(list,index) in totalColumns.monthMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 季-->
                <div><span>季计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.seasonPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 季用量-->
                <el-form-item v-for="(list,index) in totalColumns.seasonMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 年-->
                <div><span>年计划</span></div>
                <el-form-item v-for="(list,index) in totalColumns.yearPlan" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
                <!-- 年用量-->
                <el-form-item v-for="(list,index) in totalColumns.yearMaterials" :key="list.dataIndex" :label="list.text" :prop="peerData.juniorForm[list.dataIndex]">
                  <el-input v-model="peerData.juniorForm[list.dataIndex]"></el-input>
                </el-form-item>
              </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="peerData.junior = false">取 消</el-button>
                    <el-button type="primary" @click="peerData.junior = false">确 定</el-button>
                  </span>
            </el-dialog>
          </div>
    </div>
</template>
<script>
  export default{
        name:"headPlan-pop",
        props:{
          peerData:{
            type:Object,
            default:function(){
              return []
            }
          },
          totalColumns:{
            type:Object,
            default:function(){
              return []
            }
          }
        },
        data(){
            return {

            }
        },
        methods:{
       //      同级新增
              peerHandleClose(done) {
                  this.$confirm('确认关闭？')
                    .then(_ => {
                    done();
                  })
                  .catch(_ => {});
            },
        //  下级新增
              juniorHandleClose(done) {
                    this.$confirm('确认关闭？')
                        .then(_ => {
                          done();
                    })
                    .catch(_ => {});
              },
        }
  }
</script>
