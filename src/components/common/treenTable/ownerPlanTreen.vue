<template>
      <div>
            <el-table :data="data" border style="width: 100%" :row-style="showTr" class="plant-tree">
              <!--row-style:行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。-->
              <el-table-column type="selection" align="center"></el-table-column>
              <el-table-column v-for="(column, index) in totalColumns.columns" :key="column.dataIndex"
                               :label="column.text" :prop="column.dataIndex" show-overflow-tooltip v-if="operation.isShow" >
                <template scope="scope">
                  <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
                  <button class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
                    <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
                    <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
                  </button>
                  <span v-else-if="index===0" class="ms-tree-space"></span>
                  <span v-if="column.dataIndex!='keyProcess'">{{scope.row[column.dataIndex]}}</span>
                  <span v-if="column.dataIndex=='keyProcess'">
                    <el-select v-model="scope.row.keyProcess" placeholder="请选择关键工序">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="当月" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.monthPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="当月材料用量" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.monthMaterials" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              </el-table-column>
              <el-table-column label="当季" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.seasonPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="当季材料用量" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.seasonMaterials" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="当年" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.yearPlan" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="当年材料用量" v-if="operation.isShow">
                <el-table-column v-for="(column ,index) in totalColumns.yearMaterials" :key="column.dataIndex" :label="column.text" :prop="column.dataIndex">
                  <template scope="scope">
                    {{scope.row[column.dataIndex]}}
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="操作" v-if="treeType === 'normal'" width="150"  fixed="right">
                <template scope="scope">
                  <el-button size="small" type="danger" @click="handleDelete(scope.row,dataSource)">删除</el-button>
                  <el-button size="small" type="warning" @click="amendFormList(scope.row,scope.$index)">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 修改弹出框-->
            <div>
              <el-dialog title="修改" :visible.sync="amend" size="large" :before-close="amendHandleClose">
                  <el-form :label-position="labelPosition" label-width="80px" :model="amendForm" :inline="true">
                    <el-form-item v-for="(list,index) in totalColumns.columns" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!--月-->
                    <div><span>月计划</span></div>
                    <el-form-item v-for="(list,index) in totalColumns.monthPlan" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!-- 月用量-->
                    <el-form-item v-for="(list,index) in totalColumns.monthMaterials" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!-- 季-->
                    <div><span>季计划</span></div>
                    <el-form-item v-for="(list,index) in totalColumns.seasonPlan" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!-- 季用量-->
                    <el-form-item v-for="(list,index) in totalColumns.seasonMaterials" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!-- 年-->
                    <div><span>年计划</span></div>
                    <el-form-item v-for="(list,index) in totalColumns.yearPlan" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
                    </el-form-item>
                    <!-- 年用量-->
                    <el-form-item v-for="(list,index) in totalColumns.yearMaterials" :key="list.dataIndex" :label="list.text" :prop="amendForm[list.dataIndex]">
                      <el-input v-model="amendForm[list.dataIndex]"></el-input>
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
          operation:{
            type:Object,
            default:function(){
              return false
            }
          },
    // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
          treeStructure: {
            type: Boolean,
            default: function () {
              return false
            }
          },
    // 这是相应的表头字段展示
          totalColumns: {
            type: Object,
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
                    labelPosition: 'right',
                    amendForm: {},
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
              amendFormList(row,index){
                    this.amendForm=row;
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
              handleDelete () {
                    this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'error'
                    })
                    .then(() => {
                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                          })
                    })
                    .catch(() => {
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
