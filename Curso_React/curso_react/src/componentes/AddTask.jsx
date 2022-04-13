import React,{useState} from 'react'
import Button from './Button'
import './AddTask.css'



  const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

  const handleInputChange = (e)=> {
    setInputData(e.target.value)

  }

  const handleTaskClick=()=>{
    handleTaskAddition(inputData)
  }

  return (
    <>
    <div className="add-task-container">
      <input onChange={handleInputChange}
      value={inputData}
      className="add-task-input" type="text" />
      <div className="add-button-container">
      
      <Button onClick={handleTaskClick}>Adicionar</Button>
        </div>
    </div>
    </>
  )
}
export default AddTask
