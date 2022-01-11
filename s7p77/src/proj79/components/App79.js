import React, { Component } from 'react';
//import './App78.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?result=1';

class App79 extends Component {

  state = {
      users: []
  }

  componentDidMount(){
  }

  handleDataFetch = () => {
      //console.log("click");
      fetch(API)
      .then(response => { 
          if(response.ok) {
              return response
          } 
          throw Error("Błąd")
        })
      .then(response => response.json())
      .then(data => {
          const user = data.results;
          this.setState(prevState => ({
            users: prevState.users.concat(user)
          }))
      })
      .catch(error => console.log(Error))
  }

  render() {
    const users = this.state.users;

    return (
      <div>
            <ButtonFetchUsers click={this.handleDataFetch}/>
            {users.length > 0 ? <UsersList users = {users}/> : users}
      </div>
    );
  }
}

export default App79;