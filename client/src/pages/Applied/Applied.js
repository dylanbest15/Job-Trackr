import React, { useEffect, useState, useContext } from 'react';
import { userContext } from '../../App';
import './applied.css';
import API from '../../utils/API';
import BENCHMARKS from '../../utils/PassportAPI';
import Accordion from '../../components/Accordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import SimpleTabs from '../../components/Header/Header';
//material ui
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//styling
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: '100%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.black,
        marginTop: '20px'
    },
}));

function Applied() {

    //set style classes
    const classes = useStyles();

    //set states
    const [jobs, setJobs] = useState([]);

    //set user
    const { user } = useContext(userContext);

    //manage state to update status of job in accordion
    const handleJobStatusUpdate = (index, status, currentStatus) => {
        console.log(status + currentStatus);
        const updatedJobs = [...jobs];
        updatedJobs[index].status = status;
        setJobs(updatedJobs);

        //increment and decrement according to user's application statuses for benchmarks
        if (status === "Viewed" && status != currentStatus) {
            return (BENCHMARKS.incrementUserValue("jobs_pending"))
        }
        if (status === "Applied" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_applied")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "Interviewed" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_interviewed")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "Thank You Letter Sent" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_lettersent")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "Received Offer" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_offered")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "Not Selected" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_rejected")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "No Response" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_noresponse")
                .then(BENCHMARKS.decrementUserValue())
        }
        if (status === "Accepted" && status != currentStatus) {
            BENCHMARKS.incrementUserValue("jobs_accepted")
                .then(BENCHMARKS.decrementUserValue())
        }
    }

    //use effect for api calls
    useEffect(() => {
        //get applications from current user
        API.getApplications(user.id)
            .then(res => setJobs(res.data.map(job => (
                job))))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className={classes.root}>
                <ResponsiveDrawer />
                <Grid
                    id="header"
                    container
                    justify="center"
                    align="center" >
                    <SimpleTabs />
                    <Grid item lg={11} xs={11}>
                        <Paper className={classes.paper}>
                            {jobs ? jobs.map((job, index) => (
                                <Accordion
                                    key={job.id}
                                    indexPosition={index}
                                    jobInfo={job}
                                    page="applied"
                                    setJobs={setJobs}
                                    onJobStatusUpdate={handleJobStatusUpdate}
                                />
                            )) : null}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default Applied;