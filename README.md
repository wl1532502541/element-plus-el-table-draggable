## element-plus-el-table-draggable

适用 vue3、element-plus 组件库

使 el-table 可拖拽

基于 sortable.js

## Demos

- [x] 简单列表拖拽
- [x] 多表格相互拖拽
- [x] Handle 可拖拽
- [x] 多表格相互拖拽克隆
- [x] 异步调用失败复位
- [ ] 列拖拽
- [ ] treeTable

## features

- [x] 行拖拽
- [x] 拖拽复原
- [x] 支持 sortable.js 属性
- [ ] 列拖拽

## 基本使用

```js
<ElTableDraggable>
  <el-table></el-table>
</ElTableDraggable>
```

## ElTableDraggable 属性

| 属性名           | 说明                              | 类型             | 可选值                                                | 默认值 |
| ---------------- | --------------------------------- | ---------------- | ----------------------------------------------------- | ------ |
| tag              | ElTableDraggable 渲染的 component | string/component | -                                                     | div    |
| [sortableOption] | 任一 sortableOption               | -                | 请参考 https://github.com/SortableJS/Sortable#options | --     |

## ElTableDraggable 方法

| 方法名 | 说明                                                                               | 参数           |
| ------ | ---------------------------------------------------------------------------------- | -------------- |
| onEnd  | 拖拽结束回调,`evt`是拖拽事件相关属性，`reposition`是复位函数，可以用于复原这次拖拽 | evt,reposition |
