import {useSelector} from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = function ({children}) {
  const user = useSelector(user => user.homepage.user)

  return (
    <>
      {user.name ? children : <Navigate to='/login' />}
    </>
  )
}
