import React from 'react';
import './App.scss';
import  Header  from './components/Header/Header';
import { Featured } from './components/Featured/Featured';
import Services from './components/Services/Services';
import { OurCompany } from './components/OurCompany/OurCompany';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Services />
      <OurCompany />
      <Footer />
    </div>
  );
}

export default App;
