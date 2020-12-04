//Accordion Component for my jobs page
import React, { useContext } from 'react';
import { userContext } from '../../App';
import API from '../../utils/API';
import './style.css';
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  statusTitle: {
    fontWeight: "400",
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

  //set user
  const { user } = useContext(userContext);

  //import styles
  const classes = useStyles();

  //set state for job status menu to open and close on click
  const [anchorEl, setAnchorEl] = React.useState(null);

  //job status menu items
  const statusList = ['Viewed', 'Applied', 'Interviewed', 'Thank You Letter Sent', 'Received Offer', 'Not Selected', 'No Response', 'Accepted'];

  //menu click event
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //close menu on click
  const handleClose = () => {
    setAnchorEl(null);
  };

  // event function to set application status on click
  function updateStatus(event) {
    //set application status on click
    API.updateApplicationStatus(jobInfo.id, statusList[event.target.value])
      .then(res => onJobStatusUpdate(indexPosition, statusList[event.target.value]))
      //close menu on click
      .then(handleClose())
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
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Accordion default>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="accordionHeader" >
              <Typography
                id="companyName">{jobInfo.company_name}
                <span id="jobTitle">  {jobInfo.job_title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column}>
                <Typography className={classes.statusTitle}>Status:
                <span> {jobInfo.status}</span>
                </Typography>
              </div>
              <div className={classes.column}>
                <Button onClick={handleClick}>
                  <UpdateIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose} >
                  {statusList.map((text, index) => (
                    <MenuItem key={text} value={index} onClick={updateStatus}>{text}</MenuItem>
                  ))}
                </Menu>
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
      </main>
    </div>
  );
}

export default AppliedAccordion;