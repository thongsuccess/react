import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';

export default class Detail extends Component {
    componentDidMount() {
        console.log(this.props.routes);
        
    }
    render() {
        return (
            <div>
                {
                    this.props.routes.map((item,index) => (
                        <Route key={index} exact path={item.path} component={item.component} />
                    ))
                }
            </div>
        )
    }
}
