import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Banner/Banner.css";
import API from '../../utils/PassportAPI';


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

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    API.getUserData()
    .then(res => setFirstName(res.data.firstname) + console.log(res))
    .catch(err => console.log(err))
  },[])

  return (
    <Grid item xs={12}>
            <Paper className={classes.paper} id="banner">
              <h1 className="banner">Hello,</h1>
              <p className="banner"><b>{firstName}</b></p>
              <p className="banner">{randomIntro}</p>
            </Paper>
          </Grid>
  );
}


