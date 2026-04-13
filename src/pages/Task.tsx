import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'


import type { RootState } from '../main'
import { addsubtask, remove } from '../redux/store'


const Task = () => {
    const dispatch = useDispatch()

    const {id} = useParams()    

     const tasks = useSelector((state :RootState ) => state.task.tasks )
    const data = tasks.find((task) => task.id == Number(id))
const navigate = useNavigate()

     const [subtask , setSubTask] = useState({
        id: 0,
        name: "",
        status: "pending",
    })
    
    return (
    <div>
        Task
       <div style={{border:"1px solid white"}} key={data.id}>
                           <div>{data.id}</div>
                           <div>{data.name}</div>
                           <div>{data.status}</div>
                           <button onClick={()=>{ dispatch(remove({id : id})) ;navigate('/dashboard')  }}>remove Task</button>
                           sub task : 
                           <div>
                               {data.subTasks.map((subtask) => {
                                   return <div>
                                       <div>
                                           {subtask.id}
                                       </div>
                                       <div>
                                           {subtask.name}
                                       </div>
                                       <div>
                                           {subtask.status}
                                       </div>
                                   </div>
                               })}
                           </div>
                       </div>
    
    subtask :


       <input type="text" value={subtask.name} onChange={(e) => setSubTask({...subtask, name: e.target.value})}/>
               <select name="status" value={ subtask.status} onChange={(e) =>setSubTask({...subtask , status: e.target.value as "completed" | "pending" })  } id="">
                    <option value="completed">completed</option>
                    <option value="pending">pending</option>
               </select>
                <button onClick={()=>dispatch(addsubtask({...subtask,taskId : id ,id: Date.now() }))}>ADD TASK</button>
    
    
    </div>
  )
}

export default Task