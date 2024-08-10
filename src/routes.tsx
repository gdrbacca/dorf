import { createBrowserRouter, Route, Routes } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { LoginLayout } from './_layouts/loginLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
// import { Home } from './pages/Home'
import { MainTable } from './pages/Table'

// usando browserRouter, não funcionou no gh pages, ai usa hashrouter, e <Link />
export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,

        children: [
          { path: '/', element: <MainTable /> },
          { path: 'home', element: <Home /> },
        ],
      },
      {
        path: '/login',
        element: <LoginLayout />,

        children: [{ path: '/login', element: <Login /> }],
      },
    ],
    { basename: import.meta.env.DEV ? '/' : '/dorf/' },
  )

export function RouterHash() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<MainTable />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
