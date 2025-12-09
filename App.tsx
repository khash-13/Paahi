import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ecommerce from './pages/Ecommerce';
import Fashion from './pages/Fashion';
import BrandFilms from './pages/BrandFilms';
import Jewellery from './pages/Jewellery';
import FoodDrinks from './pages/FoodDrinks';
import AiServices from './pages/AiServices';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/brand-films" element={<BrandFilms />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/food-and-drinks" element={<FoodDrinks />} />
          <Route path="/ai-services" element={<AiServices />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;