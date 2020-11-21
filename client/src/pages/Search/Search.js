import React, { Component, useState } from 'react';
import API from './../../utils/API';
// import Axios from 'axios';
// import Card from './card';
import ResponsiveDrawer from './../../components/SideBar/SideBar';
import JobCard from "./jobCard";
// import ResponsiveDrawer from './../../components/SideBar/SideBar';


function Search() {
    const [search, setSearch] = useState("");
    const [jobs, setJobs] = useState([]);

    function handleInputChange(event) {
        setSearch(event.target.value);
    }

    function pageLoadSearch(event) {
        // event.preventDefault();
        API.getJobs()
            .then(res => (setJobs(res.data.results) + console.log(res)))

            .catch(err => console.log(err));
    }

    // filterJobs = (e) => {
    //     e.preventDefault();
    //     Axios
    //         .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField)
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({books:data.data.items})
    //         })
    // }
    pageLoadSearch();
    return (
        <>
            <div>
                {/* <ResponsiveDrawer /> */}
                <div className="container">
                    {/* <form onSubmit={filterJobs()}> */}
                    <form onSubmit={console.log("")}>

                        <h4>Book Search</h4>
                        <div className="row search-box">
                            <div className="col-12 search-input">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                                    onChange={handleInputChange}></input>
                            </div>
                        </div>
                        <div className="row button-row justify-content-end">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                    <div className="row search-results">
                        <h4>Results</h4>
                        <hr></hr>
                        {jobs ? jobs.map(job => (
                            <JobCard
                                key={job.id}
                                jobInfo={job}
                            />
                        )) : null}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;
