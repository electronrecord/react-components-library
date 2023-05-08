import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {SET_USER} from "../store/modules/homepage.js"

export const LoginView = function () {
  const dispatch = useDispatch()
  const user = useSelector(user => user.homepage.user)

  function mockUser () {
    dispatch(SET_USER({name: 'Cristian'}))
  }

  return (
    <main>
      <h1>This is Login Page</h1>
      <p>{user.name}</p>
      <button onClick={mockUser}>MOCK USER</button>
      <Link to='/dashboard'>Go to Dashboard</Link>
    </main>
  )
}

export default LoginView
