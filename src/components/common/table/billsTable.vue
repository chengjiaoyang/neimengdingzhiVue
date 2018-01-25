<template>
  <el-table
    :data="subjectData"
    border
    style="width: 100%">
    <el-table-column type="selection" align="center"></el-table-column>
    <el-table-column v-for="(list,index) in columns" :label="list.text" :key="list.index" header-align="center" show-overflow-tooltip>
      <template scope="scope">
        <span v-if="list.dataIndex!='keyProcess'">{{scope.row[list.dataIndex]}}</span>
                    <span v-if="list.dataIndex=='keyProcess'">
                       <el-select v-model="scope.row.keyProcess" placeholder="请选择" >
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
  </el-table>
</template>

<script>
  export default {
    name:"bills-table",
    props:{
      subjectData:{
        type:Array,
        default:function () {
          return [];
        }
      },
      columns:{
        type:Array,
        default:function () {
          return [];
        }
      }
    },
    data(){
    return{
      options: [
        {
          value: '一般工序',
          label: '一般工序'
        },
        {
          value: '关键工序',
          label: '关键工序'
        }
      ],
    }
  }
  }
</script>
