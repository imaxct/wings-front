import React, {Component} from 'react';
import {DefaultButton, Panel, PanelType, PrimaryButton} from "office-ui-fabric-react";

class LoginPanel extends Component {

    render() {
        return (
            <Panel
                isOpen={this.props.isOpen}
                type={PanelType.smallFixedFar}
                onDismiss={this.props.closePanel}
                onRenderFooterContent={this._onRenderFooterContent}
                headerText='用户登录'
            >

            </Panel>
        );
    }

    _onRenderFooterContent = () => {
        return (
            <div>
                <PrimaryButton onClick={this.props.closePanel} style={{marginRight: '8px'}}>
                    登录
                </PrimaryButton>
                <DefaultButton onClick={this.props.closePanel}>取消</DefaultButton>
            </div>
        );
    };
}

export default LoginPanel;