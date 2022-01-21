import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import './App102.css'

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;

const ErrorPage = () => <h1>Storna nie istnieje</h1>

class App109 extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                {/* <li><a href="/">Start</a></li>
                                <li><a href="/news">Aktualności</a></li>
                                <li><a href="/contact">Kontakt</a></li> */}
                                <li><NavLink to="/" exact activeClassName = "home_selected" 
                                activeStyle={{
                                    backgroundColor: 'gray',
                                    letterSpacing: '2px',
                                }}>Start</NavLink></li>
                                <li><NavLink to="/news" activeClassName = "news_selected">Aktualności</NavLink></li>
                                <li><NavLink to="/contact" activeClassName = "contact_selected">Kontakt</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Routes>
                        <Route path="/" exact Component={Home}/>
                        <Route path="/news" Component={News}/>
                        <Route path="/contact" Component={Contact}/>
                        <Route component={ErrorPage}/>
                        </Routes>
                    </section>
                </div>
            </Router>
        );
    }
}
 
export default App109;