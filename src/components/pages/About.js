import React from 'react';
import '../../App.css';
import { Container } from '@material-ui/core';

import Footer from '../Footer';

export default function About() {
  return (
    <>
      <h1 className="about-me">About Me</h1>
      <Container className="info">
        <p className='info-p'>Full Stack Web developer specializing in MERN stack. I have experience in building projects from
        ideation to execution. I am passionate about creating modern and clean user friendly applications.
        Strong skills in team work, communication, prioritization, and project management.
        </p>
        <br></br>
        <p>Technical programming skills include: JavaScript ES6+, HTML5, CSS3, RESTful Design, React, Node.js, Express.js, jQuery, Handlebars, Bootstrap, MongoDB/Mongoose, MySQL/Sequelize, Heroku, Git.</p>
        <img className="head-shot" src="/images/caitlin-headshot.png" alt="head-shot"></img>
      </Container>

      <Footer />
    </>
  )
}