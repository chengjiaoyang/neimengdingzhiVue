<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%"
            class="site-handler-table"
            :highlight-current-row=true>
        <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text" :width="index==1? '600px':'auto'">
            <template scope="scope">
                <span v-if="index <2"> {{scope.row[column.dataIndex]}}</span>
                <input  v-else-if="index >1" type="text" v-model="scope.row[column.dataIndex]" class="tableContent">
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

<style>
    .tableContent{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }
    .tableContent:hover{
        border-bottom: 1px solid #1c8de0;
    }
    .site-handler-table tr:hover{
        background: transparent !important;
    }
    .site-handler-table .el-table__row td{
        background-color: transparent !important;
    }
</style>
