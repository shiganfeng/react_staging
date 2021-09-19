//创建“外壳”组件App
import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
//创建并暴露App组件
export default class App extends React.Component {
  //状态在哪里，操作状态的方法就写在哪里
  //初始化状态
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '编程', done: false}
    ]
  }

  //用于添加一个todo，接收的是一个todo对象
  addTodo = (todoObj) => {
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({
      todos: newTodos
    })
  }

  //用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    let {todos} = this.state
    //匹配处理数据
    let newTodos =  todos.map((item) => {
      if(item.id === id) return {...item, done: done}
      else return item
    })
    this.setState({todos: newTodos})
  }

  //删除一个todo对象
  deleteTodo = (id) => {
    //获取状态中的todos
    let {todos} = this.state
    //匹配处理数据
    let newTodos =  todos.filter(item => item.id !== id)
    this.setState({todos: newTodos})
  }

  //用于全选
  checkAllTodo = (done)=>{
    let {todos} = this.state
    let newTodos = todos.map((todo) =>{
      return {...todo, done: done}
    })
    this.setState({todos: newTodos})
  }

  //用于清除所有已完成的
  clearAllDone = ()=> {
    let {todos} = this.state
    let newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }

  render() {
    let {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo}/>
        </div>
      </div>
    )
  }
}
