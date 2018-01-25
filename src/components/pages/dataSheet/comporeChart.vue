<!--数量对比图-->
<template>
    <div class="compareChar">
       <top-section :showControl="showControl"></top-section>

        <!-- 可视图表-->
        <div class="compare-map">
            <e-chart height="400px" width="90%" ></e-chart>
        </div>
    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import EChart from '../../common/echarts/contrastEcharts'
    export default {
        data(){
            return{
                showControl:{
                    nodeSelect:false,
                    startTimeShow:true,
                    endTimeShow:true,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:true
                    },
                    showcheckbox:true,
                    searchShow:false
                },
            }
        },
        components:{
            TopSection,
            EChart
        }
    }
</script>

<style>
    .compareChar{
        padding-top:10px;
        padding-left:10px;
        box-sizing: border-box;
    }
    .compare-map{
        margin-top: 20px;
    }

</style>
