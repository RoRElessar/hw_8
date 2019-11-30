import React from 'react';
import './App.css';
import Header from './components/header/Header'
import OurServices from './components/our-serrvices/OurServices'
import OurProducts from './components/our-products/OurProducts'
import OurTeam from './components/our-team/OurTeam'
import Subscribe from './components/subscribe/Subscribe'
import ContactInformation from './components/contact-information/ContactInformation'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <OurServices/>
      <OurProducts/>
      <OurTeam/>
      <Subscribe/>
      <ContactInformation/>
      <Footer/>
    </div>
  );
}

export default App;
