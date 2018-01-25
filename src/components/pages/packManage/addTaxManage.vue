<template>
    <div class="addTaxManage">
        <!-- 操作导航-->
        <div class="operation">
          <!-- 新增开票单据-->
          <div>
            <el-button type="info" size="small">新增开票单据</el-button>
          </div>
          <!-- 新增收票单据-->
          <div>
            <el-button type="success" size="small">新增收票单据</el-button>
          </div>
          <!-- 删除-->
          <div>
            <el-button type="danger" size="small">删除</el-button>
          </div>
          <!-- 开始时间-->
          <div>
            <el-date-picker
              v-model="start"
              type="date"
              placeholder="选择开始日期"
              :picker-options="startTime">
            </el-date-picker>
          </div>
          <!-- 结束时间-->
          <div>
            <el-date-picker
              v-model="over"
              type="date"
              placeholder="选择结束日期"
              :picker-options="overTime">
            </el-date-picker>
          </div>
          <!-- 查询-->
          <div>
            <el-button type="primary" icon="search" size="small">查询</el-button>
          </div>
        </div>
        <!-- tabs切换-->
        <div class="tabs">
          <el-tabs type="border-card">
            <el-tab-pane label="开票收据">
              <div class="tabsList">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">开票单据</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item" @click="alter()">
                    {{'开票登记日期2017-10-' + o }}
                  </div>
                </el-card>
              </div>
              <!--开票单 -->
              <div class="makeOutAnInvoice">
                <h1 class="title">开票登记</h1>
                <el-form :inline="true" :label-position="labelPosition" label-width="200px" :model="makeOutAnInvoiceFormLabel">
                  <el-form-item label="开票登记编号（自动生成）">
                    <el-input v-model="makeOutAnInvoiceFormLabel.registrationNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="发票金额">
                    <el-input v-model="makeOutAnInvoiceFormLabel.invoiceValue"></el-input>
                  </el-form-item>
                  <el-form-item label="金额大写">
                    <el-input v-model="makeOutAnInvoiceFormLabel.amountInWords"></el-input>
                  </el-form-item>
                  <el-form-item label="纳税人识别号">
                    <el-input v-model="makeOutAnInvoiceFormLabel.identificationNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="项目名称">
                    <el-input v-model="makeOutAnInvoiceFormLabel.entryName"></el-input>
                  </el-form-item>
                  <el-form-item label="收款单位">
                    <el-input v-model="makeOutAnInvoiceFormLabel.collectingUnit"></el-input>
                  </el-form-item>
                  <el-form-item label="付款单位">
                    <el-input v-model="makeOutAnInvoiceFormLabel.paymentUnit"></el-input>
                  </el-form-item>
                  <el-form-item label="组织机构代码证号码">
                    <el-input v-model="makeOutAnInvoiceFormLabel.organizationCodeCertificateNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="发票号码">
                    <el-input v-model="makeOutAnInvoiceFormLabel.invoiceNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="填报人">
                    <el-input v-model="makeOutAnInvoiceFormLabel.applicant"></el-input>
                  </el-form-item>
                  <el-form-item label="开户银行及账号">
                    <el-input v-model="makeOutAnInvoiceFormLabel.bankAccountNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="附件">
                    <el-input v-model="makeOutAnInvoiceFormLabel.enclosure"></el-input>
                  </el-form-item>
                  <el-form-item label="发票类型" >
                    <el-select v-model="makeOutAnInvoiceFormLabel.invoiceType" placeholder="发票类型">
                      <el-option label="增值税发票" value="shanghai"></el-option>
                      <el-option label="普通发票" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="日期" label-width="175px">
                    <el-date-picker
                      v-model="makeOutAnInvoiceFormLabel.date"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="makeOutAnInvoiceTime">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="备注" label-width="180px">
                    <el-input v-model="makeOutAnInvoiceFormLabel.remarks"></el-input>
                  </el-form-item>
                  <el-form-item label="领导审批">
                    <el-input v-model="makeOutAnInvoiceFormLabel.leadershipExaminationAndApproval"></el-input>
                  </el-form-item>
                </el-form>
                <div class="buttons">
                  <el-button type="success" size="small">保存</el-button>
                  <el-button type="info" size="small">导出</el-button>
                  <el-button type="warning" size="small">打印</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收票单据">
              <div class="tabsList">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">收票单据</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'收票登记日期2017-10-' + o }}
                  </div>
                </el-card>
              </div>
              <!--收票单 -->
              <div class="invoice">
                <h1 class="title">收票登记</h1>
                <el-form :inline="true" :label-position="labelPosition" label-width="200px" :model="invoiceFormLabel">
                  <el-form-item label="开票登记编号（自动生成）">
                    <el-input v-model="invoiceFormLabel.registrationNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="发票金额">
                    <el-input v-model="invoiceFormLabel.invoiceValue"></el-input>
                  </el-form-item>
                  <el-form-item label="金额大写">
                    <el-input v-model="invoiceFormLabel.amountInWords"></el-input>
                  </el-form-item>
                  <el-form-item label="项目名称">
                    <el-input v-model="invoiceFormLabel.entryName"></el-input>
                  </el-form-item>
                  <el-form-item label="纳税人识别号">
                    <el-input v-model="invoiceFormLabel.identificationNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="开户银行及账号">
                    <el-input v-model="invoiceFormLabel.bankAccountNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="收款单位">
                    <el-input v-model="invoiceFormLabel.collectingUnit"></el-input>
                  </el-form-item>
                  <el-form-item label="付款单位">
                    <el-input v-model="invoiceFormLabel.paymentUnit"></el-input>
                  </el-form-item>
                  <el-form-item label="组织机构代码证号码">
                    <el-input v-model="invoiceFormLabel.organizationCodeCertificateNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="发票号码">
                    <el-input v-model="invoiceFormLabel.invoiceNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="填报人">
                    <el-input v-model="invoiceFormLabel.applicant"></el-input>
                  </el-form-item>
                  <el-form-item label="附件">
                    <el-input v-model="invoiceFormLabel.enclosure"></el-input>
                  </el-form-item>
                  <el-form-item label="发票类型">
                    <el-select v-model="invoiceFormLabel.invoiceType1" placeholder="发票类型">
                      <el-option label="增值税发票" value="shanghai"></el-option>
                      <el-option label="普通发票" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="发票类型" label-width="175px" id="home">
                    <el-select v-model="invoiceFormLabel.invoiceType" placeholder="发票类型">
                      <el-option label="增值税发票" value="shanghai"></el-option>
                      <el-option label="普通发票" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="日期" label-width="175px">
                    <el-date-picker
                      v-model="invoiceFormLabel.date"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="invoiceTime">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="备注">
                    <el-input v-model="invoiceFormLabel.remarks"></el-input>
                  </el-form-item>
                  <el-form-item label="领导审批">
                    <el-input v-model="invoiceFormLabel.leadershipExaminationAndApproval"></el-input>
                  </el-form-item>
                </el-form>
                <div class="invoiceButton">
                  <el-button type="success" size="small">保存</el-button>
                  <el-button type="info" size="small">导出</el-button>
                  <el-button type="warning" size="small">打印</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        //        开票
        labelPosition: 'right',
        makeOutAnInvoiceFormLabel: {
          registrationNumber:"10012",
          invoiceValue:"123",
          amountInWords:"一百二十三",
          identificationNumber:"567890",
          entryName:"道路建设",
          entryBame:"道路建设",
          collectingUnit:"上海市",
          paymentUnit:"江苏省",
          organizationCodeCertificateNumber:"34756745735754358X",
          invoiceNumber:"455657",
          applicant:"张晓娜",
          bankAccountNumber:"建设银行(3765u689797868568687)",
          enclosure:"暂无",
          invoiceType:"普通发票",
          date:'2017-10-1',
          remarks:"暂无",
          leadershipExaminationAndApproval:"同意"
        },
        makeOutAnInvoiceTime: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
           }
        },
