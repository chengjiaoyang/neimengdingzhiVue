<template>
    <el-table
            :data="teamData"
            border
            style="width: 100%"
            class="team-tree">
        <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column v-for="(column, index) in columns"
                         :key="column.dataIndex"
                         :label="column.text"
                         header-align="center"
                         :sortable="index==0 || index==3"
                         @sort-method=""
                         show-overflow-tooltip
                         align="center"
          >

            <template scope="scope">
                {{scope.row[column.dataIndex]}}
                <!--开工时间-->
                <a v-if="column.dataIndex=='startWorkTime' && scope.row[column.dataIndex]==''" @click="getCurTime(scope.row,scope.$index,'start')">{{startWork}}</a>
                <!--完工时间-->
                <a v-if="column.dataIndex=='endWorkTime' && scope.row[column.dataIndex]==''" @click="getCurTime(scope.row,scope.$index,'end')">{{endWork}}</a>
                <!--监理签字-->
                <a v-if="column.dataIndex=='supSign' && scope.row[column.dataIndex]==''" @click="sign">{{supSign}}</a>
                <!--业主计量-->
                <a v-if="column.dataIndex=='ownerCal' && scope.row[column.dataIndex]==''" @click="sign">{{ownerCal}}</a>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="130" fixed="right">
            <template scope="scope">
                <el-button type="warning" @click='editMaskShow(scope.row,scope.$index)' size="small">编辑</el-button>
                <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.row,scope.$index)">
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import formatDate from '../../../utils/formDate';
    export default {
        name:'teamTable',
        props:{
            /*行名字*/
            columns:{
                type:Array,
                default:function () {
                    return []
                }
            },
            /*数据源*/
            teamData:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        data(){
            return {
//                开工字段默认
                startWork:"开工",
                endWork:"完工",
                supSign:"监理签字",
                ownerCal:"业主计量"
            }
        },
        computed:{
        },
        methods:{
            handleDelete(row,index){
                this.teamData.splice(index,1);
            },
//            获取开工时间---即当前点击时间
            getCurTime(row,index,flag){
                if (flag==='start'){
                    this.startWork = formatDate( new Date(),'yyyy-MM-dd hh:mm');
//                把数据存入数组，发给后台，后台返给我们数据，重新刷新
                    console.log(row);
//                获取到操作的数据的id
                    let dataId = row.id;
                    row.startWorkTime =this.startWork;
                }else if (flag ==='end'){
                    this.endWork = formatDate( new Date(),'yyyy-MM-dd hh:mm');
//                把数据存入数组，发给后台，后台返给我们数据，重新刷新
                    row.endWorkTime =this.endWork;
                }

            },

//            监理签字
            sign(){

            },
//            编辑
            editMaskShow(){

            },
//           删除
            handleDelete(row,index){
                console.log(row,index);
                let self = this;
                self.$message({
                    type: 'success',
                    message: '删除用户：'+self.teamData[index].name+' 成功！'
                });
                self.showDataList.splice(index,1);
            },
        }
    }
</script>

<style>
    .team-tree .cell, .team-tree  th>div{
        padding-left: 10px;
        padding-right: 10px;
    }
    .el-table__row td .cell a{
        color: #e03b2a;
    }
</style>
