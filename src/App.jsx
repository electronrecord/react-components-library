import './App.scss'
import { Routes, Route } from 'react-router-dom'
import {routes} from "./router/index.js"
import {PrivateRoute} from "./components/PrivateRoute.jsx"

function App () {
  return (
    <Routes>
      {routes.map(obj => (
        obj.auth
          ? <Route key={obj.path} path={obj.path} element={<PrivateRoute><obj.component /></PrivateRoute>} />
          : <Route key={obj.path} path={obj.path} element={<obj.component />} />
      ))}
    </Routes>
  )
}

export default App
