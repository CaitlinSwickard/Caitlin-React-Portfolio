import React from 'react';
import '../../App.css';
import { Container } from '@material-ui/core';

import Footer from '../Footer';

export default function About() {
  return (
    <>
      <h1 className="about-me">About Me</h1>
      <Container className="info">
        <p className='info-p'>Full-stack web developer dedicated to building and optimizing user-centric websites.
        Recently earned a certificate in full stack development from the University of Denver
        with newly developed skills in JavaScript, CSS, Node.js, and responsive web design.</p>
        <img className="head-shot" src="/images/caitlin-headshot.png" alt="head-shot"></img>
      </Container>

      <Footer />
    </>
  )
}