import React, { Component } from 'react'

class ChildCpn extends Component {
  //在创建组件的时候，会传入一个props
  // 不写也可以直接用，默认的实现方式就是下面的
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // 此处的props是自己的，不是父类的
    const { name, age } = this.props
    return (
      <div>
        <h2>子组件展示数据:{name}---{age}</h2>
      </div>
    )
  }
}
export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        父组件
        <ChildCpn name='why' age='18' />
      </div>
    )
  }
}
