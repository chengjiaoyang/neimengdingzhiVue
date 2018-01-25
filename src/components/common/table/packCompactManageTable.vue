<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column v-for="(list,index) in collect.columns" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex" show-overflow-tooltip>
      <template scope="scope">
        {{scope.row[list.dataIndex]}}
      </template>
    </el-table-column>
    <el-table-column label="合同变更金额">
      <el-table-column v-for="(column ,index) in collect.changeNum" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="业主本月计量">
      <el-table-column v-for="(column ,index) in collect.monthMeasure" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="业主累计计量">
      <el-table-column v-for="(column ,index) in collect.addMeasure" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="本月分包队伍内部结算">
      <el-table-column v-for="(column ,index) in collect.monthClose" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="累计分包队伍内部结算">
      <el-table-column v-for="(column ,index) in collect.addClose" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column label="合同履约中">
      <el-table-column v-for="(column ,index) in collect.state" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
<script>
  export default{
        name:"pack-table",
        props:{
          collect:{
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
