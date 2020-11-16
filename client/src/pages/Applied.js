import React, { Component } from 'react';
// import Axios from 'axios';
import Accordion from '../components/Accordion/index';
// import DashboardTabs from '../components/Tabs/index';
import Container  from '@material-ui/core/Container';

class Search extends Component {

    render() {
        return (
            <Container maxWidth="md">
                {/* <DashboardTabs /> */}
                <Accordion />
            </Container>
        )
    }
}
export default Search;
