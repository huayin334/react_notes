
import React from 'react'
//函数组件
/**
 * 函数组件特点：
 * 1.没有this对象
 * 2.没有内部状态(Hooks让函数式组件有自己内部的状态)
 */
export function App1() {
  return (
    <>
      <div>我是function组件</div>
      <div>11</div>
    </>
  )
}