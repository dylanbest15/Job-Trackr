import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    grey: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[500],
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.grey}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2020 Free99 Inc.
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}