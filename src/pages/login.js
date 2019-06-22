import React, { Component } from 'react';
import Login from '../components/login/index';

class Alist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:'thong',
            password:'abcd1234'
        }
    }
    
    render () {
        return (
            <div>
                <Login {...this.state} />
            </div>
        )
    }
}

export default Alist