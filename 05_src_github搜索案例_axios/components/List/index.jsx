import React, { Component } from 'react';
import './index.css'

class List extends Component {
    render() {
        console.log(this.props.users)
        let {users, isFirst, isLoading, err} = this.props
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