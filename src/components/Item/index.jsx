import React, { Component } from 'react';
import './index.css'

export default class Item extends Component {
    //标识鼠标移入，移出
    state = {mouse: false}
    //鼠标移入，移出的回调
    handleMouse = (flag)=>{
      return ()=> {
        this.setState({
          mouse: flag
        })
      }
    }
    //勾选，取消一个todo的回调
    handleCheck = (id)=> {
      return (event)=> {
        this.props.updateTodo(id, event.target.checked)
      }
    }

    //删除todo的回调
    handldDelete = (id)=> {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }

    render() {
      let {id, name, done} = this.props
      let {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
              <label>
                <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
                <span>{name}</span>
              </label>
              <button onClick={() => {this.handldDelete(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}
