<template>
    <div class="modifyIn">
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
          <el-button type="success" size="small" @click="peerAddForm()" >同级新增</el-button>
        </div>
        <!-- 下级新增-->
        <div>
          <el-button type="success" size="small" @click="juniorAddForm()">下级新增</el-button>
        </div>
        <!-- 查询-->
        <div>
          <el-input
            placeholder="请输入关键词"
            icon="search"
            v-model="search"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
      </div>
      <!-- 变更表格-->
      <div class="change">
        <el-table
          :data="changeData"
          border
          style="width: 100%">
          <el-table-column v-for="(list,index) in changeColumns" :key="list.dataIndex" :label="list.text">\
              <template scope="scope">
                  {{scope.row[list.dataIndex]}}
              </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 隐藏列-->
      <div class="line">
        <div class="lineShow" @click="lineBox">
          隐藏当前列
          <i class="el-icon-caret-bottom icon" v-show="!isHide"></i>
          <i class="el-icon-caret-top icon" v-show="isHide"></i>
        </div>
        <div class="lineBox" v-show="isHide" @mouseleave="showHide">
            <ul>
              <li>
                <el-checkbox-group v-model="checkAll" v-for="(list,index) in columns" :key="list.dataIndex">
                  <el-checkbox :label="list.dataIndex" @change="lineCheck">{{list.text}}</el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
        </div>
      </div>
      <!-- 主体表格-->
      <div>
          <tree-gird :columns="newColumns" :tree-structure="true" :data-source="dataSource"></tree-gird>
      </div>
      <!-- 弹出框-->
      <div>
        <!-- 同级新增-->
        <div class="peer">
          <el-dialog
            title="同级新增"
            :visible.sync="peerAdd"
            size="small"
            :before-close="peerAddHandleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="peerAddFormLabel">
              <el-form-item v-for="(list,index) in columns"  :key="list.dataIndex" :label="list.text" :prop="peerAddFormLabel[list.dataIndex]">
                <el-input v-model="peerAddFormLabel[list.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="peerAdd = false">取 消</el-button>
              <el-button type="primary" @click="peerAddTrue()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 下级新增-->
        <div class="junior">
          <el-dialog
            title="下级新增"
            :visible.sync="juniorAdd"
            size="small"
            :before-close="juniorAddHandleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="juniorAddFormLabel">
              <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="juniorAddFormLabel[list.dataIndex]">
                <el-input v-model="juniorAddFormLabel[list.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="juniorAdd = false">取 消</el-button>
              <el-button type="primary" @click="juniorAddTrue()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script>
  import TreeGird from "../../common/treenTable/modifyInTree.vue"
  export default{
        components:{
          TreeGird
        },
        computed:{
          lineAll(){
              return this.columns.map((item,index)=>{
                    return item.dataIndex
          })
          }
        },
        mounted(){
                this.newColumns=this.columns;
                this.checkAll=this.lineAll
          },
        data(){
          return{
      //        隐藏列
              isHide:false,
              checkAll:[],
              newColumns:[],
      //        下级新增
              juniorAdd:false,
              juniorAddFormLabel: {},
      //        同级新增
              peerAdd:false,
              labelPosition: 'right',
              peerAddFormLabel: {},
      //      搜索
              search:'',
      //    文件导入
              fileList:[],
      //    变更表格头
              changeColumns:[
                {
                  text:"变更文号",
                  dataIndex:"changeCode"
                },
                {
                  text:"变更名称",
                  dataIndex:"changeName"
                },
                {
                  text:"原金额",
                  dataIndex:"originalAmount"
                },
                {
                  text:"变更金额",
                  dataIndex:"changeAmount"
                },
                {
                  text:"变更后金额",
                  dataIndex:"amountAfterChange"
                },
                {
                  text:"编制人",
                  dataIndex:"compilingPersonnel"
                },
                {
                  text:"变更版本",
                  dataIndex:"changeVersion"
                },
                {
                  text:"变更文件",
                  dataIndex:"changeFile"
                },
                {
                  text:"备注",
                  dataIndex:"remarks"
                },
              ],
      //    变更表格
              changeData: [
                {
                  changeCode:"001",
                  changeName:"桥梁合同",
                  originalAmount:"123000",
                  changeAmount:"23000",
                  amountAfterChange:"12300",
                  compilingPersonnel:"紫霞",
                  changeDate:"2017-10-1",
                  changeVersion:"002",
                  changeFile:"桥梁合同",
                  remarks:"暂无"
                },
                {
                  changeCode:"002",
                  changeName:"桥梁合同",
                  originalAmount:"123000",
                  changeAmount:"23000",
                  amountAfterChange:"12300",
                  compilingPersonnel:"紫霞",
                  changeDate:"2017-10-1",
                  changeVersion:"002",
                  changeFile:"桥梁合同",
                  remarks:"暂无"
                },
                {
                  changeCode:"003",
                  changeName:"桥梁合同",
                  originalAmount:"123000",
                  changeAmount:"23000",
                  amountAfterChange:"12300",
                  compilingPersonnel:"紫霞",
                  changeDate:"2017-10-1",
                  changeVersion:"002",
                  changeFile:"桥梁合同",
                  remarks:"暂无"
                }
              ],
      //    主体表头
              columns:[
                {
                  text: '序号',
                  dataIndex:'order'
                },
                {
                  text:'细目号',
                  dataIndex:'detail'
                },
                {
                  text:'细目名称',
                  dataIndex:'detailName'
                },
                {
                  text:'起桩号',
                  dataIndex:'pileNum'
                },
                {
                  text:'止桩号',
                  dataIndex:'stopNum'
                },
                {
                  text:'分部名称',
                  dataIndex:'subsectionName'
                },
                {
                  text:'分项名称',
                  dataIndex:'subitemname'
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
                  dataIndex:'bridgeLength'
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
                  text:'原图纸数量',
                  dataIndex:'drawingQuantity'
                },
                {
                  text:'原单价',
                  dataIndex:'originalUnitPrice'
                },
                {
                  text:'原图纸合价',
                  dataIndex:'theOriginalPrice'
                },
                {
                  text:'申报数量',
                  dataIndex:'declaredQuantity'
                },
                {
                  text:'批复数量',
                  dataIndex:'approvedQuantity'
                },
                {
                  text:'未批复数量',
                  dataIndex:'quantityNotApproved'
                },
                {
                  text:'变更后单价',
                  dataIndex:'unitPriceAfterChange'
                },
                {
                  text:'变更合价',
                  dataIndex:'priceChange'
                },
                {
                  text:'变更后数量',
                  dataIndex:'quantityAfterChange'
                },
                {
                  text:'变更后合价',
                  dataIndex:'afterTheChangeOfPrice'
                },
                {
                  text:'编制人',
                  dataIndex:'compilingPersonnel'
                },
                {
                  text:'编制日期',
                  dataIndex:'compilationDate'
                }
              ],
      //   主体表格内容
              dataSource:[
                {
                  id:1,
                  parentId:0,
                  edit:"false",
                  order:"1",
                  detail:"01",
                  detailName:"道路建设",
                  pileNum:"01",
                  stopNum:"01",
                  subsectionName:"中铁一部",
                  subitemname:"道路建设",
                  structuralStyle:"400",
                  length:"300",
                  bridgeLength:"300",
                  structureWidth:"300",
                  position:"道路建设",
                  specificLocation:"香山南路",
                  company:"中铁一局",
                  drawingQuantity:"210",
                  originalUnitPrice:"52135",
                  theOriginalPrice:"65412",
                  declaredQuantity:"52",
                  approvedQuantity:"654",
                  quantityNotApproved:"121",
                  unitPriceAfterChange:"845",
                  priceChange:"9556",
                  quantityAfterChange:"434",
                  afterTheChangeOfPrice:"5456",
                  compilingPersonnel:"韦小宝",
                  compilationDate:"2017-10-1",
                  keyProcess:"关键工序",
                  children:[
                    {
                      id:2,
                      parentId:0,
                      edit:"false",
                      order:"1",
                      detail:"01",
                      detailName:"道路建设",
                      pileNum:"01",
                      stopNum:"01",
                      subsectionName:"中铁一部",
                      subitemname:"道路建设",
                      structuralStyle:"400",
                      length:"300",
                      bridgeLength:"300",
                      structureWidth:"300",
                      position:"道路建设",
                      specificLocation:"香山南路",
                      company:"中铁一局",
                      drawingQuantity:"210",
                      originalUnitPrice:"52135",
                      theOriginalPrice:"65412",
                      declaredQuantity:"52",
                      approvedQuantity:"654",
                      quantityNotApproved:"121",
                      unitPriceAfterChange:"845",
                      priceChange:"9556",
                      quantityAfterChange:"434",
                      afterTheChangeOfPrice:"5456",
                      compilingPersonnel:"韦小宝",
                      compilationDate:"2017-10-1",
                      keyProcess:"关键工序",
                    }
                  ]
                },
                {
                  id:3,
                  parentId:0,
                  edit:"false",
                  order:"1",
                  detail:"01",
                  detailName:"道路建设",
                  pileNum:"01",
                  stopNum:"01",
                  subsectionName:"中铁一部",
                  subitemname:"道路建设",
                  structuralStyle:"400",
                  length:"300",
                  bridgeLength:"300",
                  structureWidth:"300",
                  position:"道路建设",
                  specificLocation:"香山南路",
                  company:"中铁一局",
                  drawingQuantity:"210",
                  originalUnitPrice:"52135",
                  theOriginalPrice:"65412",
                  declaredQuantity:"52",
                  approvedQuantity:"654",
                  quantityNotApproved:"121",
                  unitPriceAfterChange:"845",
                  priceChange:"9556",
                  quantityAfterChange:"434",
                  afterTheChangeOfPrice:"5456",
                  compilingPersonnel:"韦小宝",
                  compilationDate:"2017-10-1",
                  keyProcess:"关键工序",
                }
              ],
          }
        },
        methods:{
      //    隐藏一列
              showHide(){
                this.isHide=false
              },
              lineBox(){
                this.isHide=!this.isHide
              },
              lineCheck(value){
                this.newColumns=[];
                this.columns.forEach((item,index)=>{
                  this.checkAll.forEach((value,data)=>{
                  if(value==item.dataIndex){
                  this.newColumns.push(item)
                }
              })
              })
              },
      //    下级新增
              juniorAddHandleClose(done) {
                    this.$confirm('确认关闭？')
                      .then(_ => {
                      done();
                  })
                .catch(_ => {});
              },
              juniorAddForm(){
                    this.juniorAdd=true
              },
              juniorAddTrue(){
                    console.log(this.juniorAddFormLabel)
                    this.juniorAdd=false
              },
      //    同级新增
              peerAddHandleClose(done) {
                    this.$confirm('确认关闭？')
                      .then(_ => {
                      done();
                  })
                  .catch(_ => {});
              },
              peerAddForm(){
                this.peerAdd=true
              },
              peerAddTrue(){
                console.log(this.peerAddFormLabel)
                this.peerAdd=false
              },
     //  文件导入
              handleRemove(file, fileList) {
                console.log(file, fileList);
              },
              handlePreview(file) {
                console.log(file);
              },
              handleIconClick(ev) {
                console.log(ev);
              }
        }
  }
</script>
<style scoped>
        .operation{
          margin:30px 0 30px 0;
          display: flex;
        }
        .operation>div{
          margin-left:30px;
        }
        .change{
          margin-bottom: 50px;
        }
        /*隐藏一列*/
        .lineShow{
          width:200px;
          height:36px;
          text-align: center;
          line-height: 36px;
          box-sizing: border-box;
          border:1px solid #C1CDDA;
          border-radius: 5px;
          margin-bottom: 10px;
          color:#97A8BE;
        }
        .icon{
          margin-left: 10px;
        }
        .lineBox{
          width:200px;
          height:400px;
          border:1px solid #C1CDDA;
          color:#fff;
          padding:5px 0 5px 50px;
          border-radius: 5px;
          box-sizing: border-box;
          box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
          z-index:100;
          position:absolute;
          top:40px;
          background: #fff;
          overflow: auto;
        }
        .line{
          position:relative;
        }
</style>
