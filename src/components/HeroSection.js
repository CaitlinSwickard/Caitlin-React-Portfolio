import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typical from 'react-typical'


function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Caitlin Swickard</h1>
      <p>I'm a{' '}
      <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'developer  💻',
            1000,
            'designer 🎨',
            1000,
            'photographer 📸',
            1000,
            'animal lover 🐶',
            1000,
          ]}
        />
      </p>
      <div className="hero-btns">
        <Button className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          My Work
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;