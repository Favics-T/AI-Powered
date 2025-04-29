import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx';
import DataProvider from './Context/DataContext.jsx';



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <DataProvider>
    <ErrorBoundary>
        <App />
        </ErrorBoundary>
        </DataProvider>
       </StrictMode>,
)
