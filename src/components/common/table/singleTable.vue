<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%"
            class="single-table">
        <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
        <!--<el-table-column type="selection" align="center"></el-table-column>-->
        <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text">
            <template scope="scope">
                {{scope.row[column.dataIndex]}}
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
    export default {
        name:"single-table",
        props:{
            tableData:{
                type:Array,
                default:function () {
                    return [];
                }
            },
            columns:{
                type:Array,
                default:function () {
                    return [];
                }
            }
        },
        data(){
            return{

            }
        }
    }
</script>