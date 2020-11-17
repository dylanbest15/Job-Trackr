import React, { Component } from 'react';
// import Axios from 'axios';
import PendingAccordion from '../../components/PendingAccordion/index';
import Container from '@material-ui/core/Container';
import ResponsiveDrawer from "../../components/SideBar/SideBar";

class Pending extends Component {

    render() {
        return (
            <div>
                <ResponsiveDrawer />
                <Container maxWidth="md" style={{ padding: 80 }}>
                    <PendingAccordion />
                </Container>
            </div>
        )
    }
}
export default Pending;