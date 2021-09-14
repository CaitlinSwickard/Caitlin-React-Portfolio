import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo">
            <i class="fas fa-code"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='btn-mobile' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-link' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>PROJECTS</Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;