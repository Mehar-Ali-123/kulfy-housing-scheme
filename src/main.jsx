import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import "./../node_modules/primeicons/primeicons.css";   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <App /> 
  </React.StrictMode>,
)
