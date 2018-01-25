<template>
  <div>
    <el-table :data="data" border style="width: 100%" :row-style="showTr" ref="multipleTable" @selection-change="changeList">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                       :label="column.text"  :prop="column.dataIndex" show-overflow-tooltip>
        <template scope="scope">
          <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
          <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
            <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
          </button>
          <span v-else-if="index===0" class="ms-tree-space"></span>
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
      <el-table-column label="操作"  width="260">
        <template scope="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
          <el-button size="small" type="warning" @click="amendData(scope.$index,scope.row)">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改的弹出框-->
    <div class="amend">
      <el-dialog title="修改" :visible.sync="amend" size="small">
        <el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="amendFormLabel">
          <el-form-item v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text">
            <el-input v-model="amendFormLabel[list.dataIndex]"></el-input>
          </el-form-item>
        </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="amend = false">取 消</el-button>
              <el-button type="primary" @click="amendTrue()">确 定</el-button>
            </span>
      </el-dialog>
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
        },
        peerAddFormLabel: {
          type: Object,
          default: function () {
            return false
          }
        },
      },
      data () {
          return {
  //        修改
              amend:false,
              labelPosition:'right',
              amendFormLabel:{},
              multipleSelection:[],
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
    //      删除
        handleDelete(index,row){
          console.log(row)
          this.dataSource.splice(row,1)
        },
        changeList(rows) {
              alert(1)
                  rows.forEach(row => {
                        console.log(row.id)
                  });
        },
        handleSelectionChange(val) {
          this.multipleSelection = val
        },
        //    修改
        amendHandleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
            done();
          })
          .catch(_ => {});
        },
        amendData(index,row){
          this.amendFormLabel=row
          this.amend=true
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
        },
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
