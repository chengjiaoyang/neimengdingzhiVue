<template>
    <div class="MixedMaterial">
        <!-- 操作导航-->
        <div class="operation">
          <!-- 新增混合材料-->
          <div>
            <el-button type="info" size="small" @click="add=true">新增混合材料</el-button>
          </div>
          <!-- 新增基础材料-->
          <div>
            <el-button type="success" size="small" @click="basics=true">新增基础材料</el-button>
          </div>
          <!-- 查询-->
          <div>
            <el-input placeholder="请输入关键字" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
          </div>
        </div>
        <!-- 表格-->
        <div>
          <el-table :data="blendTables"  border style="width: 100%">
            <el-table-column type="selection" align="center"></el-table-column>

            <el-table-column v-for="(list,index) in columns" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex" :render-header="renderHeader" width="180">
              <template scope="scope">
                    {{scope.row[list.dataIndex]}}
              </template>
            </el-table-column>

            <el-table-column v-for="(list,index) in newColumn" :key="list.dataIndex" :label="list.text" :prop="list.dataIndex">
                <template scope="scope">
                  <span>{{scope.row[list.dataIndex]}}</span>
                </template>
            </el-table-column>

            <el-table-column prop="address" label="操作">
              <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index,blendTable)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 弹框-->
        <div>
          <!-- 编辑的弹出框-->
          <el-dialog title="编辑" :visible.sync="edit" size="small" :before-close="addHandleClose">
            <el-form :inline="true"  :label-position="labelPosition" label-width="150px" :model="blendForm">
              <el-form-item v-for="(list,index) in column" :label="list.text" :key="list.dataIndex" :prop="blendForm[list.dataIndex]">
                <el-input v-model="blendForm[list.dataIndex]"></el-input>
              </el-form-item>

              <el-form-item v-for="(list,index) in columns" :label="list.text" :key="list.dataIndex" :prop="blendForm[list.dataIndex]">
                <el-input v-model="blendForm[list.dataIndex]"></el-input>
              </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="add = false">取 消</el-button>
              <el-button type="primary" @click="editTable()">确 定</el-button>
            </span>
          </el-dialog>
          <!-- 新增混合材料-->
          <el-dialog title="新增混合材料" :visible.sync="add" size="tiny" :before-close="editHandleClose">
          <el-form :label-position="labelPosition" label-width="150px" :model="addBlendForm">
            <el-form-item v-for="(list,index) in columns" :label="list.text" :key="list.dataIndex" :prop="addBlendForm[list.dataIndex]">
              <el-input v-model="addBlendForm[list.dataIndex]"></el-input>
            </el-form-item>

            <el-form-item v-for="(list,index) in column" :label="list.text" :key="list.dataIndex" :prop="addBlendForm[list.dataIndex]">
              <el-input v-model="addBlendForm[list.dataIndex]"></el-input>
            </el-form-item>

          </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="edit = false">取 消</el-button>
              <el-button type="primary" @click="addTable()">确 定</el-button>
            </span>
        </el-dialog>
          <!-- 新增基础材料-->
          <el-dialog title="新增基础材料" :visible.sync="basics" size="tiny" :before-close="editHandleClose">
            <el-form :label-position="labelPosition" label-width="150px" :model="basicsForm">
              <el-form-item label="基础材料名称">
                <el-input v-model="basicsForm.text"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="basics= false">取 消</el-button>
              <el-button type="primary" @click="basicsTable()">确 定</el-button>
            </span>
          </el-dialog>
        </div>
    </div>
