import React, { Component } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import '../styles/App106.css'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';

class App106 extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                
            <div className="App106">
                <header>
                    {<Header/>}
                </header>
                <main>
                    <aside>
                        {<Navigation/>}
                    </aside>
                    <section className='page'>
                        {<Page/>}
                    </section>
                </main>
                <footer>{<Footer/>}</footer>
                SPA !
            </div>
            
            </Router>
        );
    }
}
 
export default App106;