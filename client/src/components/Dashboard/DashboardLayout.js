import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RecentJobsTable from '../RecentJobsTable/RecentJobsTable';
import "../Dashboard/DashboardLayout.css";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, blue, grey } from '@material-ui/core/colors';
import Banner from '../Banner/Banner';
import { userContext } from "../../App";
import SankeyDiagram from '../SankeyDiagram/index';
import SimpleTabs from '../Header/Header';
import Footer from '../Footer/Footer';

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
  // grey: {
  //   color: theme.palette.getContrastText(grey[200]),
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.black
  },
  word: {
    fontWeight: "900",
    fontSize: "30px"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const { user } = useContext(userContext);

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
        <SimpleTabs />
        <Banner />
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1 id="word">jobs <span className={classes.word}>APPLIED</span></h1>
            <div className={classes.boot}>
            <Avatar className={classes.blue} id="one">{user.jobs_applied}</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1 id="word">jobs <span className={classes.word}>PENDING</span></h1>
            <div className={classes.boot}>
            <Avatar className={classes.purple} id="two">{user.jobs_pending}</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <h1 id="word">jobs <span className={classes.word}>INTERVIEWED</span></h1>
            <div className={classes.boot}>
            <Avatar className={classes.orange} id="three">{user.jobs_interviewed}</Avatar>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <RecentJobsTable/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <SankeyDiagram />
              {/* <h3>Recent Job Searches</h3>
              <p>link to recently searched job title</p>
              <p>link to recently searched job title</p>
              <p>link to recently searched job title</p> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}