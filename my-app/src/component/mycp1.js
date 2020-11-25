/*
 * @Author: your name
 * @Date: 2020-11-24 16:43:14
 * @LastEditTime: 2020-11-25 20:13:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/component/mycp1.js
 */
import React, { Component } from 'react'
import './index.css'
export default class Mycp1 extends Component {
  componentDidMount(){
    console.log(this.props.location.query.name);
  }
  render() {
    return (
      <>
      <div className='title'>
        基于node的多人在线聊天室     
      </div>
      <div className='chatBox'>1</div>
      </>
    )
  }
}
