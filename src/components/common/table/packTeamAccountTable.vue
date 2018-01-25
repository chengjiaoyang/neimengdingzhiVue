<template>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column v-for="(column,index) in collect.columns" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
          </el-table-column>
          <el-table-column  label="一月">
            <el-table-column v-for="(column,index) in collect.Jan" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="二月">
            <el-table-column v-for="(column,index) in collect.Feb" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="三月">
            <el-table-column v-for="(column,index) in collect.Mar" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="四月">
            <el-table-column v-for="(column,index) in collect.Apr" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="五月">
            <el-table-column v-for="(column,index) in collect.May" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="六月">
            <el-table-column v-for="(column,index) in collect.Jun" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="七月">
            <el-table-column v-for="(column,index) in collect.Jul" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="八月">
            <el-table-column v-for="(column,index) in collect.Aug" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="九月">
            <el-table-column v-for="(column,index) in collect.Sep" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="十月">
            <el-table-column v-for="(column,index) in collect.Oct" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="十一月">
            <el-table-column v-for="(column,index) in collect.Nov" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column  label="十二月">
            <el-table-column v-for="(column,index) in collect.Dec" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[column.dataIndex]}}
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column v-for="(column,index) in collect.tail" :key="column.dataIndex" :prop="column.dataIndex" :label="column.text" show-overflow-tooltip>
            <template scope="scope">
              {{scope.row[column.dataIndex]}}
            </template>
          </el-table-column>
        </el-table>
      </div>
</template>
<script>
  export default{
        name:"packTeam-table",
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
        },
        methods:{

        }
  }
</script>
<style scoped></style>
