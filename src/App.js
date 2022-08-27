import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marketplace from "./pages/marketplace.jsx";
import Buy from "./pages/buy-a-property.jsx";
import Sell from "./pages/sell-a-property.jsx";

function App() {
  return (
    <div className="bg-cover bg-[url('components/background.svg')]">
    <Navbar />
    <Routes>
    <Route path="/" element={<Hero />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/buy-a-property" element={<Buy />} />
      <Route path="/sell-a-property" element={<Sell />} />
    </Routes>
    </div>
  );
}

export default App;
