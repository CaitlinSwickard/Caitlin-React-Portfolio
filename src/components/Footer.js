import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <h3 className="social-follow">Social Follow</h3>
              <a href="https://github.com/CaitlinSwickard"
                target="_blank"
                className="social-icon-link github">
                <i class='fab fa-github' />
              </a>
              <a href="https://www.linkedin.com/in/caitlinswickard/"
                target="_blank"
                className="social-icon-link linkedin">
                <i class='fab fa-linkedin' />
              </a>
              <a href="/"
                className="social-icon-link instagram">
                <i class='fab fa-instagram' />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer;