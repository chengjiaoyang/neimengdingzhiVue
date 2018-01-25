<!--大事记-->
<template>
    <div class="bigEvent">
        <top-section :showControl="showControl"></top-section>
        <!--表格-->
        <single-table :columns="columns" :tableData="tableData"></single-table>

    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import SingleTable from '../../common/table/singleTable'
    export default {
        components:{
            TopSection,
            SingleTable
        },
        data(){
            return{
                showControl:{
                    nodeSelect:false,
                    startTimeShow:false,
                    endTimeShow:false,
                    btnShow:{
                        savebtn:false,
                        printbtn:false,
                        outbtn:true,
                        addbtn:false   // 查询
                    },
                    showcheckbox:false,
                    searchShow:true
                },
                columns:[
                    {
                        text:"序号",
                        dataIndex:'no'
                    },
                    {
                        text:"事件",
                        dataIndex:"event"
                    },
                    {
                        text:"时间",
                        dataIndex:'time'
                    },
                    {
                        text:"附件",
                        dataIndex:"appendix"
                    },
                    {
                        text:"编制人",
                        dataIndex:"author"
                    },
                    {
                        text:"编制日期",
                        dataIndex:"data"
                    }

                ],
                tableData:[
                    {
                        id:1,
                        no:"AK-23",
                        event:"中下",
                        time:'2017-02-12',
                        appendix:"33",
                        author:"###",
                        data:"2017-01-01"
                    },
                    {
                        id:1,
                        no:"AK-23",
                        event:"中下",
                        time:'2017-02-12',
                        appendix:"33",
                        author:"###",
                        data:"2017-01-01"
                    }

                ]

             }
        }
    }
</script>

<style>
    .bigEvent{
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
    }

</style>