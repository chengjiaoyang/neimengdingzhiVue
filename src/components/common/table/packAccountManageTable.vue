<template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column v-for="(column,index) in columns" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex" show-overflow-tooltip>
              <template scope="scope">
                    {{scope.row[column.dataIndex]}}
              </template>
          </el-table-column>
        </el-table>
</template>
<script>
  export default{
        name:"packAccountManage-table",
        props:{
          tableData:{
            type:Array,
            default:function(){
              return []
            }
          },
          columns:{
            type:Array,
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

        }
  }
</script>
