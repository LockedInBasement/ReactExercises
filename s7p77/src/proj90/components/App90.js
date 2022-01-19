import React, { Component } from 'react';
import './App90.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App90 extends Component {

  counter = 7;

  state = {
    tasks: [
      {
        id: 0,
        text: 'skonczyc ten kurs',
        date: '2018',
        important: true,
        active: false,
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
      {
        id: 3,
        text: 'pospacerowac',
        date: '2020',
        important: false,
        active: true,
        finishDate:null,
      },
      {
        id: 4,
        text: 'update kompa',
        date: '2020',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 5,
        text: 'oddac lukaszowi przesylke',
        date: '2020',
        important: false,
        active: true,
        finishDate:null,
      },
      {
        id: 6,
        text: 'karma dla ptaka',
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

  addTask = (text,date,important) => {
    console.log("dodany obiekt",date);
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate:null,
    }
    this.counter++
    // console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]

    }))

    return true
  }

  render() {
    return (
      <div className='App90'>
        <h1>TO DO APP</h1>
       <AddTask add={this.addTask}/>
       <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App90;
