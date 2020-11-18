import React from 'react';
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

const useStyles = makeStyles({
    table: {
        maxWidth: '100%',
    },
});

function createData(date, company, status) {
    return { date, company, status };
}

const rows = [
    createData('November 11', 'Liberty Mutual', 'Applied'),
    createData('November 17', 'Apple', 'pending'),
    createData('November 17', 'Netflix', 'pending'),
];

export default function RecentJobsTable() {
    const classes = useStyles();

    return (
        <div>
            {/* title not aligning properly */}
            <Row className="yourJobsHeader">
                <Col align="left">
                    <h3>Your <b>Jobs</b></h3>
                </Col>
                <Col align="right">
                    <a href="/applied">View All</a>
                </Col>
            </Row>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Date</b></TableCell>
                            <TableCell align="center"><b>Comapny</b></TableCell>
                            <TableCell align="right"><b>Status</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="center">{row.company}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}