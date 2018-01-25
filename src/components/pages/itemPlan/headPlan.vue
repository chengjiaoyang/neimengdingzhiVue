<template>
  <div class="ownerPlan">
    <!-- 导航操作-->
        <div class="operation">
          <!-- 导入-->
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <el-button size="small" type="primary">文件导入</el-button>
            </el-upload>
          </div>
          <!-- 同级新增-->
          <div class="margin-left">
            <el-button type="success" size="small" @click="peerOpen()">同级新增</el-button>
          </div>
          <!-- 下级新增-->
          <div class="margin-left">
            <el-button type="info"  size="small" @click="juniorOpen()">下级新增</el-button>
          </div>
          <!-- 开始日期-->
          <div class="margin-left">
            <el-date-picker v-model="startValue" type="date" placeholder="请选择开始日期" :picker-options="startDate"></el-date-picker>
          </div >
          <!-- 结束日期-->
          <div class="margin-left">
            <el-date-picker v-model="overValue" type="date" placeholder="请选择结束日期" :picker-options="overDate"></el-date-picker>
          </div>
          <!-- 当前计划-->
          <div class="margin-left">
            <el-radio class="radio" v-model="radio" label="1" style="line-height:30px">显示当前所选计划</el-radio>
          </div>
        </div>
        <div class="operation2">
              <!-- 搜索-->
                  <div>
                  <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
                </div>
              <!-- 隐藏一列-->
                  <div class="line margin-left">
                        <div class="lineHeader" @click="isHide=true">
                          隐藏当前列
                          <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
                          <i class="el-icon-caret-top icon" v-show="isHide"></i>
                        </div>
                        <div class="lineBox" v-show="isHide" @mouseleave="isHide=false">
                          <ul>
                            <li>
                              <el-checkbox-group v-model="checkList" >
                                <el-checkbox label="1"></el-checkbox>
                              </el-checkbox-group>
                            </li>
                          </ul>
                        </div>
                      </div>
        </div>
    <!--表格-->
        <div class="table-tree">
          <tree-grid :totalColumns="totalColumns" :tree-structure="true" :data-source="dataSource"></tree-grid>
        </div>
    <!-- 弹出框-->
        <div>
          <headPlan-pop :peerData="peerData" :totalColumns="totalColumns"></headPlan-pop>
        </div>
  </div>
