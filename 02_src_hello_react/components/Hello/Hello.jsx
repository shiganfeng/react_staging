//创建“外壳”组件App
import React from 'react'
import './Hello.css'
//创建并暴露App组件
export default class Hell extends React.Component {
  render() {
    return (
        <h2 className="title">hello react</h2>
    )
  }
}
