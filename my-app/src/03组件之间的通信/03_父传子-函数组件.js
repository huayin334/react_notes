import React, { Component } from 'react'

function Children(props) {
  const { name, age } = props
  return <div>{name}---{age}</div>
}
export default class App extends Component {
  render() {
    return (
      <div>
        父组件
        <Children name='why' age='18' />
      </div>
    )
  }
}
