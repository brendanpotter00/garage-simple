import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar'
import { useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
/* import memories from './images/memories.png'; */

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="palette.primary.dark">
        <Typography className={classes.heading} variant="h2" align="center">Garage Sale</Typography>
        <img className={classes.image} src='https://png.pngtree.com/png-vector/20191031/ourmid/pngtree-money-vector-illustration-with-filled-line-design-isolated-on-white-background-png-image_1928834.jpg' alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

    
  );
};

export default App;
