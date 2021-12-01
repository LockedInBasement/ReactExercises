class Counter extends React.Component {

    state = {
        result: 1,
        ratio: 2,
    }

    handleMultiplication = () => 
    {
        this.setState( (state) => (
            {
                result: state.result * state.ratio
            }))
    }

    componentDidUpdate()
    {
        if(this.state.result > 1000 && this.state.ratio === 2)
        {
            this.setState({
                ratio: 0.5
            })
            console.log("2");
        }
        else if(this.state.result < 1 && this.state.ratio === 0.5)
        {
            this.setState({
                ratio: 2
            })
            console.log("3");
        }
    }

    render(){
        return(
            <div>
                <h1>Kalkulator mnoży przez dwa, jeśli suma jest mniejsza niż 1000. Po przekroczeniu 1000 kalkulator mnoży przez 0.5
                    aż osiągnie sumę mniejszą niż jeden. Wtedy ponownie mnoży przez 2.
                </h1>
                <button onClick={this.handleMultiplication}>{`Pomnoz przez ${this.state.ratio}`}</button>
                <h1>Wynik: {this.state.result}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))