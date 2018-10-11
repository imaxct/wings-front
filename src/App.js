import React, {Component} from 'react';
import Main from './pages/main/Main';
import AppContext from './AppContext';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


class App extends Component {
    updateLogin = login => {
        this.setState({login});
    };

    state = {
        login: false,
        updateLogin: this.updateLogin
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Main/>
                <ToastContainer
                    position="top-right"
                    hideProgressBar
                />
            </AppContext.Provider>
        );
    }
}

export default App;
