import React from 'react';
// import Axios from 'axios';
import PendingAccordion from '../../components/PendingAccordion/index';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function Pending() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <PendingAccordion />
        </div>
    )
};

export default Pending;