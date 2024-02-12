import React from 'react';
import '../App.css'; // Or the relevant CSS file

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="subtitles">Hello World!!</h2>
      <p className="fade-up" style={{ animationDelay: '0.3s' }}>
        - I love problem solving and creating. 🤔
      </p>
      <p className="fade-up" style={{ animationDelay: '0.6s' }}>
        - I'm a life long learner with a Degree in Computer Science and Biomedical Science from the University of Otago. 👨🏽‍🎓
      </p>
      <p className="fade-up" style={{ animationDelay: '0.9s' }}>
        - Deeply engaged with exploring the convergence of Artificial Intelligence and Cybersecurity. 🤖🪪      
      </p>
    </section>
  );
}

export default AboutMe;
