import{a as _,_ as E,c as y}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{L as C}from"./ListViewer-4addaad1.js";import{e as D,f as v,r as e,o as a,c as o,a as l,w as n,h as x,F as r,b as p,d as m,u as M}from"./index-571c22f2.js";const N=!0,$="多表格相互拖拽克隆",q="Multi Table Clone",z=D({__name:"MultiTableClone",setup(B){const s=v([_(6),_(2)]),b=`
<!-- 列表 -->            
<ElTableDraggable :group="{name: 'cloneMultiTable', pull: 'clone'}">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable :group="{name: 'cloneMultiTable', pull: 'clone'}">
  <el-table>
  </el-table>
</ElTableDraggable>            
            `,i=c=>{console.log("handleOnEnd参数",c)};return(c,L)=>{const g=e("el-alert"),d=e("el-table-column"),f=e("el-table"),h=e("el-col"),T=e("el-row"),k=e("highlightjs");return a(),o(r,null,[l(g,{"show-icon":"",type:"warning",closable:!1},{default:n(()=>[x("如果连续拖拽相同行到同一表格 会在行的id相同的情况下出现一些bug 不过一般来说现实场景里也不会有id相同的情况 可以想法禁止拖入已有此数据的表格")]),_:1}),l(T,{gutter:20},{default:n(()=>[(a(!0),o(r,null,p(s,(u,w)=>(a(),m(h,{key:w,span:24/s.length},{default:n(()=>[l(E,{group:{name:"multiTableClone",pull:"clone"},onOnEnd:i},{default:n(()=>[l(f,{data:u,"row-key":"id"},{default:n(()=>[(a(!0),o(r,null,p(M(y),(t,O)=>(a(),m(d,{key:t.key,label:t.key,prop:t.key},null,8,["label","prop"]))),128))]),_:2},1032,["data"])]),_:2},1024),l(C,{value:u},null,8,["value"])]),_:2},1032,["span"]))),128))]),_:1}),l(k,{language:"html",code:b})],64)}}});export{z as default,$ as name,q as nameEn,N as show};
