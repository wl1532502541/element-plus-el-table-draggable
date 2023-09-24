<template>
  <el-row :gutter="20">
    <el-col :key="index" :span="24 / lists.length" v-for="(list, index) of lists">
        <ElTableDraggable :group="{name:'multiTable',pull:'clone'}" @on-end="handleOnEnd">
          <el-table :data="list">
            <el-table-column
              :key="column.key"
              :label="column.key"
              :prop="column.key"
              v-for="(column,index) of columns"
            ></el-table-column>
          </el-table>
        </ElTableDraggable>
        <ListViewer :value="list" />
      </el-col>
  </el-row>
    <highlightjs language='html' :code="code" />
</template>

<script lang="ts">
export const show = true
export const name = "多表格相互拖拽克隆"
export const nameEn = 'Multi Table Clone(有bug)'
</script>
<script setup lang='ts'>
import { reactive } from 'vue';
import { createData, columns } from '../utils/createTable'
import ListViewer from '../components/ListViewer.vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue';
const lists = reactive([createData(6),createData(2)])
const code = `
<!-- 列表 -->            
<ElTableDraggable :group="{name: 'cloneMultiTable', pull: 'clone'}">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable :group="{name: 'cloneMultiTable', pull: 'clone'}">
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