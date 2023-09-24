import { EMPTY_FIX_CSS, cleanUp } from "@/utils/dom";
import { exchange } from "@/utils/utils";
import { toRaw } from "vue";

export const config = {
  options: (tableCtxMap: any, tableCtx: any, emits: any) => {
    return {
      onChoose(evt) {
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
        console.log(evt.item)
        evt.item.setAttribute("style", "background:red")
      },
      onStart(evt) {
        const { to, from, pullMode, newIndex, item, oldIndex, willInsertAfter } = evt;
        console.log("hello!!!! ")
        console.log("onStart", { to, from, pullMode, newIndex, item, oldIndex })
        // console.log("vm", vm)
      },
      onEnd(evt) {
        const { to, from, pullMode, newIndex, item, oldIndex, willInsertAfter } = evt;
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

        cleanUp()
        console.log('调用emits')

        emits("onEnd", {
          fromData: toRaw(fromCtx.props.data),
          toData: toRaw(toCtx.props.data),
          notMoved: from == to && newIndex == oldIndex,
          itemData: toRaw(toCtx.props.data)[newIndex],
          pullMode,
          newIndex,
          oldIndex,
          willInsertAfter
        })
        console.log('调用emits end')

      }
    }
  }
}