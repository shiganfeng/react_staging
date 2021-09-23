import React, { Component } from 'react';

const DetailData = [
    {id: 1, content: '111'},
    {id: 2, content: '222'},
    {id: 3, content: '333'}
]
class Detail extends Component {
    render() {
        console.log(this.props)
        //接收params参数
        let {id, title} = this.props.match.params
        let findResult = DetailData.find((item) => item.id == id)
        console.log(findResult)
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </ul>
        );
    }
}

export default Detail;