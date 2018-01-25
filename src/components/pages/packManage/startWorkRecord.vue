<template>
    <!--分包队伍现场活动-->
    <div class="startWorkRecord">
        <div class="WorkRecordHandle">
          <!-- 下拉多选框-->
            <div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          <!-- 章节选择下拉框-->
            <div>
              <el-select v-model="teamValue" class="space" placeholder="章节选择">
                <el-option
                  v-for="item in teamOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <!-- 搜索-->
            <div class="searchGroup">
                <el-input
                        placeholder="请输入内容"
                        icon="search"
                        v-model="input"
                        :on-icon-click="handleIconClick">
                </el-input>
            </div>

            <!-- 隐藏当前列-->
            <div class="line" @click="clickTable()">
              <div class="lineHeader">
                隐藏当前列
                <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
                <i class="el-icon-caret-top icon" v-show="isHide"></i>
              </div>
              <div class="lineBox" v-show="isHide" @mouseleave="mouseleaveTable()">
                <ul>
                  <li>
                    <el-checkbox-group v-model="checkList" v-for="(list,index) in columns" :key="list.dataIndex">
                      <el-checkbox :label="list.dataIndex" @change="changeLine">{{list.text}}</el-checkbox>
                    </el-checkbox-group>
                  </li>
                </ul>
              </div>
            </div>

          <div>
              <el-button type="primary" size="small">保 存</el-button>
          </div>
        </div>
        <div class="WorkRecordTable">
           <team-table :columns="newColumns" :teamData="teamData"></team-table>
        </div>
    </div>
</template>
<script>
    import TeamTable from '../../common/table/teamTable'
    export default {
        name:'startWorkRecord',
        data(){
            return{
//              隐藏列
                isHide:false,
              checkList:[],
              newColumns:[],
                value:'',
                input:'',
                teamValue:'',
                options:[
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
                teamOptions:[
                    {
                        label:"100章",
                        value:"100章"
                    },
                    {
                        label:"400章",
                        value:"400章"
                    },
                    {
                        label:"500章",
                        value:"500章"
                    },
                ],
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
                        text:'开工时间',
                        dataIndex:"startWorkTime"
                    },
                    {
                        text:'完工时间',
                        dataIndex:"endWorkTime"
                    },
                    {
                        text:'监理签字',
                        dataIndex:"supSign"
                    },
                    {
                        text:'业主计量',
                        dataIndex:"ownerCal"
                    }
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
                        unit:"XXX部",
                        startWorkTime:"2017-02-01 09:01:21",
                        endWorkTime:"2017-02-01 21:01:21",
                        supSign:"",
                        ownerCal:""
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
                        startWorkTime:"2017-02-01 09:01:21",
                        endWorkTime:"2017-02-01 21:01:21",
                        supSign:"",
                        ownerCal:""
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
                        startWorkTime:"",
                        endWorkTime:"",
                        supSign:"",
                        ownerCal:""
                    },
                ]
            }
        },
        components:{
            TeamTable
        },
        computed:{
          lineList(){
            return this.columns.map((item,index)=>{
                return item.dataIndex
              })
          }
        },
        mounted(){
            this.newColumns=this.columns;
            this.checkList=this.lineList
        },
        methods:{
          clickTable(){
            this.isHide=true
          },
          mouseleaveTable(){
            this.isHide=false
          },
          changeLine(){
            this.newColumns=[]
            this.columns.forEach((item,index)=>{
              this.checkList.forEach((value,data)=>{
                if(value==item.dataIndex){
                    this.newColumns.push(item)
            }
            })
            })
          },
            handleIconClick(ev) {
                console.log(ev);
            }
        },
        created:function () {
//            getData();
        }
    }
</script>

<style>
    .startWorkRecord{
        padding-top: 20px;
        padding-left: 10px;
    }
    .WorkRecordHandle{
        margin-bottom: 20px;
        display: flex;
    }
    .WorkRecordHandle>div{
      margin-left: 10px;
    }


    /*隐藏一列*/
    .line{
      margin-bottom: 10px;
      position: relative;
    }
    .line .lineHeader{
      width:200px;
      height:36px;
      text-align:center;
      line-height: 36px;
      box-sizing: border-box;
      border:1px solid #BFCBD9;
      border-radius:5px;
      color:#97A8BE;
    }
    .line .icon{
      margin-left: 10px;
    }
    .line .lineBox{
      width:200px;
      box-sizing: border-box;
      border:1px solid #BFCBD9;
      border-radius:5px;
      background: #fff;
      /*padding:5px 0 5px 40px;*/
      overflow: auto;
      z-index: 100;
      position: absolute;
      top:40px;
    }

</style>
