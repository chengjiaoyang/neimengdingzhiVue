<template>
    <div class="composite">
        <!-- 操作导航-->
      <div class="operation">
        <!-- 原数据导入-->
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
          <el-button type="success" size="small" @click="peerAddFormList()">同级新增</el-button>
        </div>
        <!-- 下级新增-->
        <div>
          <el-button type="success" size="small" @click="juniorAddFormList()">下级新增</el-button>
        </div>
        <!-- 历史数据回退-->
        <div>
          <el-button type="warning" size="small">历史数据回退</el-button>
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
        <!--隐藏一列 -->
        <div class="line">
          <div class="lineName" @click="showHide">
            隐藏当前列
            <i class="el-icon-caret-bottom icon" v-show="! lineHide"></i>
            <i class="el-icon-caret-top icon" v-show="lineHide"></i>
          </div>
          <div class="lineBox" v-show="lineHide" @mouseleave="lineHide=false">
            <ul>
              <li>
                <el-checkbox-group v-model="checkAll" v-for="(list,index) in columns" :key="list.dataIndex">
                  <el-checkbox :label="list.dataIndex" @change="lineCheck">{{list.text}}</el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 表格-->
      <div>
        <tree-grid :columns="newColumns" :tree-structure="true" :data-source="dataSource"></tree-grid>
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
              <el-form-item v-for="(list,index) in columns" :label="list.text" :key="list.dataIndex" :prop="peerAddFormLabel[list.dataIndex]">
                <el-input v-model="peerAddFormLabel[list.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="peerAdd = false">取 消</el-button>
              <el-button type="primary" @click="peerFormTrue()">确 定</el-button>
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
              <el-form-item v-for="(list,index) in columns" :label="list.text" :key="list.dataIndex" :prop="juniorAddFormLabel[list.dataIndex]">
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
  import TreeGrid from "../../common/treenTable/composite.vue"
  export default{
          components:{
            TreeGrid
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
            //        隐藏一列
                    lineHide:false,
                    checkAll:[],
                    newColumns:[],
                    //        下级新增
                    juniorAdd:false,
                    juniorAddFormLabel: {},
                    juniorList:{
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
                        listUnitPrice:"",
                        amount:"",
                        bidPrice:"",
                        drawingQuantity:"",
                        drawingValue:"",
                        figureNo:"",
                        quantityDifference:"",
                        priceDifference:"",
                        compilingPersonnel:"",
                        compilationDate:"",
                        keyProcess:""
                    },
            //        同级新增
                    peerAdd:false,
                    labelPosition: 'right',
                    peerAddFormLabel: {},
                    peerList:{
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
                      listUnitPrice:"",
                      amount:"",
                      bidPrice:"",
                      drawingQuantity:"",
                      drawingValue:"",
                      figureNo:"",
                      quantityDifference:"",
                      priceDifference:"",
                      compilingPersonnel:"",
                      compilationDate:"",
                      keyProcess:""
                    },
            //        数据导入
                    fileList:[],
            //      搜索
                    search:'',
            //        表头
                    columns: [
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
                        text:'清单单价',
                        dataIndex:'listUnitPrice'
                      },
                      {
                        text:'中标清单数量',
                        dataIndex:'amount'
                      },
                      {
                        text:'中标清单合价',
                        dataIndex:'bidPrice'
                      },
                      {
                        text:'图纸数量',
                        dataIndex:'drawingQuantity'
                      },
                      {
                        text:'图纸合价',
                        dataIndex:'drawingValue'
                      },
                      {
                        text:'图号',
                        dataIndex:'figureNo'
                      },
                      {
                        text:'清单数量与图纸数量差值',
                        dataIndex:'quantityDifference'
                      },
                      {
                        text:'清单合价与图纸合价差值',
                        dataIndex:'priceDifference'
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
            //        Tbody
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
                        listUnitPrice:"21212",
                        amount:"5454",
                        bidPrice:"9541",
                        drawingQuantity:"01",
                        drawingValue:"212",
                        figureNo:"989",
                        quantityDifference:"2212",
                        priceDifference:"9897",
                        compilingPersonnel:"张敏",
                        compilationDate:"2017-10-1",
                        keyProcess:"",
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
                            listUnitPrice:"21212",
                            amount:"5454",
                            bidPrice:"9541",
                            drawingQuantity:"01",
                            drawingValue:"212",
                            figureNo:"989",
                            quantityDifference:"2212",
                            priceDifference:"9897",
                            compilingPersonnel:"张敏",
                            compilationDate:"2017-10-1",
                            keyProcess:""
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
                        listUnitPrice:"21212",
                        amount:"5454",
                        bidPrice:"9541",
                        drawingQuantity:"01",
                        drawingValue:"212",
                        figureNo:"989",
                        quantityDifference:"2212",
                        priceDifference:"9897",
                        compilingPersonnel:"张敏",
                        compilationDate:"2017-10-1",
                        keyProcess:"",
                        children:[
                          {
                            id:4,
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
                            listUnitPrice:"21212",
                            amount:"5454",
                            bidPrice:"9541",
                            drawingQuantity:"01",
                            drawingValue:"212",
                            figureNo:"989",
                            quantityDifference:"2212",
                            priceDifference:"9897",
                            compilingPersonnel:"张敏",
                            compilationDate:"2017-10-1",
                            keyProcess:"",
                          }
                        ]
                      }
                    ],
                }
          },
          methods:{
        //    隐藏一列
              showHide(){
                    this.lineHide=true
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
              juniorAddFormList(){
                    this.juniorAddFormLabel=this.juniorList
                    this.juniorAdd=true
              },
              juniorAddTrue(){
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
              peerAddFormList(){
                    this.peerAddFormLabel=this.peerList
                    this.peerAdd=true
              },
              peerFormTrue(){
                    this.peerAdd=false
              },
        //    搜索
              handleIconClick(ev) {
                  console.log(ev);
              },
              //    数据导入
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
        .operation{
          margin:30px 0 30px 0;
          display:flex;
        }
        .operation>div{
          margin-left:30px;
        }
      /*隐藏一列*/
        .lineName{
          border:1px solid #BFCBD9;
          width:200px;
          height:36px;
          text-align:center;
          line-height: 36px;
          box-sizing: border-box;
          border-radius: 5px;
          color:#97A8BE;
        }
        .icon{
          margin-left: 10px;
        }
        .lineBox ul{
          list-style: none;
        }
        .lineBox{
          border:1px solid #BFCBD9;
          box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
          width:200px;
          border-radius:5px;
          box-sizing: border-box;
          padding:5px 0 5px 10px;
          background: #fff;
          position:absolute;
          top:40px;
          z-index: 100;
          overflow: auto;
        }
        .line{
          position:relative;
        }
</style>
