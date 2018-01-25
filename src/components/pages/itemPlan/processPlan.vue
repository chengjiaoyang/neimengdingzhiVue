<template>
    <div class="processPlan">
      <div class="path">
        <router-path></router-path>
      </div>
        <!-- 导航操作-->
        <div class="operation">
          <!-- 数据导入-->
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <el-button size="small" type="primary">数据导入</el-button>
            </el-upload>
          </div>
          <!-- 年计划-->
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
          <!-- 开始日期-->
          <div>
            <el-date-picker
              v-model="startDateList"
              type="date"
              placeholder="选择开始日期"
              :picker-options="startDate">
            </el-date-picker>
          </div>
          <!-- 结束日期-->
          <div>
            <el-date-picker
              v-model="overDateList"
              type="date"
              placeholder="选择结束日期"
              :picker-options="overDate">
            </el-date-picker>
          </div>
          <!-- 显示当前所选项-->
          <div class="radio">
            <el-radio class="radio" v-model="radio" label="">显示当前所选计划</el-radio>
          </div>
        </div>
        <!-- 导航操作2-->
        <div class="operation2">
          <!-- 导出-->
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="exportHandlePreview"
              :on-remove="exportHandleRemove"
              :file-list="exportList">
              <el-button size="small" type="success">数据导出</el-button>
            </el-upload>
          </div>
          <!-- 保存-->
          <div>
            <el-button type="info" size="small">保存</el-button>
          </div>
          <!-- 提交-->
          <div>
            <el-button  type="warning"  size="small">提交</el-button>
          </div>
          <!-- 搜索-->
          <div>
            <el-input
              placeholder="请输入关键词"
              icon="search"
              v-model="search"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
          <!-- 进度选择-->
          <div class="line">
            <div class="lineHeader" @click="showClick">
                选择进度
              <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
              <i class="el-icon-caret-top icon" v-show="isHide"></i>
            </div>
            <div class="lineBox" v-show="isHide" @mouseleave="showMouse">
                <ul>
                  <li>
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A"></el-checkbox>
                    </el-checkbox-group>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      <!--表格-->
      <div class="table-tree">
        <tree-grid
          :columns="columns"
          :yearPlan="yearPlan"
          :halfYearPlan="halfYearPlan"
          :seasonPlan="seasonPlan"
          :monthPlan="monthPlan"
          :weekPlan="weekPlan"
          :dayPlan="dayPlan"
          :tree-structure="true"
          :data-source="dataSource"
          ></tree-grid>
      </div>
      <!-- 小表格-->
      <div class="small">
        <el-table
          :data="smallTable"
          border
          style="width: 40%">
          <el-table-column
            prop="serialNumber"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="designChief"
            label="设计总长"
            width="180">
          </el-table-column>
          <el-table-column
            prop="finishLength"
            label="完成长度">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
            <template scope="scope">
              <el-button type="warning" size="small" @click="operationData=true">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 弹出框-->
      <div>
        <!-- small编辑-->
        <div>
          <el-dialog
            title="提示"
            :visible.sync="operationData"
            size="tiny"
            >
            <el-form  label-width="80px" :model="smallFormLabel">
              <el-form-item label="序号">
                <el-input v-model="smallFormLabel.serialNumber"></el-input>
              </el-form-item>
              <el-form-item label="设计总长">
                <el-input v-model="smallFormLabel.designChief"></el-input>
              </el-form-item>
              <el-form-item label="完成长度">
                <el-input v-model="smallFormLabel.finishLength"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="operationData = false">取 消</el-button>
              <el-button type="primary" @click="operationData = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script>
  import TreeGrid from '../../common/treenTable/processPlanTree.vue'
  import RouterPath from './routerPath.vue'
  export default{
    components:{
      TreeGrid,
      RouterPath
    },
    data(){
      return {
//        时间进度选择
        isHide:false,
        checkList:[],
//        小表格
        smallTable: [
          {
            serialNumber:'1',
            designChief:'',
            finishLength:''
        },
          {
            serialNumber:'2',
            designChief:'',
            finishLength:''
        },
          {
            serialNumber:'3',
            designChief:'',
            finishLength:''
        }
        ],
        operationData:false,
        smallFormLabel: {
          name: '',
          region: '',
          type: ''
        },
//        表格
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
//        年
        yearPlan:[
          {
            text:'计划数量',
            dataIndex:'yearPlanPlannedQuantity'
          },
          {
            text:'计划产值',
            dataIndex:'yearPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'yearPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'yearPlanEndOfSchedule'
          }
        ],
//        半年
        halfYearPlan:[
          {
            text:'计划数量',
            dataIndex:'halfYearPlanPlannedQuantity'
          },
          {

            text:'计划产值',
            dataIndex:'halfYearPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'halfYearPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'halfYearPlanEndOfSchedule'
          }
        ],
//        季
        seasonPlan:[
          {
            text:'计划数量',
            dataIndex:'seasonPlanPlannedQuantity'
          },
          {
            text:'计划产值',
            dataIndex:'seasonPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'seasonPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'seasonPlanEndOfSchedule'
          }
        ],
//        月
        monthPlan:[
          {
            text:'计划数量',
            dataIndex:'monthPlanPlannedQuantity'
          },
          {
            text:'计划产值',
            dataIndex:'monthPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'monthPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'monthPlanEndOfSchedule'
          }
        ],
//        周
        weekPlan:[
          {
            text:'计划数量',
            dataIndex:'weekPlanPlannedQuantity'
          },
          {
            text:'计划产值',
            dataIndex:'weekPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'weekPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'weekPlanEndOfSchedule'
          }
        ],
//        天
        dayPlan:[
          {
            text:'计划数量',
            dataIndex:'dayPlanPlannedQuantity'
          },
          {
            text:'计划产值',
            dataIndex:'dayPlanPlannedOutputValue'
          },
          {
            text:'计划开始时间',
            dataIndex:'dayPlanScheduleStartTime'
          },
          {
            text:'计划结束时间',
            dataIndex:'dayPlanEndOfSchedule'
          }
        ],
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
            keyProcess:"一般工序",
            position:"300",
            specificLocation:"部位",
            company:"小桥",
            listUnitPrice:"小桥单位",
            drawingQuantity:"5242",
            lastCompletedQuantity:"5214",
            remainingQuantity:"845789",
            yearPlanPlannedQuantity:"1",
            yearPlanPlannedOutputValue:"2",
            yearPlanScheduleStartTime:"3",
            yearPlanEndOfSchedule:"4",
            halfYearPlanPlannedQuantity:"5",
            halfYearPlanPlannedOutputValue:"6",
            halfYearPlanScheduleStartTime:"7",
            halfYearPlanEndOfSchedule:"8",
            seasonPlanPlannedQuantity:"9",
            seasonPlanPlannedOutputValue:"10",
            seasonPlanScheduleStartTime:"11",
            seasonPlanEndOfSchedule:"12",
            monthPlanPlannedQuantity:"13",
            monthPlanPlannedOutputValue:"14",
            monthPlanScheduleStartTime:"15",
            monthPlanEndOfSchedule:"16",
            weekPlanPlannedQuantity:"17",
            weekPlanPlannedOutputValue:"18",
            weekPlanScheduleStartTime:"19",
            weekPlanEndOfSchedule:"20",
            dayPlanPlannedQuantity:"21",
            dayPlanPlannedOutputValue:"22",
            dayPlanScheduleStartTime:"23",
            dayPlanEndOfSchedule:"24",
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
                keyProcess:"一般工序",
                position:"300",
                specificLocation:"部位",
                company:"小桥",
                listUnitPrice:"小桥单位",
                drawingQuantity:"5242",
                lastCompletedQuantity:"5214",
                remainingQuantity:"845789",
                oplannedQuantity:"5263",
                oplannedOutputValue:"1",
                oscheduleStartTime:"2",
                oendOfSchedule:"13",
                oconcrete:"3",
                oribbedBars:"3",
                ocircularReinforcement:"3",
                osteelPipe:"3",
                osteelPlate:"3",
                tplannedQuantity:"3",
                tplannedOutputValue:"3",
                tscheduleStartTime:"3",
                tendOfSchedule:"3",
                tconcrete:"3",
                tribbedBars:"3",
                tcircularReinforcement:"3",
                tsteelPipe:"3",
                tsteelPlate:"3",
                yplannedQuantity:"3",
                yplannedOutputValue:"3",
                yscheduleStartTime:"3",
                yendOfSchedule:"3",
                ymaterialConsumption:"3",
                yconcrete:"3",
                yribbedBars:"3",
                ycircularReinforcement:"3",
                ysteelPipe:"3",
                ysteelPlate:"3"
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
            yearPlanPlannedQuantity:"1",
            yearPlanPlannedOutputValue:"2",
            yearPlanScheduleStartTime:"3",
            yearPlanEndOfSchedule:"4",
            halfYearPlanPlannedQuantity:"5",
            halfYearPlanPlannedOutputValue:"6",
            halfYearPlanScheduleStartTime:"7",
            halfYearPlanEndOfSchedule:"8",
            seasonPlanPlannedQuantity:"9",
            seasonPlanPlannedOutputValue:"10",
            seasonPlanScheduleStartTime:"11",
            seasonPlanEndOfSchedule:"12",
            monthPlanPlannedQuantity:"13",
            monthPlanPlannedOutputValue:"14",
            monthPlanScheduleStartTime:"15",
            monthPlanEndOfSchedule:"16",
            weekPlanPlannedQuantity:"17",
            weekPlanPlannedOutputValue:"18",
            weekPlanScheduleStartTime:"19",
            weekPlanEndOfSchedule:"20",
            dayPlanPlannedQuantity:"21",
            dayPlanPlannedOutputValue:"22",
            dayPlanScheduleStartTime:"23",
            dayPlanEndOfSchedule:"24",
          }
        ],
//        搜索
        search:'',
//        选择当前选项
        radio: '1',
//        开始时间
        startDateList:'',
        startDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//        结束时间
        overDateList:'',
        overDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//        年计划选项
        options: [
        {
          value: '选项1',
          label: '年计划'
        },
        {
          value: '选项2',
          label: '季计划'
        },
        {
          value: '选项3',
          label: '月计划'
        }
        ],
        value: '',
//        文件导入
        fileList:[],
//        文件导出
        exportList:[],
      }
  },
  methods:{
//      时间进度选择
        showClick(){
            this.isHide=! this.isHide
        },
        showMouse(){
            this.isHide=false
        },
//      同级新增
        peerHandleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
            done();
        })
          .catch(_ => {});
        },
//      下级新增
        juniorHandleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
            done();
        })
            .catch(_ => {});
          },
//    搜索
        handleIconClick(ev) {
      console.log(ev);
    },
//    文件导入
        handleRemove(file, fileList) {
      console.log(file, fileList);
    },
        handlePreview(file) {
      console.log(file);
    },
//    文件导出
        exportHandleRemove(file, fileList) {
      console.log(file, fileList);
    },
        exportHandlePreview(file) {
      console.log(file);
    },
    }
  }
</script>
<style scope="scope">
    .operation,.operation2{
      margin: 30px 0 30px 0;
      display: flex;
    }
    .operation>div{
        margin-left:30px ;
    }
    .operation2>div{
        margin-left:30px ;
    }
    .radio{
        padding-top: 3px;
    }
    .small{
      margin-top: 100px;
    }
  /*时间选择*/
    .lineHeader{
      width:200px;
      height:36px;
      text-align: center;
      line-height: 36px;
      border:1px solid #BFCBD9;
      border-radius:5px;
      box-sizing: border-box;
      color:#97A8BE;
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
      background: #fff;
      padding:5px 0 5px 40px;
      position:absolute;
      top:40px;
      z-index: 100;
    }
</style>
