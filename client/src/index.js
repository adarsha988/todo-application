import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApiContextProvider from './contexts';
import ToastContextProvider from './contexts/ToastContext';
import ThemeContextProvider from './contexts/ThemeContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
    <ToastContextProvider>
   <ApiContextProvider>
      <App />
   </ApiContextProvider> 
   </ToastContextProvider>
   </ThemeContextProvider>
  </React.StrictMode>
);
