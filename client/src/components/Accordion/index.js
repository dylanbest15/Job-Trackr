import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightRegular,
  // },
  icon: {
    color: 'white',
  },

}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accordions">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Job Tittle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  id="job-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Company Name, Job Title, Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p><b>Status: </b>applied<Button id="btn">Update</Button></p>
            <p>Information about job Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.</p>
            <Button id="btn">Remove</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Job Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}