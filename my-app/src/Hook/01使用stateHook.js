/*
 * @Author: your name
 * @Date: 2020-11-25 20:35:43
 * @LastEditTime: 2020-11-25 20:42:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/Hook/01使用stateHook.js
 */
import React, { useState } from "react";

function App(props) {
  //useState是来定义一个状态的，他与类组件的状态不同，函数组件的状态可以是基础类型数据
  //useState返回的是一个数组，第一个是当前的状态值，第二个是对象表明用于更改状态的函数（类似于setState）

  /**
 * 如果有多个状态怎么办？
 * 1.声明对象类型的状态
 * 2.多次声明
 */
  let [num,setNum] = useState(0)
  let [obj, setObj] = useState({
    vala:1,
    valb:2
  })
  
  return <div className="App">
<div>  使用数据：{num}
<button onClick={()=>{setNum(num+1)}}>点我+1</button></div>
<div>
使用数据：{obj.vala}
/**至于修改，后面如果有多个状态的话就使用其他方式修改 */
<button onClick={}>点我vala+1</button>
使用数据：{obj.valb}
<button onClick={}>点我valb+1</button>
</div>

  </div>;
}

export default App