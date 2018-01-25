<template>
  <div>
    <el-table
      :data="data"
      border
      style="width: 100%"
      :row-style="showTr" class="plant-tree">
      <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                       :label="column.text" show-overflow-tooltip>
        <template scope="scope">
          <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
          <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
            <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
          </button>
          <span v-else-if="index===0" class="ms-tree-space"></span>
          <span v-if="column.dataIndex !='keyProcess'">{{scope.row[column.dataIndex]}}</span>
          <span v-if="column.dataIndex=='keyProcess'">
             <el-select v-model="scope.row.keyProcess" placeholder="请选择关键工序">
               <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="年计划">
        <el-table-column v-for="(column ,index) in yearPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      </el-table-column>
      <el-table-column label="半年计划">
        <el-table-column v-for="(column ,index) in halfYearPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="季计划">
        <el-table-column v-for="(column ,index) in seasonPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="月计划">
        <el-table-column v-for="(column ,index) in monthPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周计划">
        <el-table-column v-for="(column ,index) in weekPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="日计划">
        <el-table-column v-for="(column ,index) in dayPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="操作" v-if="treeType === 'normal'" width="150"  fixed="right">
        <template scope="scope">
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row,dataSource)"
            >
            删除
          </el-button>
          <el-button
            size="small"
            type="warning"
            @click="amend=true">
            更改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改弹出框-->
    <div>
      <el-dialog
        title="修改"
        :visible.sync="amend"
        size="large"
        :before-close="amendHandleClose">
        <el-form :label-position="labelPosition" label-width="160px" :model="amendForm" :inline="true">
          <el-form-item label="序号">
            <el-input v-model="amendForm.codingSite"></el-input>
          </el-form-item>
          <el-form-item label="细目号">
            <el-input v-model="amendForm.detailNumber"></el-input>
          </el-form-item>
          <el-form-item label="细目名称">
            <el-input v-model="amendForm.pileNumber"></el-input>
          </el-form-item>
          <el-form-item label="起桩号">
            <el-input v-model="amendForm.detailName"></el-input>
          </el-form-item>
          <el-form-item label="止桩号">
            <el-input v-model="amendForm.stopNumber"></el-input>
          </el-form-item>
          <el-form-item label="分部名称">
            <el-input v-model="amendForm.subsectionName"></el-input>
          </el-form-item>
          <el-form-item label="分项名称">
            <el-input v-model="amendForm.subItemName"></el-input>
          </el-form-item>
          <el-form-item label="结构形式(400章)">
            <el-input v-model="amendForm.structuralStyle"></el-input>
          </el-form-item>
          <el-form-item label="长度(300章)">
            <el-input v-model="amendForm.length"></el-input>
          </el-form-item>
          <el-form-item label="桥长(300章)">
            <el-input v-model="amendForm.theLengthOfTheBridge"></el-input>
          </el-form-item>
          <el-form-item label="结构层宽度(300章)">
            <el-input v-model="amendForm.structureWidth"></el-input>
          </el-form-item>
          <el-form-item label="关键工序">
            <el-input v-model="amendForm.keyProcess"></el-input>
          </el-form-item>
          <el-form-item label="部位">
            <el-input v-model="amendForm.position"></el-input>
          </el-form-item>
          <el-form-item label="具体位置">
            <el-input v-model="amendForm.specificLocation"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="amendForm.company"></el-input>
          </el-form-item>
          <el-form-item label="清单单价">
            <el-input v-model="amendForm.listUnitPrice"></el-input>
          </el-form-item>
          <el-form-item label="图纸数量">
            <el-input v-model="amendForm.drawingQuantity"></el-input>
          </el-form-item>
          <el-form-item label="上期累计完成数量">
            <el-input v-model="amendForm.lastCompletedQuantity"></el-input>
          </el-form-item>
          <el-form-item label="剩余数量">
            <el-input v-model="amendForm.remainingQuantity"></el-input>
          </el-form-item>
          <div class="sign">当月</div>
          <el-form-item label="计划数量">
            <el-input v-model="amendForm.oplannedQuantity"></el-input>
          </el-form-item>
          <el-form-item label="计划产值">
            <el-input v-model="amendForm.oplannedOutputValue"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间">
            <el-date-picker
              v-model="amendForm.oscheduleStartTime"
              type="date"
              placeholder="选择开始日期"
              :picker-options="opeerFormStartDate">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间">
            <el-date-picker
              v-model="amendForm.oendOfSchedule"
              type="date"
              placeholder="选择开始日期"
              :picker-options="opeerFormOverDate">
            </el-date-picker>
          </el-form-item>
          <div class="sign">当月材料用量</div>
          <el-form-item label="混凝土">
            <el-input v-model="amendForm.oconcrete"></el-input>
          </el-form-item>
          <el-form-item label="带肋钢筋">
            <el-input v-model="amendForm.oribbedBars"></el-input>
          </el-form-item>
          <el-form-item label="光圆钢筋">
            <el-input v-model="amendForm.ocircularReinforcement"></el-input>
          </el-form-item>
          <el-form-item label="钢管">
            <el-input v-model="amendForm.osteelPipe"></el-input>
          </el-form-item>
          <el-form-item label="铁板">
            <el-input v-model="amendForm.osteelPlate"></el-input>
          </el-form-item>
          <div class="sign">当季</div>
          <el-form-item label="计划数量">
            <el-input v-model="amendForm.tplannedQuantity"></el-input>
          </el-form-item>
          <el-form-item label="计划产值">
            <el-input v-model="amendForm.tplannedOutputValue"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间">
            <el-date-picker
              v-model="amendForm.tscheduleStartTime"
              type="date"
              placeholder="选择开始日期"
              :picker-options="tpeerFormStartDate">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间">
            <el-date-picker
              v-model="amendForm.tendOfSchedule"
              type="date"
              placeholder="选择开始日期"
              :picker-options="tpeerFormOverDate">
            </el-date-picker>
          </el-form-item>
          <div class="sign">当季材料用量</div>
          <el-form-item label="混凝土">
            <el-input v-model="amendForm.tconcrete"></el-input>
          </el-form-item>
          <el-form-item label="带肋钢筋">
            <el-input v-model="amendForm.tribbedBars"></el-input>
          </el-form-item>
          <el-form-item label="光圆钢筋">
            <el-input v-model="amendForm.tcircularReinforcement"></el-input>
          </el-form-item>
          <el-form-item label="钢管">
            <el-input v-model="amendForm.tsteelPipe"></el-input>
          </el-form-item>
          <el-form-item label="铁板">
            <el-input v-model="amendForm.tsteelPlate"></el-input>
          </el-form-item>
          <div class="sign">当年</div>
          <el-form-item label="计划数量">
            <el-input v-model="amendForm.yplannedQuantity"></el-input>
          </el-form-item>
          <el-form-item label="计划产值">
            <el-input v-model="amendForm.yplannedOutputValue"></el-input>
          </el-form-item>
          <el-form-item label="计划开始时间">
            <el-date-picker
              v-model="amendForm.yscheduleStartTime"
              type="date"
              placeholder="选择开始日期"
              :picker-options="ypeerFormStartDate">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="计划结束时间">
            <el-date-picker
              v-model="amendForm.yendOfSchedule"
              type="date"
              placeholder="选择开始日期"
              :picker-options="ypeerFormOverDate">
            </el-date-picker>
          </el-form-item>
          <div class="sign">当年材料用量</div>
          <el-form-item label="混凝土">
            <el-input v-model="amendForm.ymaterialConsumption"></el-input>
          </el-form-item>
          <el-form-item label="带肋钢筋">
            <el-input v-model="amendForm.yconcrete"></el-input>
          </el-form-item>
          <el-form-item label="光圆钢筋">
            <el-input v-model="amendForm.yribbedBars"></el-input>
          </el-form-item>
          <el-form-item label="钢管">
            <el-input v-model="amendForm.ycircularReinforcement"></el-input>
          </el-form-item>
          <el-form-item label="铁板">
            <el-input v-model="amendForm.ysteelPipe"></el-input>
          </el-form-item>
        </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="amend = false">取 消</el-button>
              <el-button type="primary" @click="amend = false">确 定</el-button>
            </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import Utils from './utils/index.js'
  export default {
    name: 'tree-grid',
    props: {
// 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 这是相应的表头字段展示
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
//      年
      yearPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
//      半年
      halfYearPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
//      季
      seasonPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
//      月
      monthPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
//      周
      weekPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
//      天
      dayPlan: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这是数据源
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
      requestUrl: {
        type: String,
        default: function () {
          return ''
        }
      },
// 这个是是否展示操作列
      treeType: {
        type: String,
        default: function () {
          return 'normal'
        }
      },
// 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 编辑蒙版是否显示，默认不显示
      editMarkVisible:{
        type:Boolean,
        default: function () {
          return false
        }
      }
    },
    data () {
    return {
      //      关键工序
      options: [
        {
          value: '选项1',
          label: '关键线路'
        }, {
          value: '选项2',
          label: '一般线路'
        }
      ],
      value: '',
      //        x修改
      amend:false,
      //        同级新增
      labelPosition: 'right',
      amendForm: {
        codingSite:"",
        detailNumber:"",
        pileNumber:"",
        detailName:"",
        stopNumber:"",
        subsectionName:"",
        subItemName:"",
        structuralStyle:"",
        length:"",
        theLengthOfTheBridge:"",
        structureWidth:"",
        keyProcess:"",
        position:"",
        specificLocation:"",
        company:"",
        listUnitPrice:"",
        drawingQuantity:"",
        lastCompletedQuantity:"",
        remainingQuantity:"",
        oplannedQuantity:"",
        oplannedOutputValue:"",
        oscheduleStartTime:"",
        oendOfSchedule:"1",
        oconcrete:"",
        oribbedBars:"",
        ocircularReinforcement:"",
        osteelPipe:"",
        osteelPlate:"",
        tplannedQuantity:"",
        tplannedOutputValue:"",
        tscheduleStartTime:"",
        tendOfSchedule:"",
        tconcrete:"",
        tribbedBars:"",
        tcircularReinforcement:"",
        tsteelPipe:"",
        tsteelPlate:"",
        yplannedQuantity:"",
        yplannedOutputValue:"",
        yscheduleStartTime:"",
        yendOfSchedule:"",
        ymaterialConsumption:"",
        yconcrete:"",
        yribbedBars:"",
        ycircularReinforcement:"",
        ysteelPipe:"",
        ysteelPlate:""
      },
      opeerFormStartDate: {
        disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  opeerFormOverDate: {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  tpeerFormStartDate: {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  tpeerFormOverDate: {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  ypeerFormStartDate: {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  ypeerFormOverDate: {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    }
  },
  }
  },
  computed: {
//    修改弹出框

    // 格式化数据源
    data: function () {
      let me = this
      if (me.treeStructure) {
        let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
        console.log(data)
        return data
      }
      return me.dataSource
    },
  },
  methods: {
    //      修改
    amendHandleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
        done();
    })
  .catch(_ => {});
  },
  // 显示行
  showTr: function (row, index) {
    let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
    row._show = show
    return show ? '' : 'display:none;'
  },
  // 展开下级
  toggle: function (trIndex) {
    let me = this
    let record = me.data[trIndex]
    record._expanded = !record._expanded
  },
  // 显示层级关系的空格和图标
  spaceIconShow (index) {
    let me = this
    if (me.treeStructure && index === 0) {
      return true
    }
    return false
  },
  // 点击展开和关闭的时候，图标的切换
  toggleIconShow (index, record) {
    let me = this
    if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
      return true
    }
    return false
  },
  handleDelete () {
    this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
  }).catch(() => {
    this.$message({
      type: 'info',
      message: '已取消删除'
    })
  })
  },
  // 获取到 row/column/$index/store
  getTableStates(index,row){
    console.log(index);
    console.log("0"+row)
  },
  }
  }
</script>
<style >
  .ms-tree-space{position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;}
  .ms-tree-space::before{content: ""}
  .plant-tree table td{
    line-height: 26px;
  }
  .plant-tree > .el-table__header-wrapper > table col:nth-of-type(1){
    min-width:200px;
  }
</style>
