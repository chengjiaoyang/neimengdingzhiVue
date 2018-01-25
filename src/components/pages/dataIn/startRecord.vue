<!--关键部位首建开工记录-->
<template>
    <div class="start-record">
        <top-section :showControl="showControl"></top-section>
        <!-- -->
        <!--表格-->
        <div class="record-table">
            <team-table :columns="columns" :teamData="teamData"></team-table>
        </div>

    </div>
</template>

<script>
    import TopSection from '../../common/top-section'
    import TeamTable from '../../common/table/teamTable'
    export default {

        components:{
            TeamTable,
            TopSection
        },
        data(){
            return{
                showControl:{
                    nodeSelect:false,
                    startTimeShow:false,
                    endTimeShow:false,
                    btnShow:{
                        savebtn:false,
                        printbtn:true,
                        outbtn:true,
                        addbtn:false   // 查询
                    },
                    showcheckbox:false,
                    searchShow:true
                },
                columns:[
                    {
                        text:'序号',
                        dataIndex:'no'
                    },
                    {
                        text:'部位名称',
                        dataIndex:"detailNo"
                    },
                    {
                        text:'细目名称',
                        dataIndex:"detailName"
                    },
                    {
                        text:'起桩号',
                        dataIndex:"startPileNo"
                    },
                    {
                        text:'止桩号',
                        dataIndex:"endPileNo"
                    },
                    {
                        text:'分部名称',
                        dataIndex:"branchName"
                    },
                    {
                        text:'分项名称',
                        dataIndex:"subName"
                    },
                    {
                        text:'结构形式（400章）',
                        dataIndex:"strucStyle"
                    },
                    {
                        text:'长度（300章）',
                        dataIndex:"length"
                    },
                    {
                        text:'桥长（300章）',
                        dataIndex:"bridgeLength"
                    },
                    {
                        text:'结构层宽度',
                        dataIndex:"strucWidth"
                    },
                    {
                        text:'关键工序',
                        dataIndex:"keyProcess"
                    },
                    {
                        text:'部位',
                        dataIndex:"park"
                    },
                    {
                        text:'具体位置',
                        dataIndex:"location"
                    },
                    {
                        text:'开工日期',
                        dataIndex:'originDate'
                    },
                ],
                teamData:[
                    {
                        id:1,
                        no:'A-129#',
                        detailNo:"#3015",
                        detailName:"#3015-i",
                        startPileNo:"8#",
                        endPileNo:"30#",
                        branchName:"***##分部",
                        subName:"**分项",
                        strucStyle:"环形",
                        length:"12054Km",
                        bridgeLength:"12054Km",
                        strucWidth:"150Km",
                        keyProcess:"关键路线",
                        park:"1#桩",
                        location:"内蒙古***市",
                        originator:'heheh',
                    },
                    {
                        id:1,
                        no:'A-129#',
                        detailNo:"#3015",
                        detailName:"#3015-i",
                        startPileNo:"8#",
                        endPileNo:"30#",
                        branchName:"***##分部",
                        subName:"**分项",
                        strucStyle:"环形",
                        length:"12054Km",
                        bridgeLength:"12054Km",
                        strucWidth:"150Km",
                        keyProcess:"关键路线",
                        park:"1#桩",
                        location:"内蒙古***市",
                        originator:'heheh',
                    },
                ],
            }
        }

    }
</script>

<style>
    .start-record{
        padding-top:10px;
        padding-left:10px;
        box-sizing: border-box;
    }
</style>
