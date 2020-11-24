/*
 * @Author: your name
 * @Date: 2020-11-23 09:06:48
 * @LastEditTime: 2020-11-24 15:56:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/01组件定义方式/app.js
 */
//component使用了解构赋值
import React, { Component } from "react";

//要导出才可以使用
//类组件--如果需要使用外界传递过来的props参数，不需要接收
//直接通过this.props.XXX就可以使用
export class App extends Component {
  constructor() {
    // 在这个函数里要调用super()
    super();
    // 需要维护的一些数据，可读可写
    this.state = {
      message: "你好哇~",
    };
  }

  // render函数必须要使用，并且要返回值
  render() {
    return (
      //类组件--如果需要使用外界传递过来的props参数，不需要接收
      //直接通过this.props.XXX就可以使用
      //在class组件内部，this表示当前组件的实例对象
      //类组件中的props也是只读的
      <div>
        {" "}
        我是app组件 {this.state.message} {this.props.name}{" "}
      </div>
    );
  }
}

/**
 * 区别：
 * 用class创建的组件有自己的私有数据和生命周期函数，
 * 但是函数组件只有props，没有自己的私有数据和生命周期
 * 1.用构造函数创建出来的函数组件，是’无状态组件‘
 * 2.用class创建出来的类组件，是’有状态组件‘
 * 本质区别：有无state属性和生命周期函数~
 * 
 * 无状态组件由于没有state和生命周期函数，所以运行效率会比有状态组件稍微高一些
 * 
 * 组件中的state/data和props的区别
 * 1.props中的数据都是外界传进来的，state/data中的数据都是组件私有的(通过请求得来的)
 * 2.props中的数据都是只读的，不能重新赋值
 * 3.state/data中的数据，都是可读可写的
 */