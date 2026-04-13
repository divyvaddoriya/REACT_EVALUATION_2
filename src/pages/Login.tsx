import  { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

const [data , setData] = useState({
    name: "",
    password: ""
})

if(!localStorage.getItem('user')){
    <Navigate to={'/login'}/>
}

const handleSubmit = () => {
    localStorage.setItem('user' , JSON.stringify(data))
    setData({
        name: "",
        password:""
    })
    navigate('/')
}

  return (

    <div>   

        <input type="text" value={data.name} onChange={(e) => setData({...data , name : e.target.value})}/>
        <input type="password" value={data.password} onChange={(e) => setData({...data , password : e.target.value})}/>
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login