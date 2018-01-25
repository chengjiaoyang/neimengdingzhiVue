<template>
    <div class="itemInfo">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" :inline="true">
                <el-form-item label="项目名称">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="合同开工日期">
                  <el-date-picker
                    v-model="formLabelAlign.packTime"
                    type="date"
                    placeholder="请选择日期"
                    :picker-options="pickerOptions0"
                    class="timeWidth"
                    >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="实际开工日期">
                  <el-date-picker
                    v-model="formLabelAlign.realityTime"
                    type="date"
                    placeholder="请选择日期"
                    :picker-options="pickerOptions0"
                    class="timeWidth"
                    >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="站/区间">
                  <el-input v-model="formLabelAlign.section"></el-input>
                </el-form-item>
                <el-form-item label="项目经理">
                  <el-input v-model="formLabelAlign.projectManager"></el-input>
                </el-form-item>
                <el-form-item label="项目部">
                  <el-input v-model="formLabelAlign.projectDepartment"></el-input>
                </el-form-item>
                <el-form-item label="合同竣工日期">
                  <el-date-picker
                    v-model="formLabelAlign.endTime"
                    type="date"
                    placeholder="请选择日期"
                    :picker-options="pickerOptions0"
                    class="timeWidth"
                    >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="实际竣工日期">
                  <el-date-picker
                    v-model="formLabelAlign.realityEndTime"
                    type="date"
                    placeholder="请选择日期"
                    :picker-options="pickerOptions0"
                    class="timeWidth"
                    >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="起讫里程">
                  <el-input v-model="formLabelAlign.mileage"></el-input>
                </el-form-item>
                <el-form-item label="项目负责人">
                  <el-input v-model="formLabelAlign.personInCharge"></el-input>
                </el-form-item>
                <el-form-item label="工程类别">
                  <el-input v-model="formLabelAlign.engineeringCategory"></el-input>
                </el-form-item>
                <el-form-item label="合同工期">
                  <el-input v-model="formLabelAlign.contractDate"></el-input>
                </el-form-item>
                <el-form-item label="实际工期">
                  <el-input v-model="formLabelAlign.actualDate"></el-input>
                </el-form-item>
                <el-form-item label="等级标准">
                  <el-input v-model="formLabelAlign.gradeStandard"></el-input>
                </el-form-item>
                <el-form-item label="建设单位">
                  <el-input v-model="formLabelAlign.constructionUnit"></el-input>
                </el-form-item>
                <el-form-item label="项目状态">
                  <el-input v-model="formLabelAlign.projectStatus"></el-input>
                </el-form-item>
                <el-form-item label="合同额">
                  <el-input v-model="formLabelAlign.contractAmount"></el-input>
                </el-form-item>
                <el-form-item label="区间长度">
                  <el-input v-model="formLabelAlign.intervalLength"></el-input>
                </el-form-item>
                <el-form-item label="设计单位">
                  <el-input v-model="formLabelAlign.designUnit"></el-input>
                </el-form-item>
                <el-form-item label="监理单位">
                  <el-input v-model="formLabelAlign.constructionControlUnit"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                  <el-input v-model="formLabelAlign.remarks"></el-input>
                </el-form-item>
          </el-form>
      <div class="button">
        <el-button type="warning">保存</el-button>
        <el-button type="danger">取消</el-button>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          packTime:'',
          realityTime:'',
          section: '',
          projectManager: '',
          projectDepartment:'',
          endTime:'',
          realityEndTime:'',
          mileage:'',
          personInCharge:'',
          engineeringCategory:'',
          contractDate:'',
          actualDate:'',
          gradeStandard:'',
          constructionUnit:'',
          projectStatus:'',
          contractAmount:'',
          intervalLength:'',
          designUnit:'',
          constructionControlUnit:'',
          remarks:''
        },
        //        开竣工时间选择
        pickerOptions0: {
          disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
      }
  },
  methods:{

  }
  }
</script>
<style scoped>
  .itemInfo{
    margin-top:80px;
  }
  .button{
    margin-top: 50px;
    margin-left:77%;
  }
  .timeWidth{
    width:175px;
  }
</style>
