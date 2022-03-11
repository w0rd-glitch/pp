import { faGithub, faLinkedin, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home() {
  return (
    <div className='container'>
      <div className='sidebar'>
        <ul>
          <li>
            <a href="https://github.com/w0rd-glitch">
            <span><FontAwesomeIcon icon={faGithub} /></span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cristian-florin-panaite-77b3a0233/'>
            <span><FontAwesomeIcon icon={faLinkedin} /></span>
            </a>
          </li>
          <li>
            <a href=''>
            <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/th3sh4/'>
            <span><FontAwesomeIcon icon={faInstagram}/></span>
            </a>
          </li>
        </ul>
      </div>
    <div className='content'>
    <div className='heading'>
      <h5>Hi, my name is</h5>
      <h2>Panaite Cristian.</h2>
      <h3>I do stuff on the web.</h3>
      <p>I'm a web developer. Simplu si pe 2.</p>
      <a href="youtube.com">
        Check out my tutorials !
      </a>
    </div>
    </div>
    </div>
  )
}

export default Home