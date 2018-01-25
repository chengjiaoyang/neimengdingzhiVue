<template>
    <div class="supplier">
      <!-- 操作导航-->
      <div class="operation">
        <!-- 新增-->
        <div>
          <el-button type="success" size="small" @click="add=true">新增</el-button>
        </div>
        <!-- 查询-->
        <div>
          <el-input
            placeholder="请输入关键字"
            icon="search"
            v-model="search"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
        <!-- 隐藏列-->
        <div class="line">
          <div class="lineHeader" @click="isKeyColumn=true">
            <span>隐藏当前列</span>
            <i class="el-icon-caret-bottom icon" v-show="! isKeyColumn"></i>
            <i class="el-icon-caret-top icon" v-show="isKeyColumn"></i>
          </div>
          <div class="lineBox" v-show="isKeyColumn" @mouseleave="isKeyColumn=false">
            <ul>
              <li>
                <el-checkbox-group v-model="showCheckList" v-for="(list,index) in column" :key="list.dataIndex">
                  <el-checkbox :label="list.dataIndex"   @change="changeData">
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
      <!-- 表格-->
      <div class="importantTable">
        <el-table
          :data="tableDatas"
          border
          style="width: 100%">
          <el-table-column v-for="(data,index) in newKeyColumn" :key="data.dataIndex" :label="data.text" show-overflow-tooltip>
            <template scope="scope">
              {{scope.row[data.dataIndex]}}
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="150px">
            <template scope="scope">
                <el-button type="danger" size="small">删除</el-button>
                <el-button type="warning" size="small" @click="amend=true">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 弹出框-->
      <div class="popover">
        <!-- 修改一行-->
        <div>
          <el-dialog
            title="提示"
            :visible.sync="add"
            size="small"
            :before-close="handleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="amendForm">
              <el-form-item label="供应商编码">
                <el-input v-model="amendForm.supplierCode"></el-input>
              </el-form-item>
              <el-form-item label="材料名称">
                <el-input v-model="amendForm.materialName"></el-input>
              </el-form-item>
              <el-form-item label="规格">
                <el-input v-model="amendForm.specifications"></el-input>
              </el-form-item>
              <el-form-item label="数量">
                <el-input v-model="amendForm.number"></el-input>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="amendForm.company"></el-input>
              </el-form-item>
              <el-form-item label="单价">
                <el-input v-model="amendForm.unitPrice"></el-input>
              </el-form-item>
              <el-form-item label="采购单位">
                <el-input v-model="amendForm.purchasingUnit"></el-input>
              </el-form-item>
              <el-form-item label="采购人">
                <el-input v-model="amendForm.purchaser"></el-input>
              </el-form-item>
              <el-form-item label="采购人联系电话">
                <el-input v-model="amendForm.buyerContactPhone"></el-input>
              </el-form-item>
              <el-form-item label="供应单位">
                <el-input v-model="amendForm.supplyUnit"></el-input>
              </el-form-item>
              <el-form-item label="供应单位负责人">
                <el-input v-model="amendForm.personInChargeOfSupplyUnit"></el-input>
              </el-form-item>
              <el-form-item label="供应单位联系电话">
                <el-input v-model="amendForm.supplyUnitTelephone"></el-input>
              </el-form-item>
              <el-form-item label="采购合同">
                <el-input v-model="amendForm.procurementContract"></el-input>
              </el-form-item>
              <el-form-item label="进场时间">
                <el-input v-model="amendForm.approachTime"></el-input>
              </el-form-item>
              <el-form-item label="出场时间">
                <el-input v-model="amendForm.playingTime"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="add = false">取 消</el-button>
              <el-button type="primary" @click="add= false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 新增-->
        <div>
          <el-dialog
            title="提示"
            :visible.sync="amend"
            size="small"
            :before-close="handleClose">
            <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="addForm">
              <el-form-item label="供应商编码">
                <el-input v-model="addForm.supplierCode"></el-input>
              </el-form-item>
              <el-form-item label="材料名称">
                <el-input v-model="addForm.materialName"></el-input>
              </el-form-item>
              <el-form-item label="规格">
                <el-input v-model="addForm.specifications"></el-input>
              </el-form-item>
              <el-form-item label="数量">
                <el-input v-model="addForm.number"></el-input>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="addForm.company"></el-input>
              </el-form-item>
              <el-form-item label="单价">
                <el-input v-model="addForm.unitPrice"></el-input>
              </el-form-item>
              <el-form-item label="采购单位">
                <el-input v-model="addForm.purchasingUnit"></el-input>
              </el-form-item>
              <el-form-item label="采购人">
                <el-input v-model="addForm.purchaser"></el-input>
              </el-form-item>
              <el-form-item label="采购人联系电话">
                <el-input v-model="addForm.buyerContactPhone"></el-input>
              </el-form-item>
              <el-form-item label="供应单位">
                <el-input v-model="addForm.supplyUnit"></el-input>
              </el-form-item>
              <el-form-item label="供应单位负责人">
                <el-input v-model="addForm.personInChargeOfSupplyUnit"></el-input>
              </el-form-item>
              <el-form-item label="供应单位联系电话">
                <el-input v-model="addForm.supplyUnitTelephone"></el-input>
              </el-form-item>
              <el-form-item label="采购合同">
                <el-input v-model="addForm.procurementContract"></el-input>
              </el-form-item>
              <el-form-item label="进场时间">
                <el-input v-model="addForm.approachTime"></el-input>
              </el-form-item>
              <el-form-item label="出场时间">
                <el-input v-model="addForm.playingTime"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="amend = false">取 消</el-button>
              <el-button type="primary" @click="amend= false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
