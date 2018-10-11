import React, {Component} from 'react';
import {DefaultButton, Panel, PanelType, Persona, PersonaSize, PrimaryButton, TextField} from "office-ui-fabric-react";
import Http from "../../../Http";
import Toast from "../../../Toast";
import Util from "../../../Util";
import PersonalInfo from "./PersonalInfo";
import LoadingButton from "./LoadingButton";

class LoginPanel extends Component {

    state = {
        username: '',
        password: '',
        info: {},
        nullInfo: {},
        fullInfo: false,
        loading: false
    };

    render() {
        return (
            <Panel
                hasCloseButton={false}
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
                <div style={{marginTop: '1rem'}}>
                    <Persona
                        size={PersonaSize.size40}
                        imageInitials={Util.getGivenName(this.state.info.studentName)}
                        text={this.state.info.studentNo}
                        secondaryText={this.state.info.className}
                        updateValue={this._onValueChange}

                    />
                </div>
                }
                {this.props.login &&
                <PersonalInfo
                    info={this.state.info}
                    updateInfo={this._onInfoChange}
                />
                }
            </Panel>
        );
    }

    _updateLoading = (loading) => {
        this.setState({loading});
    };

    _proceedLogin = () => {
        let postData = new FormData();
        postData.append('username', this.state.username);
        postData.append('password', this.state.password);
        this._updateLoading(true);
        Http.post('/Common/login', postData)
            .then(res => {
                this._updateLoading(false);
                if (res.ok) {
                    this.props.updateInfo(res.data);
                    this.props.closePanel();
                    this.props.updateLogin(true);
                    Toast.info('登录成功');
                    this.setState({info: res.data});
                    this.setState({fullInfo: this._infoIsFull(res.data)});
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

    _proceedFillInfo = () => {

    };

    _infoIsFull = (info) => {
        const keys = Object.keys(info);
        for (let key of keys) {
            if (undefined === info[key] || null === info[key]) {
                return false;
            }
        }
        return true;
    };

    _onValueChange = (e) => {
        const target = e.target;
        this.setState({[target.name]: target.value});
    };

    _onInfoChange = (e) => {
        const target = e.target;
        const info = {...this.state.nullInfo, [target.name]: target.value};
        this.setState({nullInfo: info});
    };

    _onRenderFooterContent = () => {
        return (
            <div>
                {this.props.login ?
                    <LoadingButton onClick={this._proceedLogout} style={{marginRight: '8px'}}>退出</LoadingButton>
                    :
                    <LoadingButton onClick={this._proceedLogin} style={{marginRight: '8px'}}>登录</LoadingButton>
                }
                {!this.state.fullInfo && this.props.login &&
                <LoadingButton style={{marginRight: '8px'}} onClick={this._proceedFillInfo}>
                    更新
                </LoadingButton>
                }
                <DefaultButton onClick={this.props.closePanel}>取消</DefaultButton>
            </div>
        );
    };
}

export default LoginPanel;