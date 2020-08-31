import React, { Component } from 'react'

export default class Render extends Component {
  render() {
    return (
      <div>
        你好哈哈哈哈哈
      </div>
    )
  }
}

/**
 * 
 * render的返回值类型
 * 
 * render被调用时，它会检查this.props和this.state的变化并返回以下类型之一
 * 1.React元素：
 *   通常通过JSX创建
 *   例如 <div />会被react渲染为DOM节点，<MyComponent />会被react渲染为自定义组件
 *   无论是<div />还是<MyComponent />均为react元素
 * 
 * 2.数组或fragments：使得render方法可以返回多个元素
 * 
 * 3.Portals：可以渲染子节点导不同的DOM子树中
 * 
 * 4.字符串或数值类型：它们在DOM中会被渲染为文本节点
 * 
 * 5.布尔类型或null：什么都不渲染
 * 
 */

