import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { LoginLayout } from './_layouts/loginLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
// import { Home } from './pages/Home'
import { MainTable } from './pages/Table'

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,

      children: [
        { path: '/', element: <MainTable /> },
        { path: '/home', element: <Home /> },
      ],
    },
    {
      path: '/login',
      element: <LoginLayout />,

      children: [{ path: '/login', element: <Login /> }],
    },
  ])
