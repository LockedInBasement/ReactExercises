const PositiveMessage = () => <p>Mozesz obejrzec film</p>

const NegativeMessage = () => <p>Muszisz miec 16 lat aby obejrzec film</p>

class CheckboxAgeConfirmation extends React.Component {

    state = 
    {
        isConfirmed: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }

    displayMessage =() =>
    {
        if(this.state.isConfirmed){return <PositiveMessage/>}
        else {return <NegativeMessage/>}
    }

    render()
    {
        console.log(this.state.isConfirmed);
        return(
            <>
            <h1>Kup bilet na horror</h1>
            <input type = "checkbox" id="ageLabel" onChange={this.handleCheckboxChange} checked = {this.state.isConfirmed} />
            <label htmlFor="ageLabel">Mam 16 lat</label>
            <PositiveMessage/>
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById('root'))