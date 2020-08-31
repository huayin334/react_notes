import React, { Component } from 'react'
/**
 * 参数验证  propType
 * 
 * 如果用typeScript就不需要这个库了。。。。
 */
function Children(props) {
  const { name, age } = props
  const { names } = props
  return (
    <>
      <div>{name}---{age}</div>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </>
  )
}
export default class App extends Component {
  render() {
    return (
      <div>
        父组件
        <Children name='why' age='18' names={[1,2,3]}/>
      </div>
    )
  }
}
