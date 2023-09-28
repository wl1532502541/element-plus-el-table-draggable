<template>
  接口调用失败可以重新拉一遍数据来复位，但是比较浪费性能，可以通过调用内置复位函数来免去一次请求
  <el-row :gutter="20">
    <el-col  :span="12">
        <ElTableDraggable :group="pool.group" @on-end="handleOnEndSuccess" v-loading="loading">
          <el-table :data="pool.data" row-key="id">
            <el-table-column
              :key="column.key"
              :label="column.key"
              :prop="column.key"
              v-for="column of columns"
            ></el-table-column>
          </el-table>
        </ElTableDraggable>
        <ListViewer :value="pool.data" />
      </el-col>
      <el-col :span="12">
        <el-collapse v-model="activeNames">
          <el-collapse-item :title="iteration.iterationName" :name="iteration.iterationName" v-for="iteration in lists" >
            <ElTableDraggable  :group="iteration.group" @on-end="iteration.onEnd" v-loading="loading">
              <el-table max-height="250"  :data="iteration.data" row-key="id">
                <el-table-column
                  :key="column.key"
                  :label="column.key"
                  :prop="column.key"
                  v-for="column of columns"
                ></el-table-column>
              </el-table>
            </ElTableDraggable>
          </el-collapse-item>
        </el-collapse>

        <ListViewer :value="lists" />
      </el-col>
  </el-row>
    <highlightjs language='html' :code="code" />
</template>

<script lang="ts">
export const show = true
export const name = "异步调用失败复位（需求池为例）"
export const nameEn = 'Reposition'
</script>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { createData, columns } from '../utils/createTable'
import ListViewer from '../components/ListViewer.vue'
import ElTableDraggable from '@/components/ElTableDraggable.vue';
import { ElMessage } from 'element-plus';
const pool = reactive({
  group: "StoryPool",
  data:createData(6)
})

const handleOnEndSuccess = (evt:any, reposition: Function)=>{
  if(evt.pullMode){ // 排除了在自己列表内拖动的情况
    simulationRequest(true)
      .then(res=>{console.log("调用成功");})
      .catch(()=>{
        ElMessage.warning("请求失败 复原顺序")
        // getData() // 重新拉一遍数据
        reposition()
      })
  }
}

const handleOnEndFail = (evt:any, reposition: Function)=>{
  if(evt.pullMode){ // 排除了在自己列表内拖动的情况
    simulationRequest(false)
      .then(res=>{console.log("调用成功");})
      .catch(()=>{
        ElMessage.warning("请求失败 复原顺序")
        // getData() // 重新拉一遍数据
        reposition()
      })
  }
}
const lists = reactive([
  { 
    iterationName:"迭代1(从此列表移出需求模拟调用接口成功)",
    data:createData(6),
    group:{
      name:"StoryPool"
    },
    onEnd: handleOnEndSuccess
  },
  {
    iterationName:"迭代2(从此列表移出需求模拟调用接口失败复位)",
    data:createData(2),
    group:{
      name:"StoryPool"
    },
    onEnd: handleOnEndFail
}
])
const activeNames = ref(null)
const code = `
<!-- 需求池 -->            
<ElTableDraggable :group="pool.group" @on-end="handleOnEndSuccess" v-loading="loading">
  <el-table :data="pool.data" row-key="id">
    <el-table-column
      :key="column.key"
      :label="column.key"
      :prop="column.key"
      v-for="column of columns"
    ></el-table-column>
  </el-table>
</ElTableDraggable>

<!-- 迭代池 -->
<el-collapse v-model="activeNames">
  <el-collapse-item :title="iteration.iterationName" :name="iteration.iterationName" v-for="iteration in lists" >
    <ElTableDraggable  :group="iteration.group" @on-end="iteration.onEnd" v-loading="loading">
      <el-table max-height="250" :data="iteration.data" row-key="id">
        <el-table-column
          :key="column.key"
          :label="column.key"
          :prop="column.key"
          v-for="column of columns"
        ></el-table-column>
      </el-table>
    </ElTableDraggable>
  </el-collapse-item>
</el-collapse>


const handleOnEndSuccess = (evt:any, reposition: Function)=>{
  if(evt.pullMode){ // 排除了在自己列表内拖动的情况
    simulationRequest(true)
      .then(res=>{console.log("调用成功");})
      .catch(()=>{
        ElMessage.warning("请求失败 复原顺序")
        // getData() // 重新拉一遍数据
        reposition()
      })
  }
}

const handleOnEndFail = (evt:any, reposition: Function)=>{
  if(evt.pullMode){ // 排除了在自己列表内拖动的情况
    simulationRequest(false)
      .then(res=>{console.log("调用成功");})
      .catch(()=>{
        ElMessage.warning("请求失败 复原顺序")
        // getData() // 重新拉一遍数据
        reposition()
      })
  }
}
const lists = reactive([
  { 
    iterationName:"迭代1(从此列表移出需求模拟调用接口成功)",
    data:createData(6),
    group:{
      name:"StoryPool"
    },
    onEnd: handleOnEndSuccess
  },
  {
    iterationName:"迭代2(从此列表移出需求模拟调用接口失败复位)",
    data:createData(2),
    group:{
      name:"StoryPool"
    },
    onEnd: handleOnEndFail
}
])

const loading = ref(false)

const simulationRequest = (success = true, t = 1000)=>{
  return new Promise((resolve,reject)=>{
    loading.value = true
    setTimeout(() => {
      loading.value = false
      success?resolve("接口200"):reject("接口4xx")
    }, t);
  })
}
            `

const loading = ref(false)

const simulationRequest = (success = true, t = 1000)=>{
  return new Promise((resolve,reject)=>{
    loading.value = true
    setTimeout(() => {
      loading.value = false
      success?resolve("接口200"):reject("接口4xx")
    }, t);
  })
}
</script>