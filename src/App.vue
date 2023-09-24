<script setup lang="ts">
import { RouteRecordName, useRoute, useRouter } from "vue-router"
import { computed, reactive } from "vue";
// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]
const components = reactive({});
const componentNameMap = reactive({});
// eslint-disable-next-line no-undef
// const examples = require.context("./examples", false, /\.vue$/);
let examples = reactive(import.meta.glob('./examples/*.vue'))
console.log("examples", examples)

Object.keys(examples).forEach(async (key) => {
  const componentName = key.replace("./examples/", "").replace(".vue", "");
  // console.log(object);
  // const context = examples[key];
  const context = await examples[key]() ;
  // debugger
 if(context.show){
  components[componentName] = context.default;
  // components[componentName] = (await context()).default;
  // debugger

  componentNameMap[componentName] = `${context.name}(${context.nameEn})`;
 }
});
console.log("components", components);
console.log("componentNameMap", componentNameMap);

const route = useRoute()
const router = useRouter()

const demo = computed({
  set(val) {
    const currentDemo = route.query.demo;
    debugger
    if (val !== currentDemo) {
      console.log('route path ',route.path);
      // debugger
      router.replace({
        path: route.path,
        query: {
          demo:val,
        },
      });
    }
  },
  get() {
    // return route.query.demo || examples[0] && examples[0].name.replace("./examples/", "").replace(".vue", "");
    return route.query.demo  || "Base"
  },
})

</script>

<template>
  <div>
    <h1>demo</h1>
    demo:{{ demo }}
    <el-tabs v-model="demo">
      <el-tab-pane :key="key"
        :label="name"
        :name="key"
        lazy
        v-for="( name, key ) in componentNameMap">
        name:{{ name }}
        key:{{ key }}
        <div>
          <h2>{{ name }}</h2>
          <component :is="components[key]"></component>
          <!-- <el-button
            :href="`https://github.com/mizuka-wu/el-table-draggable/blob/master/src/examples/${key}.vue`"
            style="margin: 16px 0"
            type="primary"
          >
            查看源文件
            <i class="el-icon-view el-icon--right"></i>
          </el-button> -->
          <hr />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
