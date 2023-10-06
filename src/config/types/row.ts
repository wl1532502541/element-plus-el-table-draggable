import { EMPTY_FIX_CSS, cleanUp } from "@/utils/dom";
import { exchange } from "@/utils/utils";
import { toRaw } from "vue";

export const config = {
  options: (tableCtxMap: any, tableCtx: any, rest: {
    emits: any
  }) => {
    const { emits } = rest
    return {
      onChoose(evt: any) {
        console.log("入参 onChoose", {
          pullMode: evt.pullMode
        })
        /**
         * 拖拽开始前对表格进行预处理
         */
        for (const [tbodyDom, draggableTable] of tableCtxMap.entries()) {

          // 如果是空表格，增加一个css
          const tableDom = tbodyDom.parentNode

          // let height = tbodyDom.clientHeight
          // debugger
          if (tableDom.clientHeight === 0) {
            tableDom.parentNode.classList.add(EMPTY_FIX_CSS)
          }
          // debugger
        }
        // console.log(evt.item)
        // evt.item.setAttribute("style", "background:red")
      },
      onStart(evt: any) {
        console.log("入参 onChoose", {
          pullMode: evt.pullMode
        })
        // const { to, from, pullMode, newIndex, item, oldIndex, willInsertAfter } = evt;
        // console.log("hello!!!! ")
        // console.log("onStart", { to, from, pullMode, newIndex, item, oldIndex })
        // console.log("vm", vm)
      },
      onEnd(evt) {
        emits("update:loading", true)
        console.log("入参 onChoose", {
          pullMode: evt.pullMode
        })
        const { to, from, pullMode, newIndex, item, oldIndex, willInsertAfter } = evt;
        // console.log("onEnd 入参", evt, to, from, pullMode, newIndex, item, oldIndex, willInsertAfter, evt.pullMode === pullMode);
        const fromCtx = tableCtxMap.get(from)
        const toCtx = tableCtxMap.get(to)

        debugger
        // 数据交换
        exchange(oldIndex,
          fromCtx.props.data,
          newIndex,
          toCtx.props.data,
          pullMode)

        // clone对象的话，需要从dom层面删除，防止el-table重复渲染
        if (pullMode === 'clone' && from !== to) {
          to.removeChild(item)
        }
        // console.log("toCtx", toCtx);
        // toCtx.forceUpdate()
        cleanUp()
        // console.log('调用emits')

        emits("onEnd", {
          fromData: toRaw(fromCtx.props.data),
          toData: toRaw(toCtx.props.data),
          notMoved: from == to && newIndex == oldIndex,
          itemData: toRaw(toCtx.props.data)[newIndex],
          pullMode,
          newIndex,
          oldIndex,
          willInsertAfter,
          // reposition: ,
          originalEvt: evt
        }, () => {
          exchange(newIndex,
            toCtx.props.data,
            oldIndex,
            fromCtx.props.data,
            pullMode)
        })
        // console.log('调用emits end')
        // setTimeout(() => { emits("update:loading", false) }, 3000)
      },
      onChange(evt: any) {
        console.log("入参 onChange", evt);
      }
    }
  }
}