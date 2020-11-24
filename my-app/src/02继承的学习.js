/*
 * @Author: your name
 * @Date: 2020-11-24 08:54:43
 * @LastEditTime: 2020-11-24 09:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/继承的学习.js
 */
//父类--可以直接理解为 原型对象 prototype
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //实例方法
  say() {
    console.log('大家好呀');
  }
}

//子类
class American extends Person {
  constructor(name, age) {
    /**
     * 为什么要在第一行调用super：
     * 如果一个子类通过extends继承了父类，那么在子类的constructor构造函数中，必须优先调用super
     * 什么是super：
     * super是一个函数，而且，它是父类构造器，子类中的super，其实就是父类中，constructor构造器的一个引用
     */
    super(name, age)
  }
}
const a1 = new American('Jack', 20)
console.log(a1)

class Chinese extends Person {
  constructor(name, age, ID) {
    super(name, age)
    this.ID = ID
  }
}

const c1 = new Chinese('张三', 21)
console.log(c1);