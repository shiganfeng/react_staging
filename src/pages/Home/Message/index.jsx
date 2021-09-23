import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

class Message extends Component {

    state = {
        messageArr: [
            {id: 1, title: '消息一'},
            {id: 2, title: '消息二'},
            {id: 3, title: '消息三'}
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((item) => {
                            return (
                                <li key={item.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        );
    }
}

export default Message;