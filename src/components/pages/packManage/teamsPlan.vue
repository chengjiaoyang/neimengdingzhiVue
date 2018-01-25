<template>
    <div class="teamsPlan">
        <!--分包操作-->
        <div class="teamsPlanHandle">
          <div class="headerNav">
            <el-select v-model="teamValue" class="space" placeholder="请选择分包队伍">
              <el-option
                v-for="item in teamOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="teamValue" class="space" placeholder="周计划">
              <el-option
                v-for="item in teamOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- 隐藏一列-->
            <div class="line">
              <div class="lineHeader" @click="clickShow()">
                隐藏当前列
                <i class="el-icon-caret-bottom icon" v-show="!isHide"></i>
                <i class="el-icon-caret-top icon" v-show="isHide"></i>
              </div>
              <div class="lineBox" v-show="isHide" @mouseleave="mouseleaveShow()">
                <ul>
                  <li>
                    <el-checkbox-group v-model="checkList" v-for="(list,index) in columns" :key="list.dataIndex">
                      <el-checkbox :label="list.dataIndex" @change="changeData">{{list.text}}</el-checkbox>
                    </el-checkbox-group>
                  </li>
                </ul>
              </div>
            </div>
            <div class="timeBox">
              <span class="demonstration">开始时间：</span>
              <el-date-picker
                v-model="startTime"
                type="datetime"
                placeholder="选择日期"
                align="center">
              </el-date-picker>
            </div>
            <div class="timeBox">
              <span class="demonstration distance">结束时间：</span>
              <el-date-picker
                v-model="endTime"
                type="datetime"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </div>
            <el-checkbox v-model="checked">显示当前选项</el-checkbox>
          </div>
            <div class="handleBtn">
                <el-button type="primary" size="small" icon="check" @click="save">保 存</el-button>
                <el-button type="success" size="small" icon="arrow-down">导 出</el-button>
            </div>

            <!--表格内容-->
            <div class="tableContent">
                <team-table :columns="newColumns" :teamData="modelData"></team-table>
            </div>
            <!--分页-->
            <el-pagination
                    layout="prev, pager, next"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import TeamTable from "../../common/table/teamTable"
    import '../../../../static/js/serverTools'
    export default {
        name:'teamPlan',
        components:{
            TeamTable
        },
        data(){
            return{
                isHide:false,
                checkList:[],
                newColumns:[],
                teamValue:"",
                teamOptions:[
                    {
                        label:"一队伍",
                        value:"一队伍"
                    },
                    {
                        label:"二队伍",
                        value:"二队伍"
                    },
                    {
                        label:"三队伍",
                        value:"三队伍"
                    },
                ],
                startTime:"",
                endTime:"",
                pickerOptions0: {
                    // 禁用的时间
                    disabledDate: current => {
                        return current && current.valueOf() < this.startTime.valueOf();
                    }
                },
                checked: true,
                columns:[
                    {
                        text:'序号',
                        dataIndex:'no'
                    },
                    {
                        text:'细目号',
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
                        text:'单位',
                        dataIndex:"unit"
                    },
                    {
                        text:'图纸数量',
                        dataIndex:"drawingNum"
                    },
                    {
                        text:'计划数量',
                        dataIndex:"planNum"
                    },
                    {
                        text:'计划开始时间',
                        dataIndex:"planStartTime"
                    },
                    {
                        text:'计划结束时间',
                        dataIndex:"planEndTime"
                    }
                ],
                modelData:[
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:2,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:3,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:2,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:3,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:2,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:3,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                    {
                        id:3,
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
                        unit:"XXX部",
                        drawingNum:12,
                        planNum:30,
                        planStartTime:"2017-02-01 09:01:21",
                        planEndTime:"2017-02-01 21:01:21"


                    },
                ],
            }
        },
        computed:{
          lineList(){
            return this.columns.map((item,index)=>{
                return item.dataIndex
              })
          }
        },
        mounted(){
            this.newColumns=this.columns
            this.checkList=this.lineList
        },
        methods:{
//          隐藏一列
          clickShow(){
            this.isHide=true
          },
          mouseleaveShow(){
            this.isHide=false
          },
          changeData(){
            this.newColumns=[];
            this.columns.forEach((item,index)=>{
              this.checkList.forEach((value,index)=>{
                if(value==item.dataIndex){
                  this.newColumns.push(item)
            }
            })
            })
          },
            save(){
                getData();
            }
        }

    }

</script>

<style>
    .teamsPlan{
        padding-top: 20px;
    }
    .timeBox{
        display: inline-block;
        padding: 0 10px;
    }
    .space{
        margin-left: 10px;
    }
    .handleBtn{
        margin-top: 20px;
        margin-left: 10px;
    }
    .tableContent{
        margin-top:10px;
        margin-left: 10px;
    }
    .headerNav{
      display: flex;
    }
    /*隐藏当前列*/
    .line{
      margin-left: 1%;
      position:relative;
    }
    .lineHeader{
        width:200px;
        height:36px;
        line-height: 36px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid #BFCBD9;
        color:#97A8BE;
        box-sizing: border-box;
    }
    .icon{
      margin-left: 10px;
    }
    .lineBox{
      width:200px;
      border: 1px solid #BFCBD9;
      background: #fff;
      box-sizing: border-box;
      padding:5px 0 5px 40px;
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      border-radius: 5px;
      position:absolute;
      top:40px;
      z-index: 100;
      overflow: auto;
    }
</style>
