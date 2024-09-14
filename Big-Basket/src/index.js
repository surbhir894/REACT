import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const temp = ReactDOM.createRoot(document.getElementById('root'));
temp.render(
  <React.StrictMode>
    <App/>
   </React.StrictMode>
);

reportWebVitals();
