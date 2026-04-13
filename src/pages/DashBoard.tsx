import { useNavigate } from "react-router-dom"
import Tasks from "./Tasks"

const DashBoard = () => {

    const navigate = useNavigate()

    const logout =  () => {
        localStorage.removeItem('user')
        navigate("/login")
    }


    return (

        <div>

    <div>
        <button onClick={logout}>logout</button>
        <Tasks />
    
    </div>

        </div>
  )
}

export default DashBoard