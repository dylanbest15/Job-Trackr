import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from "react-google-charts";
import API from '../../utils/PassportAPI';
import Row from '@material-ui/core/Grid';
import './SankeyDiagram.css';


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

  return (
    <div>
      <div className="header">
        <h1 id="title">Your Stats</h1>
      </div>
      <Row>

      </Row>
      <div className={classes.root}>

        <Chart
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Weight'],
            ['Applied', 'Interview', data.jobs_interviewed],
            ['Applied', 'No Response', data.jobs_noresponse],
            ['Interview', 'Offer', data.jobs_offered],
            ['Interview', 'Denied', data.jobs_rejected],
            ['Offer', 'Acceptance', data.jobs_accepted],
          ]}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
}

export default SankeyDiagram;


