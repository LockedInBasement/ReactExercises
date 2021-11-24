class App6 extends React.Component {
   
    state = {
        options: ["1","2","3"],
        option: null,
        value: "",
   }
   
   handleShowOption = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            option: this.state.options[index]
        })
    }

    handleInputChange= (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleAddOption = ()=>{
        if(this.state.value==="") return alert("wpisz cos!")
        //const options = [...this.state.options]
        //options.push(this.state.value)
        const options = this.state.options.concat(this.state.value);
        
        this.setState({
            options,
            value:'',
        })
        alert(`Wrozba dodana.Aktualne wrozby: ${options}`)
    }
    
    render()
   {
       return(
           <div>
           <button onClick={this.handleShowOption}>Zobacz wrozbe</button>
           <br/>
           <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
           <button onClick={this.handleAddOption}>Dodaj wrozbe</button>
           {this.state.option ? <h1>{this.state.option}</h1> : null}
           </div>
       )
   }
}

ReactDOM.render(<App6/>, document.getElementById('root'))