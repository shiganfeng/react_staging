import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {

    //初始化
    state = {
        users: [],
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '', //存储请求相关的错误信息
    }
  

    componentDidMount(){
        PubSub.subscribe('atguigu', (msg, data)=>{
            console.log(data)
            this.setState(data)
        })
    }

    render() {
        let {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: 'red'}}>{err}</h2> :
                    users.map((item) => {
                        return(
                            <div key={item.id} className="card">
                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                    <img alt="avatar" src={item.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;