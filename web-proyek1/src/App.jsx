import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistic from './components/Statistic';

import Footer from './components/Footer';
import MapSementara from './components/MapSementara';
function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />           
      <Statistic />          
      <MapSementara /> 
      <Footer />         
    </div>
  );
}

export default App;