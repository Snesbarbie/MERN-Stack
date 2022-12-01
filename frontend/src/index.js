import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LocationsContextProvider} from './context/LocationContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocationsContextProvider>
     < App />
    </LocationsContextProvider>
  </React.StrictMode>
);