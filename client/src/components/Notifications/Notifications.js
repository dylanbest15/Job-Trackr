import React, { useContext } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../../styles/SideBar.css";
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { userContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginTop: '30px',
    marginRight: '10px'
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { user } = useContext(userContext);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className="accountCircle">
    <NotificationsIcon aria-describedby={id} type="button" id="notifications" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
        <h1><u>Notifications:</u></h1>
        <p>Job Trackr launches Dec. 8th!</p>
        </div>
      </Popper>
    </div>
  );
}