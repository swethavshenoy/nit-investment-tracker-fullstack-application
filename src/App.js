import './App.css';
import { Routes, Route } from 'react-router-dom';

import Default from './components/default/Default';
import HomePage from './components/pages/homepage/HomePage';
import FeaturePage from './components/pages/featurepage/FeaturePage';
import ResourcePage from './components/pages/resourcepage/ResourcePage';
import AboutPage from './components/pages/aboutpage/AboutPage';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import EsgPage from './components/pages/esgpage/EsgPage';


function App() {
  return (
    <>
      <Default>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/esg" element={<EsgPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Default>
    </>

  )
}

export default App;
