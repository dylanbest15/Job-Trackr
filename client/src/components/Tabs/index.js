// import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// import {Link} from 'react-router-dom';

// class DashboardTabs extends Component {
//     render() {

//         const {location} = this.props;
//         const {pathname} = location;

//         return (
//             <AppBar position="static">
//                 <Paper square>
//                     <Tabs value={pathname}>
//                         <Tab label="First tab" containerElement={<Link to="/" />} value="/dashboard">
//                             {/* insert your component to be rendered inside the tab here */}
//                         </Tab>
//                         <Tab label="Applied" containerElement={<Link to="/applied" />} value="/applied">
//                             {/* insert your component to be rendered inside the tab here */}
//                         </Tab>
//                     </Tabs>
//                 </Paper>
//             </AppBar>
//         );
//     }
// }
// export default DashboardTabs;