import React, { Component } from 'react';
// import Axios from 'axios';
import Accordion from '../../components/Accordion/index';
import Container from '@material-ui/core/Container';
import ResponsiveDrawer from "../../components/SideBar/SideBar";

class Search extends Component {

    render() {
        return (
            <div>
                <ResponsiveDrawer />
                <Container maxWidth="md">
                    <Accordion />
                </Container>
            </div>
        )
    }
}
export default Search;
