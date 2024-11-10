import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from '../Educationsection';
import SkillsSection from './skillssection';


function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid p-0">
        <AboutSection />
        <ExperienceSection />
        <EducationSection/>
        <SkillsSection/>
        
      </div>
    </div>
  );
}

export default App;
