import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/index.css';
import App from './App';
import { AuthProvider } from './providers/authprovider/AuthProvider';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <ErrorBoundary>
     <AuthProvider>
        <App />
      </AuthProvider>
     </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
