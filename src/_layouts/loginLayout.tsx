import { Outlet } from 'react-router-dom'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

export function LoginLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
