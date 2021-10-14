const PositiveMessage = () => <p>Mozesz obejrzec film</p>

const NegativeMessage = () => <p>Muszisz miec 16 lat aby obejrzec film</p>

class TicketShop extends React.Component {

    state = 
    {
        isConfirmed: false,
        isSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isSubmitted: false
        })
    }

    displayMessage = () =>
    {
        if(this.state.isSubmitted)
        {
            if(this.state.isConfirmed){return <PositiveMessage/>}
            else {return <NegativeMessage/>}
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(!this.state.isSubmitted){
            this.setState({
                isSubmitted: true
            })
        }
    }

    render()
    {
        console.log(this.state.isConfirmed);
        return(
            <>
            <h1>Kup bilet na horror</h1>
            <form onSubmit={this.handleFormSubmit}>
                <input type = "checkbox" id="ageLabel" onChange={this.handleCheckboxChange} checked = {this.state.isConfirmed} />
                <label htmlFor="ageLabel">Mam 16 lat</label>
                <br/>
                <button type="submit">Kup bilet</button>
                <PositiveMessage/>
            </form>
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))