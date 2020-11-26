import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RecentJobsTable from '../RecentJobsTable/index';
import "../Dashboard/DashboardLayout.css";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, blue } from '@material-ui/core/colors';
import Banner from '../Banner/Banner';
import SankeyDiagram from '../SankeyDiagram/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  boot: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
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
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Banner />
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1>Jobs Applied</h1>
            <div className={classes.boot}>
            <Avatar className={classes.blue} id="one">11</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1>Jobs Pending</h1>
            <div className={classes.boot}>
            <Avatar className={classes.purple} id="two">6</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1>Jobs Interviewed</h1>
            <div className={classes.boot}>
            <Avatar className={classes.orange} id="three">3</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <RecentJobsTable/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <SankeyDiagram />
            {/* <Paper className={classes.paper}>
              <h3>Recent Job Searches</h3>
              <p>link to recently searched job title</p>
              <p>link to recently searched job title</p>
              <p>link to recently searched job title</p>
            </Paper> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}