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
            <el-button type="success" size="small" @click="peerAdd=true">同级新增</el-button>
          </div>
          <!-- 下级新增-->
          <div>
            <el-button type="success" size="small" @click="juniorAdd=true">下级新增</el-button>
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
            <el-table-column v-for="(list,index) in changeColumn" :key="list.dataIndex" :label="list.text">
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
                <el-form-item label="序号">
                  <el-input v-model="peerAddFormLabel.order"></el-input>
                </el-form-item>
                <el-form-item label="细目号">
                  <el-input v-model="peerAddFormLabel.detail"></el-input>
                </el-form-item>
                <el-form-item label="细目名称">
                  <el-input v-model="peerAddFormLabel.detailName"></el-input>
                </el-form-item>
                <el-form-item label="起桩号">
                  <el-input v-model="peerAddFormLabel.pileNum"></el-input>
                </el-form-item>
                <el-form-item label="止桩号">
                  <el-input v-model="peerAddFormLabel.stopNum"></el-input>
                </el-form-item>
                <el-form-item label="分部名称">
                  <el-input v-model="peerAddFormLabel.subsectionName"></el-input>
                </el-form-item>
                <el-form-item label="分项名称">
                  <el-input v-model="peerAddFormLabel.subitemname"></el-input>
                </el-form-item>
                <el-form-item label="结构样式(400章)">
                  <el-input v-model="peerAddFormLabel.structuralStyle"></el-input>
                </el-form-item>
                <el-form-item label="长度(300章)">
                  <el-input v-model="peerAddFormLabel.length"></el-input>
                </el-form-item>
                <el-form-item label="桥长(300章)">
                  <el-input v-model="peerAddFormLabel.bridgeLength"></el-input>
                </el-form-item>
                <el-form-item label="结构层宽度(300章)">
                  <el-input v-model="peerAddFormLabel.structureWidth"></el-input>
                </el-form-item>
                <el-form-item label="部位">
                  <el-input v-model="peerAddFormLabel.position"></el-input>
                </el-form-item>
                <el-form-item label="具体位置">
                  <el-input v-model="peerAddFormLabel.specificLocation"></el-input>
                </el-form-item>
                <el-form-item label="单位">
                  <el-input v-model="peerAddFormLabel.company"></el-input>
                </el-form-item>
                <el-form-item label="原图纸数量">
                  <el-input v-model="peerAddFormLabel.drawingQuantity"></el-input>
                </el-form-item>
                <el-form-item label="原单价">
                  <el-input v-model="peerAddFormLabel.originalUnitPrice"></el-input>
                </el-form-item>
                <el-form-item label="原图纸合价">
                  <el-input v-model="peerAddFormLabel.theOriginalPrice"></el-input>
                </el-form-item>
                <el-form-item label="申报数量">
                  <el-input v-model="peerAddFormLabel.declaredQuantity"></el-input>
                </el-form-item>
                <el-form-item label="批复数量">
                  <el-input v-model="peerAddFormLabel.approvedQuantity"></el-input>
                </el-form-item>
                <el-form-item label="未批复数量">
                  <el-input v-model="peerAddFormLabel.quantityNotApproved"></el-input>
                </el-form-item>
                <el-form-item label="变更后单价">
                  <el-input v-model="peerAddFormLabel.unitPriceAfterChange"></el-input>
                </el-form-item>
                <el-form-item label="变更合价">
                  <el-input v-model="peerAddFormLabel.priceChange"></el-input>
                </el-form-item>
                <el-form-item label="变更后数量">
                  <el-input v-model="peerAddFormLabel.quantityAfterChange"></el-input>
                </el-form-item>
                <el-form-item label="变更后合价">
                  <el-input v-model="peerAddFormLabel.afterTheChangeOfPrice"></el-input>
                </el-form-item>
                <el-form-item label="编制人">
                  <el-input v-model="peerAddFormLabel.compilingPersonnel"></el-input>
                </el-form-item>
                <el-form-item label="编制日期">
                  <el-input v-model="peerAddFormLabel.compilationDate"></el-input>
                </el-form-item>
                <el-form-item label="关键工序">
                  <template scope="scope">
                    <el-select v-model="peerAddFormLabel.keyProcess" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-form-item>
              </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="peerAdd = false">取 消</el-button>
                  <el-button type="primary" @click="peerAdd = false">确 定</el-button>
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
                <el-form-item label="序号">
                  <el-input v-model="juniorAddFormLabel.order"></el-input>
                </el-form-item>
                <el-form-item label="细目号">
                  <el-input v-model="juniorAddFormLabel.detail"></el-input>
                </el-form-item>
                <el-form-item label="细目名称">
                  <el-input v-model="juniorAddFormLabel.detailName"></el-input>
                </el-form-item>
                <el-form-item label="起桩号">
                  <el-input v-model="juniorAddFormLabel.pileNum"></el-input>
                </el-form-item>
                <el-form-item label="止桩号">
                  <el-input v-model="juniorAddFormLabel.stopNum"></el-input>
                </el-form-item>
                <el-form-item label="分部名称">
                  <el-input v-model="juniorAddFormLabel.subsectionName"></el-input>
                </el-form-item>
                <el-form-item label="分项名称">
                  <el-input v-model="juniorAddFormLabel.subitemname"></el-input>
                </el-form-item>
                <el-form-item label="结构样式(400章)">
                  <el-input v-model="juniorAddFormLabel.structuralStyle"></el-input>
                </el-form-item>
                <el-form-item label="长度(300章)">
                  <el-input v-model="juniorAddFormLabel.length"></el-input>
                </el-form-item>
                <el-form-item label="桥长(300章)">
                  <el-input v-model="juniorAddFormLabel.bridgeLength"></el-input>
                </el-form-item>
                <el-form-item label="结构层宽度(300章)">
                  <el-input v-model="juniorAddFormLabel.structureWidth"></el-input>
                </el-form-item>
                <el-form-item label="部位">
                  <el-input v-model="juniorAddFormLabel.position"></el-input>
                </el-form-item>
                <el-form-item label="具体位置">
                  <el-input v-model="juniorAddFormLabel.specificLocation"></el-input>
                </el-form-item>
                <el-form-item label="单位">
                  <el-input v-model="juniorAddFormLabel.company"></el-input>
                </el-form-item>
                <el-form-item label="原图纸数量">
                  <el-input v-model="juniorAddFormLabel.drawingQuantity"></el-input>
                </el-form-item>
                <el-form-item label="原单价">
                  <el-input v-model="juniorAddFormLabel.originalUnitPrice"></el-input>
                </el-form-item>
                <el-form-item label="原图纸合价">
                  <el-input v-model="juniorAddFormLabel.theOriginalPrice"></el-input>
                </el-form-item>
                <el-form-item label="申报数量">
                  <el-input v-model="juniorAddFormLabel.declaredQuantity"></el-input>
                </el-form-item>
                <el-form-item label="批复数量">
                  <el-input v-model="juniorAddFormLabel.approvedQuantity"></el-input>
                </el-form-item>
                <el-form-item label="未批复数量">
                  <el-input v-model="juniorAddFormLabel.quantityNotApproved"></el-input>
                </el-form-item>
                <el-form-item label="变更后单价">
                  <el-input v-model="juniorAddFormLabel.unitPriceAfterChange"></el-input>
                </el-form-item>
                <el-form-item label="变更合价">
                  <el-input v-model="juniorAddFormLabel.priceChange"></el-input>
                </el-form-item>
                <el-form-item label="变更后数量">
                  <el-input v-model="juniorAddFormLabel.quantityAfterChange"></el-input>
                </el-form-item>
                <el-form-item label="变更后合价">
                  <el-input v-model="juniorAddFormLabel.afterTheChangeOfPrice"></el-input>
                </el-form-item>
                <el-form-item label="编制人">
                  <el-input v-model="juniorAddFormLabel.compilingPersonnel"></el-input>
                </el-form-item>
                <el-form-item label="编制日期">
                  <el-input v-model="juniorAddFormLabel.compilationDate"></el-input>
                </el-form-item>
                <el-form-item label="关键工序">
                  <template scope="scope">
                    <el-select v-model="juniorAddFormLabel.keyProcess" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-form-item>
              </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="juniorAdd = false">取 消</el-button>
                  <el-button type="primary" @click="juniorAdd = false">确 定</el-button>
                </span>
            </el-dialog>
          </div>
        </div>
  </div>
