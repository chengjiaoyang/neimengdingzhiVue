<template>
  <div class="materialsMsg">
    <!-- 导航操作-->
    <div class="operation">
      <!-- 新增-->
      <div>
        <el-button type="success" size="small">新增</el-button>
      </div>
      <!-- 删除-->
      <div>
        <el-button type="danger" size="small">删除</el-button>
      </div>
    </div>
    <!-- 主体-->
    <div class="emphasis">
      <el-tabs type="border-card">
        <el-tab-pane label="标识信息">
          <!-- 标识信息-->
          <div class="identifyingForm">
            <el-form :inline="true" :model="identifying" class="demo-form-inline" label-width="120px" :label-position="labelPosition">
              <el-form-item label="*供应商性质">
                <el-input v-model="identifying.supplierNature" placeholder="必填"></el-input>
              </el-form-item>
              <el-form-item label="统一社会信用代码/营业执照">
                <el-input v-model="identifying.businessLicense" placeholder="必填"></el-input>
              </el-form-item>
              <el-form-item label="身份证">
                <el-input v-model="identifying.ID" placeholder="必填"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="基本信息">
          <!-- 基本信息-->
          <div class="basicsMsg">
            <div class="basicForm">
              <el-form :inline="true"  :model="basic" class="demo-form-inline" label-width="120px" :label-position="labelPosition">
                <el-form-item label="供应商编码">
                  <el-input v-model="basic.supplierCode" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="供应商名称">
                  <el-input v-model="basic.supplierName" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="成立日期">
                  <el-input v-model="basic.dateOfEstablishment" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="*供应商级别">
                  <el-select v-model="basic.supplierLvel" placeholder="请选择供应商级别">
                    <el-option label="一级" value="shanghai"></el-option>
                    <el-option label="二级" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="供应商类型">
                  <el-select v-model="basic.supplierType" placeholder="请选择供应商类型">
                    <el-option label="一级" value="shanghai"></el-option>
                    <el-option label="二级" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="工商注册号">
                  <el-input v-model="basic.businessRegistrationNumber" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="注册地址">
                  <el-input v-model="basic.registeredAddress" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="注册资本金（万元）">
                  <el-input v-model="basic.registeredCapital" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="组织结构代码">
                  <el-input v-model="basic.organizationCode" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="法定代表人">
                  <el-input v-model="basic.legalPerson" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="职务">
                  <el-input v-model="basic.post" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="税务登记号">
                  <el-input v-model="basic.taxRegistrationNumber" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="纳税身份">
                  <el-input v-model="basic.taxStatus" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="适用税率">
                  <el-select v-model="basic.taxRate" placeholder="请选择适用税率">
                    <el-option label="一级" value="shanghai"></el-option>
                    <el-option label="二级" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="纳税人识别号">
                  <el-input v-model="basic.taxpayerIdentificationNumber" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="评定级别">
                  <el-input v-model="basic.rating" placeholder="必填"></el-input>
                </el-form-item>
                <el-form-item label="供应商注册地区">
                  <el-input v-model="basic.supplierRegistrationArea" placeholder="必填"></el-input>
                </el-form-item>
              </el-form>
              <el-form  label-width="80px" :model="textareaForm">
                <el-form-item label="产品类别" :inline="false">
                  <el-input type="textarea"  v-model="textareaForm.productCategory"></el-input>
                </el-form-item>
                <el-form-item label="供货区域范围">
                  <el-input type="textarea"  v-model="textareaForm.supplyArea"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="desc" >
                  <el-input type="textarea" v-model="textareaForm.briefIntroduction"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扩展信息">
          <el-form :inline="true" :model="extraForm" class="demo-form-inline" :label-position="labelPosition" label-width="200px">
            <el-form-item label="联系人姓名">
              <el-input v-model="extraForm.contactName" ></el-input>
            </el-form-item>
            <el-form-item label="联系人电话">
              <el-input v-model="extraForm.contactPhone" ></el-input>
            </el-form-item>
            <el-form-item label="传真">
              <el-input v-model="extraForm.fax" ></el-input>
            </el-form-item>
            <el-form-item label="通讯地址">
              <el-input v-model="extraForm.postalAddress" ></el-input>
            </el-form-item>
            <el-form-item label="邮编">
              <el-input v-model="extraForm.zipCode" ></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="extraForm.mailBox" ></el-input>
            </el-form-item>
            <el-form-item label="开户银行">
              <el-input v-model="extraForm.openingBank" ></el-input>
            </el-form-item>
            <el-form-item label="账号名">
              <el-input v-model="extraForm.accountName" ></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="extraForm.accountNumber"></el-input>
            </el-form-item>
            <el-form-item label="编制人">
              <el-input v-model="extraForm.compilingPersonnel" ></el-input>
            </el-form-item>
            <el-form-item label="编制日期">
              <el-input v-model="extraForm.compilationDate" ></el-input>
            </el-form-item>
            <el-form-item label="编制单位">
              <el-input v-model="extraForm.establishmentUnit" ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="本企业近三年财务状况">
          <div class="finance">
            <el-table
              :data="tableData"
              border
              style="width: 80%">
              <el-table-column
                fixed
                prop="date"
                label="财务状况(万元)">
              </el-table-column>
              <el-table-column
                label="企业总资产">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.totalAssets">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="流动资金">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.workingCapital">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="总负债">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.totalLiabilities">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="流动负债">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.currentLiabilities">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="企业营业额">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.turnover">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="主要产品生产能力情况">
          <div class="fertility">
            <el-table
              :data="fertilityTable"
              border
              style="width: 80%">
              <el-table-column
                label="编号"
                >
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.code">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="产品名称"
                >
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.productName">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="规格/型号">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.specificationModel">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="年生产力">
                <template scope="scope">
                  <el-form :inline="true" class="demo-form-inline">
                    <el-input  v-model="scope.row.annualProductivity">
                    </el-input>
                  </el-form>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="主要代理产品名称、代理厂家">
            <div class="agency">
              <el-table
                :data="agencyTable"
                border
                style="width: 80%">
                <el-table-column
                  label="编号"
                  >
                  <template scope="scope">
                    <el-form :inline="true" class="demo-form-inline">
                      <el-input  v-model="scope.row.code">
                      </el-input>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="产品名称">
                  <template scope="scope">
                    <el-form :inline="true" class="demo-form-inline">
                      <el-input  v-model="scope.row.productName">
                      </el-input>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="规格/型号">
                  <template scope="scope">
                    <el-form :inline="true" class="demo-form-inline">
                      <el-input  v-model="scope.row.specificationModel">
                      </el-input>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="生产厂家">
                  <template scope="scope">
                    <el-form :inline="true" class="demo-form-inline">
                      <el-input  v-model="scope.row.manufacturer">
                      </el-input>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="年销售能力">
                  <template scope="scope">
                    <el-form :inline="true" class="demo-form-inline">
                      <el-input  v-model="scope.row.salesForce">
                      </el-input>
                    </el-form>
                  </template>
                </el-table-column>
              </el-table>
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
        tableData: [
          {
            date: '2015',
            totalAssets: '',
            workingCapital: '',
            totalLiabilities: '',
            turnover: ''
          },
          {
            date: '2016',
            totalAssets: '',
            workingCapital: '',
            totalLiabilities: '',
            turnover: ''
        },
          {
            date: '2017',
            totalAssets: '',
            workingCapital: '',
            totalLiabilities: '',
            turnover: ''
        },
        ],
        labelPosition: 'left',
