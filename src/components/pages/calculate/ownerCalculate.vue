<template>
  <div class="ownerCalculate">
    <!-- 导航操作-->
    <div class="operation">
      <!-- 隐藏一列-->
      <!-- 隐藏一列-->
      <div class="line">
        <div class="line-header" @click="showClick">
          隐藏当前列
          <i class="el-icon-caret-bottom icon" v-show="! isShow"></i>
          <i class="el-icon-caret-top icon" v-show="isShow"></i>
        </div>
        <div class="lineBox" v-show="isShow">
          <ul>
            <li>
              <el-checkbox-group v-model="showList" v-for="(dataList,index) in columnsData" :key="dataList.dataIndex">
                <el-checkbox :label="dataList.dataIndex" @change="dataListChange">{{dataList.text}}</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </div>
      </div>
      <!-- 结算日期-->
      <div>
        <el-select v-model="value" placeholder="请选择结算日期">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <!-- 显示当前日期数据-->
      <div class="radio">
        <el-radio class="radio" v-model="radio" label="2">显示当前日期数据</el-radio>
      </div>
      <!-- 开始日期-->
      <div>
        <el-date-picker
          v-model="start"
          type="date"
          placeholder="选择开始日期"
          :picker-options="startDate">
        </el-date-picker>
      </div>
      <!-- 结束日期-->
      <div>
        <el-date-picker
          v-model="over"
          type="date"
          placeholder="选择日期"
          :picker-options="overDate">
        </el-date-picker>
      </div>
      <!-- 查询-->
      <div>
        <el-button type="primary" icon="search" size="small">查询</el-button>
      </div>
    </div>
    <!-- 表格-->
    <div>
        <tree-gird :columns="newColumnsData" :tree-structure="true" :data-source="dataSource"></tree-gird>
    </div>
  </div>
