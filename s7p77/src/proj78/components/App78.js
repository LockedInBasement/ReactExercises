import React, { Component } from 'react';
import './App78.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?result=5';

class App extends Component {

  state = {
      users: null
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
          this.setState({
            users: data.results
          })
      })
      .catch(error => console.log(Error))
  }

  render() {
    const users = this.state.users;

    return (
      <div>
            <ButtonFetchUsers click={this.handleDataFetch}/>
            {users ? <UsersList users = {users}/> : users}
      </div>
    );
  }
}

export default App;
