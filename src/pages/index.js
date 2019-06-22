import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Routers from './routers/routerMap';
import NotFound from './container/notfound';

export default class index extends Component {
    render() {
        console.log(Routers,'动态路由配置');
        
        return (
            <Router>
                <div>
                    <Switch>
                       {
                            Routers.map((item,index)=>{
                                return <Route key={index} path={item.path} exact render={props => <item.component {...props} />}/>
                            })
                       }
                       <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


// import React, { Component } from "react";
// import * as config from "./config"; //将所有的config文件下的抛出
// import NoStateComponent from "./NoStateComponent";
// import High from "./Hoc";

// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: ['北京', '上海', '江苏']
//         }
//     }

//     add = () => {
//         return (
//             <div>
//                 我是ABC的
//                 展示 <span>{this.props.str}</span>
//             </div>
//         )
//     }


//     render() {
//         const { list } = this.state;
//         console.log('props', this.props);
//         const { str } = this.props;

//         return (
//             <div>
//                 <span>姓名</span>{`${str}'-------'我是高阶组件的参数`}
//                 <br />
//                 年龄:{config.obj.age}
//                 性别:{config.obj.sex}
//                 {/* {config.fun()} 这种的适用于初始页面 正常页面没有这种操作的 */}
//                 <NoStateComponent arr={list}></NoStateComponent>
//                 {this.add()}
//             </div>
//         )
//     }
// }
// export default High(Index);