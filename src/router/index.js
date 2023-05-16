import * as React from 'react'
// import Home from '../views/HomeView.jsx'
// import Dashboard from '../views/DashboardView.jsx'
// import Login from '../views/LoginView.jsx'

const Home = React.lazy(() => import('../views/HomeView.jsx'))
const Dashboard = React.lazy(() => import('../views/DashboardView.jsx'))
const Login = React.lazy(() => import('../views/LoginView.jsx'))

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard,
    auth: true
  },
  {
    path: '/login',
    component: Login
  },
]
