/*
 * @Author: your name
 * @Date: 2020-11-24 16:43:31
 * @LastEditTime: 2020-11-25 20:06:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/component/mycp2.js
 */
import React, { Component } from 'react'

export default class Mycp2 extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
      mycp2
      </div>
    )
  }
}
