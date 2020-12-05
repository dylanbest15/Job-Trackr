import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { orange } from '@material-ui/core/colors';
import '../Header/Header.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  orange: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  function HeaderView() {
      if (window.location.pathname === "/dashboard") {
          return "Dashboard"
      }
      if (window.location.pathname === "/search") {
        return "Search Jobs"
      }
      if (window.location.pathname === "/applied") {
        return "My Jobs"
      }
      if (window.location.pathname === "/resources") {
        return "Resources"
      }
      if (window.location.pathname === "/benchmarks") {
        return "Benchmarks"
      }
  }
  console.log(HeaderView())

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.orange}>
        <Tabs value={value} id="tabs" aria-label="simple tabs example">
          <Tab label={HeaderView()}  />
          {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
         {HeaderView}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}