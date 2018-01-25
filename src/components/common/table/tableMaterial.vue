<template>
    <div class="tables">
        <el-table
                :data="tablelData"
                border
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="序号"
                    width="50">
            </el-table-column>
            <el-table-column :label="tableLabel"  prop="materialsList" align="center">
                <el-table-column v-for="(column,index) in column1" :key="column.dataIndex" :label="column.label">
                    <template scope="scope">
                        {{scope.row[column.dataIndex]}}
                    </template>
                </el-table-column>
            </el-table-column>

        </el-table>
    </div>

</template>

<script>
    export default {
        props:{
            tableLabel:{
                type:String,
                default:function () {
                    return ''
                }
            },
            /*行名字*/
            column1:{
                type:Array,
                default:function () {
                    return []
                }
            },
            column2:{
                type:Array,
                default:function () {
                    return []
                }
            },
            /*数据源*/
            tablelData:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        data() {
            return {

            }
        },

    }
</script>

<style>

</style>