import React, { useState } from 'react';

import GitHubLogo from '../../assets/icons/github.svg'
import LinkdinLogo from '../../assets/icons/linkedin.svg'
import InfoIcon from '../../assets/icons/info.svg'
import CloseIcon from '../../assets/icons/close.svg'

import "./styles.css";

function SideView() {
  const [opened, setOpened] = useState(false)

  return (
    <div id="sideview-container" className={opened ? "opened" : ''}>
      <button
        className='mobile-button'
        type="button" 
        aria-label="More Info"
        onClick={() => setOpened(true)}
      >
        <img src={InfoIcon} alt="Info"/>
      </button>
      <div className="box">
        <div className="backButton">
          <button
            className='close-button'
            type="button" 
            aria-label="Close Box"
            onClick={() => setOpened(false)}
          >
            <img src={CloseIcon} alt="Close"/>
          </button>
        </div>
        <div className="text">
          <h1>Smart 8</h1>
          <p>
            The project was created using a <strong>machine learning</strong> process 
            to answer yes or no questions, simulating Mattel Inc.'s 
            "Magic Eight Ball". However, they have nothing related.
          </p>
        </div>
        <div className="social-links">
        <a 
            href="https://github.com/alanzdr/smart8" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Github repository"
          >
            <img src={GitHubLogo} alt="GitHub"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/alanderson-zelindro-da-rosa-3b8bb0129/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Author linkedin"
          >
            <img src={LinkdinLogo} alt="Linkedin"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideView;