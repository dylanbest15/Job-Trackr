import React, { useEffect, useState, useContext } from 'react';
import { userContext } from '../../App';
import API from '../../utils/API';
import BENCHMARKS from '../../utils/PassportAPI';
import Accordion from '../../components/Accordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
//material ui
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


//styling
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '100px',
    }
}));

function Applied() {

    //set classes
    const classes = useStyles();

    //set states
    const [jobs, setJobs] = useState([]);

    //set user
    const { user } = useContext(userContext);

    //manage state to update status of job in accordion
    const handleJobStatusUpdate = (index, status) => {
        const updatedJobs = [...jobs];
        updatedJobs[index].status = status;
        setJobs(updatedJobs);

        //increment and decrement according to user's application statuses for benchmarks
        if (status === "Viewed") {
            return (BENCHMARKS.incrementUserValue("jobs_pending", user.id))
        }
        if (status === "Applied") {
            BENCHMARKS.incrementUserValue("jobs_applied", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "Interviewed") {
            BENCHMARKS.incrementUserValue("jobs_interviewed", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "Thank You Letter Sent") {
            BENCHMARKS.incrementUserValue("jobs_lettersent", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "Received Offer") {
            BENCHMARKS.incrementUserValue("jobs_offered", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "Not Selected") {
            BENCHMARKS.incrementUserValue("jobs_rejected", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "No Response") {
            BENCHMARKS.incrementUserValue("jobs_noresponse", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
        }
        if (status === "Accepted") {
            BENCHMARKS.incrementUserValue("jobs_accepted", user.id)
                .then(BENCHMARKS.decrementUserValue("jobs_pending", user.id))
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
        <div className={classes.root}>
            <ResponsiveDrawer />
            <Grid
                container
                justify="center"
                align="center" >
                <Grid item lg={12} xs={12}>
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
                </Grid>
            </Grid>
        </div>

    )
};

export default Applied;