import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Context/Context.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <Context>
        <App />
      </Context>
      </QueryClientProvider>
)