//        隐藏一列
        isKeyColumn:false,
        showCheckList:[],
        newKeyColumn:[],
//        修改
        amend: false,
        labelPosition: 'right',
        amendForm: {
          supplierCode:"",
          materialName:"",
          specifications:"",
          number:"",
          company:"",
          unitPrice:"",
          purchasingUnit:"",
          purchaser:"",
          buyerContactPhone:"",
          supplyUnit:"",
          personInChargeOfSupplyUnit:"",
          supplyUnitTelephone:"",
          procurementContract:"",
          approachTime:"",
          playingTime:""
        },
//        新增
        add:false,
        addForm:{
          supplierCode:"",
          materialName:"",
          specifications:"",
          number:"",
          company:"",
          unitPrice:"",
          purchasingUnit:"",
          purchaser:"",
          buyerContactPhone:"",
          supplyUnit:"",
          personInChargeOfSupplyUnit:"",
          supplyUnitTelephone:"",
          procurementContract:"",
          approachTime:"",
          playingTime:""
        },
//        表头
        column:[
          {
            text:"供应商编码",
            dataIndex:"supplierCode",
          },
          {
            text:"材料名称",
            dataIndex:"materialName",
          },
          {
            text:"规格",
            dataIndex:"specifications",
          },
          {
            text:"数量",
            dataIndex:"number",
          },
          {
            text:"单位",
            dataIndex:"company",
          },
          {
            text:"单价",
            dataIndex:"unitPrice",
          },
          {
            text:"采购单位",
            dataIndex:"purchasingUnit",
          },
          {
            text:"采购人",
            dataIndex:"purchaser",
          },
          {
            text:"采购人联系电话",
            dataIndex:"buyerContactPhone",
          },
          {
            text:"供应单位",
            dataIndex:"supplyUnit",
          },
          {
            text:"供应单位负责人",
            dataIndex:"personInChargeOfSupplyUnit",
          },
          {
            text:"供应单位联系电话",
            dataIndex:"supplyUnitTelephone",
          },
          {
            text:"采购合同",
            dataIndex:"procurementContract",
          },
          {
            text:"进场时间",
            dataIndex:"approachTime",
          },
          {
            text:"出场时间",
            dataIndex:"playingTime",
          },
        ],
