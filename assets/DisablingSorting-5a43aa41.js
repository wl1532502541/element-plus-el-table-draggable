import{a as p,_ as T,c as w}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{L as D}from"./ListViewer-4addaad1.js";import{e as y,f as v,r as e,o as a,c as r,a as l,w as t,F as s,b as m,d as _,u as x}from"./index-571c22f2.js";const F=!0,S="禁用拖拽",V="DisablingSorting",N=y({__name:"DisablingSorting",setup(B){const u=v([{data:p(6),group:{name:"multiTable",put:!1,pull:"clone"}},{data:p(1),group:{name:"multiTable"}}]),g=`
<!-- 列表 -->            
<ElTableDraggable :group="{ name: 'multiTable', put: false }">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable :group="{ name: 'multiTable' }">
  <el-table>
  </el-table>
</ElTableDraggable>            
            `,b=c=>{console.log("handleOnEnd参数",c)};return(c,C)=>{const i=e("el-table-column"),d=e("el-table"),f=e("el-col"),h=e("el-row"),k=e("highlightjs");return a(),r(s,null,[l(h,{gutter:20},{default:t(()=>[(a(!0),r(s,null,m(u,(n,E)=>(a(),_(f,{key:E,span:24/u.length},{default:t(()=>[l(T,{group:n.group,onOnEnd:b},{default:t(()=>[l(d,{data:n.data,"row-key":"id"},{default:t(()=>[(a(!0),r(s,null,m(x(w),o=>(a(),_(i,{key:o.key,label:o.key,prop:o.key},null,8,["label","prop"]))),128))]),_:2},1032,["data"])]),_:2},1032,["group"]),l(D,{value:n.data},null,8,["value"])]),_:2},1032,["span"]))),128))]),_:1}),l(k,{language:"html",code:g})],64)}}});export{N as default,S as name,V as nameEn,F as show};
