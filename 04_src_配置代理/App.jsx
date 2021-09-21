import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {

  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/search/users2').then(res => {
      console.log('成功：', res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    );
  }
}
