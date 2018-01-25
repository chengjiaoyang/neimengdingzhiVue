<!--分包合同管理台账-->
<template>
  <div class="packAccountManage">
    <!-- 操作按钮-->
          <div class="operation">
                  <!-- 查询-->
                    <div>
                      <el-input placeholder="请输入关键词" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
                    </div>
                  <!-- 导出-->
                    <div class="upload">
                      <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList">
                        <el-button size="small" type="primary">导出</el-button>
                      </el-upload>
                    </div>
                  <!-- 打印-->
                    <div class="print">
                      <el-button type="success" size="small">打印</el-button>
                    </div>
          </div>
    <!-- 表格-->
          <div class="table">
              <pack-table :collect="collect" :tableData="tableData"></pack-table>
          </div>
  </div>
</template>
<script>
  import PackTable from '../../common/table/packCompactManageTable.vue'
  export default{
            components:{
              PackTable,
            },
            data(){
                  return {
              //                  查询
                    search:'',
              //                  导出
                    fileList:[],
              //                  表格
                    collect:{
                      columns:[
                        {
                          text:"合同编号",
                          dataIndex:"pactCode"
                        },
                        {
                          text:"合同名称",
                          dataIndex:"pactName"
                        },
                        {
                          text:"签订日期",
                          dataIndex:"pactDate"
                        },
                        {
                          text:"签订单位名称",
                          dataIndex:"pactUnitName"
                        },
                        {
                          text:"合同额",
                          dataIndex:"pactNum"
                        }
                      ],
                      changeNum:[
                        {
                          text:"设计变更",
                          dataIndex:"changeDesign"
                        },
                        {
                          text:"工程洽商变更",
                          dataIndex:"changeTalk"
                        },
                      ],
                      monthMeasure:[
                        {
                          text:"已计量",
                          dataIndex:"measure"
                        },
                        {
                          text:"比例",
                          dataIndex:"scale"
                        },
                      ],
                      addMeasure:[
                        {
                          text:"已计量",
                          dataIndex:"addMeasures"
                        },
                        {
                          text:"比例",
                          dataIndex:"scales"
                        },
                      ],
                      monthClose:[
                        {
                          text:"已结算",
                          dataIndex:"settle"
                        },
                        {
                          text:"比例",
                          dataIndex:"monthClose"
                        },
                      ],
                      addClose:[
                        {
                          text:"已结算",
                          dataIndex:"addSettle"
                        },
                        {
                          text:"比例",
                          dataIndex:"addClose"
                        },
                      ],
                      state:[
                        {
                          text:"履约正常",
                          dataIndex:"normo"
                        },
                        {
                          text:"履约异常",
                          dataIndex:"unusual"
                        },
                      ],
                    },
                    tableData: [
                      {
                        pactCode: '##A++',
                        pactName: '道路绿化',
                        pactDate: '2017-10-1',
                        pactUnitName: '上海市普陀区某公司',
                        pactNum: '87945685213',
                        changeDesign:'#AB',
                        changeTalk:'#ABC',
                        measure: '87954631',
                        addMeasures: '50%',
                        scale: '748522632',
                        scales: '50%',
                        settle: '856524122',
                        monthClose: '50%',
                        addSettle: '8412121212',
                        addClose: '20%',
                        normo: '正常',
                        unusual: '无',
                      },
                      {
                        pactCode: '##A++',
                        pactName: '道路绿化',
                        pactDate: '2017-10-1',
                        pactUnitName: '上海市普陀区某公司',
                        pactNum: '87945685213',
                        changeDesign: '#AB',
                        changeTalk: '#ABC',
                        measure: '87954631',
                        addMeasures: '50%',
                        scale: '748522632',
                        scales: '50%',
                        settle: '856524122',
                        monthClose: '50%',
                        addSettle: '8412121212',
                        addClose: '20%',
                        normo: '正常',
                        unusual: '无',
                      },
                      {
                        pactCode: '##A++',
                        pactName: '道路绿化',
                        pactDate: '2017-10-1',
                        pactUnitName: '上海市普陀区某公司',
                        pactNum: '87945685213',
                        changeDesign: '#AB',
                        changeTalk: '#ABC',
                        measure: '87954631',
                        addMeasures: '50%',
                        scale: '748522632',
                        scales: '50%',
                        settle: '856524122',
                        monthClose: '50%',
                        addSettle: '8412121212',
                        addClose: '20%',
                        normo: '正常',
                        unusual: '无',
                      },
                      {
                        pactCode: '##A++',
                        pactName: '道路绿化',
                        pactDate: '2017-10-1',
                        pactUnitName: '上海市普陀区某公司',
                        pactNum: '87945685213',
                        changeDesign: '#AB',
                        changeTalk: '#ABC',
                        measure: '87954631',
                        addMeasures: '50%',
                        scale: '748522632',
                        scales: '50%',
                        settle: '856524122',
                        monthClose: '50%',
                        addSettle: '8412121212',
                        addClose: '20%',
                        normo: '正常',
                        unusual: '无',
                      }
                    ]
                  }
            },
            methods:{
          //                  搜索
                  handleIconClick(ev) {
                    console.log(ev);
                  },
         //                  导出
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
        .packAccountManage{
          margin: 10px 10px 10px 10px;
        }
        .operation{
          margin: 10px 10px 10px 10px;
          display: flex;
        }
        .print,.upload{
          margin-left: 10px;
        }
</style>
