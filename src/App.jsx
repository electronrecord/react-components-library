import './App.scss'
import { Routes, Route } from 'react-router-dom'
import {routes} from "./router/index.js"
import PrivateRoute from "./components/PrivateRoute.jsx"
import * as React from "react"
// const PrivateRoute = React.lazy(() => import('./components/PrivateRoute.jsx'))

function App () {
  return (
    <Routes>
      {routes.map(obj => (
        obj.auth
          ? <Route key={obj.path} path={obj.path} element={
            <React.Suspense fallback={<>Page not found</>}>
              <PrivateRoute><obj.component /></PrivateRoute>
            </React.Suspense>} />
          : <Route key={obj.path} path={obj.path} element={
            <React.Suspense fallback={<>Page not found</>}>
              <obj.component />
            </React.Suspense>} />
      ))}
    </Routes>
    // <Routes>
    //   {routes.map(obj => (
    //     obj.auth
    //       ? <Route key={obj.path} path={obj.path} element={<PrivateRoute><obj.component /></PrivateRoute>} />
    //       : <Route key={obj.path} path={obj.path} element={<obj.component />} />
    //   ))}
    // </Routes>
  )
}

export default App
