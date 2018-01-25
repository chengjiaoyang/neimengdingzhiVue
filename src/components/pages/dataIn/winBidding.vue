<template>
  <div class="winBidding">
    <!-- 头部操作-->
    <div id="operation">
      <!-- 原数据导入-->
      <div class="inc">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          >
          <el-button size="small" type="primary">导入原数据</el-button>
        </el-upload>
      </div>
      <!--同级新增 -->
      <div class="addPeer">
        <el-button type="success" size="small" @click="peerAddTable()">同级新增</el-button>
      </div>
      <!--下级新增 -->
      <div class="addSubordinate">
        <el-button type="success" size="small" @click="juniorAddTable()">下级新增</el-button>
      </div>
      <!-- 查询-->
      <div class="search">
        <el-input
          placeholder="请输入关键字"
          icon="search"
          v-model="search"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
      <!-- 隐藏列-->
      <div class="line">
        <div class="hideLine" @click="lineData">
          隐藏当前列
          <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
          <i class="el-icon-caret-top icon" v-show="isHide"></i>
        </div>
        <div class="hideLineBox" v-show="isHide" @mouseleave="showHide">
          <ul>
            <li>
              <el-checkbox-group v-model="listDataHide" v-for="(list,index) in columns" :key="list.dataIndex">
                <el-checkbox :label="list.dataIndex" @change="changeList">
                  <span class="line-text">{{list.text}}</span>
                </el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--表格-->
    <div class="table-tree">
      <tree-grid :columns="newListData" :tree-structure="true" :data-source="dataSource"  :peerAddFormLabel="peerAddFormLabel"></tree-grid>
    </div>
    <!--新增 弹出框-->
    <div>
      <!--同级新增弹出框 -->
      <div class="peer">
        <el-dialog
          title="同级新增"
          :visible.sync="peerAdd"
          size="tiny"
          :before-close="peerAddHandleClose">
          <el-form :label-position="labelPosition" label-width="80px" :model="peerAddFormLabel"  :inline="true" >
            <el-form-item v-for="(data,index) in columns" :key="data.dataIndex" :label="data.text" :prop="peerAddFormLabel[data.dataIndex]">
              <el-input v-model="peerAddFormLabel[data.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="peerAdd = false">取 消</el-button>
              <el-button type="primary" @click="peerAddFrom()">确 定</el-button>
            </span>
        </el-dialog>
      </div>
      <!-- 下级新增弹出框-->
      <div class="junior">
        <el-dialog
          title="下级新增"
          :visible.sync="juniorAdd"
          size="tiny"
          :before-close="juniorHandleClose">
          <el-form :label-position="labelPosition" label-width="80px" :model="juniorAddFormLabel"  :inline="true" >
            <el-form-item v-for="(data,index) in columns" :label="data.text" :key="data.dataIndex" :prop="juniorAddFormLabel[data.dataIndex]">
              <el-input v-model="juniorAddFormLabel[data.dataIndex]"></el-input>
            </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="juniorAdd = false">取 消</el-button>
              <el-button type="primary" @click="juniorAddForm()">确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import TreeGrid from '../../common/treenTable/winBiddingTreen.vue'
  export default{
    components:{
      TreeGrid,
    },
    data(){
          return{
          //        隐藏列
                isHide:false,
                listDataHide:[],
                newListData:[],
          //        下级新增
                juniorAdd:false,
                juniorAddFormLabel:{},
          //        同级新增
                peerAdd:false,
                labelPosition: 'right',
                peerAddFormLabel: {},
          //        文件导入
                fileList: [
                  {
                    name: 'food.jpeg',
                    url: ''
                  },
                  {
                    name: 'food2.jpeg',
                    url: ''
                  }
                ],
          //        搜索
                search:'',
                multipleSelection: [],
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
                    text:'单位',
                    dataIndex:'units'
                  },
                  {
                    text:'数量',
                    dataIndex:'amount'
                  },
                  {
                    text:'单价',
                    dataIndex:'univalence'
                  },
                  {
                    text:'合价',
                    dataIndex:'price'
                  },
                  {
                    text:'备注',
                    dataIndex:'remark'
                  },
                  {
                    text:'编制人',
                    dataIndex:'author'
                  },
                  {
                    text:'编制日期',
                    dataIndex:'makeTime'
                  }
                ],
          //        Tbody
                dataSource:[
                  {
                    id:1,
                    parentId:0,
                    edit:"false",
                    order: "01",
                    detail: "01",
                    detailName:"道路建设",
                    units: "中铁一局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"李晓敏",
                    makeTime:"2017-10-1",
                    children:[{
                      id:2,
                      parentId:0,
                      edit:"false",
                      order: "02",
                      detail: "02",
                      detailName:"道路建设",
                      units: "中铁一局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"张晓娜",
                      makeTime:"2017-10-1"
                    }]
                  },
                  {
                    id:3,
                    parentId:0,
                    edit:"false",
                    order: "03",
                    detail: "03",
                    detailName:"桥梁建设",
                    units: "中铁一局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"张小米",
                    makeTime:"2017-10-1",
                    children:[{
                      id:4,
                      parentId:0,
                      edit:"false",
                      order: "04",
                      detail: "04",
                      detailName:"桥梁建设",
                      units: "中铁一局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"张小米",
                      makeTime:"2017-10-1"
                    }]
                  },
                  {
                    id:5,
                    parentId:0,
                    edit:"false",
                    order: "05",
                    detail: "05",
                    detailName:"道路绿化",
                    units: "中铁一局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"张晓娜",
                    makeTime:"2017-10-1",
                    children:[{
                      id:6,
                      parentId:0,
                      edit:"false",
                      order: "06",
                      detail: "06",
                      detailName:"道路绿化",
                      units: "中铁一局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"张晓娜",
                      makeTime:"2017-10-1"
                    }]
                  },
                  {
                    id:7,
                    parentId:0,
                    edit:"false",
                    order: "07",
                    detail: "07",
                    detailName:"道路绿化",
                    units: "中铁一局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"张晓娜",
                    makeTime:"2017-10-1",
                    children:[{
                      id:8,
                      parentId:0,
                      edit:"false",
                      order: "08",
                      detail: "08",
                      detailName:"道路绿化",
                      units: "中铁一局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"张晓娜",
                      makeTime:"2017-10-1"
                    }]
                  },
                  {
                    id:9,
                    parentId:0,
                    edit:"false",
                    order: "09",
                    detail: "09",
                    detailName:"道路绿化",
                    units: "中铁一局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"张晓娜",
                    makeTime:"2017-10-1"
                  },
                  {
                    id:10,
                    parentId:0,
                    edit:"false",
                    order: "11",
                    detail: "11",
                    detailName:"桥梁隧道",
                    units: "中铁十局建设",
                    amount: "256874",
                    univalence: "1526",
                    price: "5218563",
                    remark:"暂无",
                    author:"周杰伦",
                    makeTime:"2017-10-1",
                    children:[{
                      id:11,
                      parentId:0,
                      edit:"false",
                      order: "11",
                      detail: "11",
                      detailName:"桥梁隧道",
                      units: "中铁十局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"周杰伦",
                      makeTime:"2017-10-1"
                    }],
                    children:[{
                      id:12,
                      parentId:0,
                      edit:"false",
                      order: "11",
                      detail: "11",
                      detailName:"桥梁隧道",
                      units: "中铁十局建设",
                      amount: "256874",
                      univalence: "1526",
                      price: "5218563",
                      remark:"暂无",
                      author:"周杰伦",
                      makeTime:"2017-10-1",
                      children:[{
                        id:13,
                        parentId:0,
                        edit:"false",
                        order: "11",
                        detail: "11",
                        detailName:"桥梁隧道",
                        units: "中铁十局建设",
                        amount: "256874",
                        univalence: "1526",
                        price: "5218563",
                        remark:"暂无",
                        author:"周杰伦",
                        makeTime:"2017-10-1"
                      }]
                    }]
                  }
                ],
          }
  },
    computed:{
                tableLine(){
                    return this.columns.map((item,index)=>{
                        return item.dataIndex;
                });
              }
    },
    methods:{
            //      隐藏列
                showHide:function(){
                      this.isHide=false;
                },
                lineData:function(){
                      this.isHide=!this.isHide;
                },
                changeList(value){
                      this.newListData=[],
                      this.columns.forEach((item,index)=>{
                        this.listDataHide.forEach((val,dat)=>{
                        if(val==item.dataIndex){
                        this.newListData.push(item)
                      }
                    })
                  })
              },
              //      同级新增
              peerAddHandleClose(done) {
                      this.$confirm('确认关闭？')
                          .then(_ => {
                          done();
                      })
                      .catch(_ => {});
              },
              peerAddTable(){
                      this.peerAdd= true;
              },
              peerAddFrom(){
                      console.log(this.peerAddFormLabel)
                      this.peerAdd=false
              },
              //      下级新增
              juniorHandleClose(done) {
                      this.$confirm('确认关闭？')
                          .then(_ => {
                          done();
                       })
                      .catch(_ => {});
              },
              juniorAddTable(){
                      this.juniorAdd= true;
              },
              juniorAddForm(){
                      console.log(this.juniorAddFormLabel)
                      this.juniorAdd= false;
              },
              //      文件导入
              handleRemove(file, fileList) {
                      console.log(file, fileList);
              },
              handlePreview(file) {
                      console.log(file);
              },
              handleIconClick(ev) {
                      console.log(ev);
              }
    },
    mounted(){
              this.listDataHide=this.tableLine;
              this.newListData=this.columns;
    }
  }
</script>
<style scoped>
        .winBidding{
          margin-top:20px;
          padding:0 10px;
        }
        #operation{
          display: flex;
          margin-bottom:30px;
        }
        #operation>div{
          margin-left:30px;
        }
        /*隐藏列*/
        .hideLine{
          border:1px solid #BFCBD9;
          width:200px;
          height:36px;
          border-radius: 5px;
          box-sizing: border-box;
          line-height: 36px;
          text-align: center;
          color:#97A8BE;
        }
        .hideLineBox ul{
          list-style:none;
          border:1px solid #BFCBD9;
          width:200px;
          border-radius:5px;
          box-sizing: border-box;
          box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
          background: #fff;
          overflow: auto;
          padding-left:50px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .icon{
          margin-left: 10px;
        }
        .line-text{
          margin-left: 10px;
        }
        .line{
          position:relative;
        }
        .hideLineBox{
          position:absolute;
          top:40px;
          z-index: 100;
        }
</style>
