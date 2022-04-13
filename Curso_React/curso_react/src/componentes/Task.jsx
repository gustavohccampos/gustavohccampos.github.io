import React from 'react'
import './Task.css'

const Task = ({ task, handleTaskClick}) => {
  return (
    <>
         <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
     <div className="task-container" 
     style={task.completed ? 
      {borderLeft:'12px solid chartreuse',
      borderBottom:'1px solid chartreuse',
      borderRight:'1px solid chartreuse',
      borderTop:'1px solid chartreuse'
      }
      :{}}
     >
       
  
     {task.nome}

 

      <div className='buttons-container'>
        <button className='remove-task-button'>X</button>
        <button className='remove-task-button'>C</button>
      </div>
      </div>

       </div>

    
    </>
  )
}
export default Task

 // <div className="task-container">{task.nome}</div>