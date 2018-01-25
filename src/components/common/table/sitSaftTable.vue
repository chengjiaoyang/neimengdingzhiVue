<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%"
            class="single-table">
        <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text" :width="index==0? '100px':'auto'">
            <template scope="scope">
                {{scope.row[column.dataIndex]}}
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
    export default {
       props:{
           columns:{
               type:Array,
               default:function () {
                   return []
               }
           },
           tableData:{
               type:Array,
               default:function () {
                   return []
               }
           }
       }
    }
</script>