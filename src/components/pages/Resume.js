import React from 'react';
import '../../App.css';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from '../Footer';
import Pdf from "../../resources/Resume.pdf";



export default function Resume() {
  function handleClick(e) { e.preventDefault(); window.open(Pdf); }

  return (
    <>
      <h1 className="resume">My Resume</h1>
      <Container className="skills-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} >
            <Card sx={{ maxWidth: 400 }} className='skills-card'>
              <CardContent className='card-content'>
                <Typography variant='h5' className='title'>
                  Programming Languages
              </Typography>
                <br></br>
                <Typography >
                  <p className='skills'>HTML5</p>
                  <p className='skills'>CSS3</p>
                  <p className='skills'>JavaScript ES6+</p>
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='skills-card'>
              <CardContent className='card-content'>
                <Typography variant='h5' className='title'>
                  Front End
              </Typography>
                <br></br>
                <Typography >
                  <p className='skills'>Material Ui</p>
                  <p className='skills'>Bootstrap</p>
                  <p className='skills'>jQuery</p>
                  <p className='skills'>Bulma</p>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='skills-card'>
              <CardContent className='card-content'>
                <Typography variant='h5' className='title'>
                  Back End
              </Typography>
                <Typography >
                  <p className='skills'>Node.js</p>
                  <p className='skills'>Express.js</p>
                  <p className='skills'>React</p>
                  <p className='skills'>MongoDB</p>
                  <p className='skills'>MySQL</p>
                  <p className='skills'>NoSQl</p>
                  <p className='skills'>API</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className='resume-container'>
        <h2 className='h2'>Download my resume</h2>
        <button className="resume-btn" onClick={handleClick}>Click Here!</button>

      </Container>
      <br></br>
      <br></br>

      <Footer />
    </>
  )

}