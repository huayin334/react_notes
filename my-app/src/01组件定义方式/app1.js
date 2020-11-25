/*
 * @Author: your name
 * @Date: 2020-11-23 09:06:48
 * @LastEditTime: 2020-11-25 20:12:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/01组件定义方式/app1.js
 */

import React from 'react'
import { Route, NavLink, Redirect, Switch, withRouter } from "react-router-dom";
import Mycp1 from "../component/mycp1";
import Mycp2 from "../component/mycp2";
//函数组件
/**
 * 函数组件特点：
 * 1.没有this对象
 * 2.没有内部状态(Hooks让函数式组件有自己内部的状态)
 */
 function App(props) {
  //  console.log(props);
  //必须返回一个合法的JSX虚拟dom元素
  return (
    <>
      <div>我是function组件,这是参数：{props.name}</div>
      <div>
      <div>
        <NavLink to={{pathname:'/mycp1',query:{name:'小明'}}}>去1</NavLink>
        <NavLink to="/mycp2/我是参数">去2</NavLink>
        /**
         * 编程式导航
         */
        <button onClick={()=>{props.history.push('/mycp1')}}>点我去mycp1</button>
        <button onClick={()=>{props.history.push('/mycp2')}}>点我去mycp2</button>
      </div>

      <Switch>

      <Route path="/mycp1" component={Mycp1} />
      <Route path="/mycp2/:id" component={Mycp2} />
      <Redirect from='/' to='/mycp2' exact></Redirect>

      </Switch>
    </div>
    </>
  )
}

export default withRouter(App)