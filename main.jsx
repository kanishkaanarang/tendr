import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { setupGlobalErrorHandling } from './utils/errorHandler.js'
import './index.css'

// Setup global error handling
setupGlobalErrorHandling();

console.log('main.jsx is loading...');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)