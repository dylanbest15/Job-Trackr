import React, { Component } from 'react';
import SearchArea from './../components/SearchArea';
import Axios from 'axios';
import Card from './card';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            searchField: ''

        }
    }
    searchjob = (e) => {
        e.preventDefault();
        Axios
        //REFERANCE API CALL HERE
            // .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField)
            .then((data) => {
                console.log(data);
                this.setState({jobs:data.data.items})
            })
    }

    handleSearh = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div >
                <SearchArea searchJob={this.searchJob} handleSearch={this.handleSearh} />
               <div style={{display:"flex", flexDirection:"column"}}>
                {
                    this.state.books.map((book)=>{
                     return  <Card {...job} typeBtn= "Save"/>
                    }
                    )
                }
                
               </div> 
            </div>
        )
    }
}
export default Search;
