import React, { useEffect, useState, useContext } from 'react';
import API from '../../utils/API';
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

    const { user } = useContext(userContext);

    //manage state to update status of job in accordion
    const handleJobStatusUpdate = (index, status) => {
        const updatedJobs = [...jobs];
        updatedJobs[index].status = status
        setJobs(updatedJobs);
    }
    //use effect for api calls
    useEffect(() => {
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