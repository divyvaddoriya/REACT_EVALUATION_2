import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import Login from './pages/Login'
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./redux/store"
import { Provider } from 'react-redux'
import DashBoard from './pages/DashBoard'
import Task from './pages/Task'

const router = createBrowserRouter([
  {
  path : "/",
  element: <ProtectedRoute />,
  children: [
    {
      index: true , element: <DashBoard/>,
    }
    ,{
      path:"/dashboard" , element: <DashBoard/>,
    }
  ]
  },
{
      path:"/dashboard/:id" , element : <Task />
},
  {
    path: "/login",
    element: <Login />
  }
])


const store = configureStore({
  reducer: {
    task : taskReducer
  }
})


createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

