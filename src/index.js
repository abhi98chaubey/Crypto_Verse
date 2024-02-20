// Import necessary dependencies
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import your root component
import App from './App'; // Replace 'App' with the actual name and path of your root component
import '@ant-design/cssinjs';
import store from './app/store';

// Render the root component in the 'root' element of your HTML
createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store = {store}>
          <React.StrictMode>
            <App />
         </React.StrictMode>
    </Provider>
      
  </Router>
);



