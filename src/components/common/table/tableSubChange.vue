<template>
  <div>
    <div class="line">
      <div class="lineHeader" @click="clickTable()">
        隐藏当前列
        <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
        <i class="el-icon-caret-top icon" v-show="isHide"></i>
      </div>
      <div class="lineBox" v-show="isHide" @mouseleave="mouseleaveTable()">
        <ul>
          <li>
            <el-checkbox-group v-model="checkList" v-for="(list,index) in columns" :key="list.dataIndex">
            <el-checkbox :label="list.dataIndex" @change="changeLine">{{list.text}}</el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
    </div>
    <el-table
            :data="subChangeData"
            border
            style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column v-for="(column,index) in newColumns" :label="column.text" :key="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          <span v-if="column.dataIndex !='teamName'">{{scope.row[column.dataIndex]}}</span>
          <!--分包队伍-->
          <span v-if="column.dataIndex =='teamName'">
               <el-select v-model="scope.row.teamName" placeholder="请选择">
                 <el-option
                     v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                 </el-option>
               </el-select>
          </span>
          <!--原文件导入-->
          <a v-if="column.dataIndex=='originalDoc' && scope.row[column.dataIndex]==''" @click="originalDocHandle">{{originalDoc}}</a>
          <!--变更文件导入-->
          <a v-if="column.dataIndex=='changeDoc' && scope.row[column.dataIndex]==''" @click="changeDocHandle">{{changeDoc}}</a>
          <!--变更后补充协议-->
          <a v-if="column.dataIndex=='supplement' && scope.row[column.dataIndex]==''" @click="changeDocHandle">{{supplement}}</a>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130" fixed="right">
        <template scope="scope">
          <el-button type="warning" @click='editMaskShow(scope.row,scope.$index)' size="small">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row,scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
    export default {
        data() {
            return {
//              隐藏一列
              isHide:false,
              checkList:[],
              newColumns:[],
              options:[
                    {
                        label:"一队伍",
                        value:"一队伍"
                    },
                    {
                        label:"二队伍",
                        value:"二队伍"
                    },
                    {
                        label:"三队伍",
                        value:"三队伍"
                    },
                ],
              teamNameValue:"",
                originalDoc:"原文件导入",
                changeDoc:"变更文件导入",
                supplement:"协议导入",
//              表头
                columns:[
                  {
                    text:"合同编码",
                    dataIndex:"contractOrder"
                  },
                  {
                    text:"合同名称",
                    dataIndex:"contractName"
                  },
                  {
                    text:"队伍名称",
                    dataIndex:"teamName"
                  },
                  {
                    text:"分包商名称",
                    dataIndex:"subconractorName"
                  },
                  {
                    text:"分包类别",
                    dataIndex:"packageClasses"
                  },
                  {
                    text:"工作内容",
                    dataIndex:"workContent"
                  },
                  {
                    text:"变更内容",
                    dataIndex:"changeContent"
                  },
                  {
                    text:"合同单价",
                    dataIndex:"compactPrice"
                  },
                  {
                    text:"变更单价",
                    dataIndex:"changePrice"
                  },
                  {
                    text:"变更金额",
                    dataIndex:"changeSum"
                  },
                  {
                    text:"合同暂时金额",
                    dataIndex:"compactMomentNum"
                  },
                  {
                    text:"变更日期",
                    dataIndex:"changeDate"
                  },
                  {
                    text:"原文件",
                    dataIndex:"originalDoc"
                  },
                  {
                    text:"变更文件",
                    dataIndex:"changeDoc"
                  },
                  {
                    text:"编制人",
                    dataIndex:"originator"
                  },
                  {
                    text:"编制日期",
                    dataIndex:"compileDate"
                  },
                  {
                    text:"变更后补充协议",
                    dataIndex:"supplement"
                  },
                  {
                    text:"备注",
                    dataIndex:"remark"
                  },
                ],
                subChangeData: [
                    {
                        contractOrder: 'K01-234512',
                        contractName: '内蒙铁道部分部',
                        teamName:'一分队',
                        subconractorName: '分包商****',
                        packageClasses:'a类别--铁路',
                        workContent:'赫尔本图到希格拉里路段',
                        changeContent:"D",
                        compactPrice:'12345.02145',
                        changePrice:"12488.12",
                        changeSum:'233444',
                        compactMomentNum:'43434',
                        changeDate:'2016-05-02',
                        originalDoc:'',
                        changeDoc:'',
                        originator:"赫赫",
                        compileDate:'2016-05-02',
                        supplement:"",
                        remark:'$$$$##@#'

                    },
                    {
                        contractOrder: 'K01-234512',
                        contractName: '内蒙铁道部分部',
                        teamName:'一分队',
                        subconractorName: '分包商****',
                        packageClasses:'a类别--铁路',
                        workContent:'赫尔本图到希格拉里路段',
                        changeContent:"D",
                        compactPrice:'12345.02145',
                        changePrice:"12488.12",
                        changeSum:'233444',
                        compactMomentNum:'43434',
                        changeDate:'2016-05-02',
                        originalDoc:'ewdsdf',
                        changeDoc:'rr',
                        originator:"赫赫",
                        compileDate:'2016-05-02',
                        supplement:"",
                        remark:'$$$$##@#'

                    },
                    {
                        contractOrder: 'K01-234512',
                        contractName: '内蒙铁道部分部',
                        teamName:'一分队',
                        subconractorName: '分包商****',
                        packageClasses:'a类别--铁路',
                        workContent:'赫尔本图到希格拉里路段',
                        changeContent:"D",
                        compactPrice:'12345.02145',
                        changePrice:"12488.12",
                        changeSum:'233444',
                        compactMomentNum:'43434',
                        changeDate:'2016-05-02',
                        originalDoc:'ewdsdf',
                        changeDoc:'rr',
                        originator:"赫赫",
                        compileDate:'2016-05-02',
                        supplement:"",
                        remark:'$$$$##@#'

                    },
                    {
                        contractOrder: 'K01-234512',
                        contractName: '内蒙铁道部分部',
                        teamName:'一分队',
                        subconractorName: '分包商****',
                        packageClasses:'a类别--铁路',
                        workContent:'赫尔本图到希格拉里路段',
                        changeContent:"D",
                        compactPrice:'12345.02145',
                        changePrice:"12488.12",
                        changeSum:'233444',
                        compactMomentNum:'43434',
                        changeDate:'2016-05-02',
                        originalDoc:'ewdsdf',
                        changeDoc:'rr',
                        originator:"赫赫",
                        compileDate:'2016-05-02',
                        supplement:"",
                        remark:'$$$$##@#'
                    }
                    ],
                multipleSelection: []
            }
        },
        computed:{
          lineList(){
            return  this.columns.map((item,index)=>{
                return item.dataIndex;
            })
          }
        },
        mounted(){
            this.newColumns=this.columns;
            this.checkList=this.lineList;
        },
        methods: {
//          隐藏一列
          clickTable(){
            this.isHide=!this.isHide;
          },
          mouseleaveTable(){
            this.isHide=false;
          },
          changeLine(){
            this.newColumns=[];
            this.columns.forEach((item,index)=>{
              this.checkList.forEach((value,data)=>{
                if(value==item.dataIndex){
                  this.newColumns.push(item)
                }
              })
            })
          },
          toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
          handleSelectionChange(val) {
                this.multipleSelection = val;
            },
//            原文件导入
          originalDocHandle(){
              this.$emit('changeDialog',true);
          },
//            变更文件导入
          changeDocHandle(){

          },
//            删除
          handleDelete(row,index){
              console.log(row,index);
              let self = this;
              self.$message({
                  type: 'success',
                  message: '删除数据：'+self.subChangeData[index].contractOrder+' 成功！'
              });
              self.subChangeData.splice(index,1);
    },
   }
    }
</script>

<style scoped>
/*隐藏一列*/
  .line{
    margin-bottom: 10px;
    position: relative;
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
.el-table__row td .cell a{
  color: #e03b2a;
}
</style>
