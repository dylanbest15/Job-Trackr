import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.black
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Welcome</h1>
            <p>Search, Apply, Track Jobs</p>
            <p>Component for navigation tabs placed below this welcome paper </p>
            </Paper>
            {/*<Tabs />  */}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Dashboard Badge Icon and Title</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Dashboard Badge Icon and Title</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Dashboard Badge Icon and Title</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Dashboard Badge Icon and Title</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h3>Your <b>Jobs </b><a href="/applied"> View All</a></h3>
            <p>November 10: Company Name</p>
            <p>November 14: Company Name</p>
            <p>November 19: Company Name</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h3>Recent Job Searches</h3>
            <p>link to recently searched job title</p>
            <p>link to recently searched job title</p>
            <p>link to recently searched job title</p>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}