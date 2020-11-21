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
        API.getApplication(userId)
            .then(res => setJobs(res.data))
            .catch(err => console.log(err));
            console.log(data);
    }, []);

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