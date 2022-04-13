import React, { useState } from 'react'
import './App.css'
import AddTask from './componentes/AddTask'
import {v4 as uuidv4} from 'uuid'

import Tasks from './componentes/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      nome: 'Logica de Programação',
      completed: false
    },
    {
      id: '2',
      nome: 'HTML5',
      completed: true
    },
    {
      id: '3',
      nome: 'CSS3',
      completed: false
    },
  ])

  const handleTaskClick=(taskId) => {
    const newTasks = tasks.map((task) =>{
      if(task.id == taskId) return {...task, completed: !task.completed}
      return task;
      }
    )
    setTasks(newTasks)
  }

  const handleTaskAddition=(taskTitle)=>{
    const newTasks = [
      ...tasks,
      {
        nome:taskTitle,
        id: uuidv4(),
        completed:false,
    }
  ];
  setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
       
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  )
}

export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
