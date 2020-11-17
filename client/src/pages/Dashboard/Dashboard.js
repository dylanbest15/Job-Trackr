import React, { Component } from 'react';
// import Axios from 'axios';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import Container from '@material-ui/core/Container';
import ResponsiveDrawer from "../../components/SideBar/SideBar";

class Search extends Component {

    render() {
        return (
            <div>
                <ResponsiveDrawer />
                <Container maxWidth="lg">
                    <DashboardLayout />
                </Container>
            </div>
        )
    }
}
export default Search;
