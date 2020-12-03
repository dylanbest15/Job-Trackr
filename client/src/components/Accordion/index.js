import React, { useContext } from 'react';
import { userContext } from '../../App';
import './style.css';
import API from '../../utils/API';
import clsx from 'clsx';
//material ui imports
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

const AppliedAccordion = ({ jobInfo, setJobs, onJobStatusUpdate, indexPosition }) => {

  //import styles
  const classes = useStyles();

  //job status menu items
  const statusList = ['Viewed', 'Applied', 'Interviewed', 'Thank You Letter Sent', 'Received Offer', 'Not Selected', 'No Response', 'Accepted'];

  //set user
  const { user } = useContext(userContext);

  // event function to set application status on click
  function updateStatus(event) {
    //set application status on click
    API.updateApplicationStatus(jobInfo.id, statusList[event.target.value])
      .then(res => onJobStatusUpdate(indexPosition, statusList[event.target.value]))
      .catch(err => console.log(err));
  }

  //remove application
  function handleRemoveApplication() {
    API.removeApplication(jobInfo.id)
      .then(API.getApplications(user.id)
        .then(res => setJobs(res.data.map(job => (
          job))))
        .catch(err => console.log(err)));
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Accordion default>
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
                          {statusList.map((text, index) => (
                            <MenuItem key={text} value={index} onClick={updateStatus}>{text}</MenuItem>
                          ))}
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
                <div className={classes.column}>
                  <Button>
                    <DeleteForeverIcon onClick={handleRemoveApplication} />
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
    </>
  );
}

export default AppliedAccordion;