<template>
  <div>
    <ElTableDraggable >
      <el-table :data="list" row-key="id">
        <el-table-column
          :key="column.key"
          :label="column.key"
          :prop="column.key"
          v-for="column of columns"
        ></el-table-column>
      </el-table>
    </ElTableDraggable>
    <!-- <ListViewer :value="list" /> -->
    <!-- <CodeViewer :code="code" language="html"></CodeViewer> -->
    <highlightjs language='html' :code="code" />
  </div>
</template>

<script>
export const show = false
export const name = "简单列表拖拽(vue2写法 弃用)"
export const nameEn = 'Base Draggable'
import { createData, columns } from '../utils/createTable'
import ElTableDraggable from '@/components/ElTableDraggable.vue'
// import 'highlight.js/lib/common';
// import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
    data() {
        return {
            columns,
            list: createData(),
            code: `<SortableElTable v-on="$listeners">
  <el-table :data="list" row-key="id">
    <el-table-column
      :key="column.key"
      :label="column.key"
      :prop="column.key"
      v-for="column of columns"
    ></el-table-column>
  </el-table>
</SortableElTable>`
        };
    },
    components: { ElTableDraggable }
}
</script>