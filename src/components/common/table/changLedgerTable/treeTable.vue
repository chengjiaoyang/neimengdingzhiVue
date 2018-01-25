<!--
变更汇总-> 已批复工程变更明细 -> 表格2  z
-->
<template>
    <div class="treeTable">
        <el-table
                :data="treeData"
                border
                style="width: 100%"
                :row-style="showTr">
            <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                             :label="column.text" header-align="center">
                <template scope="scope">
                    <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
                    <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
                        <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
                        <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
                    </button>
                    <span v-else-if="index===0" class="ms-tree-space"></span>
                    {{scope.row[column.dataIndex]}}
                </template>
            </el-table-column>
            <el-table-column :label="levelColumn.multiLevel.level" v-for="(levelColumn,ind) in levelColumns" :key="ind">
                <el-table-column v-for="(column ,index) in levelColumn.multiLevel.childrenColumn" :key="column.text" :label="column.text" :prop="column.dataIndex">
                    <template scope="scope">
                        {{scope.row[column.dataIndex]}}
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import Utils from '../../treenTable/utils/index'
    export default {
        props:{
            /*
              判断是否为树形结构
            */
            treeStructure: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            columns:{
                type:Array,
                default:function () {
                    return [];
                }
            },
            dataSource: {
                type: Array,
                default: function () {
                    return []
                }
            },
             /*
             是否默认展开所有树
             */
            defaultExpandAll: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            levelColumns:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        data(){
            return{

            }
        },
        computed:{
            treeData: function () {
                let me = this;
                if (me.treeStructure) {
                    let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll);
                    return data
                }
                return me.dataSource
            }
        },
        methods:{
            // 显示行
            showTr: function (row, index) {
                let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
                row._show = show
                return show ? '' : 'display:none;'
            },
            // 点击展开和关闭的时候，图标的切换
            toggleIconShow (index, record) {
                let me = this
                if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
                    return true
                }
                return false
            },
            // 展开下级
            toggle: function (trIndex) {
                let me = this;
                let record = me.treeData[trIndex];
                record._expanded = !record._expanded
            },
            // 显示层级关系的空格和图标
            spaceIconShow (index) {
                let me = this;
                if (me.treeStructure && index === 0) {
                    return true
                }
                return false
            },
        },
        mounted(){
            console.log(Utils);
        }

    }
</script>

<style scoped>
    .treeTable{
        margin-top: 10px;
    }
    .ms-tree-space{
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        width: 18px;
        height: 14px;
    }
    .ms-tree-space::before{content: ""}
</style>