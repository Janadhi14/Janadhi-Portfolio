import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe'; // Adjust the path according to your file structure
import Skills from './components/Skills'; // Adjust the path according to your file structure
import MyProjects from './components/MyProjects'; // Adjust the path according to your file structure
import MyEducation from  './components/MyEducation';
import Footer from  './components/Footer';
import './App.css';


import linkedinIcon from './assets/images/linkedin.png';
import githubIcon from './assets/images/github.png';

function App() {
  const [theme, setTheme] = useState('light'); // Ensures initial state is 'light'


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      setTheme('light');
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-side');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight - 180) { // 100px before it enters the viewport
          element.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  document.body.classList.add('light-mode');



  const phrases = ["Software Dev", "ML Engineer", "CyberSecurity Analyst"];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 3000); // changing phrase every 3 seconds
    return () => clearInterval(timer);
  }, []);


  return (
    <div >
     

      <div className="content-layer">
      <section className="header-container">
  <h1><span className="typing-animation">I'm Jan.</span></h1>
  <button onClick={toggleTheme} id="dark-mode-toggle" className="dark-mode-toggle">
            <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
              <path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)" />
            </svg>
          </button>
         

        </section>
        Aspiring:<p className="sub-title"> {phrases[currentPhrase]}</p>
        <div className="social-links">
        <div className="linkdinlo">
            <a href="https://www.linkedin.com/in/jan-dissanayake-b7775a20b/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            </div>
            <div className="githublo">
            <a href="https://github.com/janadhi14" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            </div>
          </div>
          <AboutMe />
          
          <h2 class ="subtitles" >My Education</h2>
          <div className="resume-download-container subtitles">
  <a href='/downloads/CV.pdf' download="JanDisResume.pdf" className="resume-download-button">Technical Resumé</a>
</div>
        <MyEducation />
        
        <div className="fade-in-side">
        <h2 class ="subtitles" >My Projects</h2>
        
        <MyProjects />
        </div>
        

       
        

        <div className="fade-in-side">
        <Skills/>
        </div>
        
      

        <div className="fade-in-side">
        <h2 class ="subtitles" >Contact Me</h2>

        <Footer/>
        </div>
        
        
      </div>
    </div>
  );
}











export default App;
