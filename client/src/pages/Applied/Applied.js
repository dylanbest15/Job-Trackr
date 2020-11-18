import React, { Component } from 'react';
// import Axios from 'axios';
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

    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <Accordion />
        </div>
    )
};

export default Applied;