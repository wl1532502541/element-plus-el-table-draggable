<template>
  <el-row :gutter="20">
    <el-col :key="index" :span="24 / lists.length" v-for="(list, index) of lists">
        <ElTableDraggable :group="list.group" @on-end="handleOnEnd">
          <el-table :data="list.data" row-key="id">
            <el-table-column
              :key="column.key"
              :label="column.key"
              :prop="column.key"
              v-for="column of columns"
            ></el-table-column>
          </el-table>
        </ElTableDraggable>
        <ListViewer :value="list.data" />
      </el-col>
  </el-row>
    <highlightjs language='html' :code="code" />
</template>

<script lang="ts">
export const show = true
export const name = "禁用拖拽"
export const nameEn = 'DisablingSorting'
</script>
<script setup lang='ts'>
import { reactive } from 'vue';
import { createData, columns } from '../utils/createTable'
import ListViewer from '../components/ListViewer.vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue';
const lists = reactive([
  { 
    data:createData(6),
    group:{
      name:"multiTable",
      put: false,
      pull: 'clone'
    }
  },{
    data:createData(1),
    group:{
      name:"multiTable"
    }
}
])
const code = `
<!-- 列表 -->            
<ElTableDraggable :group="{ name: 'multiTable', put: false }">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable :group="{ name: 'multiTable' }">
  <el-table>
  </el-table>
</ElTableDraggable>            
            `
const handleOnEnd = (args:any)=>{
  console.log("handleOnEnd参数",args)
}
</script>


<style lang="scss">

</style>