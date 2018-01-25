<!--分包队伍工程结算台账-->
<template>
    <div class="packTeamAccount">
        <div class="header">
              <!-- 搜索-->
              <div>
                    <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
              </div>
              <!-- 时间选择器-->
              <div class="margin-left">
                    <el-date-picker v-model="month" type="month" placeholder="选择月"></el-date-picker>
              </div>
              <!-- 导出-->
              <div class="margin-left">
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
              <div class="margin-left">
                <el-button type="success" size="small">打印</el-button>
              </div>
        </div>
        <div class="table">
            <div class="title">
                <h1>分包单位名称: <span class="titleHr">建设有限公司</span> </h1>
            </div>
            <packTeam-table :collect="collect" :tableData="tableData"></packTeam-table>
        </div>
    </div>
</template>
<script>
  import PackTeamTable from '../../common/table/packTeamAccountTable.vue'
  export default{
          components:{
            PackTeamTable,
          },
          data(){
              return {
//              表格
                collect:{
                  columns:[
                    {
                      text:"清单编号",
                      dataIndex:"code"
                    },
                    {
                      text:"项目名称",
                      dataIndex:"projectName"
                    },
                    {
                      text:"单位",
                      dataIndex:"unit"
                    },
                    {
                      text:"单价",
                      dataIndex:"unitPrice"
                    },
                  ],
                  Jan:[
                    {
                      text:"工程量",
                      dataIndex:"JanProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"JanWork"
                    }
                  ],
                  Feb:[
                    {
                      text:"工程量",
                      dataIndex:"FebProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"FebWork"
                    }
                  ],
                  Mar:[
                    {
                      text:"工程量",
                      dataIndex:"MarProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"MarWork"
                    }
                  ],
                  Apr:[
                    {
                      text:"工程量",
                      dataIndex:"AprProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"AprWork"
                    }
                  ],
                  May:[
                    {
                      text:"工程量",
                      dataIndex:"MayProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"MayWork"
                    }
                  ],
                  Jun:[
                    {
                      text:"工程量",
                      dataIndex:"JunProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"JunWork"
                    }
                  ],
                  Jul:[
                    {
                      text:"工程量",
                      dataIndex:"JulProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"JulWork"
                    }
                  ],
                  Aug:[
                    {
                      text:"工程量",
                      dataIndex:"AugProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"AugWork"
                    }
                  ],
                  Sep:[
                    {
                      text:"工程量",
                      dataIndex:"SepProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"SepWork"
                    }
                  ],
                  Oct:[
                    {
                      text:"工程量",
                      dataIndex:"OctProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"OctWork"
                    }
                  ],
                  Nov:[
                    {
                      text:"工程量",
                      dataIndex:"NovProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"NovWork"
                    }
                  ],
                  Dec:[
                    {
                      text:"工程量",
                      dataIndex:"DecProject"
                    },
                    {
                      text:"工作量",
                      dataIndex:"DecWork"
                    }
                  ],
                  tail:[
                    {
                      text:"本月合计",
                      dataIndex:"total"
                    },
                    {
                      text:"备注",
                      dataIndex:"remark"
                    },
                  ],
                },
                tableData:[
                  {
                    code:"01",
                    projectName:"道路绿化",
                    unit:"单位",
                    unitPrice:"84531313",
                    JanProject:"100章",
                    JanWork:"50章",
                    FebProject:"100章",
                    FebWork:"50章",
                    MarProject:"100章",
                    MarWork:"50章",
                    AprProject:"100章",
                    AprWork:"50章",
                    MayProject:"100章",
                    MayWork:"50章",
                    JunProject:"100章",
                    JunWork:"50章",
                    JulProject:"100章",
                    JulWork:"50章",
                    AugProject:"100章",
                    AugWork:"50",
                    SepProject:"100",
                    SepWork:"50章",
                    OctProject:"100章",
                    OctWork:"50章",
                    NovProject:"100章",
                    NovWork:"50章",
                    DecProject:"100章",
                    DecWork:"50章",
                    total:"8542121",
                    remark:"无"
                  },
                  {
                    code:"02",
                    projectName:"道路绿化",
                    unit:"单位",
                    unitPrice:"84531313",
                    JanProject:"100章",
                    JanWork:"50章",
                    FebProject:"100章",
                    FebWork:"50章",
                    MarProject:"100章",
                    MarWork:"50章",
                    AprProject:"100章",
                    AprWork:"50章",
                    MayProject:"100章",
                    MayWork:"50章",
                    JunProject:"100章",
                    JunWork:"50章",
                    JulProject:"100章",
                    JulWork:"50章",
                    AugProject:"100章",
                    AugWork:"50",
                    SepProject:"100",
                    SepWork:"50章",
                    OctProject:"100章",
                    OctWork:"50章",
                    NovProject:"100章",
                    NovWork:"50章",
                    DecProject:"100章",
                    DecWork:"50章",
                    total:"8542121",
                    remark:"无"
                  }
                ],
//              搜索
                search:'',
//              日期选择器
                month:'',
//              导出
                fileList:[],
              }
          },
          methods:{
//              搜索
            handleIconClick(ev) {
              console.log(ev);
            },
//            导出
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
        .packTeamAccount{
          margin: 10px 10px;
        }
        .header{
          margin: 10px 10px 10px 0;
          display: flex;
        }
        .margin-left{
          margin-left: 10px;
        }
        .title{
          margin: 10px 0 10px 0;
        }
        .title>h1{
          font-size: 15px;
          color:#333333;
        }
        .titleHr{
          text-decoration: underline;
        }
</style>
