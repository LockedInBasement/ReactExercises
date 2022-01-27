import React, { Component, PureComponent } from 'react';
import './style.css';
import {AppContext, defaultObject} from './AppContext';
import UserInfo from './UserInfo';

class App extends PureComponent {
    
    state = {
        isUserLogged: defaultObject.isUserLogged,
    }

    render()
    {
        return(
            <div>
                <AppContext.Provider value={ {isUserLogged: this.state.isUserLogged , toggleLoggedState: this.state.toggleLoggedState} } >
                <UserInfo/>
                </AppContext.Provider>
            </div>
        );
    }

    handleToggleStateIsLogged = () => {
        this.state(prevState => {isUserLogged: !prevState.isUserLogged})
    };
    

}

export default App;