import React, { useEffect, useState, useContext } from 'react';
import API from "../../utils/DashBoardAPI";
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Col from '@material-ui/core/Container';
import Row from '@material-ui/core/Container';
import { userContext } from "../../App";

const useStyles = makeStyles({
    table: {
        maxWidth: '100%',
    },
});


export default function RecentJobsTable() {
    const [lastFive, setLastFive] = useState([]);
    const { user } = useContext(userContext);
    useEffect(() => {
        async function listFive () {
        const response = await API.getLastFive(user.id);
        console.log(response.data);
        setLastFive(response.data);
        }
        listFive();
    }, [])

    const classes = useStyles();

    return (
        <div>
            <div className="header">
                <h1 id="title">Recent Jobs</h1>
            </div>
            <Row className="yourJobsHeader">
                {/* <Col align="center">
                    <a href="/applied">View All</a>
                </Col> */}
            </Row>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style= {{ color: "blue" }}><b>Company</b></TableCell>
                            <TableCell align="center" style= {{ color: "blue" }}><b>Job Title</b></TableCell>
                            <TableCell align="right" style= {{ color: "blue" }}><b>Status</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lastFive.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.company_name}
                                </TableCell>
                                <TableCell align="center">{row.job_title}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}