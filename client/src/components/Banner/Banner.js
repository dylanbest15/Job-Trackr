import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Banner/Banner.css";
import { userContext } from "../../App";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.black
  },
}));

const intros = [
  "How are you today?",
  "Welcome to Trackr!",
  "Glad to have you here!",
  "Thanks for stopping by!",
  "Nice of you to join us!"
];

//use effect function to get first name from passportAPI need to set state



const randomIntro = intros[Math.floor(Math.random()*intros.length)];

export default function Banner() {
  const classes = useStyles();

  const { user } = useContext(userContext);

  return (
    <Grid item xs={12}>
            <Paper className={classes.paper} id="banner">
              <h1 className="banner">Hello, {user.firstname}</h1>
              {/* <p className="banner"><b>{firstName}</b></p> */}
              <h1 className="banner">{randomIntro}</h1>
            </Paper>
          </Grid>
  );
}


