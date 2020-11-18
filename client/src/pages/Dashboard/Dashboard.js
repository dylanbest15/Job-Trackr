import React, { Component } from 'react';
// import Axios from 'axios';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function Dashboard() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <DashboardLayout />
        </div>
    )
};

export default Dashboard;
