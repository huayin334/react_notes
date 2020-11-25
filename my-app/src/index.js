/*
 * @Author: your name
 * @Date: 2020-11-23 09:06:48
 * @LastEditTime: 2020-11-24 17:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/index.js
 */
//创建组件，虚拟dom
import React from "react";
import ReactDOM from "react-dom";
import App from "./demo/01评论列表组件";
import {BrowserRouter, HashRouter, Route } from "react-router-dom";

//2.创建虚拟DOM元素
/**
 * 参数1：创建的元素的类型：字符串，表示元素的名称
 * 参数2：是一个对象或null，表示当前这个DOM元素的属性
 * 参数3：子节点（包括其他虚拟DOM  或 文本子节点）
 * 参数n：其他子节点
 *
 * 注意：JSX语法的本质，还是在运行的时候通过babel插件，被转换成了React.createElement形式来执行的
 * class用className代替
 * label标签中的for用htmlFor代替
 * 必须有唯一的根元素
 */
const myh1 = React.createElement("h1", null, "这是一个大大的h1");
const myDiv = <div> 11011 </div>;

const list = ["小五郎", "大五郎", "毛利"];
//forEach遍历不返回
//map遍历，并且返回新数组

/**
 * 3.使用ReactDOM把虚拟DOM渲染到页面上
 * 参数1：要渲染的那个虚拟DOM元素
 * 参数2：指定页面上一个容器
 */
ReactDOM.render(
  <BrowserRouter>
    <div>
      <App name="我是传进来的数据" />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
