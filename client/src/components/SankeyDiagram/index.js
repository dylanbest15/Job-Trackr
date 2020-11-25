import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from "react-google-charts";
import API from '../../utils/PassportAPI';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
// necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

 function SankeyDiagram (props) {
    const classes = useStyles();

    const [data, setGraph] = useState([]);

    useEffect(() => {
       API.getUserData()
       .then(res => setGraph(res.data))
       .catch(err => console.log(err));
       }, []); 
       console.log(data);
       console.log(data.jobs_pending - data.jobs_applied);
  
    return (
      <div className={classes.root}>
        <main className={classes.content}>
         <div className={classes.toolbar}/>

        <Chart
            width={600}
            height={'300px'}
            chartType="Sankey"
            loader={<div>Loading Chart</div>}
            data={[
              ['From', 'To', 'Weight'],
              // ['Pending', 'Applied', 3],
              ['Applied', 'Interview', data.jobs_pending],
              ['Applied', 'Denied', 4],
              ['Interview', 'Letter', 2],
              ['Interview', 'Offer', 2],
              ['Interview', 'Denied', 3],
              ['Offer', 'Acceptance', 1],
              ['Offer', 'Denied', 1],

              // id: req.user.id,
              // email: req.user.email,
              // firstname: req.user.firstname,
              // lastname: req.user.lastname,
              // jobs_pending: req.user.jobs_pending,
              // jobs_applied: req.user.jobs_applied,
              // jobs_interviewed: req.user.jobs_interviewed,
              // jobs_lettersent: req.user.jobs_lettersent,
              // jobs_offered: req.user.jobs_offered,
              // jobs_rejected: req.user.jobs_rejected,
              // createdAt: req.user.createdAt,
              // updatedAt: req.user.updatedAt


            // ['From', 'To', 'Weight'],
            // ['Brazil', 'Portugal', 5],
            // ['Brazil', 'France', 1],
            // ['Brazil', 'Spain', 1],
            // ['Brazil', 'England', 1],
            // ['Canada', 'Portugal', 1],
            // ['Canada', 'France', 5],
            // ['Canada', 'England', 1],
            // ['Mexico', 'Portugal', 1],
            // ['Mexico', 'France', 1],
            // ['Mexico', 'Spain', 5],
            // ['Mexico', 'England', 1],
            // ['USA', 'Portugal', 1],
            // ['USA', 'France', 1],
            // ['USA', 'Spain', 1],
            // ['USA', 'England', 5],
            // ['Portugal', 'Angola', 2],
            // ['Portugal', 'Senegal', 1],
            // ['Portugal', 'Morocco', 1],
            // ['Portugal', 'South Africa', 3],
            // ['France', 'Angola', 1],
            // ['France', 'Senegal', 3],
            // ['France', 'Mali', 3],
            // ['France', 'Morocco', 3],
            // ['France', 'South Africa', 1],
            // ['Spain', 'Senegal', 1],
            // ['Spain', 'Morocco', 3],
            // ['Spain', 'South Africa', 1],
            // ['England', 'Angola', 1],
            // ['England', 'Senegal', 1],
            // ['England', 'Morocco', 2],
            // ['England', 'South Africa', 7],
            // ['South Africa', 'China', 5],
            // ['South Africa', 'India', 1],
            // ['South Africa', 'Japan', 3],
            // ['Angola', 'China', 5],
            // ['Angola', 'India', 1],
            // ['Angola', 'Japan', 3],
            // ['Senegal', 'China', 5],
            // ['Senegal', 'India', 1],
            // ['Senegal', 'Japan', 3],
            // ['Mali', 'China', 5],
            // ['Mali', 'India', 1],
            // ['Mali', 'Japan', 3],
            // ['Morocco', 'China', 5],
            // ['Morocco', 'India', 1],
            // ['Morocco', 'Japan', 3],
            ]}
            rootProps={{ 'data-testid': '2' }}
        />
      </main>
      </div>
    );
  }

  export default SankeyDiagram;


           