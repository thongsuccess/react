import React, { Component } from 'react';
import { Form, Icon, Input, Button ,message} from 'antd';
import './index.css';

class Alist extends Component {

    handelSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
           if(!err) {
               if (values.username === this.props.user && values.password === this.props.password) {
                   message.success("登录成功");
                   console.log(values);
               } else {
                   message.error("登录失败，请重新登录！！！");
                   this.props.form.resetFields();
               }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div>
                <h1>MSPA</h1>
                <div className='loginForm'>
                    <Form onSubmit={this.handelSubmit} className="login-form">
                        <Form.Item label=''>
                            {
                                getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: '请输入名称'
                                    }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='Username'
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item label=''>
                            {
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: '请输入密码哟'
                                    }]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item style={{ float: 'right' }}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create()(Alist)