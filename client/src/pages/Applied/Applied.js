import React, { useEffect, useState, useContext } from 'react';
import API from '../../utils/API';
import BENCHMARKS from '../../utils/PassportAPI';
import Accordion from '../../components/Accordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core';
import { userContext } from '../../App';

//styling
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        console.log(status !== "Viewed");
        if (status !== "Viewed") {
            //only decrement pending if other value besides view/pending is selected
            return (BENCHMARKS.decrementUserValue("jobs_pending", user.id))
            //     else {
            //all else increment on click
            //     }
            // }
        }
    }

    //use effect for api calls
    useEffect(() => {
        //get app status
        API.getApplications(user.id)
            .then(res => setJobs(res.data.map(job => (
                job))))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <div>
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
            </div>
        </div>
    )
};

export default Applied;