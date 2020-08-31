//component使用了解构赋值
import React, {
  Component
} from 'react'

//要导出才可以使用
//类组件
export class App extends Component {
  constructor() {
    // 在这个函数里要调用super()
    super();
    // 需要维护的一些数据
    this.state = {
      message: '你好哇~'
    }
  }

  // render函数必须要使用，并且要返回值
  render() {
    return (
      <div>我是app组件{this.state.message}</div>
    )
  }
}