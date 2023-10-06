<template>
  <component :is="props.tag" ref="wrapper">
    <slot></slot>
  </component>
</template>

<script setup lang='ts'>
import Sortable from "sortablejs/modular/sortable.complete.esm.js"
import { getCurrentInstance, onMounted, ref, useAttrs, useSlots, watch } from 'vue';
import config from "../config/index"

const props = withDefaults(defineProps<{ tag?: string; isColumn?: boolean }>(), {
  tag: "div",
  isColumn: false, // 列排序
  animation: 150,  // 动画延时
  loading: true,
})

const wrapper = ref(null)

const _sortable = ref(null)

const emits = defineEmits(['onEnd', "update:loading"])

const makeTableSortAble = () => {
  const tableCtxMap = window.__ElTableDraggableContext
  const instance = getCurrentInstance()
  const children = instance.ctx.$el.children

  // const childrenNew = instance?.subTree.children
  const WRAPPER = '.el-table__body-wrapper tbody'
  const tableDom = children[0].querySelector(WRAPPER)
  if (!tableDom) {
    console.error("请插入slot")
    return
  }
  const slots = useSlots()
  const slotsDefault = slots.default()
  const tableCtx = slotsDefault[0]
  tableCtx.tableRef = wrapper
  const tableProps = tableCtx.props
  tableCtxMap.set(tableDom, tableCtx)
  console.log(slotsDefault);
  const { options } = config[props.isColumn ? 'column' : 'row']

  // debugger
  const vm = getCurrentInstance()
  const tableContext = tableProps

  debugger
  // const animation = props.animation
  // 根据不同种类注册option
  const sortableOptions = options(tableCtxMap, tableContext, { emits })
  const commonDragOptions = {
    // group: "group",
    sort: true,
    animation: 150,
    ...vm?.attrs,
    // ghostClass: "ghost",
    // draggable: ".draggable-table-row",
    draggable: ".el-table__row",
    // chosenClass: "sortable-drag",
    // handle: ".handle",
    // handle: ".el-table__row",
    // dragClass: "sortable-drag",
    // dragClass: "test",
    // dataIdAttr: "data-id",
    scroll: true, // or HTMLElement
    scrollSensitivity: 20, // px, how near the mouse must be to an edge to start scrolling.
    scrollSpeed: 20, // px
    // forceFallback: true,
    forceFallback: false, // ignore the HTML5 DnD behaviour and force the fallback to kick in
    bubbleScroll: true, // apply autoscroll to all parent elements, allowing for easier movement
    // animation:props.animation,
    dragoverBubble: false,
    // removeCloneOnHide: true // Remove the clone element when it is not showing, rather than just hiding it
    // emptyInsertThreshold: 5 // px, distance mouse must be from empty sortable to insert drag element into it
    // 绑定那些监听了的事件
    // ...Object.keys(vm.$listeners).reduce((events, key) => {
    //   const handler = vm.$listeners[key];
    //   // 首字母大写
    //   const eventName = `on${key.replace(
    //     /\b(\w)(\w*)/g,
    //     function ($0, $1, $2) {
    //       return $1.toUpperCase() + $2.toLowerCase();
    //     }
    //   )}`;

    //   events[eventName] = (...args) => handler(...args);

    //   return events;
    // }, {}),
    // 绑定生成的那些options
    // ...Object.keys(sortableOptions).reduce((options, event) => {
    //     const eventHandler = sortableOptions[event];
    //     options[event] = function (...args) {
    //       // if (event !== "onMove") {
    //       //   // vm.$emit(event, ...args);
    //       //   emits
    //       // }
    //       return eventHandler(...args);
    //     };
    //     return options;
    //   }, {}),
    ...sortableOptions
  }

  const table = wrapper.value?.querySelector(".el-table__body-wrapper tbody")
  console.log('table', table)
  _sortable.value = Sortable.create(table, {
    ...commonDragOptions,
  })
}
const attrs = useAttrs()
watch(() => attrs, (options) => {
  if (_sortable.value) {
    // todo 过滤掉sortablejs的options里没有的属性

    // 排除事件，目前sortable没有on开头的属性
    const keys = Object.keys(options).filter(
      (key) => key.indexOf("on") !== 0
    );
    keys.forEach((key) => {
      _sortable.value?.option(key, options[key]);
    });
  }
}, { deep: true })

onMounted(() => {
  console.log("on Mounted");
  if (!window.__ElTableDraggableContext) {
    window.__ElTableDraggableContext = new Map()
  }
  makeTableSortAble()
})
</script>

<style lang="scss">
// tr.ghost{
//   background-color: #C8EBFB;
// }

.el-table-draggable__empty-table {
  min-height: 60px;
}

.el-table-draggable__empty-table table {
  width: 100%;
  height: 100%;
  min-height: 60px;
  position: absolute;
  z-index: 99;
}

.el-table-draggable__empty-table tbody {
  position: absolute;
  width: 100%;
  min-height: 100%;
}
</style>