import React from 'react';
import './style.css';
import clsx from 'clsx';
//material ui component imports
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Container } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
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

const AppliedAccordion = ({ jobInfo, setJobs }) => {

  //import styles
  const classes = useStyles();

  //job status menu items
  const status = ['Viewed', 'Applied', 'Interviewed', 'Thank You Letter Sent', 'Received Offer', 'Not Selected'];

  //change jobInfo object to an array of objects to use filter
  const jobs = [jobInfo];

  //delete button event
  const handleRemoveAppliaction = () => {
    console.log(jobInfo);
    //filter array of job objects
    setJobs(jobs.filter((el) => el.id !== jobInfo.job_id))
  }

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="accordionHeader"
              >
                <div className={classes.column}>
                  <Typography>{jobInfo.company_name}, {jobInfo.job_title}</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <div className={classes.column}>
                  <Typography>Status:</Typography>
                </div>
                <div className={classes.column}>
                  <Typography>{jobInfo.status}</Typography>
                </div>
                <div className={classes.column}>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button {...bindTrigger(popupState)}>
                          <UpdateIcon />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          {status.map((text) => (
                            <MenuItem key={text} onClick={popupState.close}>{text}</MenuItem>
                          ))}
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
                <div className={classes.column}>
                  <Button>
                    <DeleteForeverIcon onClick={handleRemoveAppliaction} />
                  </Button>
                </div>
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <a href={jobInfo.job_link} className={classes.link}>
                      Review Job
                    </a>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
      </div>
    </Container>
  );
}

export default AppliedAccordion;