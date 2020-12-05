import React, { useContext } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../SideBar/SideBar.css";
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
      <AccountCircleIcon aria-describedby={id} type="button" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
        <h1>Signed in as:</h1>
        <p>{user.firstname} {user.lastname}</p>
        <hr></hr>
        <p>{user.email}</p>
        <hr></hr>
        <h3>Member Since:</h3>
        <p>{user.createdat}</p>
        </div>
      </Popper>
    </div>
  );
}