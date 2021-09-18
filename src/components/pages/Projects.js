import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import { Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <>
      <Container>
        {/* Project Really good fake store */}
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                  This project is a mock e-commerce store complete with cart function
                  and sign-in authentication.
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* team profile generator */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                  A project.....
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* project Urban Cipher */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                  This project....
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* ecommerce back end */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                  A project...
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* weather dashboard */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                  This project...
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Note taker app */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/images/Note-taker.png"
                alt="Note taker"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Note Taker App
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project...
        </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}