/*
 * @Author: your name
 * @Date: 2020-11-23 19:36:27
 * @LastEditTime: 2020-11-23 20:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_notes/my-app/src/class的使用.js
 */
// es5
function Person(name, age) {
  //实例属性
  this.name = name
  this.age = age
}

//静态属性
Person.info = 'aaa'

// 实例方法
Person.prototype.say = function(){
  console.log('这是person的实例方法')
}
// 静态方法
Person.show = function(){
  console.log('这是静态方法')
}

const p1 = new Person('王多多', 18)
console.log(p1)
p1.say() //这是实例方法
// -----------华丽的分割线-----------
// es6
//创建一个动物类
/**
 * 注意：在class花括号内，只能写构造器，静态方法和静态属性，实例方法
 * class关键字内部，还是用原来的配方实现的，所以说，我们把class关键字称为语法糖
 */
class Animal {
  //构造器的作用：每当new这个类的时候，必然会优先执行构造器中的代码
  constructor(name, age) {
    //通过new出来的实例，访问到的属性，叫做实例属性
    this.name = name
    this.age = age
  }
  //在class内部，通过static修饰的属性，直接通过类来访问，叫做静态属性
  static info = 'eee'

  //实例方法
  jiao(){
    console.log('这是Animal的')
  }
  //静态方法
  static show(){

  }
}

const a1 = new Animal('大黄', 3)
console.log(Animal.info)
a1.jiao()
Animal.show()