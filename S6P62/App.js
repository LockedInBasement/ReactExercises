class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            number:0
        }
        console.log('constructor')
    } 

    componentWillMount()
    {
        console.log('componentWillMount')
    }

    componentDidMount()
    {
        console.log('componentDidMount')
        this.setState({
            number:1
        })
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate')
    }


    render(){
        console.log('render')
        return(
            <div>

                <h1>{this.state.number}</h1>'
                <Child/>
            </div>
        )
    }
}

class Child extends React.Component{
    componentDidMount()
    {
        console.log('componentDidMount in Child')
        this.setState({
            number:1
        })
    }

    render(){
        console.log('---------------------------render in child')
        return(
            <div>
                <h1>Child</h1>'
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))