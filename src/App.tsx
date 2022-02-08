import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">


      <div className='navbar'>
        <ul>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Experience</span>
          </li>
          <li>
            <span>Work</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </div>

    <div className='container'>
      <div className='sidebar'>
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faGithub} /></span>
          </li>
          <li>
            <span><FontAwesomeIcon icon={faYoutube} /></span>
          </li>
          <li>
            <span><FontAwesomeIcon icon={faFacebook} /></span>
          </li>
          <li>
            <span><FontAwesomeIcon icon={faInstagram}/></span>
          </li>
        </ul>
      </div>

    <div className='heading'>
      <h5>
        Hi, my name is
      </h5>

      <h2>
        Panaite Cristian.
      </h2>

      <h3>
        I do stuff on the web.
      </h3>

      <p>
        I'm a web developer. Simplu si pe 2.
      </p>

      <a href="youtube.com">
        Check out my tutorials !
      </a>
    </div>
    </div>
    </div>
  );
}

export default App;
