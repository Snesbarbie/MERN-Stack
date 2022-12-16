import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LocationsContextProvider} from './context/LocationContext'
import {ArtistsContextProvider} from './context/ArtistContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocationsContextProvider>
     <ArtistsContextProvider>
     < App />
     </ArtistsContextProvider>
    </LocationsContextProvider>
  </React.StrictMode>
);
