class App extends React.Component {

    state = {
        status: true
    }

    handleChangeApp = () =>
    {
        this.setState({
            status: !this.state.status
        });
    }

    componentDidMount()
    {
        console.log("aplikacja zamontowana");
    }

    componentDidUpdate()
    {
        console.log("aplikacja aktualizowana");
    }

    render(){
        console.log("renderowanie aplikacji");
        return(
            <div>
                <button onClick={this.handleChangeApp}>Przecz</button>
                <Child1 status = {this.state.status}/>
                {this.state.status && <Child2/>}
            </div>
        )
    }
}

class Child1 extends React.Component{
    render()
    {
        console.log("renderowanie childa");
        return(
            <div>
                {String(this.props.status)}
            </div>
        )
    }
}

class Child2 extends React.Component{

    componentDidMount()
    {
        console.log("Child2 zamontowana");
    }

    componentDidUpdate()
    {
        console.log("Child2 aktualizowana");
    }

    componentWillUnmount()
    {
        console.log("Child2 odmontowany");
    }

    render()
    {
        console.log("renderowanie childa2");
        return(
            <div>
                Komponent Child2 zamontowany
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))