</template>
<script>
  export default{
        data(){
            return{
        //        新增基础材料
                basics:false,
                newColumn:[],
                basicsForm: {
                  text:"",
                  dataIndex:"basicsName"
                },
        //        新增混合材料
                add:false,
                addBlendForm: {},
        //        编辑
                edit:false,
                labelPosition: 'right',
                blendForm: {},
        //        表头
                columns:[
                {
                  text:"混合材料名称",
                  dataIndex:"blendName"
                },
              ],
                column:[
                  {
                    text:"水",
                    dataIndex:"water"
                  },
                  {
                    text:"砂",
                    dataIndex:"sand"
                  },
                  {
                    text:"石子",
                    dataIndex:"gravel"
                  },
                  {
                    text:"水泥",
                    dataIndex:"cement"
                  },
                  {
                    text:"沙子",
                    dataIndex:"sands"
                  },
                  {
                    text:"石灰",
                    dataIndex:"lime"
                  }
                ],

        //        表格
                blendTable: [
                  {
                    blendName:'混凝土',
                    water: '1:300',
                    sand: '1:200',
                    gravel:'1:100',
                    cement: '1:0',
                    sands: '0',
                    lime: '1:20'
                  },
                  {
                    blendName:'水泥',
                    water: '1:300',
                    sand: '1:200',
                    gravel:'1:100',
                    cement: '1:0',
                    sands: '0',
                    lime: '1:20'
                  },
                  {
                    blendName:'沥青',
                    water:'1:300',
                    sand:'1:200',
                    gravel:'1:100',
                    cement: '1:0',
                    sands: '0',
                    lime: '1:20'
                  }
                ],
        //          搜索
                search:'',
            }
        },
        computed:{
            blendTables:function(){
              var search=this.search
              if(search){
                return this.blendTable.filter(function(searchTable){
                  return Object.keys(searchTable).some(function(key){
                    return String(searchTable[key]).toLowerCase().indexOf(search)>-1
                  })
                })
              }
              return this.blendTable
            },
        },
        mounted(){
              this.newColumn=[];
              this.column.forEach((item,index)=>{
                    this.newColumn.push(item)
             })
          },
        methods:{
    //      添加基础材料
          basicsTable(){
                var basicsForm={
                  text:this.basicsForm.text,
                  dataIndex:this.basicsForm.dataIndex
                }
                console.log(basicsForm);
                this.newColumn.push(basicsForm)
                console.log(this.newColumn)
                this.basics=false
          },
    //      自定义表头
          renderHeader(createElement, { column,$index }) {
            var self=this
            return createElement(
              'div', {
                attrs:{style:"border-top:60px #DFE6EC solid;width:0;height:0;border-left:181px #EEF1F6 solid;position:relative;background-color: red; left:-18px;"}
              },
              [
                createElement('em', {
                    attrs: { type: 'text',style:" font-style:normal;display:block;position:absolute;top:-45px;left:-60px;" },
                    'class': 'tr'
                  }, ['基础材料']
                ),
                createElement('em', {
                    attrs: { type: 'text', style:"font-style:normal;display:block;position:absolute;top:-25px;left:-140px;"},
                    'class': 'lb'
                  }, ['混合材料']
                ),
              ]
            );
          },
    //      新增混合材料
          addHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                })
                .catch(_ => {});
          },
          addTable:function(){
              this.blendTable.push(this.addBlendForm)
              this.add=false
            },
    //      编辑
          editHandleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                  done();
                })
                .catch(_ => {});
          },
          handleEdit:function(index, row) {
                  this.$confirm('此操作将修改该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  })
                  .then(() => {
                    this.selected=index
                    this.blendForm=JSON.parse(JSON.stringify(this.blendTable[index]))
                    this.edit=true
                  })
                  .catch(() => {
                      this.$message({
                        type: 'info',
                        message: '已取消'
                      });
                });
          },
          editTable:function(){
              this.$set(this.blendTable,this.selected,this.blendForm)
              this.edit=false;
              this.$message({
                    type: 'success',
                    message: '修改成功!'
              });
            },
    //      删除
          handleDelete(index, row) {
                  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                  })
                  .then(() => {
                        row.splice(index,1)
                        this.$message({
                          type: 'success',
                          message: '删除成功!'
                        });
                  })
                  .catch(() => {
                        this.$message({
                              type: 'info',
                              message: '已取消删除'
                        });
                  });
          },
    //      搜索
          handleIconClick(ev) {
            console.log(ev);
          }
        }
  }
</script>
<style scoped>
  .operation{
    margin:30px 0 30px 0;
    display:flex;
  }
  .operation>div{
    margin-left:20px;
  }
</style>
