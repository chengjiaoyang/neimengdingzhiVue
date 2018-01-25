<template>
  <div class="bills">
    <div class="tab">
      <el-tabs type="border-card">
        <el-tab-pane label="新增确认单">
          <!-- 主体表格-->
          <div class="subject">
            <div class="tableNav">
              <!-- 新增确认单按钮-->
              <div class="affirm">
                <el-button type="success" size="small">新增确认单</el-button>
              </div>
              <!-- 隐藏当前一列-->
              <!-- 隐藏一列-->
              <div class="line">
                <div class="lineHeader" @click="showClik">
                  隐藏当前列
                  <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
                  <i class="el-icon-caret-top icon" v-show="isHide"></i>
                </div>
                <div class="lineBox" v-show="isHide" @mouseleave="showMouse">
                  <ul>
                    <li>
                        <el-checkbox-group v-model="columnChangeList" v-for="(list,index) in columnsList" :key="list.dataIndex">
                        <el-checkbox :label="list.dataIndex" @change="columnChange">{{list.text}}</el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="table">
                <bills-table :columns="newColumnsList" :subjectData="subjectData"></bills-table>
            </div>
          </div>
          <div class="addVoucher">
            <!-- 导航操作-->
            <div class="buttonBox">
              <!-- 附件上传-->
              <div>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList">
                  <el-button size="small" type="primary">附件上传</el-button>
                </el-upload>
              </div>
              <!-- 删除-->
              <div class="Offset">
                <el-button type="danger" size="small">删除</el-button>
              </div>
              <!-- 导出-->
              <div class="Offset">
                <el-button type="info" size="small">导出</el-button>
              </div>
              <!-- 打印-->
              <div class="Offset">
                <el-button type="warning" size="small">打印</el-button>
              </div>
              <!-- 搜索-->
              <div class="Offset">
                <el-input
                  placeholder="请输入关键字"
                  icon="search"
                  v-model="search"
                  :on-icon-click="handleIconClick">
                </el-input>
              </div>
            </div>
            <!-- 标题-->
            <div class="title">
              <h1>签认单</h1>
            </div>
            <!-- 新增展示表格-->
            <div>
              <div>
                <!-- 劳务层名称-->
                <div class="tableName">
                  <div>
                    <el-form :inline="true" :model="nameForm" class="demo-form-inline">
                      <el-form-item label="劳务层名称:">
                        <el-input v-model="nameForm.name" placeholder="劳务层名称"></el-input>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div class="title-time">
                    <span>日期:</span>
                    <el-date-picker
                      v-model="value6"
                      type="daterange"
                      placeholder="选择日期范围">
                    </el-date-picker>
                  </div>
                </div>
              </div>
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="serialNumber"
                  label="序号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="detailNumber"
                  label="细目号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="detailName"
                  label="细目名称">
                </el-table-column>
                <el-table-column
                  prop="company"
                  label="单位">
                </el-table-column>
                <el-table-column
                  prop="completedQuantityForThisPeriod"
                  label="本期完成数量">
                </el-table-column>
                <el-table-column
                  prop="confirmThePositionOfTheQuantity"
                  label="确认工程量的部位">
                </el-table-column>
                <el-table-column
                  prop="quantityCalculationDescription"
                  label="数量计算（来源）说明">
                </el-table-column>
                <el-table-column
                  prop="remarks"
                  label="备注">
                </el-table-column>
              </el-table>
              <!-- 表尾-->
              <div class="tableFoot">
                <el-form :inline="true" :model="footForm" class="demo-form-inline"  label-width="80px">
                  <el-form-item label="现场技术员:">
                    <el-input v-model="footForm.technician" ></el-input>
                  </el-form-item>
                  <el-form-item label="工程技术质量部:">
                    <el-input v-model="footForm.qualityDepartment" ></el-input>
                  </el-form-item>
                  <el-form-item label="经营部:">
                    <el-input v-model="footForm.operationDepartment"></el-input>
                  </el-form-item>
                  <el-form-item label="总工程师:">
                    <el-input v-model="footForm.engineer"></el-input>
                  </el-form-item>
                  <el-form-item label="生产副经理:">
                    <el-input v-model="footForm.deputyManager"></el-input>
                  </el-form-item>
                  <el-form-item label="日期:">
                    <el-date-picker
                      v-model="footForm.Date"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="footTime">
                    </el-date-picker>
                  </el-form-item>
                </el-form>
                <div class="footButton">
                  <el-button  type="danger" size="small">保存</el-button>
                  <el-button  type="warning" size="small">申报</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新增申报单">新增申报单</el-tab-pane>
        <el-tab-pane label="新增支付单">新增支付单</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import BillsTable from '../../common/table/billsTable.vue'
  export default{
    components:{
      BillsTable
    },
    data(){
      return{
//        隐藏一列、
        isHide:false,
        columnChangeList:[],
        newColumnsList:[],
//        表头
        columnsList:[
          {
            text:"序号",
            dataIndex:"serialNumber"
          },
          {
            text:"细目号",
            dataIndex:"detailNumber"
          },
          {
            text:"细目名称",
            dataIndex:"detailName"
          },
          {
            text:"起桩号",
            dataIndex:"pileNumber"
          },
          {
            text:"止桩号",
            dataIndex:"stopNumber"
          },
          {
            text:"分部名称",
            dataIndex:"subsectionName"
          },
          {
            text:"分项名称",
            dataIndex:"subItemName"
          },
          {
            text:"结构形式（400章）",
            dataIndex:"structuralStyle"
          },
          {
            text:"长度（300章）",
            dataIndex:"length"
          },
          {
            text:"桥长（300章）",
            dataIndex:"theLengthOfTheBridge"
          },
          {
            text:"结构层宽度（300章）",
            dataIndex:"widthOfStructureLayer"
          },
          {
            text:"关键工序",
            dataIndex:"keyProcess"
          },
          {
            text:"部位",
            dataIndex:"position"
          },
          {
            text:"具体位置",
            dataIndex:"specificLocation"
          },
          {
            text:"单位",
            dataIndex:"company"
          },
          {
            text:"完成数量",
            dataIndex:"completedQuantity"
          },
          {
            text:"结算数量",
            dataIndex:"settlementAmount"
          },
          {
            text:"合同单价",
            dataIndex:"unitContractPrice"
          },
          {
            text:"结算合同",
            dataIndex:"contractOfSettlingAccounts"
          },
          {
            text:"结算金额",
            dataIndex:"settlementAmount"
          },
          {
            text:"编制人",
            dataIndex:"compilingPersonnel"
          },
          {
            text:"编制日期",
            dataIndex:"compilationDate"
          },
          {
            text:"备注",
            dataIndex:"remarks"
          },
        ],
//        主体表格
        subjectData: [
          {
            serialNumber:"1",
            detailNumber:"01",
            detailName:"隧道",
            pileNumber:"1-1",
            stopNumber:"1-2",
            subsectionName:"上海中铁一局",
            subItemName:"隧道",
            structuralStyle:"300",
            length:"300",
            theLengthOfTheBridge:"300",
            widthOfStructureLayer:"300",
            keyProcess:"一般工序",
            position:"隧道",
            specificLocation:"山川大山",
            company:"上海中铁一局",
            completedQuantity:"3456",
            settlementAmount:"3456",
            unitContractPrice:"54678",
            contractOfSettlingAccounts:"434453445",
            settlementAmount:"3445",
            compilingPersonnel:"张三丰",
            compilationDate:'2017-10-1',
            remarks:"暂无"
          },
          {
            serialNumber:"1",
            detailNumber:"01",
            detailName:"隧道",
            pileNumber:"1-1",
            stopNumber:"1-2",
            subsectionName:"上海中铁一局",
            subItemName:"隧道",
            structuralStyle:"300",
            length:"300",
            theLengthOfTheBridge:"300",
            widthOfStructureLayer:"300",
            keyProcess:"一般工序",
            position:"隧道",
            specificLocation:"山川大山",
            company:"上海中铁一局",
            completedQuantity:"3456",
            settlementAmount:"3456",
            unitContractPrice:"54678",
            contractOfSettlingAccounts:"434453445",
            settlementAmount:"3445",
            compilingPersonnel:"张三丰",
            compilationDate:'2017-10-1',
            remarks:"暂无"
          }
        ],
        multipleSelection: [],
//      新增确认单的表单
        nameForm: {
          user: ''
        },
        footForm: {
          user: '',
          region: ''
        },
        value6: '',
        footTime: {
            disabledDate(time) {
              return time.getTime() < Date.now() - 8.64e7;
            }
        },

//        上传
        fileList:[],
//        搜索
        search:'',
//       新增表格
        tableData: [
          {
          serialNumber:"1",
          detailNumber:"1",
          detailName:"隧道",
          company:"单位",
          completedQuantityForThisPeriod:"747854",
          confirmThePositionOfTheQuantity:"隧道",
          quantityCalculationDescription:"暂无说明",
          remarks:"暂无"
          }
        ]
      }
    },
    computed:{
      lineListData(){
        return  this.columnsList.map((items,index)=>{
            return items.dataIndex
          })
      }
    },
  mounted(){
    this.columnChangeList=this.lineListData;
    this.newColumnsList=this.columnsList
  },
    methods:{
//    隐藏一列
      showClik(){
        this.isHide=!this.isHide
      },
      showMouse(){
        this.isHide=false
      },
      columnChange(){
        this.newColumnsList=[];
        this.columnsList.forEach((item,index)=>{
          this.columnChangeList.forEach((val,ind)=>{
            if(val==item.dataIndex){
                this.newColumnsList.push(item)
        }
        })
        })
      },
//      全选按钮
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSubmit() {
        console.log('submit!');
      },
//      上传
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
//    搜索
      handleIconClick(ev) {
        console.log(ev);
      }
    },
  }
