/*
 * @Author: your name
 * @Date: 2020-11-24 15:57:37
 * @LastEditTime: 2020-11-24 17:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/demo/01评论列表组件.js
 */
import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import Mycp1 from '../component/mycp1'
import Mycp2 from '../component/mycp2'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      obj:[{
        name:'asas',
        age:21
      },{
        name:'adscsi',
        age:22
      },{
        name:'asuashi',
        age:20
      },{
        name:'ewfniuw',
        age:21
      }]
    }
  }
  render() {
    return (
      
      <div>
  <div>
  <Link to="/mycp1"></Link>
  <Link to="/mycp2"></Link>
  </div>
        <Route path='/mycp1' component={Mycp1}/>
        <Route path='/mycp2' component={Mycp2}/>

      </div>
    )
  }
}
