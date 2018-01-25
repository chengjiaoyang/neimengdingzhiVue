<template>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column v-for="(list,index) in group.columns" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex" show-overflow-tooptip align="center">
        <template scope="scope">
          {{scope.row[list.dataIndex]}}
        </template>
      </el-table-column>

      <el-table-column label="本月完成">
        <el-table-column v-for="(column,index) in group.month" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooptip align="center">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="累计完成">
        <el-table-column v-for="(column,index) in group.addUp" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooptip align="center">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default{
        name:'packProject-table',
        props:{
            group:{
              type:Object,
              default:function(){
                return []
              }
            },
            tableData:{
              type:Array,
              default:function(){
                return []
              }
            }
        },
        data(){
            return {

            }
        }
  }
</script>
