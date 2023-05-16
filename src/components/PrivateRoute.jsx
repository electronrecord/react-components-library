import {useSelector} from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute ({children}) {
  const user = useSelector(user => user.homepage.user)

  return (
    <>
      {user.name ? children : <Navigate to='/login' />}
    </>
  )
}

export default PrivateRoute
