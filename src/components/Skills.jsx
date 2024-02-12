import React from 'react';
import '../App.css'; // Or the relevant CSS file

// Example data for Frontend and Backend skills with image URLs
const frontendSkills = [
  {
    name: 'HTML',
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png'
  },
  {
    name: 'CSS',
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png'
  },
  {
    name: 'JavaScript',
    imageUrl: 'https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg'
  },
  {
    name: 'React',
    imageUrl: 'https://www.svgrepo.com/show/452092/react.svg'
  },
   {
    name: 'Angular',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  },
  {
    name: 'Vue',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
  },

];

const backendSkills = [
  {
    name: 'Node.js',
    imageUrl: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'
  },
  {
    name: 'Java',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512'
  },
  {
    name: 'Java',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512'
  },
  {
    name: 'SQL',
    imageUrl: 'https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg'
  },
];

function Skills() {
  return (
    <section className="about-me">
      <h2 className='subtitles'>My Stack</h2>

      <div className="skills-container">
        <div className="frontend-skills">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="backend-skills">
          <h3>Backend</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
