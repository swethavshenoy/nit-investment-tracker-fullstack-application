import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Default from './components/default/Default';
import HomePage from './components/pages/homepage/HomePage';
import FeaturePage from './components/pages/featurepage/FeaturePage';
import ResourcePage from './components/pages/resourcepage/ResourcePage';
import AboutPage from './components/pages/aboutpage/AboutPage';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import EsgPage from './components/pages/esgpage/EsgPage';
import Checkout from './components/pages/checkoutpage/Checkout';

import './App.css';


function App() {

  const [cartCount, setCartCount] = useState(0);

  const handleCartCount = (data) => {
    setCartCount(data);
  }
  return (
    <>
      <Default cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/esg" element={<EsgPage />} />
          <Route path="/dashboard" element={<DashboardPage func={handleCartCount} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Default>
    </>

  )
}

export default App;
