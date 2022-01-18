import React, { Component } from 'react';
import './App90.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App90 extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'skonczyc ten kurs',
        date: '2018',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 1,
        text: 'pozmywac naczynia',
        date: '2019',
        important: false,
        active: true,
        finishDate:null,
      },
      {
        id: 2,
        text: 'poodkurzac',
        date: '2020',
        important: false,
        active: true,
        finishDate:null,
      },
    ]
  }

  componentDidMount(){
  }

  deleteTask = (id) => {
    console.log("delete w komponencie App");

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id) //-1
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks
    // })

    let tasks =[...this.state.tasks];
    tasks = tasks.filter(filter => filter.id !== id);

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    
    let tasks =[...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id)
      {
          task.active = false;
          task.finishDate = new Date().getTime();
      }
    })

    this.setState({
      tasks
    })

  }

  render() {
    return (
      <div>
       hello!
       <AddTask/>
       <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App90;
