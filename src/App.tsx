import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <ParticleBackground />
      <div className="relative z-10">
        <Header darkMode={darkMode} />
        <button
          onClick={toggleDarkMode}
          className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-gray-700" />
          )}
        </button>
        <main className="container mx-auto px-4 overflow-hidden">
          <Hero />
          <Social />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;