import React, { useContext } from 'react';
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
  "Welcome to Job Trackr!",
  "Glad to have you here!",
  "Thanks for stopping by!",
  "Nice of you to join us!",
  "It's awesome your here!"
];

const randomIntro = intros[Math.floor(Math.random()*intros.length)];

export default function Banner() {
  const classes = useStyles();

  const { user } = useContext(userContext);

  return (
    <Grid item xs={12}>
            <Paper className={classes.paper} id="banner">
            <div className="intro">
              <h1 className="banner">Hello {user.firstname},</h1>
              <h1 className="bannerIntro">{randomIntro}</h1>
              </div>
            </Paper>
          </Grid>
  );
}


