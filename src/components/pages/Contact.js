import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import MultilineTextFields from '../ContactForm';

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      <Container>
        <Grid container>
          <Grid item xs={12} >
            <MultilineTextFields />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )

}

