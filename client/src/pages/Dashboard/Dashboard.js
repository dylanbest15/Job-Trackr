import React, { Component } from 'react';
// import Axios from 'axios';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
// import DashboardTabs from '../components/Tabs/index';
import Container  from '@material-ui/core/Container';

class Search extends Component {

    render() {
        return (
            <Container maxWidth="lg">
                {/* <DashboardTabs within the dashboard component? /> */}
                <DashboardLayout />
            </Container>
        )
    }
}
export default Search;
