import { Outlet } from 'react-router-dom'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />

      <div className="flex h-full min-h-[95vh] flex-1 gap-2 bg-zinc-900 py-6 pr-12">
        <div className="relative mt-4 h-full w-48 rounded-br-2xl rounded-tr-2xl border-2 border-l-0 border-zinc-700 p-5 pb-28 pr-0 shadow-shape">
          <a href="/" className="w-full">
            <h1 className="pl-1 text-zinc-200 hover:bg-zinc-800">Atletas</h1>
          </a>
          <a href="/home" className="w-full">
            <h1 className="pl-1 text-zinc-200 hover:bg-zinc-800">testeHome</h1>
          </a>
          <a href="/" className="w-full">
            <h1 className="pl-1 text-zinc-200 hover:bg-zinc-800">testeteste</h1>
          </a>
          <a href="/" className="w-full">
            <h1 className="pl-1 text-zinc-200 hover:bg-zinc-800">testeteste</h1>
          </a>
        </div>
        <div className="w-full p-8 pr-2 pt-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}
