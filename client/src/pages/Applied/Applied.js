import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Accordion from '../../components/Accordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function Applied() {

    const classes = useStyles();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        API.getApplications("1")
        .then(res =>
            setJobs(res.data) +
            console.log(res.data)
        )
        .catch(err => console.log(err));

    }, []);

    // function loadApplications("1") {
    //     API.getApplications()
    //         .then(res =>
    //             setJobs(res.data) +
    //             console.log(data)
    //         )
    //         .catch(err => console.log(err));

    // };

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <Accordion />
            {/* { jobs ? job.map(application => (
                <Accordion
                    key={application.userId}
                    VolumeInfo={application}
                    status={application.status}
                />
            )) : null} */}

        </div>
    )
};

export default Applied;