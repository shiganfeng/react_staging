//创建“外壳”组件App
import React from 'react'
import Hello from './components/Hello/Hello.jsx'
//创建并暴露App组件
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    )
  }
}
