import React, { Component } from 'react';
import { Main } from './pages/main/Main';
import { Login } from './pages/login/Login';

class App extends Component {
  login = false;
  render() {
    if (this.login) {
      return <Main/>;
    } else {
      return <Login/>;
    }
  }
}

export default App;
