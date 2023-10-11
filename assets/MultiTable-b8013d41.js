import{a as E,_ as T,c as w}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{L as y}from"./ListViewer-4addaad1.js";import{e as D,f as v,r as e,o as l,c as o,a,w as t,F as r,b as _,d as m,u as x}from"./index-571c22f2.js";const F=!0,M="多表格相互拖拽",V="Multi Table",N=D({__name:"MultiTable",setup(B){const s=v([E(6),[]]),b=`
<!-- 列表 -->            
<ElTableDraggable group="multiTable">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable group="multiTable">
  <el-table>
  </el-table>
</ElTableDraggable>            
            `,p=c=>{console.log("handleOnEnd参数",c)};return(c,C)=>{const g=e("el-table-column"),i=e("el-table"),d=e("el-col"),f=e("el-row"),h=e("highlightjs");return l(),o(r,null,[a(f,{gutter:20},{default:t(()=>[(l(!0),o(r,null,_(s,(u,k)=>(l(),m(d,{key:k,span:24/s.length},{default:t(()=>[a(T,{group:"multiTable",onOnEnd:p},{default:t(()=>[a(i,{data:u,"row-key":"id"},{default:t(()=>[(l(!0),o(r,null,_(x(w),n=>(l(),m(g,{key:n.key,label:n.key,prop:n.key},null,8,["label","prop"]))),128))]),_:2},1032,["data"])]),_:2},1024),a(y,{value:u},null,8,["value"])]),_:2},1032,["span"]))),128))]),_:1}),a(h,{language:"html",code:b})],64)}}});export{N as default,M as name,V as nameEn,F as show};
