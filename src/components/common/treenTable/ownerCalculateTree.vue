<template>
  <div>
    <el-table
      :data="data"
      border
      style="width: 100%"
      :row-style="showTr">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text" show-overflow-tooltip>
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
      <div class="amend">
        <el-dialog
          title="修改"
          :visible.sync="amend"
          size="small">
          <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="amendFormLabel">
            <el-form-item label="序号">
              <el-input v-model="amendFormLabel.order"></el-input>
            </el-form-item>
            <el-form-item label="细目号">
              <el-input v-model="amendFormLabel.detail"></el-input>
            </el-form-item>
            <el-form-item label="细目名称">
              <el-input v-model="amendFormLabel.detailName"></el-input>
            </el-form-item>
            <el-form-item label="起桩号">
              <el-input v-model="amendFormLabel.pileNum"></el-input>
            </el-form-item>
            <el-form-item label="止桩号">
              <el-input v-model="amendFormLabel.stopNum"></el-input>
            </el-form-item>
            <el-form-item label="分部名称">
              <el-input v-model="amendFormLabel.subsectionName"></el-input>
            </el-form-item>
            <el-form-item label="分项名称">
              <el-input v-model="amendFormLabel.subitemname"></el-input>
            </el-form-item>
            <el-form-item label="结构样式(400章)">
              <el-input v-model="amendFormLabel.structuralStyle"></el-input>
            </el-form-item>
            <el-form-item label="长度(300章)">
              <el-input v-model="amendFormLabel.length"></el-input>
            </el-form-item>
            <el-form-item label="桥长(300章)">
              <el-input v-model="amendFormLabel.bridgeLength"></el-input>
            </el-form-item>
            <el-form-item label="结构层宽度(300章)">
              <el-input v-model="amendFormLabel.structureWidth"></el-input>
            </el-form-item>
            <el-form-item label="部位">
              <el-input v-model="amendFormLabel.position"></el-input>
            </el-form-item>
            <el-form-item label="具体位置">
              <el-input v-model="amendFormLabel.specificLocation"></el-input>
            </el-form-item>
            <el-form-item label="单位">
              <el-input v-model="amendFormLabel.company"></el-input>
            </el-form-item>
            <el-form-item label="完成数量">
              <el-input v-model="amendFormLabel.completedQuantity"></el-input>
            </el-form-item>
            <el-form-item label="完成产值">
              <el-input v-model="amendFormLabel.completedOutputValue"></el-input>
            </el-form-item>
            <el-form-item label="本期申报">
              <el-input v-model="amendFormLabel.currentDeclaration"></el-input>
            </el-form-item>
            <el-form-item label="本期核准">
              <el-input v-model="amendFormLabel.approvalOfThisIssue"></el-input>
            </el-form-item>
            <el-form-item label="中期支付">
              <el-input v-model="amendFormLabel.interimPayment"></el-input>
            </el-form-item>
            <el-form-item label="批复文件">
              <el-input v-model="amendFormLabel.writtenReplyDocument"></el-input>
            </el-form-item>
            <el-form-item label="编制人">
              <el-input v-model="amendFormLabel.compilingPersonnel"></el-input>
            </el-form-item>
            <el-form-item label="编制日期">
              <el-input v-model="amendFormLabel.compilationDate"></el-input>
            </el-form-item>
            <el-form-item label="关键工序">
              <template scope="scope">
                <el-select v-model="amendFormLabel.keyProcess" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="amend = false">取 消</el-button>
              <el-button type="primary" @click="amend = false">确 定</el-button>
            </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import Utils from './utils/index.js'
  //  import Vue from 'vue'
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
// 这是相应的字段展示
      columns: {
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
      }
    },
    data () {
    return {
      //      修改
      amend:false,
      labelPosition: 'right',
      amendFormLabel: {
        order:"",
        detail:"",
        detailName:"",
        pileNum:"",
        stopNum:"",
        subsectionName:"",
        subitemname:"",
        structuralStyle:"",
        length:"",
        bridgeLength:"",
        structureWidth:"",
        position:"",
        specificLocation:"",
        company:"",
        completedQuantity:"",
        completedOutputValue:"",
        currentDeclaration:"",
        approvalOfThisIssue:"",
        interimPayment:"",
        writtenReplyDocument:"",
        compilingPersonnel:"",
        compilationDate:"",
        keyProcess:""
      },
      amendOptions: [
        {
          value: '一般线路',
          label: '关键线路'
        },
        {
          value: '关键线路',
          label: '关键线路'
        }
      ],
      value: '',
      options: [
        {
          value: '选项1',
          label: '关键线路'
        }, {
          value: '选项2',
          label: '一般线路'
        }
      ],
      value: ''
    }
  },
  computed: {
    // 格式化数据源
    data: function () {
      let me = this
      if (me.treeStructure) {
        let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
        console.log(data)
        return data
      }
      return me.dataSource
    }
  },
  methods: {
    //    修改
    amendAddHandleClose(done) {
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
  handleDelete (row) {
    console.log(row)
    var self = this;
    console.log(obj)
    console.log("查看"+self.dataSource)
    alert('确认删除吗?');
//              if (self.$parent.dataSource) {
//                  self.$parent.dataSource.children.forEach((item, index) => {
//                      if (item.name == model.name) {
//                        self.$parent.dataSourcel.children.splice(index, 1);
//                      }
//                   })
//               }
//      console.log("子元素"+this.dataSource[0])
//      for(var i=0;i<this.dataSource.length;i++){
//        this.dataSource[0][children].splice(row,1)
//      }
//      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
//        confirmButtonText: '确定',
//        cancelButtonText: '取消',
//        type: 'error'
//      }).then(() => {
//        this.$message({
//          type: 'success',
//          message: '删除成功!'
//        })
//      }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消删除'
//        })
//      })
  },
  //    alter () {
  //      this.$confirm('修改该记录, 是否继续?', '提示', {
  //        confirmButtonText: '确定',
  //        cancelButtonText: '取消',
  //        type: 'error'
  //      }).then(() => {
  //        this.$message({
  //          type: 'success',
  //          message: '修改成功!'
  //        })
  //      }).catch(() => {
  //        this.$message({
  //          type: 'info',
  //          message: '已取消'
  //        })
  //      })
  //    },
  }
  }
</script>
<style scoped>
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
  table td{
    line-height: 26px;
  }
</style>
