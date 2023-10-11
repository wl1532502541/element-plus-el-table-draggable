import{c as u,a as b,_ as p}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{_ as i,r as e,o,c as n,a as t,w as s,F as d,b as g,d as f}from"./index-571c22f2.js";const x=!1,$="简单列表拖拽(vue2写法 弃用)",j="Base Draggable",k={data(){return{columns:u,list:b(),code:`<SortableElTable v-on="$listeners">
  <el-table :data="list" row-key="id">
    <el-table-column
      :key="column.key"
      :label="column.key"
      :prop="column.key"
      v-for="column of columns"
    ></el-table-column>
  </el-table>
</SortableElTable>`}},components:{ElTableDraggable:p}};function h(y,E,v,w,l,B){const c=e("el-table-column"),r=e("el-table"),_=e("ElTableDraggable"),m=e("highlightjs");return o(),n("div",null,[t(_,null,{default:s(()=>[t(r,{data:l.list,"row-key":"id"},{default:s(()=>[(o(!0),n(d,null,g(l.columns,a=>(o(),f(c,{key:a.key,label:a.key,prop:a.key},null,8,["label","prop"]))),128))]),_:1},8,["data"])]),_:1}),t(m,{language:"html",code:l.code},null,8,["code"])])}const C=i(k,[["render",h]]);export{C as default,$ as name,j as nameEn,x as show};
