class Clock extends React.Component {

    state = {
        time: this.getTime()
    }

    getTime(){
        const currTime = new Date();
        console.log(currentTime);
        return(
            hours
        )
    } 

    componentDidUpdate()
    {

    }

    render(){
        const {hours, minutes, seconds}= this.state.time
        return(
            <div>
                {hours} : {minutes} : {seconds} 
            </div>
        )
    }
}

ReactDOM.render(<Clock/>, document.getElementById('root'))