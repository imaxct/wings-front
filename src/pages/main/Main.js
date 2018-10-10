import React, {Component} from 'react';
import {DefaultButton, Nav, Panel, PanelType, Persona, PrimaryButton} from 'office-ui-fabric-react';
import AppContext from '../../AppContext';
import './Main.css';

class Main extends Component {
    state = {
        selected: 0,
        showPanel: false,
        personalInfo: {}
    };

    updateSelect = selected => {
        this.setState({selected});
    };

    getFirstName = () => this.state.personalInfo.studentName.substring(0, 1);

    render() {
        return (
            <AppContext.Consumer>{({login, updateLogin}) => (
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-link'>添翼工程报名系统</h1>
                        <Persona
                            imageInitials={login ? this.getFirstName() : '登录'}
                            onClick={this._openPanel}
                            hidePersonaDetails={true}
                            className="Head-avatar"/>
                    </header>
                    <div className='body-container'>
                        <div className='nav-bar'>
                            <Nav groups={[
                                {
                                    links: [
                                        {name: '公告', url: '', key: 'notice', onClick: this._openPanel},
                                        {name: '个人信息', url: '', key: 'info'},
                                        {name: '课程列表', url: '', key: 'course'},
                                        {name: '已选课程', url: '', key: 'selected'}
                                    ]
                                }
                            ]}/>
                        </div>
                        <div className='content'>
                            {this.state.selected === 1 &&
                            <div/>
                            }
                            {this.state.selected === 2 &&
                            <div/>
                            }
                            {this.state.selected === 3 &&
                            <div/>
                            }
                        </div>
                    </div>
                    <Panel
                        isOpen={this.state.showPanel}
                        type={PanelType.smallFixedFar}
                        onDismiss={this._closePanel}
                        onRenderFooterContent={this._onRenderFooterContent}
                        headerText='用户登录'
                    >

                    </Panel>
                    <footer className='footer'>

                    </footer>
                </div>
            )}</AppContext.Consumer>
        );
    }

    _closePanel = () => {
        this.setState({showPanel: false});
    };

    _openPanel = () => {
        this.setState({showPanel: true});
    };
    _onRenderFooterContent = () => {
        return (
            <div>
                <PrimaryButton onClick={this._closePanel} style={{marginRight: '8px'}}>
                    登录
                </PrimaryButton>
                <DefaultButton onClick={this._closePanel}>取消</DefaultButton>
            </div>
        );
    };
}

export default Main;