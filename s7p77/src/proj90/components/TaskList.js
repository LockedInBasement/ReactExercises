import React from 'react';
import Task from './Task';


const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    // console.log(active,done);

    const activeTasks = active.map( task => <Task key = {task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map( task => <Task key = {task.id} task={task} delete={props.delete} change={props.change}/>)

    return ( 
        <>
            <div className="active">
                <h2>Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p> No tasks added</p>}
            </div>

            <hr/>

            <div className="done">
                {done.length > 5 &&<span style={{fontSize:"15px"}}>Number of done tasks cut to 5</span> }
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {doneTasks.slice(0,5)}
            </div>
        </>
     );
}
 
export default TaskList;