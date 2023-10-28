import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from './components/default/Default';
import HomePage from './components/pages/homepage/HomePage';
import FeaturePage from './components/pages/featurepage/FeaturePage';
import ResourcePage from './components/pages/resourcepage/ResourcePage';
import AboutPage from './components/pages/aboutpage/AboutPage';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import EsgPage from './components/pages/esgpage/EsgPage';
import Checkout from './components/pages/checkoutpage/Checkout';
import Pricing from './components/shared/Pricing';

import './App.css';
import { tiersData } from './constants/config'
import TransactionHistory from './components/pages/dashboardpage/components/TransactionHistory';
import MyProfile from './components/pages/dashboardpage/components/MyProfile';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from "./store";

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Default>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/feature" element={<FeaturePage />} />
              <Route path="/resource" element={<ResourcePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/esg" element={<EsgPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pricing" element={<Pricing tiersData={tiersData} />} />
              <Route path="/history" element={<TransactionHistory />} />
              <Route path="/myprofile" element={<MyProfile />} />
            </Routes>
          </Default>
        </Provider>
      </QueryClientProvider>
    </>

  )
}

export default App;
