
import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import API from "./../../utils/BenchmarkAPI";
import API2 from './../../utils/PassportAPI';



function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const User = {
    Progress: 10,
}
LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
});



function BenchmarkCard({ originalBenchmarkInfo, userInfo}) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      console.log(userInfo)
      updateProgress()

    }, []);

    function updateProgress() {
        let oldProgress = progress;

        function progressMath(stat){
          if ((oldProgress = ((stat /originalBenchmarkInfo.value)*100))> 100){oldProgress=100}
          else{(oldProgress = ((stat /originalBenchmarkInfo.value)*100))}
        };
        // oldProgress += 5
        if (originalBenchmarkInfo.type === "Application") {progressMath(userInfo.jobs_applied)}
        else if (originalBenchmarkInfo.type = "Offer"){progressMath(userInfo.jobs_offered)}
        else if (originalBenchmarkInfo.type = "Acceptance"){progressMath(userInfo.jobs_accepted)}
        else if (originalBenchmarkInfo.type = "Interview"){progressMath(userInfo.jobs_interviewed)}
        else if (originalBenchmarkInfo.type = "Letter"){progressMath(userInfo.jobs_lettersent)}
        else if (originalBenchmarkInfo.type = "Denial"){progressMath(userInfo.jobs_rejected)}
        else {console.log("error")}


        // oldProgress = ((userInfo.jobs_applied /5)*100)
        // API.updateUserProgress().then(data=>{
        //     setProgress()
        // }).catch(Err=>{console.log("err")})
        setProgress(oldProgress)
    }
    return (
        
        <Card className={classes.root}>
        <CardContent>

          <Typography variant="h5" component="h2">
            {originalBenchmarkInfo.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {userInfo.jobs_accepted}

          </Typography>
          <Typography variant="body2" component="p">
          {originalBenchmarkInfo.description}

          </Typography>
          <div className={classes.root}>
                    <LinearProgressWithLabel value={progress} />
                </div>
                <button onClick={updateProgress} className="btn btn-primary">Save</button>
        </CardContent>
      </Card>

        
)
}

export default BenchmarkCard;