
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';


import { Link  } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work'; 
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SearchIcon from '@material-ui/icons/Search';
import BusinessIcon from '@material-ui/icons/Business';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from "../../assets/logo.png"
import { blue } from '@material-ui/core/colors';
import "../../styles/SideBar.css";
import AccountCircle from '../AccountCircle/AccountCircle';
import Notifications from '../Notifications/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const drawerArray = [
    {
    to: "/dashboard",
    IconComponent: DashboardIcon,
    text: "Dashboard",
  },
  {
    to: "/applied",
    IconComponent: WorkIcon,
    text: "My Jobs",
  },
  {
    to: "/benchmarks",
    IconComponent: EqualizerIcon,
    text: "Benchmarks",
  },
  {
    to: "/search",
    IconComponent: SearchIcon,
    text: "Search Jobs",
  },
  {
    to: "/resources",
    IconComponent: BusinessIcon,
    text: "Resources",
  },
]

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div id="sidebar">
      <div className={classes.toolbar} >
        <img 
        src={Logo}
        width="70"
        height="70"
        alt="Job trackr Logo"
         />
      </div>
      <Divider />
      <List>
      {drawerArray.map((listItem, index) => (
        <ListItem button key={`drawerList-${index}`} component={Link} to={listItem.to}>
          <ListItemIcon>
            <listItem.IconComponent style={{ color: blue[50] }} />
          </ListItemIcon>
          <ListItemText primary={listItem.text} />
        </ListItem>
      ))}
      </List>
      <Divider />
      <List>
      <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar id="topBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
             Job Trackr
          </Typography>
          <Notifications />
          <AccountCircle />
          {/* <div className="accountCircle">
          <AccountCircleIcon />
          </div> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css" >
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;










{/* <ListItem button component={Link} to="/applied">
          <ListItemIcon>
            <WorkIcon style={{ color: blue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem button component={Link} to="/applied">
          <ListItemIcon>
            <WorkOutlineIcon style={{ color: blue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Suggested Jobs" />
        </ListItem>
        <ListItem button component={Link} to="/resources">
          <ListItemIcon>
            <BusinessIcon style={{ color: blue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <AccountCircleIcon style={{ color: blue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem> */}