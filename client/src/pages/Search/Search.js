import React, { Component, useState } from 'react';
import SearchArea from './SearchArea';
import API from './../../utils/API';
import Axios from 'axios';
// import Card from './card';
import ResponsiveDrawer from './../../components/SideBar/SideBar';


function Search() {
    const [search, setSearch] = useState("");

    function handleInputChange(event) {
      setSearch(event.target.value);
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      API.getJobs()
        .then(res => console.log(res))
        
        .catch(err => console.log(err));
    }

    return (
      <>
      <div>
          <ResponsiveDrawer />
        <div className="container">
          <form onSubmit={handleFormSubmit}>
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
            
          </div>
        </div>
        </div>
      </>
    )
  }
export default Search;
