const Person = (props) => {
    return(
        <li>
            <span>{props.name}</span>
            <button onClick={() => props.delete(props.name)}>Usuń rekord</button>
        </li>
    )
}

class List extends React.Component {
    
    state = {
       people: [
        {id: 1, name:'Jan A.'},
        {id: 2, name:'Adam B.'},
        {id: 3, name:'Jola C.'},
        {id: 4, name:'Krysia D.'},
       ]
   }
    
//    handleDelete(id)
//    {
//         const people = [...this.state.people];
//         const index = people.findIndex(person => person.id === id);
//         console.log(index);
//         people.splice(index,1);
//         console.log(people);

//         this.setState({
//             people
//         })
//    }

   handleDelete = name =>
   {
       //let people = Array.from(this.state.people),
       let people = this.state.people.slice();
       people = people.filter(person => person.name !== name);
       this.setState({
        people
       })

   }

//    render()
//    {
//        const people = this.state.people.map(person => 
//        <Person 
//        key={person.id} 
//        name={person.name} 
//        delete={this.handleDelete.bind(this,person.id)}
//        />
//        )

//        return(
//            <ul>{people}</ul>
//        )
//    }

   render()
   {
    //    const people = this.state.people.map(person => 
    //    <Person 
    //    key={person.id} 
    //    name={person.name} 
    //    delete={this.handleDelete.bind(this,person.name)}
    //    />
    //    )

       const people = this.state.people.map(person => 
        <Person 
        key={person.id} 
        name={person.name} 
        delete={this.handleDelete}
        />
        )

       return(
           <ul>{people}</ul>
       )
   }
}

ReactDOM.render(<List/>, document.getElementById('root'))