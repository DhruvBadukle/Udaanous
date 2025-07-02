import React from 'react';
import './App.css';
import Navbar from './component/Navbar'; 
import Landing from './component/Landing';
import AboutPage from './component/Aboutpage';
import OurTeam from './component/OurTeam';
import Media from './component/Media';
import VolunteerPage from './component/VolunteerPage';
import ContactPage from './component/ContactPage';

function App() {
  return (
    <div className="App bg-white text-gray-900 pt-32">
      <Navbar />
      <Landing />
      <AboutPage />
      <OurTeam />
      <Media />
      <VolunteerPage />
      <ContactPage />
      
    </div>
  );
}

export default App;
