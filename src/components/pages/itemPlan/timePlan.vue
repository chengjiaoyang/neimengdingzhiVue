<template>
    <div class="timePlan">
      <!-- 路由-->
      <div class="path" >
        <router-path></router-path>
      </div>
        <!-- 操作导航-->
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
        <!-- 同级新增-->
        <div>
          <el-button type="success" size="small" @click="peer=true">同级新增</el-button>
        </div>
        <!-- 下级新增-->
        <div>
          <el-button type="info" size="small" @click="junior=true">下级新增</el-button>
        </div>
        <!-- 开始日期-->
        <div>
          <el-date-picker
            v-model="start"
            type="date"
            placeholder="开始日期"
            :picker-options="startDate">
          </el-date-picker>
        </div>
        <!-- 结束日期-->
        <div>
          <el-date-picker
            v-model="over"
            type="date"
            placeholder="结束日期"
            :picker-options="overDate">
          </el-date-picker>
        </div>
        <!-- 显示当前所选计划-->
        <div class="radio">
          <el-radio class="radio" v-model="radio" label="">显示当前所选计划</el-radio>
        </div>
      </div>
      <div class="operation2">
        <!-- 选择时间进度-->
        <div class="time">
          <div class="lineHeader" @click="clickShow">
            选择时间进度
            <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
            <i class="el-icon-caret-top icon" v-show="isHide"></i>
          </div>
          <div class="lineBox" v-show="isHide" @mouseleave="mouseShow">
            <ul>
              <li>
                <el-checkbox-group v-model="checkList" v-for="(data,index) in lineList" :key="data.index">
                  <el-checkbox :label="data.index" @change="changeIn">
                    <span>{{data.index}}</span>
                  </el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
        <!-- 搜索-->
        <div>
          <el-input
            placeholder="请输入关键字"
            icon="search"
            v-model="search"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <!-- 数据导出-->
        <div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="exportList">
            <el-button size="small" type="success">数据导出</el-button>
          </el-upload>
        </div>
        <!-- 保存-->
        <div>
          <el-button type="danger" size="small">保存</el-button>
        </div>
        <!--提交-->
        <div>
          <el-button type="warning" size="small">提交</el-button>
        </div>
      </div>
      <!--表格-->
      <div class="table-tree">
        <tree-grid
          :lineList="lineList"
          :tree-structure="true"
          :data-source="dataSource"
          ></tree-grid>
      </div>
      <!-- 弹出框-->
      <div>
        <!-- 同级新增弹出框-->
        <div>
          <el-dialog
            title="同级新增"
            :visible.sync="peer"
            size="large"
            :before-close="peerHandleClose">
            <el-form :label-position="labelPosition" label-width="160px" :model="peerForm" :inline="true">
              <el-form-item label="序号">
                <el-input v-model="peerForm.codingSite"></el-input>
              </el-form-item>
              <el-form-item label="细目号">
                <el-input v-model="peerForm.detailNumber"></el-input>
              </el-form-item>
              <el-form-item label="细目名称">
                <el-input v-model="peerForm.pileNumber"></el-input>
              </el-form-item>
              <el-form-item label="起桩号">
                <el-input v-model="peerForm.detailName"></el-input>
              </el-form-item>
              <el-form-item label="止桩号">
                <el-input v-model="peerForm.stopNumber"></el-input>
              </el-form-item>
              <el-form-item label="分部名称">
                <el-input v-model="peerForm.subsectionName"></el-input>
              </el-form-item>
              <el-form-item label="分项名称">
                <el-input v-model="peerForm.subItemName"></el-input>
              </el-form-item>
              <el-form-item label="结构形式(400章)">
                <el-input v-model="peerForm.structuralStyle"></el-input>
              </el-form-item>
              <el-form-item label="长度(300章)">
                <el-input v-model="peerForm.length"></el-input>
              </el-form-item>
              <el-form-item label="桥长(300章)">
                <el-input v-model="peerForm.theLengthOfTheBridge"></el-input>
              </el-form-item>
              <el-form-item label="结构层宽度(300章)">
                <el-input v-model="peerForm.structureWidth"></el-input>
              </el-form-item>
              <el-form-item label="关键工序">
                <el-input v-model="peerForm.keyProcess"></el-input>
              </el-form-item>
              <el-form-item label="部位">
                <el-input v-model="peerForm.position"></el-input>
              </el-form-item>
              <el-form-item label="具体位置">
                <el-input v-model="peerForm.specificLocation"></el-input>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="peerForm.company"></el-input>
              </el-form-item>
              <el-form-item label="清单单价">
                <el-input v-model="peerForm.listUnitPrice"></el-input>
              </el-form-item>
              <el-form-item label="图纸数量">
                <el-input v-model="peerForm.drawingQuantity"></el-input>
              </el-form-item>
              <el-form-item label="上期累计完成数量">
                <el-input v-model="peerForm.lastCompletedQuantity"></el-input>
              </el-form-item>
              <el-form-item label="剩余数量">
                <el-input v-model="peerForm.remainingQuantity"></el-input>
              </el-form-item>
              <div class="sign">年计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.yearScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="yearPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.yearPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="yearPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.yearWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">半年计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.halfYearScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="halfYearPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.halfYearPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="halfYearPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.halfYearWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">季计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.seasonScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="seasonPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.seasonPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="seasonPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.seasonWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">月计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.monthScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="monthPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.monthPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="monthPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.monthWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">周计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.weekScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="weekPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.weekPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="weekPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.weekWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">天计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="peerForm.dayScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="dayPeerFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="peerForm.dayPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="dayPeerFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="peerForm.dayWorkingHours"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="peer = false">取 消</el-button>
              <el-button type="primary" @click="peer = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 下级新增弹出框-->
        <div>
          <el-dialog
            title="下级新增"
            :visible.sync="junior"
            size="large"
            :before-close="juniorHandleClose">
            <el-form :label-position="labelPosition" label-width="160px" :model="juniorForm" :inline="true">
              <el-form-item label="序号">
                <el-input v-model="juniorForm.codingSite"></el-input>
              </el-form-item>
              <el-form-item label="细目号">
                <el-input v-model="juniorForm.detailNumber"></el-input>
              </el-form-item>
              <el-form-item label="细目名称">
                <el-input v-model="juniorForm.pileNumber"></el-input>
              </el-form-item>
              <el-form-item label="起桩号">
                <el-input v-model="juniorForm.detailName"></el-input>
              </el-form-item>
              <el-form-item label="止桩号">
                <el-input v-model="juniorForm.stopNumber"></el-input>
              </el-form-item>
              <el-form-item label="分部名称">
                <el-input v-model="juniorForm.subsectionName"></el-input>
              </el-form-item>
              <el-form-item label="分项名称">
                <el-input v-model="juniorForm.subItemName"></el-input>
              </el-form-item>
              <el-form-item label="结构形式(400章)">
                <el-input v-model="juniorForm.structuralStyle"></el-input>
              </el-form-item>
              <el-form-item label="长度(300章)">
                <el-input v-model="juniorForm.length"></el-input>
              </el-form-item>
              <el-form-item label="桥长(300章)">
                <el-input v-model="juniorForm.theLengthOfTheBridge"></el-input>
              </el-form-item>
              <el-form-item label="结构层宽度(300章)">
                <el-input v-model="juniorForm.structureWidth"></el-input>
              </el-form-item>
              <el-form-item label="关键工序">
                <el-input v-model="juniorForm.keyProcess"></el-input>
              </el-form-item>
              <el-form-item label="部位">
                <el-input v-model="juniorForm.position"></el-input>
              </el-form-item>
              <el-form-item label="具体位置">
                <el-input v-model="juniorForm.specificLocation"></el-input>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="juniorForm.company"></el-input>
              </el-form-item>
              <el-form-item label="清单单价">
                <el-input v-model="juniorForm.listUnitPrice"></el-input>
              </el-form-item>
              <el-form-item label="图纸数量">
                <el-input v-model="juniorForm.drawingQuantity"></el-input>
              </el-form-item>
              <el-form-item label="上期累计完成数量">
                <el-input v-model="juniorForm.lastCompletedQuantity"></el-input>
              </el-form-item>
              <el-form-item label="剩余数量">
                <el-input v-model="juniorForm.remainingQuantity"></el-input>
              </el-form-item>
              <div class="sign">年计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.yearScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="yearJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.yearPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="yearJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.yearWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">半年计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.halfYearScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="halfYearJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.halfYearPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="halfYearJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.halfYearWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">季计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.seasonScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="seasonJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.seasonPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="seasonJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.seasonWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">月计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.monthScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="monthJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.monthPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="monthJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.monthWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">周计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.weekScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="weekJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.weekPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="weekJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.weekWorkingHours"></el-input>
              </el-form-item>
              <div class="sign">天计划</div>
              <el-form-item label="计划开始时间">
                <el-date-picker
                  v-model="juniorForm.dayScheduleStartTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="dayJuniorFormStartDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="计划竣工时间">
                <el-date-picker
                  v-model="juniorForm.dayPlannedCompletionTime"
                  type="date"
                  placeholder="选择开始日期"
                  :picker-options="dayJuniorFormOverDate">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工时">
                <el-input v-model="juniorForm.dayWorkingHours"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="junior = false">取 消</el-button>
              <el-button type="primary" @click="junior = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script>
  import TreeGrid from '../../common/treenTable/timePlanTree.vue'
  import RouterPath from './routerPath.vue'
  export default{
    components:{
        TreeGrid,
        RouterPath
    },
    data(){
      return {
        options: [
          {
            value: 'columns',
            label: '总计划'
          },
          {
            value: 'year',
            label: '年计划'
          },
          {
            value: 'halfYear',
            label: '半年计划'
          },
          {
            value: 'season',
            label: '季计划'
          },
          {
            value: 'month',
            label: '月计划'
          },
          {
            value: 'week',
            label: '周计划'
          },
          {
            value: 'day',
            label: '天计划'
          }
        ],
        checkList:[],
        resetList:{},
        lineList:{
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
          year:[
                {
                  text:'计划开始时间',
                  dataIndex:'yearScheduleStartTime'
                },
                {
                  text:'计划竣工时间',
                  dataIndex:'yearPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'yearWorkingHours'
                }
          ],
//        半年
          halfYear :[
                {
                  text:'计划开始时间',
                  dataIndex:'halfYearScheduleStartTime'
                },
                {

                  text:'计划竣工时间',
                  dataIndex:'halfYearPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'halfYearWorkingHours'
                }
          ],
//        季
          season:[
                {
                  text:'计划开始时间',
                  dataIndex:'seasonScheduleStartTime'
                },
                {
                  text:'计划竣工时间',
                  dataIndex:'seasonPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'seasonWorkingHours'
                }
          ],
//        月
          month: [
                {
                  text:'计划开始时间',
                  dataIndex:'monthScheduleStartTime'
                },
                {
                  text:'计划竣工时间',
                  dataIndex:'monthPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'monthWorkingHours'
                }
          ],
//        周
          week: [
                {
                  text:'计划开始时间',
                  dataIndex:'weekScheduleStartTime'
                },
                {
                  text:'计划竣工时间',
                  dataIndex:'weekPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'weekWorkingHours'
                }
          ],
//        天
          day:[
                {
                  text:'计划开始时间',
                  dataIndex:'dayScheduleStartTime'
                },
                {
                  text:'计划竣工时间',
                  dataIndex:'dayPlannedCompletionTime'
                },
                {
                  text:'工时',
                  dataIndex:'dayWorkingHours'
                }
          ]
        },
//        选择时间进度
        isHide:false,
        //        表格
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
            yearScheduleStartTime:"1",
            yearPlannedCompletionTime:"2",
            yearWorkingHours:"3",
            halfYearScheduleStartTime:"4",
            halfYearPlannedCompletionTime:"5",
            halfYearWorkingHours:"6",
            seasonScheduleStartTime:"7",
            seasonPlannedCompletionTime:"8",
            seasonWorkingHours:"9",
            monthScheduleStartTime:"10",
            monthPlannedCompletionTime:"11",
            monthWorkingHours:"12",
            weekScheduleStartTime:"13",
            weekPlannedCompletionTime:"14",
            weekWorkingHours:"15",
            dayScheduleStartTime:"16",
            dayPlannedCompletionTime:"17",
            dayWorkingHours:"28",
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
                keyProcess:"一般路线",
                position:"300",
                specificLocation:"部位",
                company:"小桥",
                listUnitPrice:"小桥单位",
                drawingQuantity:"5242",
                lastCompletedQuantity:"5214",
                remainingQuantity:"845789",
                yearScheduleStartTime:"1",
                yearPlannedCompletionTime:"2",
                yearWorkingHours:"3",
                halfYearScheduleStartTime:"4",
                halfYearPlannedCompletionTime:"5",
                halfYearWorkingHours:"6",
                seasonScheduleStartTime:"7",
                seasonPlannedCompletionTime:"8",
                seasonWorkingHours:"9",
                monthScheduleStartTime:"10",
                monthPlannedCompletionTime:"11",
                monthWorkingHours:"12",
                weekScheduleStartTime:"13",
                weekPlannedCompletionTime:"14",
                weekWorkingHours:"15",
                dayScheduleStartTime:"16",
                dayPlannedCompletionTime:"17",
                dayWorkingHours:"28"
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
            keyProcess:"关键路线",
            position:"200",
            specificLocation:"部位",
            company:"小桥",
            listUnitPrice:"小桥单位",
            drawingQuantity:"5242",
            lastCompletedQuantity:"5214",
            remainingQuantity:"845789",
            yearScheduleStartTime:"1",
            yearPlannedCompletionTime:"2",
            yearWorkingHours:"3",
            halfYearScheduleStartTime:"4",
            halfYearPlannedCompletionTime:"5",
            halfYearWorkingHours:"6",
            seasonScheduleStartTime:"7",
            seasonPlannedCompletionTime:"8",
            seasonWorkingHours:"9",
            monthScheduleStartTime:"10",
            monthPlannedCompletionTime:"11",
            monthWorkingHours:"12",
            weekScheduleStartTime:"13",
            weekPlannedCompletionTime:"14",
            weekWorkingHours:"15",
            dayScheduleStartTime:"16",
            dayPlannedCompletionTime:"17",
            dayWorkingHours:"28"
          }
        ],
        //        同级新增
        peer:false,
        labelPosition: 'right',
        peerForm: {
          codingSite:"",
          detailNumber:"",
          pileNumber:"",
          detailName:"",
          stopNumber:"",
          subsectionName:"",
          subItemName:"",
          structuralStyle:"",
          length:"",
          theLengthOfTheBridge:"",
          structureWidth:"",
          keyProcess:"",
          position:"",
          specificLocation:"",
          company:"",
          listUnitPrice:"",
          drawingQuantity:"",
          lastCompletedQuantity:"",
          remainingQuantity:"",
          yearScheduleStartTime:"",
          yearPlannedCompletionTime:"",
          yearWorkingHours:"",
          halfYearScheduleStartTime:"",
          halfYearPlannedCompletionTime:"",
          halfYearWorkingHours:"",
          seasonScheduleStartTime:"",
          seasonPlannedCompletionTime:"",
          seasonWorkingHours:"",
          monthScheduleStartTime:"",
          monthPlannedCompletionTime:"",
          monthWorkingHours:"",
          weekScheduleStartTime:"",
          weekPlannedCompletionTime:"",
          weekWorkingHours:"",
          dayScheduleStartTime:"",
          dayPlannedCompletionTime:"",
          dayWorkingHours:""
        },
//        年
        yearPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        yearPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      半年
        halfYearPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        halfYearPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      季
        seasonPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        seasonPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      月
        monthPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        monthPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      周
        weekPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        weekPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      天
        dayPeerFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        dayPeerFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//      下级新增
        junior:false,
        juniorForm: {
        codingSite:"",
        detailNumber:"",
        pileNumber:"",
        detailName:"",
        stopNumber:"",
        subsectionName:"",
        subItemName:"",
        structuralStyle:"",
        length:"",
        theLengthOfTheBridge:"",
        structureWidth:"",
        keyProcess:"",
        position:"",
        specificLocation:"",
        company:"",
        listUnitPrice:"",
        drawingQuantity:"",
        lastCompletedQuantity:"",
        remainingQuantity:"",
        yearScheduleStartTime:"",
        yearPlannedCompletionTime:"",
        yearWorkingHours:"",
        halfYearScheduleStartTime:"",
        halfYearPlannedCompletionTime:"",
        halfYearWorkingHours:"",
        seasonScheduleStartTime:"",
        seasonPlannedCompletionTime:"",
        seasonWorkingHours:"",
        monthScheduleStartTime:"",
        monthPlannedCompletionTime:"",
        monthWorkingHours:"",
        weekScheduleStartTime:"",
        weekPlannedCompletionTime:"",
        weekWorkingHours:"",
        dayScheduleStartTime:"",
        dayPlannedCompletionTime:"",
        dayWorkingHours:""
    },
  //    年
        yearJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        yearJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
  //    半年
        halfYearJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        halfYearJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
  //    季
        seasonJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        seasonJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
  //    月
        monthJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        monthJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
  //    周
        weekJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        weekJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
  //    天
        dayJuniorFormStartDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        dayJuniorFormOverDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
//        搜索
        search:'',
//      显示当前所选计划
        radio:'',
//        开始时间
        start:'',
        startDate: {
            disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
             }
        },
