import Home from '../views/HomeView.jsx'
import Dashboard from '../views/DashboardView.jsx'
import Login from '../views/LoginView.jsx'

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
