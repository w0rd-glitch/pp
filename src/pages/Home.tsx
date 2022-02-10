import { faGithub, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home() {
  return (
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