</template>
<script>
  import TreeGrid from '../../common/treenTable/headPlanTree.vue'
  import HeadPlanPop from '../../common/popoverData/headPlanPop.vue'
  export default{
            components:{
                  TreeGrid,
                  HeadPlanPop
            },
            data(){
                  return{
                      //        隐藏一列
                            isHide:false,
                            checkList:[],
                            newColumn:[],
                      //        表头数据
                            totalColumns:{
                              columns: [
                                    {
                                      text: '序号',
                                      dataIndex:'codingSite'
                                    },
                                    {
                                      text: '细目号',
                                      dataIndex:'detailNumber'
                                    },
                                    {
                                      text: '细目名称',
                                      dataIndex: 'detailName'
                                    },
                                    {
                                      text: '起桩号',
                                      dataIndex: 'pileNumber'
                                    },
                                    {

                                      text:'止桩号',
                                      dataIndex:'stopNumber'
                                    },
                                    {
                                      text:'分部名称',
                                      dataIndex:'subsectionName'
                                    },
                                    {
                                      text:'分项名称',
                                      dataIndex:'subItemName'
                                    },
                                    {
                                      text:'结构形式(400章)',
                                      dataIndex:'structuralStyle'
                                    },
                                    {
                                      text:'长度(300章)',
                                      dataIndex:'length'
                                    },
                                    {
                                      text:'桥长(300章)',
                                      dataIndex:'theLengthOfTheBridge'
                                    },
                                    {
                                      text:'结构层宽度(300章)',
                                      dataIndex:'structureWidth'
                                    },
                                    {
                                      text:'关键工序',
                                      dataIndex:'keyProcess'
                                    },
                                    {
                                      text:'部位',
                                      dataIndex:'position'
                                    },
                                    {
                                      text:'具体位置',
                                      dataIndex:'specificLocation'
                                    },
                                    {
                                      text:'单位',
                                      dataIndex:'company'
                                    },
                                    {
                                      text:'清单单价',
                                      dataIndex:'listUnitPrice'
                                    },
                                    {
                                      text:'图纸数量',
                                      dataIndex:'drawingQuantity'
                                    },
                                    {
                                      text:'上期累计完成数量',
                                      dataIndex:'lastCompletedQuantity'
                                    },
                                    {
                                      text:'剩余数量',
                                      dataIndex:'remainingQuantity'
                                    },
                                  ],
                              monthPlan:[
                                {
                                  text:'计划数量',
                                  dataIndex:'monthPlannedQuantity'
                                },
                                {

                                  text:'计划产值',
                                  dataIndex:'monthPlannedOutputValue'
                                },
                                {
                                  text:'计划开始时间',
                                  dataIndex:'monthScheduleStartTime'
                                },
                                {
                                  text:'计划结束时间',
                                  dataIndex:'monthEndOfSchedule'
                                }
                              ],
                              monthMaterials :[
                                {
                                  text:'混凝土',
                                  dataIndex:'monthOncrete'
                                },
                                {
                                  text:'带肋钢筋',
                                  dataIndex:'monthRibbedBars'
                                },
                                {
                                  text:'光圆钢筋',
                                  dataIndex:'monthCircularReinforcement'
                                },
                                {
                                  text:'钢管',
                                  dataIndex:'monthSteelPipe'
                                },
                                {
                                  text:'钢板',
                                  dataIndex:'monthSteelPlate'
                                }
                              ],
                              seasonPlan:[
                                {
                                  text:'计划数量',
                                  dataIndex:'seasonPlannedQuantity'
                                },
                                {

                                  text:'计划产值',
                                  dataIndex:'seasonPlannedOutputValue'
                                },
                                {
                                  text:'计划开始时间',
                                  dataIndex:'seasonScheduleStartTime'
                                },
                                {
                                  text:'计划结束时间',
                                  dataIndex:'seasonEndOfSchedule'
                                }
                              ],
                              seasonMaterials:[
                                {
                                  text:'混凝土',
                                  dataIndex:'seasonConcrete'
                                },
                                {
                                  text:'带肋钢筋',
                                  dataIndex:'seasonRibbedBars'
                                },
                                {
                                  text:'光圆钢筋',
                                  dataIndex:'seasonCircularReinforcement'
                                },
                                {
                                  text:'钢管',
                                  dataIndex:'seasonSteelPipe'
                                },
                                {
                                  text:'钢板',
                                  dataIndex:'seasonSteelPlate'
                                }
                              ],
                              yearPlan:[
                                {
                                  text:'计划数量',
                                  dataIndex:'yearPlannedQuantity'
                                },
                                {
                                  text:'计划产值',
                                  dataIndex:'yearPlannedOutputValue'
                                },
                                {
                                  text:'计划开始时间',
                                  dataIndex:'yearScheduleStartTime'
                                },
                                {
                                  text:'计划结束时间',
                                  dataIndex:'yearEndOfSchedule'
                                }
                              ],
                              yearMaterials:[
                                {
                                  text:'混凝土',
                                  dataIndex:'yearConcrete'
                                },
                                {
                                  text:'带肋钢筋',
                                  dataIndex:'yearRibbedBars'
                                },
                                {
                                  text:'光圆钢筋',
                                  dataIndex:'yearCircularReinforcement'
                                },
                                {
                                  text:'钢管',
                                  dataIndex:'yearSteelPipe'
                                },
                                {
                                  text:'钢板',
                                  dataIndex:'yearSteelPlate'
                                }
                              ]
                            },
                      //        表格内容
                            dataSource: [
                              {
                                id:1,
                                parentId:0,
                                edit:false,
                                codingSite:"1",
                                detailNumber:"01",
                                pileNumber:"01",
                                detailName:"名称",
                                stopNumber:"1",
                                subsectionName:"1",
                                subItemName:"一分部",
                                structuralStyle:"一分项",
                                length:"400",
                                theLengthOfTheBridge:"300",
                                structureWidth:"300",
                                keyProcess:"关键工序",
                                position:"300",
                                specificLocation:"部位",
                                company:"小桥",
                                listUnitPrice:"小桥单位",
                                drawingQuantity:"5242",
                                lastCompletedQuantity:"5214",
                                remainingQuantity:"845789",
                                monthPlannedQuantity:"1",
                                monthPlannedOutputValue:"2",
                                monthScheduleStartTime:"3",
                                monthEndOfSchedule:"4",
                                monthOncrete:"5",
                                monthRibbedBars:"6",
                                monthCircularReinforcement:"7",
                                monthSteelPipe:"8",
                                monthSteelPlate:"9",
                                seasonPlannedQuantity:"10",
                                seasonPlannedOutputValue:"11",
                                seasonScheduleStartTime:"12",
                                seasonEndOfSchedule:"13",
                                seasonConcrete:"14",
                                seasonRibbedBars:"15",
                                seasonCircularReinforcement:"16",
                                seasonSteelPipe:"17",
                                seasonSteelPlate:"18",
                                yearPlannedQuantity:"19",
                                yearPlannedOutputValue:"20",
                                yearScheduleStartTime:"21",
                                yearEndOfSchedule:"22",
                                yearConcrete:"23",
                                yearRibbedBars:"24",
                                yearCircularReinforcement:"25",
                                yearSteelPipe:"26",
                                yearSteelPlate:"27",
                                children:[
                                  {
                                    id:2,
                                    parentId:0,
                                    edit:false,
                                    codingSite:"1",
                                    detailNumber:"01",
                                    pileNumber:"01",
                                    detailName:"名称",
                                    stopNumber:"1",
                                    subsectionName:"1",
                                    subItemName:"一分部",
                                    structuralStyle:"一分项",
                                    length:"400",
                                    theLengthOfTheBridge:"300",
                                    structureWidth:"300",
                                    keyProcess:"关键工序",
                                    position:"300",
                                    specificLocation:"部位",
                                    company:"小桥",
                                    listUnitPrice:"小桥单位",
                                    drawingQuantity:"5242",
                                    lastCompletedQuantity:"5214",
                                    remainingQuantity:"845789",
                                    monthPlannedQuantity:"1",
                                    monthPlannedOutputValue:"2",
                                    monthScheduleStartTime:"3",
                                    monthEndOfSchedule:"4",
                                    monthOncrete:"5",
                                    monthRibbedBars:"6",
                                    monthCircularReinforcement:"7",
                                    monthSteelPipe:"8",
                                    monthSteelPlate:"9",
                                    seasonPlannedQuantity:"10",
                                    seasonPlannedOutputValue:"11",
                                    seasonScheduleStartTime:"12",
                                    seasonEndOfSchedule:"13",
                                    seasonConcrete:"14",
                                    seasonRibbedBars:"15",
                                    seasonCircularReinforcement:"16",
                                    seasonSteelPipe:"17",
                                    seasonSteelPlate:"18",
                                    yearPlannedQuantity:"19",
                                    yearPlannedOutputValue:"20",
                                    yearScheduleStartTime:"21",
                                    yearEndOfSchedule:"22",
                                    yearConcrete:"23",
                                    yearRibbedBars:"24",
                                    yearCircularReinforcement:"25",
                                    yearSteelPipe:"26",
                                    yearSteelPlate:"27"
                                  }
                                ]
                              },
                              {
                                id:3,
                                parentId:0,
                                edit:false,
                                codingSite:"1",
                                detailNumber:"01",
                                pileNumber:"01",
                                detailName:"名称",
                                stopNumber:"1",
                                subsectionName:"1",
                                subItemName:"一分部",
                                structuralStyle:"一分项",
                                length:"400",
                                theLengthOfTheBridge:"300",
                                structureWidth:"300",
                                keyProcess:"关键工序",
                                position:"300",
                                specificLocation:"部位",
                                company:"小桥",
                                listUnitPrice:"小桥单位",
                                drawingQuantity:"5242",
                                lastCompletedQuantity:"5214",
                                remainingQuantity:"845789",
                                monthPlannedQuantity:"1",
                                monthPlannedOutputValue:"2",
                                monthScheduleStartTime:"3",
                                monthEndOfSchedule:"4",
                                monthOncrete:"5",
                                monthRibbedBars:"6",
                                monthCircularReinforcement:"7",
                                monthSteelPipe:"8",
                                monthSteelPlate:"9",
                                seasonPlannedQuantity:"10",
                                seasonPlannedOutputValue:"11",
                                seasonScheduleStartTime:"12",
                                seasonEndOfSchedule:"13",
                                seasonConcrete:"14",
                                seasonRibbedBars:"15",
                                seasonCircularReinforcement:"16",
                                seasonSteelPipe:"17",
                                seasonSteelPlate:"18",
                                yearPlannedQuantity:"19",
                                yearPlannedOutputValue:"20",
                                yearScheduleStartTime:"21",
                                yearEndOfSchedule:"22",
                                yearConcrete:"23",
                                yearRibbedBars:"24",
                                yearCircularReinforcement:"25",
                                yearSteelPipe:"26",
                                yearSteelPlate:"27",
                              }
                            ],
                      //        同级,下级新增
                            peerData:{
                              peer:false,
                              labelPosition: 'right',
                              peerForm: {},
                              junior:false,
                              juniorForm: {}
                            },
                      //        单选按钮
                            radio: '1',
                      //        搜索
                            search:'',
                      //        开始日期
                            startValue:'',
                            startDate: {
                                  disabledDate(time) {
                                    return time.getTime() < Date.now() - 8.64e7;
                                  }
                            },
                      //      结束日期
                            overValue:'',
                            overDate: {
                                disabledDate(time) {
                                    return time.getTime() < Date.now() - 8.64e7;
                                  }
                            },
                      //        文件导入
                            fileList:[],
                  }
          },
          methods:{
                    //      隐藏一列
                          changeList(){
                              this.newColumn=[];
                          },
                    //      同级新增按钮
                          peerOpen(){
                                this.peerData.peer=true
                          },
                    //      下级新增
                          juniorOpen(done) {
                                this.peerData.junior=true
                          },
                    //      搜索
                          handleIconClick(ev) {
                               console.log(ev);
                          },
                    //      文件导入
                          handleRemove(file, fileList) {
                            console.log(file, fileList);
                          },
                          handlePreview(file) {
                             console.log(file);
                          }
            }
  }
</script>
<style scoped>
          .ownerPlan{
            margin: 10px 10px;
          }
          .operation,.operation2{
            margin:30px 0 30px 0;
            display: flex;
          }
          .margin-left{
            margin-left:10px;
          }
          .lineHeader{
            width:200px;
            height:36px;
            line-height: 36px;
            text-align: center;
            border:1px solid #BFCBD9;
            color:#97A8BE;
            border-radius:5px;
            box-sizing: border-box;
          }
          .icon{
            margin-left:10px;
          }
          .line{
            position:relative;
          }
          .lineBox{
            width:200px;
            border:1px solid #BFCBD9;
            border-radius: 5px;
            box-sizing: border-box;
            overflow: auto;
            box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
            padding:5px 0 5px 40px;
            position:absolute;
            top:40px;
            z-index:100;
            background: #fff;
          }
</style>
