<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column v-for="(list,index) in collect.columns" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
      <template scope="scope">
          {{scope.row[list.dataIndex]}}
      </template>
    </el-table-column>

    <el-table-column label="施工">
      <el-table-column v-for="(data,index) in collect.execution" :key="data.dataIndex" :label="data.text" :prop="data.dataIndex">
        <template scope="scope">
          {{scope.row[data.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>

    <el-table-column v-for="(data,index) in collect.column" :key="data.dataIndex" :label="data.text" :prop="data.dataIndex">
      <template scope="scope">
        {{scope.row[data.dataIndex]}}
      </template>
    </el-table-column>

    <el-table-column label="业主计量">
      <el-table-column v-for="(data,index) in collect.owner" :key="data.dataIndex" :label="data.text" :prop="data.dataIndex">
        <template scope="scope">
          {{scope.row[data.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>

    <el-table-column label="给队伍结算">
      <el-table-column v-for="(data,index) in collect.troops" :key="data.dataIndex" :label="data.text" :prop="data.dataIndex">
        <template scope="scope">
          {{scope.row[data.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>

  </el-table>
</template>
<script>
    export default{
      name:"packOutputCom-table",
      props:{
        collect:{
          type:Object,
          default:function(){
            return []
          }
        },
        tableData:{
          type:Object,
          default:function(){
            return []
          }
        }
      },
      data(){
        return{}
      },
      methods:{

      }
    }
</script>
<style scoped></style>
