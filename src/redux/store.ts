import { createSlice } from "@reduxjs/toolkit";

type Tasks = {
    id: number
    name: string , 
    status: "pending" | "completed"
    subTasks : {
        id: number
        name: string , 
        status: "pending" | "completed"
    }[]
}

const intialState : {
    tasks : Tasks []
} = {
   tasks: []
}

const reviewSlice = createSlice({
    name: "tasks",
    initialState: intialState ,
    reducers: {
        add: (state , action ) => {
            state.tasks.push(action.payload)
        } ,
        remove : (state , action) => {
          state.tasks =   state.tasks.filter((task )=> task.id != action.payload.id)
        },
        addsubtask: (state , action ) => {
            const task = state.tasks.find((task ) => task.id == action.payload.taskId)
            task.subTasks.push({id: action.payload.id , name : action.payload.id , status : action.payload.status})
        }   
    } 
})

export type {Tasks}
export const {add  , remove , addsubtask } =  reviewSlice.actions
export default reviewSlice.reducer