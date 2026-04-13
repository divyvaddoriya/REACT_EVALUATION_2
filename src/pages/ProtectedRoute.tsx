import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

const user = localStorage.getItem('user')
const data = JSON.parse(user)
console.log(data);



if(!data) {
    return <Navigate to={'/login'}/>
}

    return (
        <Outlet />
    )
}

export default ProtectedRoute