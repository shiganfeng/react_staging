import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {

    //全选checkbox的回调
    handleCheckAll = (event)=> {
        this.props.checkAllTodo(event.target.checked)
    }

    //清除所有已完成的
    handleClearAllDone = ()=> {
        this.props.clearAllDone()
    }

    render() {
        let {todos} = this.props
        let total = todos.length
        let doneCount = todos.reduce((pre, curTodo) => {
            return pre + (curTodo.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}
