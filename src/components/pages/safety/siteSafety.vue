<template>
  <div class="siteSafety">
    <div class="top-section">
      <el-button size="small" type="success" @click="add">新增按钮</el-button>
      <el-button size="small" type="warning">导出</el-button>
      <el-button size="small" type="danger">打印</el-button>
      <el-button size="small" type="info">提交</el-button>
      <!--搜索-->
      <search-input></search-input>
    </div>
    <!--表顶部-->
    <!--<div class="top-table">-->
      <!--<span>工程名称：</span>-->
      <!--<span>排查日期：</span>-->
      <!--<span>排查人：</span>-->
    <!--</div>-->
    <div class="leaderView" v-if="false">
      <site-saft-table :columns="columns" :tableData="tableData"></site-saft-table>
    </div>

    <!--质检员操作-->
    <div class="handlerView">
      <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              size="large"
              :before-close="handleClose">
        <site-handler-table :columns="handlerColumns" :tableData="handlerData"></site-handler-table>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>

    <!--表格-->
    <div class="tableData">
      <el-table
              :data="dataList"
              border
              style="width: 100%">
        <el-table-column :label="column.text" v-for="(column,index) in tableColumns" :key="column.dataIndex">
           <template scope="scope">
             <span>{{scope.row[column.dataIndex]}}</span>
           </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="success" size="small" @click="examine=true">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import SearchInput from '../../common/searchInput'
  import SiteSaftTable from '../../common/table/sitSaftTable'
  import SiteHandlerTable from '../../common/table/siteHandlerTable'
  export default {
      data(){
          return{
              columns:[
                  {
                      text:"序号",
                      dataIndex:"no"
                  },
                  {
                      text:"工程名称",
                      dataIndex:"proName"
                  },
                  {
                      text:"排查日期",
                      dataIndex:"checkDate"
                  },
                  {
                      text:"排查人",
                      dataIndex:"checker"
                  }
              ],
              tableData:[
                  {
                      id:1,
                      no:"001",
                      proName:"国道N-0",
                      checkDate:"2017-01-12",
                      checker:"张**"
                  },
                  {
                      id:2,
                      no:"002",
                      proName:"国道N-0",
                      checkDate:"2017-01-12",
                      checker:"张**"
                  },
                  {
                      id:3,
                      proName:"国道N-0",
                      checkDate:"2017-01-12",
                      checker:"张**"
                  },
              ],
              tableColumns:[
                  {
                      text:"日志编号",
                      dataIndex:"no"
                  },
                  {
                      text:"项目名称",
                      dataIndex:"proName"
                  },
                  {
                      text:"制表人",
                      dataIndex:"checker"
                  },
                  {
                      text:"检查日期",
                      dataIndex:"checkData"
                  }
              ],
              dataList:[
                  {
                      id:1,
                      no:"001",
                      proName:"国道N-0",
                      checker:"张**",
                      checkData:"2017-01-12",
                  },
                  {
                      id:2,
                      no:"002",
                      proName:"国道N-0",
                      checker:"张**",
                      checkData:"2017-01-12",
                  },
                  {
                      id:3,
                      no:"002",
                      proName:"国道N-0",
                      checker:"张**",
                      checkData:"2017-01-12",
                  },
              ],
              handlerColumns:[
                  {
                      text:"序号",
                      dataIndex:"no"
                  },
                  {
                      text:"排查项目",
                      dataIndex:"checkPro"
                  },
                  {
                      text:"隐患描述",
                      dataIndex:"hiddenDanger"
                  },
                  {
                      text:"部位",
                      dataIndex:"park"
                  },
                  {
                      text:"排查情况",
                      dataIndex:"checkStatus"
                  },
                  {
                      text:"落实整改人",
                      dataIndex:"checker"
                  },
                  {
                      text:"整改时间",
                      dataIndex:"modifyTime"
                  },
                  {
                      text:"复查情况",
                      dataIndex:"recheckStatus"
                  },
                  {
                      text:"复查人签字",
                      dataIndex:"sign"
                  }
              ],
              handlerData:[
                  {
                      id:1,
                      no:"001",
                      checkPro:"施工现场警示标志、标牌是否齐全 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"002",
                      checkPro:"道路排水是否畅通，有无大面积积水，泥浆是否外溢 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"003",
                      checkPro:"材料堆放施工现场有无吸游烟现象",
                      hiddenDanger:"***",
                      park:"国道-N09",
                      checkStatus:"不通过",
                      checker:"西西",
                      modifyTime:"2014-01-25",
                      recheckStatus:"合格",
                      sign:"张**"
                  },
                  {
                      id:2,
                      no:"004",
                      checkPro:"材料堆放施工现场有无吸游烟现象",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"材料是否堆放整齐，是否按规定位置堆放，是否影响消防通道",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"重要部位消火栓是否齐全有效（配电箱边、木工棚、材料堆场、宿舍门口必须有）",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"保护零线、工作零线有无混接，所有用电设备是否接上保护零线",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"用电设备是否从开关箱中接出，是否为三级用电、三级保护，是否做到一机一箱一闸一保护",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"漏保有无失灵，是否匹配、闸刀、熔断器是否损坏",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"配电箱是否有防雨措施",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"配电线路是否按规定布设，是否有私拉乱接现象",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"电焊机是否有二次降压装置",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"配电箱安放位置是否满足接线要求",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"是否有不戴安全帽现象",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"安全帽是否为项目部统一发放，是否为合格品，是否有企业标志",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"密目网是否有破处，是否每扣扎牢 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"高处作业是否系好安全带，安全带是否正确使用",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"基坑四周围护是否有拆除现象，高度是否达到1.2M以上 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"机械设备是否进行机壳接地，是否一机一箱一闸一保护",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"是否存在无人操作未切断电源现象 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },
                  {
                      id:2,
                      no:"005",
                      checkPro:"是否有使用多功能木工机具现象 ",
                      hiddenDanger:"",
                      park:"",
                      checkStatus:"",
                      checker:"",
                      modifyTime:"",
                      recheckStatus:"",
                      sign:""
                  },

              ],
              dialogVisible:false
          }
      },
      components:{
          SearchInput,
          SiteSaftTable,
          SiteHandlerTable
      },
      methods:{
          handleClose(v){
              console.log(v);
          },
//          新增
          add(){
              this.dialogVisible = true;
          },
      }
  }
</script>

<style>
  .siteSafety{
    padding-top: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
  }
  .top-table{
    width: 50%;
    display: flex;
  }
  .top-table span{
    flex: 1;
  }
  .handlerView .el-dialog__body{
    padding: 10px 10px;
  }
  .el-table td, .el-table th{
    height: 30px;
  }
</style>