//      收票
      invoiceFormLabel:{
          registrationNumber:"10012",
          invoiceValue:"56",
          amountInWords:"五十六",
          identificationNumber:"杭州市道路绿化",
          entryName:"市道路绿化",
          entryBame:"市道路绿化",
          collectingUnit:"上海市",
          paymentUnit:"浙江省",
          organizationCodeCertificateNumber:"85967412X",
          invoiceNumber:"2344557",
          applicant:"张小米",
          bankAccountNumber:"建设银行(3765u689797868568687)",
          enclosure:"暂无",
          invoiceType:"增值税发票",
          invoiceType1:"普通发票",
          date:"20174-10-1",
          remarks:"暂无",
          leadershipExaminationAndApproval:"同意"
      },
      invoiceTime: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
//      开始日期
        startTime: {
          disabledDate(time) {
              return time.getTime() < Date.now() - 8.64e7;
            }
        },
        start:'',
//      结束时间
        overTime: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        over:'',
      }
    },
    methods:{
      alter:function(){
        this.$message('这是一条消息提示');
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
  .ticket{
    display:flex;
  }
  /*开票*/
  .makeOutAnInvoice,.invoice{
    width:95%;
    min-height:750px;
    margin-left:30px;
    border:1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: .2s;
    padding-left:30px;
    padding-top:50px;
    margin-top:30px;
  }
  .makeOutAnInvoice:hover{
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .invoice:hover{
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .title{
    text-align: center;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .buttons{
    margin-top:30px;
    margin-left:65%;
  }
  .invoiceButton{
    margin-left:65%;
  }
  .box-card {
    margin-left: 2%;
    width: 95%;
    cursor:pointer;
  }
</style>
