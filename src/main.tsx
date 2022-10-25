import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