//        主体表格
        tableData: [
          {
            supplierCode:"345",
            materialName:"水泥",
            specifications:"50kg",
            number:"500",
            company:"袋",
            unitPrice:"30.00",
            purchasingUnit:"上海隧道建设",
            purchaser:"张曼玉",
            buyerContactPhone:"8569745812",
            supplyUnit:"上海水泥公司",
            personInChargeOfSupplyUnit:"周润发",
            supplyUnitTelephone:"13794549574957",
            procurementContract:"01234",
            approachTime:"2017-10-1-10:00",
            playingTime:"2017-10-1-11:00"
          },
          {
            supplierCode:"345",
            materialName:"钢筋",
            specifications:"50kg",
            number:"500",
            company:"袋",
            unitPrice:"30.00",
            purchasingUnit:"上海隧道建设",
            purchaser:"林青霞",
            buyerContactPhone:"8569745812",
            supplyUnit:"上海水泥公司",
            personInChargeOfSupplyUnit:"周润发",
            supplyUnitTelephone:"13794549574957",
            procurementContract:"01234",
            approachTime:"2017-10-1-10:00",
            playingTime:"2017-10-1-11:00"
          },
          {
            supplierCode:"345",
            materialName:"沙子",
            specifications:"50kg",
            number:"500",
            company:"袋",
            unitPrice:"30.00",
            purchasingUnit:"上海隧道建设",
            purchaser:"张敏",
            buyerContactPhone:"8569745812",
            supplyUnit:"上海水泥公司",
            personInChargeOfSupplyUnit:"周润发",
            supplyUnitTelephone:"13794549574957",
            procurementContract:"01234",
            approachTime:"2017-10-1-10:00",
            playingTime:"2017-10-1-11:00"
          },
          {
            supplierCode:"345",
            materialName:"水泥",
            specifications:"50kg",
            number:"500",
            company:"袋",
            unitPrice:"30.00",
            purchasingUnit:"上海隧道建设",
            purchaser:"李易峰",
            buyerContactPhone:"8569745812",
            supplyUnit:"上海水泥公司",
            personInChargeOfSupplyUnit:"周润发",
            supplyUnitTelephone:"13794549574957",
            procurementContract:"01234",
            approachTime:"2017-10-1-10:00",
            playingTime:"2017-10-1-11:00"
          }
        ],
//        搜索
          search:'',
      }
    },
    computed:{
//      搜索
      tableDatas:function(){
        var search=this.search
        if(search){
          return this.tableData.filter(function(table){
            return Object.keys(table).some(function(key){
              return String(table[key]).toLowerCase().indexOf(search)>-1
            })
          })
        }
        return this.tableData
      },
      listDataLine(){
        return this.column.map((item,index)=>{
            return item.dataIndex
          })
      }
    },
  mounted(){
    this.newKeyColumn=this.column
    this.showCheckList=this.listDataLine
  },
  methods:{
    //      隐藏一列
    changeData(value){
      console.log(this.showCheckList);
      this.newKeyColumn=[]
      this.column.forEach((item,index)=>{
        this.showCheckList.forEach((val,ind)=>{
        if(val==item.dataIndex){
        this.newKeyColumn.push(item)
      }
    })
  })
  },
//    修改弹出框
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
        done();
    })
  .catch(_ => {});
  },
//    搜索
    handleIconClick(ev) {
      console.log(ev);
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
  /*筛选列*/
  .line{
    position:relative;
  }
  .lineHeader{
    border:1px solid #BFCBD9;
    background: #fff;
    width:200px;
    height:35px;
    text-align: center;
    line-height:35px;
    border-radius: 5px;
    color:#97A8BE;
  }
  .icon{
    margin-left: 10px;
  }
  .lineBox{
    border:1px solid #BFCBD9;
    width:200px;
    padding-left:40px;
    padding-top:10px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    overflow: auto;
    position:absolute;
    top:40px;
    z-index: 100;
  }
  .line-span{
    margin-left: 15px;
  }
</style>
