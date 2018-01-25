<template>
  <!-- 路由-->
  <div class="path">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router >
      <el-menu-item index="/itemPlan/processPlan">形象进度计划</el-menu-item>
      <el-menu-item index="/itemPlan/timePlan" >时间计划</el-menu-item>
      <el-menu-item index="/itemPlan/materialPlan">材料计划</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default{
    name:'router-path',
    data(){
    return {
      isA:false
    }
  },
  methods:{
    colorTable(){
      this.isA=!this.isA
    }
  }
  }
</script>
<style scoped>
  .el-menu-demo{
    background: #EEF1F6;
    font-size: 18px;
    border:1px solid #D1DBE5;
    height:42px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .el-menu-item{
    line-height: 42px;
    height:42px;
  }
</style>