</script>
<style scoped>
 .tab{
   margin-top: 30px;
 }
  .buttonBox{
    margin:30px 0 30px 0;
    display: flex;
  }
  .buttonBox>.Offset{
    margin-left:30px;
  }
  /*签认单*/
  .title>h1{
    font-size:20px;
    text-align: center;
  }
  .tableName{
    display: flex;
  }
 .tableName>.title-time{
   margin-left:50%;
 }
  .tableFoot{
    margin-top:10px;
  }
  .footButton{
    margin-left: 85%;
  }
  .subject{
    margin-bottom:100px;
  }
  .affirm{
    margin-bottom: 20px;
  }
 /*隐藏一列*/
 .tableNav{
   display: flex;
 }
 .line{
   margin-bottom: 10px;
   position: relative;
   margin-left: 10px;
 }
 .lineHeader{
   width:200px;
   height:36px;
   text-align:center;
   line-height: 36px;
   box-sizing: border-box;
   border:1px solid #BFCBD9;
   border-radius:5px;
   color:#97A8BE;
 }
 .icon{
   margin-left: 10px;
 }
 .lineBox{
   width:200px;
   height:300px;
   box-sizing: border-box;
   border:1px solid #BFCBD9;
   border-radius:5px;
   background: #fff;
   padding:5px 0 5px 40px;
   overflow: auto;
   z-index: 100;
   position: absolute;
   top:40px;
 }
</style>
