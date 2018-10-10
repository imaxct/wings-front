import React, {Component} from 'react';
import {TextField, PrimaryButton} from "office-ui-fabric-react";


class LoginFrame extends Component {
    state = {
        username: null,
        password: null
    };
    render() {
        return (
            <div>
                <TextField
                    label="用户名"
                    placeholder="用户名"
                    value = {this.state.username}
                />
                <TextField
                    label="密码"
                    placeholder="密码"
                    value = {this.state.password}
                />
                <PrimaryButton onClick={this.click}/>
            </div>
        );
    }
    click = () => {
        console.log(this.state.username);
        console.log(this.state.password);
    }
}

export default LoginFrame;