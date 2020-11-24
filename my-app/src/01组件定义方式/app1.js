/*
 * @Author: your name
 * @Date: 2020-11-23 09:06:48
 * @LastEditTime: 2020-11-23 17:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/01组件定义方式/app1.js
 */

import React from 'react'
//函数组件
/**
 * 函数组件特点：
 * 1.没有this对象
 * 2.没有内部状态(Hooks让函数式组件有自己内部的状态)
 */
export default function App(props) {
  //必须返回一个合法的JSX虚拟dom元素
  return (
    <>
      <div>我是function组件,这是参数：{props.name}</div>
      <div>11</div>
    </>
  )
}