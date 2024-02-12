import React, { useState, } from 'react';
import '../App.css'; // Or the relevant CSS file
import andieImage from '../assets/images/andie1.png';
import birdImage from '../assets/images/birds1.png';
import backend from '../assets/images/backend.png';

function MyProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolioItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="portfolio">
        {currentItems.map((item, index) => (
          <PortfolioItem key={index} {...item} index={index} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="prev"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`dot ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            &bull;
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </>
  );
}


const portfolioItems = [
  {
    title: 'Greenlands Cafe Website',
    description: 'A simple static website for Greenlands Cafe and Restaurant',
    imageUrl: 'url-to-image1.jpg',
    projectUrl: 'url-to-project1'
  },
  {
    title: 'Birds Of Aotearoa',
    description: 'Birds Of Aotearoa is a simple static HTML, CSS and JS website that uses JSON data of native Birds from New Zealand to display them.',
    imageUrl: birdImage,
    projectUrl: 'https://github.com/Janadhi14/BirdsOfAotearoa'
  },
  {
    title: 'Andie',
    description: 'ANDIE is an Non-destructive Java-based application designed to offer a range of image editing and processing features through an intuitive Graphical User Interface (GUI).',
    imageUrl: andieImage,
    projectUrl: 'https://github.com/Janadhi14/Andie'
  },
  {
    title: 'Birds Of Aotearoa Backend',
    description: ' Backend for Birds Of Aotearoa, uses JSON to store the data of birds. edit, view and add functionality to allow for mainpualtion of the JSON data.',
    imageUrl: backend,
    projectUrl: 'url-to-project2'
  },

  {
    title: 'QuantStrat',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Crypto Trading bot',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Options trading strat ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 8 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 9 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 10 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 11 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 12 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 13 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },{
    title: 'Project 14 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },{
    title: 'Project 15 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },
  {
    title: 'Project 16 ',
    description: 'Description of Project 2',
    imageUrl: 'url-to-image2.jpg',
    projectUrl: 'url-to-project2'
  },

];

function PortfolioItem({ title, description, imageUrl, projectUrl, index }) {
  const delay = `${index * 0.1}s`; // Adjust the multiplier to control the speed

  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="portfolio-item-link">
      <div className="portfolio-item fade-in" style={{ animationDelay: delay }}>
        <img src={imageUrl} alt={title} className="portfolio-image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default MyProjects;