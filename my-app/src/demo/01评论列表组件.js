/*
 * @Author: your name
 * @Date: 2020-11-24 15:57:37
 * @LastEditTime: 2020-11-25 09:29:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/demo/01评论列表组件.js
 */
import React, { Component } from "react";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Mycp1 from "../component/mycp1";
import Mycp2 from "../component/mycp2";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      obj: [
        {
          name: "asas",
          age: 21,
        },
        {
          name: "adscsi",
          age: 22,
        },
        {
          name: "asuashi",
          age: 20,
        },
        {
          name: "ewfniuw",
          age: 21,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          <NavLink to="/mycp1">去1</NavLink>
          <NavLink to="/mycp2">去2</NavLink>
        </div>
        // Switch防止路由多次渲染
        <Switch>
        // 假如这里的path是 / 无论哪一次都会匹配到
        <Route path="/mycp1" component={Mycp1} />
        <Route path="/mycp2" component={Mycp2} />
        //重定向   exact精准匹配
        <Redirect from='/' to='/mycp1' exact></Redirect>
        </Switch>
      </div>
    );
  }
}
