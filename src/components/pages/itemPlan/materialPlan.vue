<template>
  <div class="timePlan">
    <!-- 路由-->
    <div class="path">
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
      <!-- 搜索-->
      <div>
        <el-input
          placeholder="请输入关键字"
          icon="search"
          v-model="search"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
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
              <el-checkbox-group v-model="checkList" v-for="(data,index) in list" :key="data.dataIndex">
                <el-checkbox :label="data.dataIndex" @change="changeIn">
                  <span>{{data.text}}</span>
                </el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </div>
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
        :columns="columns"
        :yearlyPlan="yearlyPlan"
        :halfYearPlan="halfYearPlan"
        :quarter="quarter"
        :monthlyPlan="monthlyPlan"
        :weeklyPlan="weeklyPlan"
        :dailyPlan="dailyPlan"
        :tree-structure="true"
        :data-source="dataSource">
      </tree-grid>
    </div>
    <!-- 弹出框-->
    <div>
      <!-- 同级新增弹出框-->
      <div>
        <el-dialog
          title="同级新增"
          :visible.sync="peer"
          size="small"
          :before-close="peerHandleClose">
          <el-form :label-position="labelPosition" label-width="80px" :model="peerForm" :inline="true">
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
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.yearlyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.yearlyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.yearlyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.yearlyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.yearlyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.yearlyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.yearlyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">半年计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.halfYearPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.halfYearPlanCibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.halfYearPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.halfYearPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.halfYearPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.halfYearPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.halfYearPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">季计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.quarterConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.quarterRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.quarterCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.quarterSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.quarterSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.quarterSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.quarterMortar"></el-input>
            </el-form-item>
            <div class="sign">月计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.monthlyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.monthlyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.monthlyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.monthlyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.monthlyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.monthlyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.monthlyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">周计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.weeklyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.weeklyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.weeklyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.weeklyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.weeklyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.weeklyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.weeklyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">天计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="peerForm.dailyPlanConcret"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="peerForm.dailyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="peerForm.dailyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="peerForm.dailyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="peerForm.dailyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="peerForm.dailyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="peerForm.dailyPlanMortar"></el-input>
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
          size="small"
          :before-close="juniorHandleClose">
          <el-form :label-position="labelPosition" label-width="80px" :model="juniorForm" :inline="true">
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
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.yearlyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.yearlyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.yearlyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.yearlyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.yearlyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.yearlyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.yearlyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">半年计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.halfYearPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.halfYearPlanCibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.halfYearPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.halfYearPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.halfYearPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.halfYearPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.halfYearPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">季计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.quarterConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.quarterRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.quarterCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.quarterSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.quarterSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.quarterSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.quarterMortar"></el-input>
            </el-form-item>
            <div class="sign">月计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.monthlyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.monthlyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.monthlyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.monthlyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.monthlyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.monthlyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.monthlyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">周计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.weeklyPlanConcrete"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.weeklyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.weeklyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.weeklyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.weeklyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.weeklyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.weeklyPlanMortar"></el-input>
            </el-form-item>
            <div class="sign">天计划</div>
            <el-form-item label="混凝土">
              <el-input v-model="juniorForm.dailyPlanConcret"></el-input>
            </el-form-item>
            <el-form-item label="带肋钢筋">
              <el-input v-model="juniorForm.dailyPlanRibbedBars"></el-input>
            </el-form-item>
            <el-form-item label="光圆钢筋">
              <el-input v-model="juniorForm.dailyPlanCircularReinforcement"></el-input>
            </el-form-item>
            <el-form-item label="钢管">
              <el-input v-model="juniorForm.dailyPlanSteelPipe"></el-input>
            </el-form-item>
            <el-form-item label="钢板">
              <el-input v-model="juniorForm.dailyPlanSteelPlate"></el-input>
            </el-form-item>
            <el-form-item label="钢绞丝">
              <el-input v-model="juniorForm.dailyPlanSteelWireCutter"></el-input>
            </el-form-item>
            <el-form-item label="砂浆">
              <el-input v-model="juniorForm.dailyPlanMortar"></el-input>
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
  import TreeGrid from '../../common/treenTable/materialPlanTree.vue'
  import RouterPath from './routerPath.vue'
  export default{
    components:{
      TreeGrid,
      RouterPath
    },
    data(){
    return {
      isHide:'',
      list:[
        {
          text:'总计划',
          dataIndex:"columns"
        },
        {
          text:'年计划',
          dataIndex:"yearlyPlan"
        },
        {
          text:'半年计划',
          dataIndex:"halfYearPlan"
        },
        {
          text:'季计划',
          dataIndex:"quarter"
        },
        {
          text:'月计划',
          dataIndex:"monthlyPlan"
        },
        {
          text:'周计划',
          dataIndex:"weeklyPlan"
        },
        {
          text:'日计划',
          dataIndex:"dailyPlan"
        },
      ],
      checkList:[],
      yearlyPlans:[],
//      计划
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
//      年
      yearlyPlan:[
        {
          text:'混凝土',
          dataIndex:'yearlyPlanConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'yearlyPlanRibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'yearlyPlanCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'yearlyPlanSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'yearlyPlanSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'yearlyPlanSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'yearlyPlanMortar'
        }
      ],
//      半年
      halfYearPlan:[
        {
          text:'混凝土',
          dataIndex:'halfYearPlanConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'halfYearPlanCibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'halfYearPlanCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'halfYearPlanSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'halfYearPlanSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'halfYearPlanSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'halfYearPlanMortar'
        }
      ],
//      季
      quarter:[
        {
          text:'混凝土',
          dataIndex:'quarterConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'quarterRibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'quarterCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'quarterSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'quarterSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'quarterSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'quarterMortar'
        },
      ],
//      月
      monthlyPlan :[
        {
          text:'混凝土',
          dataIndex:'monthlyPlanConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'monthlyPlanRibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'monthlyPlanCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'monthlyPlanSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'monthlyPlanSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'monthlyPlanSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'monthlyPlanMortar'
        },
      ],
//      周
      weeklyPlan  :[
        {
          text:'混凝土',
          dataIndex:'weeklyPlanConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'weeklyPlanRibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'weeklyPlanCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'weeklyPlanSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'weeklyPlanSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'weeklyPlanSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'weeklyPlanMortar'
        },
      ],
//      日
      dailyPlan  :[
        {
          text:'混凝土',
          dataIndex:'dailyPlanConcrete'
        },
        {
          text:'带肋钢筋',
          dataIndex:'dailyPlanRibbedBars'
        },
        {
          text:'光圆钢筋',
          dataIndex:'dailyPlanCircularReinforcement'
        },
        {
          text:'钢筋',
          dataIndex:'dailyPlanSteelPipe'
        },
        {
          text:'钢板',
          dataIndex:'dailyPlanSteelPlate'
        },
        {
          text:'钢绞丝',
          dataIndex:'dailyPlanSteelWireCutter'
        },
        {
          text:'砂浆',
          dataIndex:'dailyPlanMortar'
        },
      ],
//     表格数据
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
          keyProcess:"一般线路",
          position:"300",
          specificLocation:"部位",
          company:"小桥",
          listUnitPrice:"小桥单位",
          drawingQuantity:"5242",
          lastCompletedQuantity:"5214",
          remainingQuantity:"845789",
          yearlyPlanConcrete:"1",
          yearlyPlanRibbedBars:"2",
          yearlyPlanCircularReinforcement:"3",
          yearlyPlanSteelPipe:"4",
          yearlyPlanSteelPlate:"5",
          yearlyPlanSteelWireCutter:"6",
          yearlyPlanMortar:"7",
          halfYearPlanConcrete:"8",
          halfYearPlanCibbedBars:"9",
          halfYearPlanCircularReinforcement:"10",
          halfYearPlanSteelPipe:"11",
          halfYearPlanSteelPlate:"12",
          halfYearPlanSteelWireCutter:"13",
          halfYearPlanMortar:"14",
          quarterConcrete:"15",
          quarterRibbedBars:"",
          quarterCircularReinforcement:"16",
          quarterSteelPipe:"17",
          quarterSteelPlate:"18",
          quarterSteelWireCutter:"19",
          quarterMortar:"20",
          monthlyPlanConcrete:"21",
          monthlyPlanRibbedBars:"22",
          monthlyPlanCircularReinforcement:"22",
          monthlyPlanSteelPipe:"23",
          monthlyPlanSteelPlate:"24",
          monthlyPlanSteelWireCutter:"25",
          monthlyPlanMortar:"26",
          weeklyPlanConcrete:"27",
          weeklyPlanRibbedBars:"28",
          weeklyPlanCircularReinforcement:"29",
          weeklyPlanSteelPipe:"30",
          weeklyPlanSteelPlate:"31",
          weeklyPlanSteelWireCutter:"32",
          weeklyPlanMortar:"33",
          dailyPlanConcrete:"34",
          dailyPlanRibbedBars:"35",
          dailyPlanCircularReinforcement:"36",
          dailyPlanSteelPipe:"37",
          dailyPlanSteelPlate:"38",
          dailyPlanSteelWireCutter:"39",
          dailyPlanMortar:"40",
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
              position:"020",
              specificLocation:"部位",
              company:"小桥",
              listUnitPrice:"小桥单位",
              drawingQuantity:"5242",
              lastCompletedQuantity:"5214",
              remainingQuantity:"845789",
              yearlyPlanConcrete:"1",
              yearlyPlanRibbedBars:"2",
              yearlyPlanCircularReinforcement:"3",
              yearlyPlanSteelPipe:"4",
              yearlyPlanSteelPlate:"5",
              yearlyPlanSteelWireCutter:"6",
              yearlyPlanMortar:"7",
              halfYearPlanConcrete:"8",
              halfYearPlanCibbedBars:"9",
              halfYearPlanCircularReinforcement:"10",
              halfYearPlanSteelPipe:"11",
              halfYearPlanSteelPlate:"12",
              halfYearPlanSteelWireCutter:"13",
              halfYearPlanMortar:"14",
              quarterConcrete:"15",
              quarterRibbedBars:"",
              quarterCircularReinforcement:"16",
              quarterSteelPipe:"17",
              quarterSteelPlate:"18",
              quarterSteelWireCutter:"19",
              quarterMortar:"20",
              monthlyPlanConcrete:"21",
              monthlyPlanRibbedBars:"22",
              monthlyPlanCircularReinforcement:"22",
              monthlyPlanSteelPipe:"23",
              monthlyPlanSteelPlate:"24",
              monthlyPlanSteelWireCutter:"25",
              monthlyPlanMortar:"26",
              weeklyPlanConcrete:"27",
              weeklyPlanRibbedBars:"28",
              weeklyPlanCircularReinforcement:"29",
              weeklyPlanSteelPipe:"30",
              weeklyPlanSteelPlate:"31",
              weeklyPlanSteelWireCutter:"32",
              weeklyPlanMortar:"33",
              dailyPlanConcrete:"34",
              dailyPlanRibbedBars:"35",
              dailyPlanCircularReinforcement:"36",
              dailyPlanSteelPipe:"37",
              dailyPlanSteelPlate:"38",
              dailyPlanSteelWireCutter:"39",
              dailyPlanMortar:"40"
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
          keyProcess:"一般线路",
          position:"0003",
          specificLocation:"部位",
          company:"小桥",
          listUnitPrice:"小桥单位",
          drawingQuantity:"5242",
          lastCompletedQuantity:"5214",
          remainingQuantity:"845789",
          yearlyPlanConcrete:"1",
          yearlyPlanRibbedBars:"2",
          yearlyPlanCircularReinforcement:"3",
          yearlyPlanSteelPipe:"4",
          yearlyPlanSteelPlate:"5",
          yearlyPlanSteelWireCutter:"6",
          yearlyPlanMortar:"7",
          halfYearPlanConcrete:"8",
          halfYearPlanCibbedBars:"9",
          halfYearPlanCircularReinforcement:"10",
          halfYearPlanSteelPipe:"11",
          halfYearPlanSteelPlate:"12",
          halfYearPlanSteelWireCutter:"13",
          halfYearPlanMortar:"14",
          quarterConcrete:"15",
          quarterRibbedBars:"",
          quarterCircularReinforcement:"16",
          quarterSteelPipe:"17",
          quarterSteelPlate:"18",
          quarterSteelWireCutter:"19",
          quarterMortar:"20",
          monthlyPlanConcrete:"21",
          monthlyPlanRibbedBars:"22",
          monthlyPlanCircularReinforcement:"22",
          monthlyPlanSteelPipe:"23",
          monthlyPlanSteelPlate:"24",
          monthlyPlanSteelWireCutter:"25",
          monthlyPlanMortar:"26",
          weeklyPlanConcrete:"27",
          weeklyPlanRibbedBars:"28",
          weeklyPlanCircularReinforcement:"29",
          weeklyPlanSteelPipe:"30",
          weeklyPlanSteelPlate:"31",
          weeklyPlanSteelWireCutter:"32",
          weeklyPlanMortar:"33",
          dailyPlanConcrete:"34",
          dailyPlanRibbedBars:"35",
          dailyPlanCircularReinforcement:"36",
          dailyPlanSteelPipe:"37",
          dailyPlanSteelPlate:"38",
          dailyPlanSteelWireCutter:"39",
          dailyPlanMortar:"40"
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
        yearlyPlanConcrete:"",
        yearlyPlanRibbedBars:"",
        yearlyPlanCircularReinforcement:"",
        yearlyPlanSteelPipe:"",
        yearlyPlanSteelPlate:"",
        yearlyPlanSteelWireCutter:"",
        yearlyPlanMortar:"",
        halfYearPlanConcrete:"",
        halfYearPlanCibbedBars:"",
        halfYearPlanCircularReinforcement:"",
        halfYearPlanSteelPipe:"",
        halfYearPlanSteelPlate:"",
        halfYearPlanSteelWireCutter:"",
        halfYearPlanMortar:"",
        quarterConcrete:"",
        quarterRibbedBars:"",
        quarterCircularReinforcement:"",
        quarterSteelPipe:"",
        quarterSteelPlate:"",
        quarterSteelWireCutter:"",
        quarterMortar:"",
        monthlyPlanConcrete:"",
        monthlyPlanRibbedBars:"",
        monthlyPlanCircularReinforcement:"",
        monthlyPlanSteelPipe:"",
        monthlyPlanSteelPlate:"",
        monthlyPlanSteelWireCutter:"",
        monthlyPlanMortar:"",
        weeklyPlanConcrete:"",
        weeklyPlanRibbedBars:"",
        weeklyPlanCircularReinforcement:"",
        weeklyPlanSteelPipe:"",
        weeklyPlanSteelPlate:"",
        weeklyPlanSteelWireCutter:"",
        weeklyPlanMortar:"",
        dailyPlanConcrete:"",
        dailyPlanRibbedBars:"",
        dailyPlanCircularReinforcement:"",
        dailyPlanSteelPipe:"",
        dailyPlanSteelPlate:"",
        dailyPlanSteelWireCutter:"",
        dailyPlanMortar:""
      },
  //        下级新增
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
      yearlyPlanConcrete:"",
      yearlyPlanRibbedBars:"",
      yearlyPlanCircularReinforcement:"",
      yearlyPlanSteelPipe:"",
      yearlyPlanSteelPlate:"",
      yearlyPlanSteelWireCutter:"",
      yearlyPlanMortar:"",
      halfYearPlanConcrete:"",
      halfYearPlanCibbedBars:"",
      halfYearPlanCircularReinforcement:"",
      halfYearPlanSteelPipe:"",
      halfYearPlanSteelPlate:"",
      halfYearPlanSteelWireCutter:"",
      halfYearPlanMortar:"",
      quarterConcrete:"",
      quarterRibbedBars:"",
      quarterCircularReinforcement:"",
      quarterSteelPipe:"",
      quarterSteelPlate:"",
      quarterSteelWireCutter:"",
      quarterMortar:"",
      monthlyPlanConcrete:"",
      monthlyPlanRibbedBars:"",
      monthlyPlanCircularReinforcement:"",
      monthlyPlanSteelPipe:"",
      monthlyPlanSteelPlate:"",
      monthlyPlanSteelWireCutter:"",
      monthlyPlanMortar:"",
      weeklyPlanConcrete:"",
      weeklyPlanRibbedBars:"",
      weeklyPlanCircularReinforcement:"",
      weeklyPlanSteelPipe:"",
      weeklyPlanSteelPlate:"",
      weeklyPlanSteelWireCutter:"",
      weeklyPlanMortar:"",
      dailyPlanConcrete:"",
      dailyPlanRibbedBars:"",
      dailyPlanCircularReinforcement:"",
      dailyPlanSteelPipe:"",
      dailyPlanSteelPlate:"",
      dailyPlanSteelWireCutter:"",
      dailyPlanMortar:""
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
      console.log(this.checkList);
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
