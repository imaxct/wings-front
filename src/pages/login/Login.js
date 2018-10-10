import React, {Component} from 'react';
import Notice from './component/Notice';
import LoginFrame from './component/LoginFrame';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className='login-container'>
                <Notice className='notice'/>
                <LoginFrame className='login'/>
            </div>
        );
    }
}

export default Login;