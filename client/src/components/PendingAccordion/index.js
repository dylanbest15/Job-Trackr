import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },

  },
}));

export default function PendingAccordion() {
  const classes = useStyles();

  return (
    <Container>
      <h1>Recently Viewed Jobs</h1>
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          id="accordionHeader"
        >
          <Typography>Company Name, Job Title</Typography>
          <div className={classes.column}>
            <div className={classes.secondaryHeading}>Location</div>
          </div>
        </AccordionSummary>
        <p>Did you apply for this job?</p>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            <Typography>Status:</Typography>
          </div>
          <div className={classes.column}>
            <Typography>Pending</Typography>
          </div>
          <div className={classes.column}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button {...bindTrigger(popupState)}>
                    <UpdateIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Applied</MenuItem>
                    <MenuItem onClick={popupState.close}>Pending</MenuItem>
                    <MenuItem onClick={popupState.close}>Interviewed</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Review Job
              </a><br />
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button>
            <DeleteForeverIcon onDelete={() => { }} />
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
    </Container>
  );
}