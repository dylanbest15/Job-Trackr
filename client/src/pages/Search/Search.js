import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import ResponsiveDrawer from './../../components/SideBar/SideBar';
<<<<<<< HEAD
import JobCard from "./JobCard";
// import ResponsiveDrawer from './../../components/SideBar/SideBar';
=======
import JobCard from "./JobCardComp";
import "./search.css";
>>>>>>> dade3dc811966675e0a142ff9e77fc0d9b7e3688

// material ui component imports
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search() {

    // set states
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [page, setPage] = useState(1);
    const [appliedJobs, setAppliedJobs] = useState([]);

    // effect for checking if application already exists
    useEffect(() => {
        API.getApplications("abc123")
            .then(res => setAppliedJobs(res.data.map(application => (
                application.job_id
            ))))
            .catch(err => console.log(err));
    }, [])

    // effect for changing pages
    useEffect(() => {
        if (category && city && state) {
            let location = `${city}, ${state}`;
            API.getJobs(category, location, page)
                .then(res => setJobs(res.data.results) + console.log(res))
                .catch(err => console.log(err));
            window.scrollTo(0, 0);
        }
    }, [page]);

    // event functions
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handleNextPage = () => {
        setPage(page + 1);
    }

    const handleLastPage = () => {
        setPage(page - 1);
    }

    // search for jobs
    function handleSearch() {
        let location = `${city}, ${state}`;
        setPage(1);
        API.getJobs(category, location, page)
            .then(res => setJobs(res.data.results) + console.log(res))
            .catch(err => console.log(err));
    }

    // job category selection options
    const categories = ["Account Management", "Business & Strategy", "Creative & Design", "Customer Service",
        "Data Science", "Editorial", "Education", "Engineering", "Finance", "Fundraising & Development",
        "Healthcare & Medicine", "HR & Recruiting", "Legal", "Marketing & PR", "Operations", "Project & Product Management",
        "Retail", "Sales", "Social Media & Community"]

    return (
        <>

            <ResponsiveDrawer />
            <div className="container search-container">

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
                    <TextField
                        id="outlined-search"
                        label="City"
                        type="search"
                        variant="outlined"
                        onChange={handleCityChange}
                    />
                    <TextField
                        id="outlined-search"
                        label="ST"
                        type="search"
                        variant="outlined"
                        onChange={handleStateChange}
                    />
                    <Button variant="contained" onClick={handleSearch}>Search</Button>

                </FormControl>

                {jobs ? jobs.map(job => (
                    <JobCard
                        key={job.id}
                        jobInfo={job}
                        city={city}
                        state={state}
                        applied={appliedJobs}
                    />
                )) : null}

                {page !== 1 ? <Button variant="contained" onClick={handleLastPage}>Previous</Button> : null}
                {jobs.length === 20 ? <Button variant="contained" value="next" onClick={handleNextPage}>Next</Button> : null}

            </div>

        </>
    )
}

export default Search;
