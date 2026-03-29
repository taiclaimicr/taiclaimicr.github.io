import React, { useState, useEffect } from "react";
import {
  Main,
  Expertise,
  Project,
  People,
  Contact,
  Navigation,
  Footer,
  Vision,
  ProjectStrategy,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('light');

  const handleModeChange = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Project />
        <Vision />
        <ProjectStrategy />
        <People />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;