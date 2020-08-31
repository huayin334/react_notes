import React, { Component } from 'react'
/**
 * 生命周期一般指的是类的生命周期
 * 1.挂载阶段
 *   //创建组件
 *   constructor
 *   //返回对应的渲染内容
 *   render
 *   //挂载成功
 *   componentDidMount
 * 2.更新
 *   //先执行render
 *   render
 *   componentDidUpdate
 * 3.卸载
 *   componentWillUnmounted
 */

// 快捷模板：rcc

 class Cpn extends Component {
  render() {
    return (
      <div>
        我是cpn组件
      </div>
    )
  }
  componentWillUnmount() {
    console.log('要销毁辣~');
  }
}


export default class App extends Component {
  constructor() {
    super()
    console.log('1.执行了constructor');
    this.state = {
      counter: 0,
      isShow:true
    }
  }
  componentDidMount() {
    console.log('3.挂载成功~');
    /**
     * 此方法会在组件挂载后(插入到DOM树中)立即调用
     * 在这里进行的操作
     * 1.依赖Dom的操作可以在这里进行
     * 2.在这里发送网络请求
     * 3.在这里加一些订阅(会在componentWillUnmount取消订阅)
     */
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('更新');
    /**
     * 此方法会在更新后被立即调用，首次渲染不会执行
     * 在这里进行的操作
     * 1.当组件更新后，可以在此处对Dom进行操作
     * 2.如果你对更新前后的props进行了比较，也可以选择在此处进行网络请求
     * (例如：当props未发生变化时，则不会执行网络请求)
     */
  }
  componentWillUnmount() {
    console.log('要销毁辣~');
    /**
     * 此方法会在组件卸载及销毁之前直接调用
     * 操作
     * 1.执行必要的清理操作
     * (例如，清除timer定时器，取消网络请求或清除，取消订阅)
     */
  }

  render() {
    console.log('2.执行了组件的render函数');
    return (
      <div>
        我是app组件！
        {this.state.counter}
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={()=>this.show()}>切换</button>
        {
          this.state.isShow && <Cpn/>
        }
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  show(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
}
