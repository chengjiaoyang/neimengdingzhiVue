<template>
    <!--查询-->
    <div class="searchIndex">
        <el-input
                placeholder="请输入查询内容"
                icon="search"
                v-model="searchValue"
                :on-icon-click="handleIconClick">
        </el-input>
    </div>
</template>

<script>
    export default {
        name:'search-input',
        data(){
            return{
                searchValue:"",
            }
        },
        methods:{
            handleIconClick(v){
                console.log(v);
            }
        }
    }
</script>

<style>
     .searchIndex .el-input, .el-input__inner{
         width: 200px;
    }
    .searchIndex{
        padding: 20px 0px;
    }
    .searchIndex  .searchBtn{
        padding: 9px 22px 9px 22px;
    }
</style>