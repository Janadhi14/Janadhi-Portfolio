import React from 'react';
import '../App.css'; // Or the relevant CSS file

const educationTimeline = [
  {
    period: '2022 - 2024',
    institution: 'UNIVERSITY OF OTAGO',
    degree: 'Bachelor Of Science, Computer Science',
    description: 'Covered multiple programming languages; Java, Python, HTML, CSS, JavaScript, C, SQL. Topics: APIs, Software Development, Networks and Distributed Systems, Cryptography, Security, Database Management, Algorithms and Datastructures, Web Design and Applications.'
  },
  {
    period: '2019 - 2021',
    institution: 'UNIVERSITY OF OTAGO',
    degree: 'Bachelor Of Biomedical Science, Functional Human Biology',
    description: 'Covered topics in Human Physiology (Renal, Respiratory, Cardiovascular and Gastrointestinal), Anatomy and Pathology. Research on Hyperuricemia\'s impact on Pancreatic Beta Cell Differentiation.'
  },
  
  // ... add more education points as needed
];

const certificates = [
  
  {
    name: 'Google IT Support Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
    
  },
  {
    name: 'Google Cyber Security Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
  },
  {
    name: 'Google Cyber Security Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
  },
  {
    name: 'Google Cyber Security Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
  },
  {
    name: 'Google Cyber Security Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
  },
 
];

function MyEducation() {
  const delayIncrement = 0.2;
  return (
    <section className="about-me">
       <div className="education-container">
        <div className="education-section">
          <h3>My Education</h3>
          <ul className="timeline">
            {educationTimeline.map((edu, index) => (
              <li 
                key={index} 
                className="timeline-item"
                style={{ animationDelay: `${index * delayIncrement}s` }}
              >
                <div className="timeline-content">
                  <h4 className="timeline-institution">{edu.institution}</h4>
                  <span className="timeline-period">{edu.period}</span>
                  <span className="timeline-degree">{edu.degree}</span>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="certificates-section">
        <h3>Certificates</h3>
        <ul className="certificates-list">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="certificate-item"
              style={{ animationDelay: `${index * delayIncrement}s` }}
            >
              <img src={cert.imageUrl} alt={cert.name} className="certificate-image" />
              <div className="certificate-info">
                <h4>{cert.name}</h4>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
     
      </div>
    </section>
  );
}

export default MyEducation;
