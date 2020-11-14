import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Search() {
    const [jobs, setJobs] = useState([]);
    const [jobSearch, setJobSearch] = useState("");
  
    const handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { value } = event.target;
      setJobSearch(value);
    };
  
    const handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      API.getJobs(jobSearch)
        .then(res => setJobs(res.data))
        .catch(err => console.log(err));
    };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Job Search</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="job_title"
                placeholder="Job Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="company_name"
                placeholder="Company (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="city"
                placeholder="City (Optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="state"
                placeholder="State (Optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="job_link"
                placeholder="Job Link (Optional)"
              />
              <FormBtn
                disabled={!(formObject.company_name && formObject.job_title)}
                onClick={handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Jobs On My List</h1>
            </Jumbotron>
            {jobs.length ? (
              <List>
                {jobs.map(job => (
                  <ListItem key={job._id}>
                    <Link to={"/jobs/" + job._id}>
                      <strong>
                        {job.job_title} by {job.company_name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteJob(job._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;