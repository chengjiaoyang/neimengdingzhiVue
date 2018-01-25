<template>
    <div class="userInfo">
      <div class="search">
        <div>
          <el-input
            placeholder="请输入关键词"
            icon="search"
            v-model="search"
            class="search-box"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <!-- 隐藏当前一列-->
        <div class="line">
          <div class="lineHeader" @click="showClick">
            隐藏当前一列
            <i class="el-icon-caret-bottom icon" v-show="! isHide"></i>
            <i class="el-icon-caret-top icon" v-show="isHide"></i>
          </div>
          <div class="lineBox" v-show="isHide" @mouseleave="showTable">
            <ul>
              <li>
                <el-checkbox-group v-model="checkList"  v-for="(data,index) in column" :key="data.dataIndex">
                  <el-checkbox :label="data.dataIndex" @change="changeList">{{data.text}}</el-checkbox>
                </el-checkbox-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <el-table :data="searchData" border style="width: 100%">
          <el-table-column v-for="(list,index) in newColumn" :key="list.dataIndex" :label="list.text" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row[list.dataIndex]}}
              </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
//        隐藏一列
        isHide:false,
        checkList:[],
        newColumn:[],
        search: '',
//        表格
        userInfoData: [
          {
            phone:"18931052525",
            name: "刘晓娜",
            gender: "女",
            ID: "13042585525454",
            qqNum: "121438585",
            mailbox: "121438585@qq.com",
            post: "技术员",
            department: "工程部",
            organizationStructure: "子分部",
            workingCondition:"在职",
            approachTime: "2017-2-10",
            leavingTime:"2017-2-10",
            subordinateItems: "中铁一局桥梁建筑",
            subordinateSector:"一分部",
            ownedContract: "桥梁建筑"
          },
          {
            phone:"18931052525",
            name: "刘晓娜",
            gender: "女",
            ID: "13042585525454",
            qqNum: "121438585",
            mailbox: "121438585@qq.com",
            post: "技术员",
            department: "工程部",
            organizationStructure: "子分部",
            workingCondition:"在职",
            approachTime: "2017-2-10",
            leavingTime:"2017-2-10",
            subordinateItems: "中铁一局桥梁建筑",
            subordinateSector:"一分部",
            ownedContract: "桥梁建筑"
          },
          {
            phone:"18931052525",
            name: "刘晓娜",
            gender: "女",
            ID: "13042585525454",
            qqNum: "121438585",
            mailbox: "121438585@qq.com",
            post: "技术员",
            department: "工程部",
            organizationStructure: "子分部",
            workingCondition:"在职",
            approachTime: "2017-2-10",
            leavingTime:"2017-2-10",
            subordinateItems: "中铁一局桥梁建筑",
            subordinateSector:"一分部",
            ownedContract: "桥梁建筑"
          }
        ],
        //      表头
        column:[
          {
            text:"手机号(账号)",
            dataIndex:"phone"
          },
          {
            text:"姓名",
            dataIndex:"name"
          },
          {
            text:"性别",
            dataIndex:"gender"
          },
          {
            text:"身份证",
            dataIndex:"ID"
          },
          {
            text:"QQ号码",
            dataIndex:"qqNum"
          },
          {
            text:"邮箱",
            dataIndex:"mailbox"
          },
          {
            text:"岗位",
            dataIndex:"post"
          },
          {
            text:"部门",
            dataIndex:"department"
          },
          {
            text:"组织结构",
            dataIndex:"organizationStructure"
          },
          {
            text:"工作状态",
            dataIndex:"workingCondition"
          },
          {
            text:"进场时间",
            dataIndex:"approachTime"
          },
          {
            text:"离场时间",
            dataIndex:"leavingTime"
          },
          {
            text:"所属项目",
            dataIndex:"subordinateItems"
          },
          {
            text:"所属分部",
            dataIndex:"subordinateSector"
          },
          {
            text:"所属合同",
            dataIndex:"ownedContract"
          },
        ],
      }
    },
    computed:{
//      搜索
      searchData:function(value,data){
        console.log(value,data)
        var box=this.search;
        if(box){
          return this.userInfoData.filter(function(userSearch){
            return Object.keys(userSearch).some(function(key){
              return String(userSearch[key]).toLowerCase().indexOf(box)>-1
            })
          })
        }
        return this.userInfoData
      },
      lineList(){
        return this.column.map((item,index)=>{
            return item.dataIndex
          })
      },
    },
    mounted(){
    this.newColumn=this.column;
    this.checkList=this.lineList
  },
    methods:{
//     隐藏一列
      showClick(){
        this.isHide=!this.isHide
      },
      showTable(){
        this.isHide=false
      },
      changeList(){
        this.newColumn=[];
        this.column.forEach((item,index)=>{
          this.checkList.forEach((value,index)=>{
            if(value==item.dataIndex){
              this.newColumn.push(item)
        }
        })
        })
      },
      handleIconClick(ev) {
        console.log(ev);
      },

    }
  }
</script>
<style scoped>
  .userInfo{
    margin-top: 20px;
    padding:0 10px;
  }
  .search-box{
    width:200px;
  }
  .search{
    margin-bottom: 30px;
    display: flex;
  }
  /*隐藏一列*/
  .lineHeader{
    width:200px;
    height:36px;
    line-height:36px;
    text-align: center;
    border:1px solid #BFCBD9;
    border-radius:5px;
    margin-left: 20px;
    color:#97A8BE;
  }
  .icon{
    margin-left:10px;
  }
  .line{
    position:relative;
  }
  .lineBox{
    width:200px;
    border:1px solid #BFCBD9;
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding:5px 0 5px 40px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    position:absolute;
    top:40px;
    left:21px;
    z-index: 100;
 }
</style>
