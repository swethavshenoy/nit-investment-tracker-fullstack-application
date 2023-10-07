import LoginPage from '../src/components/LoginComponent/LoginPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Default from './components/default/Default';
import HomePage from './components/pages/homepage/HomePage';
import FeaturePage from './components/pages/featurepage/FeaturePage';
import ResourcePage from './components/pages/resourcepage/ResourcePage';
import AboutPage from './components/pages/aboutpage/AboutPage';


function App() {
  return (
    <>
      <LoginPage />
      <Default>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Default>

    </>

  );
}

export default App;
