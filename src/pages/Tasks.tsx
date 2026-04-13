import React, { useState } from 'react'
import {add, remove, type Tasks } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../main'
import { useNavigate } from 'react-router-dom'

const Tasks = () => {
  
    const [task , setTask] = useState<Tasks>({
        id: 0,
        name: "",
        status: "pending",
        subTasks: []
    })
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tasks = useSelector((state :RootState) => state.task.tasks )

    return (
    <div>

           <input type="text" value={task.name} onChange={(e) => setTask({...task, name: e.target.value})}/>
           <select name="status" value={ task.status} onChange={(e) =>setTask({...task , status: e.target.value as "completed" | "pending" })  } id="">
                <option value="completed">completed</option>
                <option value="pending">pending</option>
           </select>
            <button onClick={()=>dispatch(add({...task, id: Date.now() }))}>ADD TASK</button>


        {
            tasks.map((task)=>{
                return <div onClick={() => navigate(`/dashboard/${task.id}`)} key={task.id}>
                    <div>{task.id}</div>
                    <div>{task.name}</div>
                    <div>{task.status}</div>
                    <button onClick={()=> dispatch(remove({id : task.id}))}>remove Task</button>
                    sub task : 
                    <div>
                        {task.subTasks.map((subtask) => {
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
            })
        }

    </div>
  )
}

export default Tasks