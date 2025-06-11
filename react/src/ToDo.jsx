import React, { useState } from 'react';

function ToDo(){

    const [tasks,setTasks]=useState(["eat bf","bath",'walk']);
    const [newTask,setNew]=useState("");

    function handleInpChn(event){
         setNew(event.target.value);
    }
    function addTask(){

    }
    function delTask(index){

    }
    function moveUp(index){

    }
    function moveDown(index){

    }

    return(<div className='to-do'>
        <hi>To-Do-List</hi>
        <div>
            <input
               type='text'
               placeholder='enter task..'
               value={newTask}
               onChange={handleInpChn}/>
               <button className='add-btn'
               onClick={addTask}>
                Add
               </button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                 <li key="index">
                    <span className='text'>{task}</span>
                    <button className='del-btn' 
                    onClick={()=>delTask(index)}>
                        Delete
                    </button>
                    <button className='up-btn' 
                    onClick={()=>moveUp(index)}>
                        👆
                    </button>
                    <button className='dwn-btn' 
                    onClick={()=>moveDown(index)}>
                        👇
                    </button>
                 </li>
            )}
        </ol>

    </div>)


}
export default ToDo;