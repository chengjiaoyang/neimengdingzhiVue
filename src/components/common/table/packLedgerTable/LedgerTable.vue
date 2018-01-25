<!--
 工程变更审批单 ->表格 z
-->
<template>
        <el-table
                :data="tableData"
                border
                style="width: 100%"
                class="pro-change">
            <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column v-for="(column, index) in columns"
                             :key="column.dataIndex"
                             :label="column.text"
                             header-align="center"
                             show-overflow-tooltip
                             align="center">

                <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100"  v-if="lookDetail">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
    export default {
        props:{
            columns:{
                default:function () {
                    return []
                }
            },
            tableData:{
                type:Array,
                default:function () {
                    return []
                }
            },
            // 查看按钮是否可用
            lookDetail:{
                type:Boolean,
                default:function () {
                    return false
                }
            }
        },
        methods:{
            handleClick(){

            }
        }
    }
</script>
