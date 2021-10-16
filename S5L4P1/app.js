const PositiveMessage = () => <p>Mozesz obejrzec film</p>

const NegativeMessage = () => <p>Muszisz miec 16 lat aby obejrzec film</p>

const ValidationMessage = (props) => {
    
    const {txt} = props

    return(<p>{txt}</p>)
}

const OrderForm = (props) => {
    const {submit,isConfirmed,change} = props;
    return(
    <form onSubmit={submit}>
        <input type = "checkbox" id="ageLabel" onChange={change} checked = {isConfirmed} />
        <label htmlFor="ageLabel">Mam 16 lat</label>
        <br/>
        <button type="submit">Kup bilet</button>
        <PositiveMessage/>
    </form>
    )
}

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
            if(this.state.isConfirmed){return <ValidationMessage txt = "jest ok"/>}
            else {return <ValidationMessage txt = "nie jest ok"/>}
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
        const {isConfirmed , isSubmitted} = this.state;


        return(
            <>
            <h1>Kup bilet na horror</h1>
            <OrderForm 
                change={this.handleCheckboxChange} 
                submit={this.handleFormSubmit}
                checked={isConfirmed}
            />
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'))