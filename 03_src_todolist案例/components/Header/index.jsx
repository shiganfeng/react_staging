import React, { Component } from 'react';
import PropTypes from 'prop-types'
//用来生成唯一的id
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  //对接收的props进行：类型以及必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  //键盘事件的回调
  handleKeyUp = (event)=>{
    //判断是否是回车按钮
    if(event.keyCode !== 13) {
      return
    }else {
      //添加名字不为空
      if(event.target.value.trim() === '') {
        alert('输入不能为空')
        return
      }
      //准备一个todo对象
      this.props.addTodo(
        {
          id: nanoid(),
          name: event.target.value,
          done: false
        }
      )
      //清空输入
      event.target.value = ''
    }
  }
  
  render() {
      return (
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      );
  }
}
