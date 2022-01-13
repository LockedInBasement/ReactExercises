import React, { Component } from 'react';
import './App86.css';

class App86 extends Component {

  state = {
      username: '',
      email: '',
      pass: '',
      accept: false,
      message: '',

      errors:{
        username: false,
        email: false,
        pass: false,
        accept: false,

      }
  }

  messages = {
      username_incorrect: 'Nazwa musi byc dluzsza niz 10 znakow i nie ma miec spacji',
      email_incorrect: 'Brak @ w emailu',
      password_incorrect: 'Hasło musi miec 8 znaków',
      accept_incorrect: 'Nie potwierdzono'
  }


  componentDidMount(){
  }

  handelChange = e =>{
        
    const name = e.target.name;  
    const type = e.target.type;
        
    if(type ==="text" || type === "password" || type === "email")  
    {
        const value = e.target.value;    
        this.setState({
            [name]: value
        })
    }
    else if(type === "checkbox")
    {
        const checked = e.target.checked;
        this.setState({
            [name]: checked
        })
    }
  }

  handleSubmit = (e) => {
        e.preventDefault()

        const validation = this.formValidation()

        if(validation.correct)
        {
            this.setState({
                username: '',
                email: '',
                pass: '',
                accept: false,
                message: 'Folrmulasz wyslany',
          
                errors:{
                  username: false,
                  email: false,
                  pass: false,
                  accept: false,
                }
            })
        }
        else
        {
            this.setState({
                errors:{
                    username: !validation.username,
                    email: !validation.email,
                    pass: !validation.password,
                    accept: !validation.accept,
                  }
            })
        }
  }

  formValidation =() =>{
    let username = false;
    let email = false;
    let pass = false;
    let accept = false;
    let correct = false;

    if(this.state.lenght >10 && this.state.username.indexOf('') === -1)
    {
        username = true;
    }

    if(this.state.username.indexOf('@') !== -1)
    {
        email = true;
    }

    if(this.state.pass.length === 8)
    {
        pass = true;
    }

    if(this.state.accept )
    {
        accept = true;
    }

    if(username && email && pass && accept)
    {
        correct = true;
    }

    return({
        username,
        email,
        pass,
        accept,
        correct
    })
  }

  componentDidUpdate()
  {
      if(this.state.message !== ''){
          setTimeout(() => this.setState({
              message: '',
          }), 3000)
      }
  }

  render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="user"> Twoje imię:
            <input type="text" id="user" name="username" value = {this.state.username} onChange={this.handelChange}/>
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
            </label>

            <label htmlFor="email"> Twoje adres email:
            <input type="email" id="email" name="email" value = {this.state.email}  onChange={this.handelChange}/>
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
            </label>

            <label htmlFor="password"> Twoje haslo:
            <input type="password" id="password" name="pass" value = {this.state.pass} onChange={this.handelChange}/>
            {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
            </label>

            <label htmlFor="accept"> 
                <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handelChange} /> Potwiedzam
            </label>

            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}

            <button>Zapisz się</button>

        </form>

        {this.state.mmessage && <h3>{this.state.message}</h3>}
    </div>
    );
  }
}

export default App86;
