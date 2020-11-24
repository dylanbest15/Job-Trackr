import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Accordion from '../../components/Accordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core';

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

    //use effect for api calls
    useEffect(() => {
        API.getApplications("1")
            .then(res => setJobs(res.data.map(job => (
                job))))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />

            {jobs ? jobs.map(job => (
                <Accordion
                    jobInfo={job}
                    page="applied"
                    setJobs={setJobs}
                />
            )) : null}

        </div>
    )
};

export default Applied;