import React from 'react';
const AppContext = React.createContext({
    login: false,
    updateLogin: () => {}
});

export default AppContext;