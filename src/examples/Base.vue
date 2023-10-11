<template>
  <div>
    <ElTableDraggable @onEnd="handleOnEnd">
      <el-table :data="list" row-key="id">
        <el-table-column :key="column.key" :label="column.key" :prop="column.key"
          v-for="column of columns"></el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <highlightjs language='html' :code="code" />
  </div>
</template>

<script lang="ts">
export const show = true
export const name = "简单列表拖拽"
export const nameEn = 'Base Draggable'
</script>

<script setup lang="ts">
import ListViewer from '../components/ListViewer.vue'
import { createData, columns } from '../utils/createTable'
import { reactive } from 'vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue'
const list = reactive(createData())
const code =
  `<ElTableDraggable>
  <el-table>
  </el-table>
</ElTableDraggable>`
const handleOnEnd = (args: any) => {
  console.log("handleOnEnd参数", args)
}
</script>