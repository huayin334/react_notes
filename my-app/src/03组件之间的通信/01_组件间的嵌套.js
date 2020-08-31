import React, { Component } from 'react'

//header
function Header() {
  return <h2>我是Header组件</h2>
}
function Left() {
  return (
    <div>左边1</div>
  )
}
function Right() {
  return (
    <div>右边</div>
  )
}
// main 
function Main() {
  return (
    <>
      <Left />
      <Right />
    </>
  )
}
//footer
function Footer() {
  return <h2>我是footer组件</h2>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

