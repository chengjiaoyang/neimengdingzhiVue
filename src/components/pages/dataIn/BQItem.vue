<template>
    <div class="BQItem">
      <!-- 页面操作导航-->
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
          <el-button type="success" size="small" @click="peerAddForm()">同级新增</el-button>
        </div>
        <!-- 下级新增-->
        <div>
          <el-button type="success" size="small" @click="juniorAddForm()">下级新增</el-button>
        </div>
        <!-- 搜索-->
        <div>
          <el-input
            placeholder="输入关键字"
            icon="search"
            v-model="search"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <!-- 筛选列-->
        <div>
          <div class="line"  @click="showBox">
              隐藏当前列
            <i class="el-icon-caret-top icon"  v-show="isHide"></i>
            <i class="el-icon-caret-bottom icon"  v-show="!isHide"></i>
          </div>
          <div class="line-box" v-show="isHide" @mouseleave="showHide">
            <ul class="line-ul">
              <li>
                <el-checkbox-group v-model="checkAll" v-for="(list,index) in columns" :key="list.dataIndex">
                  <el-checkbox :label="list.dataIndex"   @change="handleCheckedCitiesChange">
                    <span class="line-span">
                      {{list.text}}
                    </span>
                  </el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--表格-->
      <div>
        <tree-grid :columns="newColumn" :tree-structure="true" :data-source="dataSource"></tree-grid>
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
              <el-form-item v-for="(data,index) in columns" :key="data.dataIndex" :label="data.text" :prop="peerAddFormLabel[data.dataIndex]">
                <el-input v-model="peerAddFormLabel[data.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="peerAdd = false">取 消</el-button>
              <el-button type="primary" @click="peerAddFormList()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 下级新增-->
        <div class="junior">
          <el-dialog
            title="同级新增"
            :visible.sync="juniorAdd"
            size="small"
            :before-close="juniorAddHandleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="juniorAddFormLabel">
              <el-form-item v-for="(data,index) in columns" :label="data.text" :key="data.dataIndex" :prop="juniorAddFormLabel[data.dataIndex]">
                <el-input v-model="juniorAddFormLabel[data.dataIndex]"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="juniorAdd = false">取 消</el-button>
              <el-button type="primary" @click="juniorAddFormList()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script>
  import TreeGrid from "../../common/treenTable/BQltemTreen.vue"
  export default{
    components:{
      TreeGrid,
    },
    data(){
      return{
//        隐藏列
        checkAll:[],
        newColumn:[],
        isHide:false,
//        下级新增
        juniorAdd:false,
        juniorAddFormLabel: {},
        juniorAddList:{
              order: "",
              detail: "",
              detailName:"",
              pileNum: "",
              stopNum: "",
              structuralStyle: "",
              subsectionName: "",
              subitemname:"",
              position:"",
              specificLocation:"",
              company:"",
              drawingQuantity:"",
              drawingPosition:"",
              remarks:"",
              compilingPersonnel:"",
              compilationDate:"",
              keyProcess:""
        },
//        同级新增
        peerAdd:false,
        labelPosition: 'right',
        peerAddFormLabel: {},
        peerAddList:{
          order: "",
          detail: "",
          detailName:"",
          pileNum: "",
          stopNum: "",
          structuralStyle: "",
          subsectionName: "",
          subitemname:"",
          position:"",
          specificLocation:"",
          company:"",
          drawingQuantity:"",
          drawingPosition:"",
          remarks:"",
          compilingPersonnel:"",
          compilationDate:"",
          keyProcess:""
        },
//        搜索
        search: '',
//        数据导入
        fileList:[],
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
            text:'结构形式',
            dataIndex:'structuralStyle'
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
            text:'图纸数量',
            dataIndex:'drawingQuantity'
          },
          {
            text:'图纸位置',
            dataIndex:'drawingPosition'
          },
          {
            text:'备注',
            dataIndex:'remarks'
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
        dataSource:[
          {
            id:1,
            parentId:0,
            edit:"false",
            order: "01",
            detail: "01",
            detailName:"道路建设",
            pileNum: "中铁一局建设",
            stopNum: "1",
            structuralStyle: "1",
            subsectionName: "结构形式",
            subitemname:"技术部",
            position:"某某",
            specificLocation:"桩基",
            company:"道路绿化",
            drawingQuantity:"中铁十局",
            drawingPosition:"10",
            remarks:"无",
            compilingPersonnel:"李晓娜",
            compilationDate:"2017-10-1",
            keyProcess:"关键工序",
            children:[
              {
                id:2,
                parentId:0,
                edit:"false",
                order: "02",
                detail: "02",
                detailName:"道路建设",
                pileNum: "中铁一局建设",
                stopNum: "1",
                structuralStyle: "1",
                subsectionName: "结构形式",
                subitemname:"技术部",
                position:"某某",
                specificLocation:"桩基",
                company:"道路绿化",
                drawingQuantity:"中铁十局",
                drawingPosition:"10",
                remarks:"无",
                compilingPersonnel:"李晓娜",
                compilationDate:"2017-10-1",
                keyProcess:"关键工序",
              }
            ]
          },
          {
            id:3,
            parentId:0,
            edit:"false",
            order: "03",
            detail: "03",
            detailName:"道路建设",
            pileNum: "中铁一局建设",
            stopNum: "1",
            structuralStyle: "1",
            subsectionName: "结构形式",
            subitemname:"技术部",
            position:"某某",
            specificLocation:"桩基",
            company:"道路绿化",
            drawingQuantity:"中铁十局",
            drawingPosition:"10",
            remarks:"无",
            compilingPersonnel:"李晓娜",
            compilationDate:"2017-10-1",
            keyProcess:"关键工序",
            children:[
              {
                id:4,
                parentId:0,
                edit:"false",
                order: "04",
                detail: "04",
                detailName:"道路建设",
                pileNum: "中铁一局建设",
                stopNum: "1",
                structuralStyle: "1",
                subsectionName: "结构形式",
                subitemname:"技术部",
                position:"某某",
                specificLocation:"桩基",
                company:"道路绿化",
                drawingQuantity:"中铁十局",
                drawingPosition:"10",
                remarks:"无",
                compilingPersonnel:"李晓娜",
                compilationDate:"2017-10-1",
                keyProcess:"关键工序",
              }
            ]
          },
          {
            id:5,
            parentId:0,
            edit:"false",
            order: "05",
            detail: "05",
            detailName:"道路建设",
            pileNum: "中铁一局建设",
            stopNum: "1",
            structuralStyle: "1",
            subsectionName: "结构形式",
            subitemname:"技术部",
            position:"某某",
            specificLocation:"桩基",
            company:"道路绿化",
            drawingQuantity:"中铁十局",
            drawingPosition:"10",
            remarks:"无",
            compilingPersonnel:"李晓娜",
            compilationDate:"2017-10-1",
            keyProcess:"关键工序",
            children:[
              {
                id:6,
                parentId:0,
                edit:"false",
                order: "06",
                detail: "06",
                detailName:"道路建设",
                pileNum: "中铁一局建设",
                stopNum: "1",
                structuralStyle: "1",
                subsectionName: "结构形式",
                subitemname:"技术部",
                position:"某某",
                specificLocation:"桩基",
                company:"道路绿化",
                drawingQuantity:"中铁十局",
                drawingPosition:"10",
                remarks:"无",
                compilingPersonnel:"李晓娜",
                compilationDate:"2017-10-1",
                keyProcess:"关键工序",
                children:[
                  {
                    id:7,
                    parentId:0,
                    edit:"false",
                    order: "07",
                    detail: "07",
                    detailName:"道路建设",
                    pileNum: "中铁一局建设",
                    stopNum: "1",
                    structuralStyle: "1",
                    subsectionName: "结构形式",
                    subitemname:"技术部",
                    position:"某某",
                    specificLocation:"桩基",
                    company:"道路绿化",
                    drawingQuantity:"中铁十局",
                    drawingPosition:"10",
                    remarks:"无",
                    compilingPersonnel:"李晓娜",
                    compilationDate:"2017-10-1",
                    keyProcess:"关键工序",
                  }
                ]
              }
            ]
          }
        ],
      }
  },
  computed:{
//    隐藏列
    theadArr() {
      return this.columns.map((item, index) => {
          return item.dataIndex;
    });
  }
  },
  methods:{
    //    隐藏列
        showBox:function(){
          this.isHide=! this.isHide
        },
        showHide:function(){
          this.isHide=false
        },
        handleCheckedCitiesChange(value) {
          console.log(this.checkAll)
          this.newColumn=[];
          this.columns.forEach((item,index) =>{
            this.checkAll.forEach((val,ind) =>{
            if (val ==item.dataIndex){
            this.newColumn.push(item);
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
          this.juniorAddFormLabel=this.juniorAddList;
          this.juniorAdd=true
        },
        juniorAddFormList(){
            this.juniorAdd=false
            console.log(this.juniorAddFormLabel)
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
              this.peerAddFormLabel=this.peerAddList
              this.peerAdd=true
        },
        peerAddFormList(){
              this.peerAdd=false;
              console.log(this.peerAddFormLabel)
        },
//  搜索
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
  },
  mounted(){
//          初始化checkboxVal
    this.checkAll = this.theadArr;
    this.newColumn = this.columns;
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
  /*筛选列*/
  .line{
    border:1px solid #BFCBD9;
    background: #fff;
    width:200px;
    height:35px;
    text-align: center;
    line-height:35px;
    border-radius: 5px;
    color:#97A8BE;
    position:relative;
  }
  .icon{
    margin-left: 10px;
  }
  .line-box{
    border:1px solid #BFCBD9;
    width:200px;
    height:300px;
    padding-left:40px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    overflow: auto;
    position:absolute;
    top:142px;
    z-index: 100;
  }
  .line-ul{
    list-style: none;
  }
  .line-span{
    margin-left: 15px;
  }
</style>
