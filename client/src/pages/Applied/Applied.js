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
    const [count, setCount] = useState([]);

    //set user
    const { user } = useContext(userContext);

    //set table column reference to status list options
    const countList = [
        {
            'Viewed': user.jobs_pending
        },
        {
            'Applied': user.jobs_applied
        },
        {
            'Interviewed': user.jobs_interviewed
        },
        {
            'Thank You Letter Sent': user.jobs_lettersent
        },
        {
            'Received Offer': user.jobs_offered
        },
        {
            'Not Selected': user.jobs_rejected
        },
        {
            'No Response': user.jobs_noresponse
        },
        {
            'Accepted': user.jobs_accepted
        }]

    //manage state to update status of job in accordion
    const handleJobStatusUpdate = (index, status) => {
        const updatedJobs = [...jobs];
        updatedJobs[index].status = status
        setJobs(updatedJobs);
    }

    //manage state to update user's table app status counts/values
    const handleCountUpdate = (index, value) => {
        const updatedValue = [...count]
        updatedValue[index].value = value //updatedJobs index needs to be the same as table colums or alternative method?
        setCount(updatedValue); //update new value to user's stats
    }

    //use effect for api calls
    useEffect(() => {
        //get app status
        API.getApplications(user.id)
            .then(res => setJobs(res.data.map(job => (
                job))))
            .catch(err => console.log(err));
        //get user counts
        BENCHMARKS.getUserData(countList) //gets user's current stats when page loads
            /////////////////remove this console.log when done////////////
            .then(console.log(countList)) //displays array of user's stats 
            .then(setCount(countList))//setCount to current values
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
                        values={countList}
                        onCountUpdate={handleCountUpdate}
                    />
                )) : null}
            </div>
        </div>
    )
};

export default Applied;