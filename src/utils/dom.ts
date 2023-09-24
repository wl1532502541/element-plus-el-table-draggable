export const EMPTY_FIX_CSS = "el-table-draggable__empty-table";

/**
 * 清除造成的所有的副作用
 */
export function cleanUp() {
  /**
   * 清除EMPTY
   */
  Array.from(document.querySelectorAll(`.${EMPTY_FIX_CSS}`)).forEach((el) => {
    el.classList.remove(EMPTY_FIX_CSS);
  });
  // 移除动画的css
  // clearAnimate();

  // const needRemovedElements = [
  //   // 树的子级占位
  //   ...Array.from(document.querySelectorAll(`.${PLACEHOLDER_CSS}`)),
  //   // 间距的占位
  //   ...Array.from(document.querySelectorAll(`.${CUSTOMER_INDENT_PLACEHOLDER_CSS}`)),
  //   ...Array.from(document.querySelectorAll(`.${CUSTOMER_INDENT_CSS}`))
  // ]
  // setTimeout(() => {
  //   needRemovedElements.forEach(el => {
  //     remove(el)
  //   })
  // })
}