</template>
<script>
  import TreeGird from "../common/treenTable/modifyTree.vue"
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
          juniorAddFormLabel: {
            order:"",
            detail:"",
            detailName:"",
            pileNum:"",
            stopNum:"",
            subsectionName:"",
            subitemname:"",
            structuralStyle:"",
            length:"",
            bridgeLength:"",
            structureWidth:"",
            position:"",
            specificLocation:"",
            company:"",
            drawingQuantity:"",
            originalUnitPrice:"",
            theOriginalPrice:"",
            declaredQuantity:"",
            approvedQuantity:"",
            quantityNotApproved:"",
            unitPriceAfterChange:"",
            priceChange:"",
            quantityAfterChange:"",
            afterTheChangeOfPrice:"",
            compilingPersonnel:"",
            compilationDate:"",
            keyProcess:""
          },
          options: [
            {
              value: '一般线路',
              label: '关键线路'
            },
            {
              value: '关键线路',
              label: '关键线路'
            }
          ],
          value: '',
//        同级新增
          peerAdd:false,
          labelPosition: 'right',
          peerAddFormLabel: {
            order:"",
            detail:"",
            detailName:"",
            pileNum:"",
            stopNum:"",
            subsectionName:"",
            subitemname:"",
            structuralStyle:"",
            length:"",
            bridgeLength:"",
            structureWidth:"",
            position:"",
            specificLocation:"",
            company:"",
            drawingQuantity:"",
            originalUnitPrice:"",
            theOriginalPrice:"",
            declaredQuantity:"",
            approvedQuantity:"",
            quantityNotApproved:"",
            unitPriceAfterChange:"",
            priceChange:"",
            quantityAfterChange:"",
            afterTheChangeOfPrice:"",
            compilingPersonnel:"",
            compilationDate:"",
            keyProcess:""
          },
          peerAddOptions: [
            {
              value: '一般线路',
              label: '关键线路'
            },
            {
              value: '关键线路',
              label: '关键线路'
            }
          ],
          value: '',
//      搜索
          search:'',
//    文件导入
          fileList:[],
//    变更表格
          changeColumn:[
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
              text:"变更日期",
              dataIndex:"changeDate"
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
            }
          ],
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
//    同级新增
      peerAddHandleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
          done();
      })
            .catch(_ => {});
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
