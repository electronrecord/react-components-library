import {Link} from "react-router-dom"

export const HomeView = function () {
  return (
    <main className='home-view'>
      <h1>This is Homepage - publicly available</h1>
      <Link to='/dashboard'>Go to Dashboard</Link>
      <Link to='/login'>Go to Login</Link>
    </main>
  )
}

export default HomeView
