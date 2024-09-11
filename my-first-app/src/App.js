import React, { useState } from 'react'

function App(){
  const [tasks ,setTasks] = useState([]);
  const[inputValue ,setInputValue]=useState('');

  const addTask = ()=>{
    if(inputValue.trim()){
      setTasks([...tasks,inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (indexToDelete) =>{
    setTasks(tasks.filter((_,index) =>index !== indexToDelete));

  };

  return(
    <div>
      <h1>TO -DO LIST</h1>
    <input
       type ="text"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
       placeholder='Enter a task'
       />
       <button onClick={addTask}>Add Tak</button>
       <ul>
        {
          tasks.map((task, index)=>(
            <li key ={index}>{task}
            <button onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          ))
        }
       </ul>


    </div>
  );
}

export default App;