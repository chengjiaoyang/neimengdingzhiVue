<!--
变更汇总-> 已批复工程变更明细 -> 表格1 z
-->
<template>
    <div class="projectTable">
        <el-table
                :data="projectData"
                border
                style="width: 100%">
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column v-for="(column,index) in columns" :label="column.text" :key="column.index" header-align="center" show-overflow-tooltip>
                <template scope="scope">
                    <span v-if="column.dataIndex!='keyProcess'">{{scope.row[column.dataIndex]}}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name:"projectTable",
        props:{
            columns:{
                type:Array,
                default:function () {
                    return [];
                }
            },
            projectData:{
                type:Array,
                default:function () {
                    return [];
                }
            },
        },
        data(){
            return{

            }
        },

    }
</script>
<style>

</style>