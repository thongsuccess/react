import React, { Component } from 'react';
import { Input,Button } from 'antd';
import * as config from './config';

const { Search } = Input;

class SearchLine extends Component {

    handleBtn = () => {
        console.log(config,config.add(123,321));
        
    }

    render() {
        return (
            <div>
                <Search placeholder='请输入需要的物品' />
                <Button onClick={this.handleBtn}>点我</Button>
            </div>
        )
    }
}
export default SearchLine;