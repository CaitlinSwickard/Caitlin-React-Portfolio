import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Caitlin Swickard</h1>
      <p>Full Stack Web Developer</p>
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