</template>
<script>
  import TreeGird from '../../common/treenTable/ownerCalculateTree.vue'
  export default{
    components:{
      TreeGird,
    },
    data(){
      return{
        //        隐藏一列、
        isShow:false,
        showList:[],
        newColumnsData:[],
        //    主体表头
        columnsData:[
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
            text:'完成数量',
            dataIndex:'completedQuantity'
          },
          {
            text:'完成产值',
            dataIndex:'completedOutputValue'
          },
          {
            text:'本期申报',
            dataIndex:'currentDeclaration'
          },
          {
            text:'本期核准',
            dataIndex:'approvalOfThisIssue'
          },
          {
            text:'中期支付',
            dataIndex:'interimPayment'
          },
          {
            text:'批复文件',
            dataIndex:'writtenReplyDocument'
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
            order:1,
            detail:1,
            detailName:"桥梁涵洞",
            pileNum:34567,
            stopNum:76543,
            subsectionName:"上海铁路建设一局",
            subitemname:"上海铁路建设一局桥梁涵洞",
            structuralStyle:400,
            length:300,
            bridgeLength:400,
            structureWidth:300,
            position:"桥梁涵洞",
            specificLocation:"上海到杭州",
            company:"上海铁路建设一局",
            completedQuantity:3456789,
            completedOutputValue:867543,
            currentDeclaration:23455,
            approvalOfThisIssue:65756857,
            interimPayment:2354236,
            writtenReplyDocument:"桥梁建筑",
            compilingPersonnel:"周星驰",
            compilationDate:"2017-10-1",
            keyProcess:"一般工序",
              children:[
                    {
                      id:2,
                      parentId:0,
                      edit:"false",
                      order:1,
                      detail:2,
                      detailName:"桥梁涵洞",
                      pileNum:34567,
                      stopNum:76543,
                      subsectionName:"上海铁路建设一局",
                      subitemname:"上海铁路建设一局桥梁涵洞",
                      structuralStyle:400,
                      length:300,
                      bridgeLength:400,
                      structureWidth:300,
                      position:"桥梁涵洞",
                      specificLocation:"上海到杭州",
                      company:"上海铁路建设一局",
                      completedQuantity:3456789,
                      completedOutputValue:867543,
                      currentDeclaration:23455,
                      approvalOfThisIssue:65756857,
                      interimPayment:2354236,
                      writtenReplyDocument:"桥梁建筑",
                      compilingPersonnel:"周润发",
                      compilationDate:"2017-10-1",
                      keyProcess:"一般工序",
                      children:[
                        {
                          id:3,
                          parentId:0,
                          edit:"false",
                          order:1,
                          detail:3,
                          detailName:"桥梁涵洞",
                          pileNum:34567,
                          stopNum:76543,
                          subsectionName:"上海铁路建设一局",
                          subitemname:"上海铁路建设一局桥梁涵洞",
                          structuralStyle:400,
                          length:300,
                          bridgeLength:400,
                          structureWidth:300,
                          position:"桥梁涵洞",
                          specificLocation:"上海到杭州",
                          company:"上海铁路建设一局",
                          completedQuantity:3456789,
                          completedOutputValue:867543,
                          currentDeclaration:23455,
                          approvalOfThisIssue:65756857,
                          interimPayment:2354236,
                          writtenReplyDocument:"桥梁建筑",
                          compilingPersonnel:"周星星",
                          compilationDate:"2017-10-1",
                          keyProcess:"一般工序"
                        }
                      ]
                    }
                 ]
          },
          {
            id:4,
            parentId:0,
            edit:"false",
            order:1,
            detail:4,
            detailName:"桥梁涵洞",
            pileNum:34567,
            stopNum:76543,
            subsectionName:"上海铁路建设一局",
            subitemname:"上海铁路建设一局桥梁涵洞",
            structuralStyle:400,
            length:300,
            bridgeLength:400,
            structureWidth:300,
            position:"桥梁涵洞",
            specificLocation:"上海到杭州",
            company:"上海铁路建设一局",
            completedQuantity:3456789,
            completedOutputValue:867543,
            currentDeclaration:23455,
            approvalOfThisIssue:65756857,
            interimPayment:2354236,
            writtenReplyDocument:"桥梁建筑",
            compilingPersonnel:"周星驰",
            compilationDate:"2017-10-1",
            keyProcess:"一般工序",
            children:[
              {
                id:5,
                parentId:0,
                edit:"false",
                order:1,
                detail:5,
                detailName:"桥梁涵洞",
                pileNum:34567,
                stopNum:76543,
                subsectionName:"上海铁路建设一局",
                subitemname:"上海铁路建设一局桥梁涵洞",
                structuralStyle:400,
                length:300,
                bridgeLength:400,
                structureWidth:300,
                position:"桥梁涵洞",
                specificLocation:"上海到杭州",
                company:"上海铁路建设一局",
                completedQuantity:3456789,
                completedOutputValue:867543,
                currentDeclaration:23455,
                approvalOfThisIssue:65756857,
                interimPayment:2354236,
                writtenReplyDocument:"桥梁建筑",
                compilingPersonnel:"周星驰",
                compilationDate:"2017-10-1",
                keyProcess:"一般工序"
              }
            ]
          },
          {
            id:6,
            parentId:0,
            edit:"false",
            order:1,
            detail:6,
            detailName:"桥梁涵洞",
            pileNum:34567,
            stopNum:76543,
            subsectionName:"上海铁路建设一局",
            subitemname:"上海铁路建设一局桥梁涵洞",
            structuralStyle:400,
            length:300,
            bridgeLength:400,
            structureWidth:300,
            position:"桥梁涵洞",
            specificLocation:"上海到杭州",
            company:"上海铁路建设一局",
            completedQuantity:3456789,
            completedOutputValue:867543,
            currentDeclaration:23455,
            approvalOfThisIssue:65756857,
            interimPayment:2354236,
            writtenReplyDocument:"桥梁建筑",
            compilingPersonnel:"周慧敏",
            compilationDate:"2017-10-1",
            keyProcess:"一般工序"
          }
        ],
//        开始日期
        startDate: {
          disabledDate(time){
              return time.getTime() < Date.now() - 8.64e7;
            }
        },
        start:'',
//        结束日期
        overDate: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        over:'',
//        显示当前数据的单选框
        radio: '1',
//        结算日期
        options: [
          {
            value: '日期',
            label: '2017-10-1'
          },
          {
            value: '日期2',
            label: '2016-10-1'
          },
          {
            value: '日期3',
            label: '2015-10-1'
          },
        ],
        value: ''
      }
    },
    computed:{
      listDataShow(){
        return this.columnsData.map((item,index)=>{
            return item.dataIndex
          })
      }
    },
    methods:{
      //    隐藏一列
      showClick(){
        this.isShow=!this.isShow
      },
      dataListChange(value){
        this.newColumnsData=[];
        console.log(this.showList)
        this.columnsData.forEach((item,index)=>{
          this.showList.forEach((val,ind)=>{
              if(val==item.dataIndex){
                  this.newColumnsData.push(item)
          }
        })
        })
      }
    },
  mounted(){
    this.showList=this.listDataShow
    this.newColumnsData=this.columnsData
  }
  }
</script>
<style scoped>
    .operation{
      display: flex;
      margin: 30px 0 30px 0;
    }
    .operation>div{
      margin-left: 30px;
    }
    .radio{
      margin-top: 3px;
    }
    /*隐藏一列*/
    .line-header{
      border:1px solid #BFCBD9;
      width:200px;
      height:36px;
      border-radius: 5px;
      box-sizing: border-box;
      text-align: center;
      line-height: 36px;
      color:#97B0D5;
    }
    .icon{
      margin-left: 10px;
    }
    .line{
      position:relative;
    }
    .lineBox{
      width:200px;
      height:300px;
      border-radius: 5px;
      background: #fff;
      box-sizing: border-box;
      overflow: auto;
      border:1px solid #BFCBD9;
      padding:5px 0 0 10px;
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      position:absolute;
      top:40px;
      z-index: 100;
    }
</style>
