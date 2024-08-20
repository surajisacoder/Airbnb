import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryProvider } from './Context/CategoryContext';
import { BrowserRouter } from 'react-router-dom';
import { DateProvider } from './Context/DateContext';
import { FilterProvider } from './Context/FilterContext';
import { AuthProvider } from './Context/AuthContext';
import { WishlistProvider } from './Context/WishlistContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DateProvider>
    <CategoryProvider>
      <FilterProvider>
        <AuthProvider>
          <WishlistProvider>
          <App/>
          </WishlistProvider>
        
        </AuthProvider>
      
      </FilterProvider>
    
    </CategoryProvider> 
    </DateProvider>
   
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
