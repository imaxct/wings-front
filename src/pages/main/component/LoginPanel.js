import React, {Component} from 'react';
import {DefaultButton, Panel, PanelType, Persona, PersonaSize, PrimaryButton, TextField} from "office-ui-fabric-react";
import Http from "../../../Http";
import Toast from "../../../Toast";
import Util from "../../../Util";

class LoginPanel extends Component {

    state = {
        username: '',
        password: '',
        info: {}
    };

    render() {
        return (
            <Panel
                isOpen={this.props.isOpen}
                type={PanelType.smallFixedFar}
                onDismiss={this.props.closePanel}
                onRenderFooterContent={this._onRenderFooterContent}
                headerText={this.props.login ? '' : '用户登录'}
            >
                {!this.props.login &&
                <TextField
                    label="用户名" placeholder="用户名"
                    type="phone" name="username"
                    value={this.state.username}
                    onChange={this._onValueChange}
                />}
                {!this.props.login &&
                <TextField
                    label="密码" placeholder="密码"
                    type="password" name="password"
                    value={this.state.password}
                    onChange={this._onValueChange}
                />}
                {this.props.login &&
                <Persona
                    size={PersonaSize.size40}
                    imageInitials={Util.getGivenName(this.state.info.studentName)}
                    text={this.state.info.studentNo}
                    secondaryText={this.state.info.className}
                />
                }
            </Panel>
        );
    }

    _proceedLogin = () => {
        let postData = new FormData();
        postData.append('username', this.state.username);
        postData.append('password', this.state.password);
        Http.post('/Common/login', postData)
            .then(res => {
                if (res.ok) {
                    this.props.updateLogin(true);
                    this.props.updateInfo(res.data);
                    this.props.closePanel();
                    Toast.info('登录成功');
                    this.setState({info: res.data});
                }
            });
    };

    _proceedLogout = () => {
        Http.get('/Common/logout')
            .then(res => {
                if (res.ok) {
                    this.props.updateLogin(false);
                    this.props.updateInfo({});
                    this.props.closePanel();
                }
            });
    };

    _onValueChange = (e) => {
        const target = e.target;
        this.setState({[target.name]: target.value});
    };

    _onRenderFooterContent = () => {
        return (
            <div>
                {this.props.login ?
                    <PrimaryButton onClick={this._proceedLogout} style={{marginRight: '8px'}}>退出</PrimaryButton>
                    :
                    <PrimaryButton onClick={this._proceedLogin} style={{marginRight: '8px'}}>登录</PrimaryButton>
                }
                <DefaultButton onClick={this.props.closePanel}>取消</DefaultButton>
            </div>
        );
    };
}

export default LoginPanel;