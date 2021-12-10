class App extends React.Component {

    state ={
        activeClock: true
    }

    handleClick = () =>{
        this.setState(state => ({
            activeClock: !state.activeClock
        }))
    }
    
    render(){
        return(
            <div>
                <SwitchButton active={this.state.activeClock} click={this.handleClick}/>
                {this.state.activeClock && <Clock/>}
            </div>
        )
    }
}

const SwitchButton = props =>(
    <button onClick={props.click}>{props.active ? "Turn off" : "Turn on"}</button>
)

class Clock extends React.Component {

    interval = ""

    state = {
        time: this.getTime()
    }

    getTime(){
        const currentTime = new Date();
        //console.log(currentTime);
        return({
            hours : currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
    } 

    setTime(){
        const time = this.getTime()
        this.setState({time})
    }

    componentDidMount()
    {
        this.interval = setInterval( this.setTime.bind(this), 1000)
    }

    componentWillUnomunt(){
        clearInterval(this.interval)
    }

    render(){
        const {hours, minutes, seconds}= this.state.time
        return(
            <div>
                {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`} 
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))