//        结束时间
        over:'',
        overDate: {
            disabledDate(time) {
              return time.getTime() < Date.now() - 8.64e7;
          }
      },
//        数据导入
        fileList:[],
//        数据导出
        exportList:[],
      }
    },

    methods:{
//    进度选择
      clickShow(){
        this.isHide=!this.isHide
      },
      mouseShow(){
        this.isHide=false
      },
      changeIn(){
//        for(var i=0;i<this.checkList.length;i++){
//          console.log(this.checkList[i])
//        }
        var list=this.checkList
        var data=this.lineList
        for(var i  in  data){
             console.log("我是list："+i);
        }
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
//      搜索
      handleIconClick(ev) {
        console.log(ev);
      },
//      数据导出
      exportHandleRemove(file, fileList) {
        console.log(file, fileList);
      },
      exportHandlePreview(file) {
        console.log(file);
      },
//      数据导入
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
    /*选择时间*/
    .time{
      position:relative;
    }
    .lineHeader{
      width:200px;
      height:36px;
      border:1px solid #BFCBD9;
      border-radius:5px;
      text-align: center;
      line-height: 36px;
      color:#A4B0D5;
      box-sizing: border-box;
    }
    .icon{
      margin-left: 10px;
    }
    .lineBox{
      width:200px;
      border:1px solid #BFCBD9;
      border-radius: 5px;
      background: #fff;
      padding:5px 0 5px 40px;
      position:absolute;
      top:40px;
      z-index: 100;
      box-sizing: border-box;
    }
</style>