//        主要产品生产能力情况
        fertilityTable: [
          {
            code:'',
            productName:'',
            specificationModel:'',
            annualProductivity:'',
          },
          {
            code:'',
            productName:'',
            specificationModel:'',
            annualProductivity:'',
          }
        ],
//      主要代理产品名称
        agencyTable:[
          {
            code:'',
            productName:'',
            specificationModel:'',
            manufacturer:"",
            salesForce:""
          },
          {
            code:'',
            productName:'',
            specificationModel:'',
            manufacturer:"",
            salesForce:""
          }
        ],
//        扩展信息
        extraForm: {
            contactName:"",
            contactPhone:"",
            fax:"",
            postalAddress:"",
            zipCode:"",
            mailBox:"",
            openingBank:"",
            accountName:"",
            accountNumber:"",
            compilingPersonnel:"",
            compilationDate:"",
            establishmentUnit:""
        },
//        标识信息
        identifying: {
          supplierNature: '',
          businessLicense: '',
          ID:''
        },
//        基本信息
        basic:{
          supplierCode:"",
          supplierName:"",
          dateOfEstablishment:"",
          supplierLvel:"",
          supplierType:"",
          businessRegistrationNumber:"",
          registeredAddress:"",
          registeredCapital:"",
          organizationCode:"",
          legalPerson:"",
          post:"",
          taxRegistrationNumber:"",
          taxStatus:"",
          taxRate:"",
          taxpayerIdentificationNumber:"",
          rating:"",
          supplierRegistrationArea:""
        },
//        基本信息文本域
        textareaForm:{
          productCategory:"",
          supplyArea:"",
          briefIntroduction:""
        },
      }
    },
    methods:{
//      标识信息
      onSubmit() {
        console.log('submit!');
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
    margin-left: 30px;
  }
 .table-tr input{
   border-color: transparent;
 }
  .identifyingForm{
    width: 90%;
    margin: 0 auto;
  }
  .fertility,.agency,.finance{
    width: 80%;
    margin: 0 auto;
  }
</style>
