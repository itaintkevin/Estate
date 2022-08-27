import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marketplace from "./components/Marketplace.jsx";
import YourProperties from "./components/Your-Properties.jsx";

function App() {
  return (
    <div className="bg-cover bg-[url('components/images/background.svg')]">
    <Navbar />
    <Routes>
    <Route path="/" element={<Hero />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/your-properties" element={<YourProperties />} />
    </Routes>
    </div>
  );
}

export default App;
