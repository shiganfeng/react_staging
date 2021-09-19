import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    //对接收的props进行：类型以及必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        let {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}/>
                    })
                }
            </ul>
        );
    }
}
 