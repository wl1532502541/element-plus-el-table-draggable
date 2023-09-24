<template>
  <div>
    <ElTableDraggable handle=".el-icon-rank" v-on="$listeners">
      <el-table :data="list" row-key="id" border>
        <el-table-column width="40">
          <!-- <i class="el-icon-rank" /> -->
          <el-icon class="el-icon-rank"><Rank /></el-icon>
        </el-table-column>
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
        </el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer :code="code" language="html"></CodeViewer>
  </div>
</template>

<script lang="ts">
export const show = true
export const name = "Handle可拖拽"
export const nameEn = 'Handle'
</script>
<script setup lang="ts">
import {Rank} from "@element-plus/icons-vue"
import { reactive } from 'vue';
import { createData, columns } from '../utils/createTable'
import ListViewer from '../components/ListViewer.vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue'
const list = reactive(createData());
const code =  `
<ElTableDraggable handle=".el-icon-rank" v-on="$listeners">
      <el-table :data="list" row-key="id" border>
        <el-table-column width="30">
          <i class="el-icon-rank" />
        </el-table-column>
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
        </el-table-column>
      </el-table>
    </ElTableDraggable>`
</script>