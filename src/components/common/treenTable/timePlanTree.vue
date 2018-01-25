<template>
  <div>
    <el-table
      :data="data"
      border
      style="width: 100%"
      :row-style="showTr" class="plant-tree">
      <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column v-for="(column, index) in lineList.columns" :key="column.dataIndex"
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
      <el-table-column label="年计划" v-if="! isA">
        <el-table-column v-for="(column ,index) in lineList.year" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="半年计划" v-if="! isA">
        <el-table-column v-for="(column ,index) in lineList.halfYear" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="季计划" v-if="isA">
        <el-table-column v-for="(column ,index) in lineList.season" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="月计划" v-if="isA">
        <el-table-column v-for="(column ,index) in lineList.month" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="周计划" v-if="isA">
        <el-table-column v-for="(column ,index) in lineList.week" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
          <template scope="scope">
            {{scope.row[column.dataIndex]}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="日计划" v-if="isA">
        <el-table-column v-for="(column ,index) in lineList.day" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
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
        </template>
      </el-table-column>
    </el-table>
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
      lineList:{
        type:Object,
        default: function () {
          return []
        }
      },
//      columns: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      year: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      halfYear: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      season: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      month: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      week: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
//      day: {
//        type: Array,
//        default: function () {
//          return []
//        }
//      },
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
      isA:false,
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
