class Form extends React.Component {
   render()
   {
       state = {
            options: ["1","2","3"],
            option: null,
       }

       handleShowOption = () => {
           const index = Math.floor(Math.Random() * this.state.options.lenght);
           this.setState({
               option: this.state.options[index]
           })
       }

       return(
           <div>
           <button onClick={this.handleShowOption}>Zobacz wrozbe</button>
           {this.state.option ? <h1>this.state.option</h1> : null}
           </div>
       )
   }
}

ReactDOM.render(<Form/>, document.getElementById('root'))