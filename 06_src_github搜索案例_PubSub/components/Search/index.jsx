import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js';
import './index.css'

class Search extends Component {

    search = ()=>{
        //获取用户的输入
        let {keyWordEle: {value: keword}} = this
        //发送请求前通知List更新状态
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        //发送网络请求
        axios.get(`/api1/search/users2?q=${keword}`).then(res => {
            console.log('成功：', res.data.items)
            //请求成功后通知List更新状态
            PubSub.publish('atguigu', {users: res.data.items, isLoading: false})
          }).catch(err => {
            //请求失败后通知List更新状态
            PubSub.publish('atguigu', {err: err.message, isLoading: false})
            console.log(err)
          })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                <input ref={c => this.keyWordEle = c} type="text" placeholder="输入关键词"/>&nbsp;
                <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;