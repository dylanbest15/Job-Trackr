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

function SankeyDiagram(props) {
  const classes = useStyles();

  const [data, setGraph] = useState([]);

  useEffect(() => {
    API.getUserData()
      .then(res => setGraph(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(data);
  console.log(data.jobs_interviewed);
  console.log(data.jobs_offered);
  console.log(data.jobs_rejected);
  console.log(data.jobs_noresponse);
  console.log(data.jobs_accepted);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Chart
          width={600}
          height={'300px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Weight'],
            // ['Applied', 'Interview', 5],
            // ['Applied', 'No Response', 5],
            // ['Interview', 'Offer', 3],
            // ['Interview', 'Denied', 2],
            // ['Offer', 'Acceptance', 1],
            ['Applied', 'Interview', data.jobs_interviewed],
            ['Applied', 'No Response', data.jobs_noresponse],
            ['Interview', 'Offer', data.jobs_offered],
            ['Interview', 'Denied', data.jobs_rejected],
            ['Offer', 'Acceptance', data.jobs_accepted],
          ]}
          rootProps={{ 'data-testid': '2' }}
        />
      </main>
    </div>
  );
}

export default SankeyDiagram;


