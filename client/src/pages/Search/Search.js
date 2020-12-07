import React, { useEffect, useState, useContext } from "react";
import API from '../../utils/API';
import ResponsiveDrawer from './../../components/SideBar/SideBar';
import JobCard from "./JobCardComp";
import "./search.css";
import logo from '../../assets/logo.png';
import { userContext } from "../../App";


// material ui component imports
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

function Search() {

    // set states
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    //user
    const { user } = useContext(userContext);

    // use effect for api calls
    useEffect(() => {
        // see what applications already exist
        API.getApplications(user.id)
            .then(res => setAppliedJobs(res.data.map(application => (
                application.job_id
            ))))
            .catch(err => console.log(err));
        // create job categories
        API.getJobCategories()
            .then(res => setCategories(res.data.jobs.map(job => (
                    job.slug
            ))))
            .catch(err => console.log(err));
    }, [])

    // event functions
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    // search for jobs
    function handleSearch() {
        API.getRemoteJobs(category)
            .then(res => setJobs(res.data.jobs) + console.log(res))
            .catch(err => console.log(err));
    }
    
    return (
        <>

            <ResponsiveDrawer />
            <div className="container search-container">
                <div className="categoryDiv">
                <img className="search-logo" src={logo} alt="eye logo" />
                    <h1 className="searchTitle">Search Page</h1><br/>
                    <h1 className="searchSubTitle">Search for remote jobs by Category and<br/>use "Apply Now!" to save the job</h1>

                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Job Category"
                    >
                        {categories.map(category => (
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" onClick={handleSearch}>Search</Button>

                </FormControl>
                </div>
                <hr/>

                {jobs ? jobs.map(job => (
                    <JobCard
                        key={job.id}
                        jobInfo={job}
                        applied={appliedJobs}
                    />
                )) : null}

            </div>

        </>
    )
}

export default Search;
