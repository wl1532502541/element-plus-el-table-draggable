import{a as _,c as k,_ as N}from"./ElTableDraggable.vue_vue_type_style_index_0_lang-f7c7b0a1.js";import{L as D}from"./ListViewer-4addaad1.js";import{e as B,f as O,i as x,r as n,j as C,o as a,c as d,h as L,a as t,w as o,k as S,d as i,F as p,b as f,u as F,E as M}from"./index-571c22f2.js";const G=!0,H="异步调用失败复位（需求池为例）",I="Reposition",J=B({__name:"Reposition",setup(U){const m=O({group:"StoryPool",data:_(6)}),v=(s,l)=>{s.pullMode&&b(!0).then(r=>{console.log("调用成功")}).catch(()=>{M.warning("请求失败 复原顺序"),l()})},P=(s,l)=>{s.pullMode&&b(!1).then(()=>{console.log("调用成功")}).catch(()=>{M.warning("请求失败 复原顺序"),l()})},h=O([{iterationName:"迭代1(从此列表移出需求模拟调用接口成功)",data:_(6),group:{name:"StoryPool"},onEnd:v},{iterationName:"迭代2(从此列表移出需求模拟调用接口失败复位)",data:_(2),group:{name:"StoryPool"},onEnd:P}]),E=x(null),T=`
<!-- 需求池 -->            
<ElTableDraggable :group="pool.group" @on-end="handleOnEndSuccess" v-loading="loading">
  <el-table ></el-table>
</ElTableDraggable>

<!-- 迭代池 -->
<el-collapse v-model="activeNames">
  <el-collapse-item :title="iteration.iterationName" :name="iteration.iterationName" v-for="iteration in lists" >
    <ElTableDraggable  :group="iteration.group" @on-end="iteration.onEnd" v-loading="loading">
      <el-table></el-table>
    </ElTableDraggable>
  </el-collapse-item>
</el-collapse>


const handleOnEndSuccess = (evt:any, reposition: Function)=>{
  if(evt.pullMode){ // 排除了在自己列表内拖动的情况
    simulationRequest(true)
      .then(res=>{console.log("调用成功");})
      .catch(()=>{
        ElMessage.warning("请求失败 复原顺序")
        // getData() // 重新拉一遍数据 nono 耗性能
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
        // getData() // 重新拉一遍数据 nono 耗性能
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
            `,u=x(!1),b=(s=!0,l=1e3)=>new Promise((r,c)=>{u.value=!0,setTimeout(()=>{u.value=!1,s?r("接口200"):c("接口4xx")},l)});return(s,l)=>{const r=n("el-table-column"),c=n("el-table"),y=n("el-col"),R=n("el-collapse-item"),V=n("el-collapse"),j=n("el-row"),q=n("highlightjs"),w=C("loading");return a(),d(p,null,[L(" 接口调用失败可以重新拉一遍数据来复位，但是比较浪费性能，可以通过调用内置复位函数来免去一次请求 "),t(j,{gutter:20},{default:o(()=>[t(y,{span:12},{default:o(()=>[S((a(),i(N,{group:m.group,onOnEnd:v},{default:o(()=>[t(c,{data:m.data,"row-key":"id"},{default:o(()=>[(a(!0),d(p,null,f(F(k),e=>(a(),i(r,{key:e.key,label:e.key,prop:e.key},null,8,["label","prop"]))),128))]),_:1},8,["data"])]),_:1},8,["group"])),[[w,u.value]]),t(D,{value:m.data},null,8,["value"])]),_:1}),t(y,{span:12},{default:o(()=>[t(V,{modelValue:E.value,"onUpdate:modelValue":l[0]||(l[0]=e=>E.value=e)},{default:o(()=>[(a(!0),d(p,null,f(h,e=>(a(),i(R,{title:e.iterationName,name:e.iterationName},{default:o(()=>[S((a(),i(N,{group:e.group,onOnEnd:e.onEnd},{default:o(()=>[t(c,{"max-height":"250",data:e.data,"row-key":"id"},{default:o(()=>[(a(!0),d(p,null,f(F(k),g=>(a(),i(r,{key:g.key,label:g.key,prop:g.key},null,8,["label","prop"]))),128))]),_:2},1032,["data"])]),_:2},1032,["group","onOnEnd"])),[[w,u.value]])]),_:2},1032,["title","name"]))),256))]),_:1},8,["modelValue"]),t(D,{value:h},null,8,["value"])]),_:1})]),_:1}),t(q,{language:"html",code:T})],64)}}});export{J as default,H as name,I as nameEn,G as show};
