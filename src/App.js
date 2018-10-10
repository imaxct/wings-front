import React, { Component } from 'react';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import AppContext from './AppContext';

class App extends Component {
  updateLogin = login => {
    this.setState({login});
  };

  state = {
    login: true,
    updateLogin: this.updateLogin
  };
  
  render() {
    return (
    <AppContext.Provider value={this.state}>
    {this.state.login &&
      <Main/>
    }
    {(!this.state.login) &&
      <Login/>
    }
    </AppContext.Provider>
    );
  }
}

export default App;
