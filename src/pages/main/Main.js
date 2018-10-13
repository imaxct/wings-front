import React, {Component} from 'react';
import {Nav, Persona} from 'office-ui-fabric-react';
import AppContext from '../../AppContext';
import './Main.css';
import LoginPanel from "./component/LoginPanel";
import Footer from "./component/Footer";
import Util from '../../Util'
import Notice from "./component/Notice";
import CourseList from "./component/CourseList";
import Toast from "../../Toast";
import SelectionList from "./component/SelectionList";

class Main extends Component {
    state = {
        selectedKey: 'notice',
        showPanel: false,
        personalInfo: {},
    };

    updateSelect = selectedKey => {
        this.setState({selectedKey});
    };

    render() {
        return (
            <AppContext.Consumer>{({login, updateLogin}) => (
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-link'>选课系统</h1>
                        <Persona
                            imageInitials={login ? Util.getGivenName(this.state.personalInfo.studentName) : '登录'}
                            onClick={this._openPanel}
                            hidePersonaDetails={true}
                            className="Head-avatar"/>
                    </header>
                    <div className='body-container'>
                        <div className='nav-bar'>
                            <Nav groups={[
                                {
                                    links: [
                                        {
                                            name: '公告', url: '', key: 'notice', onClick: () => {
                                                this.updateSelect('notice')
                                            }
                                        },
                                        {
                                            name: '课程列表', url: '', key: 'course', onClick: () => {
                                                if (!login) {
                                                    Toast.info('请先登录');
                                                    this._openPanel();
                                                    return;
                                                }
                                                this.updateSelect('course')
                                            }
                                        },
                                        {
                                            name: '已选课程', url: '', key: 'selected', onClick: () => {
                                                if (!login) {
                                                    Toast.info('请先登录');
                                                    this._openPanel();
                                                    return;
                                                }
                                                this.updateSelect('selected')
                                            }
                                        }
                                    ]
                                }
                            ]}
                                 selectedKey={this.state.selectedKey}
                            />
                        </div>
                        <div className='content'>
                            {'notice' === this.state.selectedKey && <Notice/>}
                            {'course' === this.state.selectedKey &&
                            <CourseList info={this.state.personalInfo} login={login}/>}
                            {'selected' === this.state.selectedKey && <SelectionList login={login}/>}
                        </div>
                    </div>
                    <LoginPanel
                        isOpen={this.state.showPanel}
                        closePanel={this._closePanel}
                        updateLogin={updateLogin}
                        updateInfo={this._updateInfo}
                        login={login}
                    />
                    <Footer/>
                </div>
            )}</AppContext.Consumer>
        );
    }

    _updateInfo = personalInfo => {
        this.setState({personalInfo: personalInfo});
    };

    _closePanel = () => {
        this.setState({showPanel: false});
    };

    _openPanel = () => {
        this.setState({showPanel: true});
    };

}

export default Main;