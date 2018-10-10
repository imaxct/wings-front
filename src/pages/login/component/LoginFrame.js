import React, {Component} from 'react';
import {TextField, PrimaryButton} from "office-ui-fabric-react";

import './LoginFrame.css';

class LoginFrame extends Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <div className='login-frame' {...this.props}>
                <TextField
                    name='username'
                    label="用户名"
                    placeholder="用户名"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <TextField
                    name='password'
                    label="密码"
                    placeholder="密码"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <PrimaryButton onClick={this.click} text='Login'/>
            </div>
        );
    }

    click = () => {
        console.log(this.state.username);
        console.log(this.state.password);
    };

    handleChange = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    };
}

export default LoginFrame;