import React, {Component} from 'react';
import {DefaultButton, Nav, Panel, PanelType, Persona, PrimaryButton} from 'office-ui-fabric-react';
import AppContext from '../../AppContext';
import './Main.css';
import LoginPanel from "./component/LoginPanel";
import Footer from "./component/Footer";

class Main extends Component {
    state = {
        selected: 0,
        showPanel: false,
        personalInfo: {}
    };

    updateSelect = selected => {
        this.setState({selected});
    };

    getGivenName = () => {
        const name = this.state.personalInfo.studentName;
        if (name === null || name === '') {
            return '登录';
        }
        const len = name.length;

        if (len === 2) {
            return name;
        } else if (len > 2) {
            return name.substring(len - 2, len);
        }
        return name;
    };

    render() {
        return (
            <AppContext.Consumer>{({login, updateLogin}) => (
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-link'>添翼工程报名系统</h1>
                        <Persona
                            imageInitials={login ? this.getGivenName() : '登录'}
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
                    <LoginPanel
                        isOpen={this.state.showPanel}
                        closePanel={this._closePanel}
                        updateLogin={updateLogin}
                        updateInfo={this._updateInfo}
                    />
                    <Footer/>
                </div>
            )}</AppContext.Consumer>
        );
    }

    _updateInfo = personalInfo => {
        this.setState({personalInfo});
    };

    _closePanel = () => {
        this.setState({showPanel: false});
    };

    _openPanel = () => {
        this.setState({showPanel: true});
    };

}

export default Main;