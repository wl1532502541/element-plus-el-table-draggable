import{e as i,f as b,r as a,o,c as r,a as e,w as l,u as s,g as p,F as k,b as f,d as w}from"./index-571c22f2.js";import{a as y,c as g,_ as h}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{L as v}from"./ListViewer-4addaad1.js";const H=!0,L="Handle可拖拽",F="Handle",T=i({__name:"Handle",setup(C){const t=b(y()),u=`
<ElTableDraggable handle=".el-icon-rank">
  <el-table :data="list" row-key="id" border>
    <el-table-column width="30">
      <i class="el-icon-rank" />
    </el-table-column>
    <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
    </el-table-column>
  </el-table>
</ElTableDraggable>`;return(E,V)=>{const m=a("el-icon"),c=a("el-table-column"),d=a("el-table"),_=a("CodeViewer");return o(),r("div",null,[e(h,{handle:".el-icon-rank"},{default:l(()=>[e(d,{data:t,"row-key":"id",border:""},{default:l(()=>[e(c,{width:"40"},{default:l(()=>[e(m,{class:"el-icon-rank"},{default:l(()=>[e(s(p))]),_:1})]),_:1}),(o(!0),r(k,null,f(s(g),n=>(o(),w(c,{key:n.key,label:n.key,prop:n.key},null,8,["label","prop"]))),128))]),_:1},8,["data"])]),_:1}),e(v,{value:t},null,8,["value"]),e(_,{code:u,language:"html"})])}}});export{T as default,L as name,F as nameEn,H as show};
