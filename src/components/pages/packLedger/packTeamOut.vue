<!--分包队伍退场申请单-->
<template>
    <div class="packTeamOut">
        <div class="requestFrom">
            <h3>分包队退场申请单</h3>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item>
                    <p class="formHead">****各部门:</p>
                    <p class="formContent">现有 <span class="packName"></span>分包工程队完成施工，准备进行最终决策，然后退场，请将 <span class="packName"></span> 分包队的**债务以及所在工程进行一次全面清理核查，对遗留问题提出意见</p>
                    <span class="formRemark">申请人：张**</span>
                    <span class="formRemark">申请时间：2017.01.14</span>
                    <div class="footer">
                        <span class="footerItem">
                            部门：
                            <input type="text" :model="form.part" class="inputStyle">
                        </span>
                        <span class="footerItem">意见：
                           <el-input type="textarea" :model="form.idea"></el-input>
                        </span>
                        <span class="footerItem">签名：
                         <input type="text" :model="form.part" class="inputStyle">
                        </span>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import ElInput from "../../../../node_modules/element-ui/packages/input/src/input.vue";

    export default {
        components: {ElInput},
        data(){
            return{
                form:{
                    part:"",
                    idea:""

                }
            }
        }

    }
</script>

<style>
    .packTeamOut{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        width: 100%;
    }
    .requestFrom{
        border: 1px solid #999999;
        width: 80%;
        padding: 20px 10%;
        margin-left: 10%;
        box-sizing: border-box;
    }
    .requestFrom .footer{
        border: 1px solid #7995a5;
        display: flex;
        padding: 10px;
    }
    .requestFrom .footer .footerItem{
        flex: 1;
    }
    .footer .footerItem .inputStyle{
        border: none;
        border-bottom: 1px solid #999999;
    }
    .requestFrom h3{
        text-align: center;
        font-size: 20px;
    }
    .formContent{
        text-indent: 80px;
    }
    .formRemark{
        display: inline-block;
        width: 100%;
        text-align: right;
    }
    .packName{
        display: inline-block;
        width: 100px;
        height: 30px;
        border-bottom: 1px solid #999999;
    }
</style>