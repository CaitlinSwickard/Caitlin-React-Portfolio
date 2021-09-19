import React from 'react';
import '../../App.css';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Footer from '../Footer';


export default function Resume() {
  return (
    <>
      <h1 className="resume">My Resume</h1>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='skills-card'>
              <CardContent className='card-content'>
                <Typography variant='h5' className='title'> 
                  Programming Languages
              </Typography>
              <br></br>
                <Typography>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>JavaScript ES6+</p>
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
                <Typography>
                  <p>Material Ui</p>
                  <p>Bootstrap</p>
                  <p>jQuery</p>
                  <p>Bulma</p>
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
                <Typography>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>React</p>
                  <p>MongoDB</p>
                  <p>MySQL</p>
                  <p>NoSQl</p>
                  <p>API</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  )

}