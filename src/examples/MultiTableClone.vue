<template>
  <el-alert show-icon type="warning" :closable="false">如果连续拖拽相同行到同一表格 会在行的id相同的情况下出现一些bug 不过一般来说现实场景里也不会有id相同的情况
    可以想法禁止拖入已有此数据的表格</el-alert>
  <el-row :gutter="20">
    <el-col :key="index" :span="24 / lists.length" v-for="(list, index) of lists">
      <ElTableDraggable :group="{ name: 'multiTableClone', pull: 'clone' }" @on-end="handleOnEnd">
        <el-table :data="list" row-key="id">
          <el-table-column :key="column.key" :label="column.key" :prop="column.key"
            v-for="(column, _) of columns"></el-table-column>
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
export const nameEn = 'Multi Table Clone'
</script>
<script setup lang='ts'>
import { reactive } from 'vue';
import { createData, columns } from '../utils/createTable'
import ListViewer from '../components/ListViewer.vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue';
const lists = reactive([createData(6), createData(2)])
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

const handleOnEnd = (args: any) => {
  console.log("handleOnEnd参数", args)
}
</script>


<style lang="scss"></style>