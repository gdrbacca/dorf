import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter } from 'react-router-dom'

import { RouterHash } from './routes'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <HashRouter>
        <RouterHash />
      </HashRouter>
    </QueryClientProvider>
  )
}
