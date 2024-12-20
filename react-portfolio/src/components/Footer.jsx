import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer (){
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-left">
          &copy; Dzenan Polutak 2024 All rights reserved
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a href="https://www.facebook.com/dpolutak/" target="Meta">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dzeno0405/" target="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://github.com/dzeno0405" target="Github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dzenan-polutak-28098b168/" target="Linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;