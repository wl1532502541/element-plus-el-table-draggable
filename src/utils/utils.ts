import { PullResult } from "sortablejs";

/**
 * 将某个元素从某个列表插入到另一个对应位置
 * @param {number} oldIndex
 * @param {any[]} fromList
 * @param {nmber} newIndex
 * @param {any[]} toList
 * @param {import('@types/sortablejs').PullResult} pullMode
 */
export function exchange(oldIndex: number, fromList: any[], newIndex: number, toList: any[], pullMode: PullResult) {
  // 核心交换
  const target = fromList[oldIndex];
  // debugger
  console.log("调用了exhange pullMode",pullMode)
  // move的情况
  if (pullMode !== "clone") {
    fromList.splice(oldIndex, 1);
  }
  toList.splice(newIndex, 0, target);
  debugger
}