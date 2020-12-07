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

 function BarChart (props) {
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
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Status', 'Value'],
                ['Pending', data.jobs_pending],
                ['Applied', data.jobs_applied],
                ['No Response', data.jobs_noresponse],
                ['Interviewed', data.jobs_interviewed],
                ['Thank You Letter', data.jobs_lettersent],
                ['Offered', data.jobs_offered],
                ['Not Selected', data.jobs_rejected],
                ['Not Accepted', data.jobs_accepted]
            ]}
            options={{
                title: 'Application Status',
                chartArea: { width: '50%' },
                hAxis: {
                title: 'Total Population',
                minValue: 0,
                },
            }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
        />
      </main>
      </div>
    );
  }

  export default BarChart;


           