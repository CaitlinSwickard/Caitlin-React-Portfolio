import * as React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import { Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../Footer';

export default function MediaCard() {
  return (
    <>
      <Container className='card-container'>
        {/* Project Really good fake store */}
        <Grid container >
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/fakestore.png"
                alt="girl in a store"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Really Good Fake Store
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This app is a mock e-commerce website. The user can view our product or view by category with creating a user
                  account. The user must create an account to be able to add, delete or update qty in their cart. If the user
                  logs out and and logs back in the items in the cart will remain for the user.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://really-good-fake-store.herokuapp.com/" >Heroku App</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/Really-Good-Fake-Store" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* the social petwork*/}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/mainpage.jpeg"
                alt="team profile cards"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Social Petwork
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project is a social media application for pets! The user can signup/login, make post, like posts and view the timeline. The user can also edit or delete their own posts.
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://serene-tundra-79280.herokuapp.com/registerpage" >Heroku App</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/The-Social-Petwork" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* project Urban Cipher */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/UrbanC.png"
                alt="girl with headphones"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Urban Cipher
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deconstruct the lyrics of your favorite song and understand the deeper meaning. This app allows you to search by
                  an artist and their song title. We then generate the lyrics of the song you selected. From there you can use our
                  dictionary search functions to look up a lyric to the song to help deconstruct the song.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://maximosandoval.github.io/urban-cipher/" >Live Page</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/urban-cipher" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* team profile generator */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/team-generator.png"
                alt="team profile cards"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Team Profile Generator
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project is a Node.js command-line application that takes in information about employees on a software engineering team,
                  then generates an HTML webpage that displays summaries for each person.
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://drive.google.com/file/d/16I2oHlp4BGfhdQ6lG-6sOZBrRcYuVOAZ/view" >Video Demo</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/Team-profile-generator" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* ecommerce back end */}
          {/* <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/api2.png"
                alt="api cloud"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  E-commerce Backend
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  In this project I built out the back end for an e-commerce site by modifying starter code.
                  Configured a working Express.js API to use Sequelize to interact with a MySQL database.
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://github.com/CaitlinSwickard/E-Commerce-Back-End" >Github</a>
                <a className='card-links' href="https://drive.google.com/file/d/1OK0mcV8EBXbN9NJmn3xaCKlokZ0TQHeM/view" >Video Demo</a>
              </CardActions>
            </Card>
          </Grid> */}

          {/* weather dashboard */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/Weather-DB.png"
                alt="5 day weather forecasting"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather Dashboard
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project is a Weather Dashboard for a city that the user wants to look up. This page
                  will display the current weather for the city as well as a 5 day weather forecast.
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://caitlinswickard.github.io/API-Weather-Dashboard/" >Live Page</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/API-Weather-Dashboard" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* Budget tracker app */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/budget_tracker.png"
                alt="graph of budget"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PWA Budget Tracker
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project is an application that allows a user to create and track a budget. The user will be able to add
                  expenses and deposits to their budget with or without a connection. When entering transactions offline, they
                  should populate the total when brought back online.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://desolate-taiga-28989.herokuapp.com/" >Heroku App</a>
                <a className='card-links' href="https://github.com/CaitlinSwickard/Online-Offline-Budget-Tracker" >Github</a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />

    </>
  );
}