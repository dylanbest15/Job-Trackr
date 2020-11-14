import axios from "axios";

export default {

  //The muse API
  getJobs: function() {
    return axios.get(`https://www.themuse.com/api/public/jobs?category=Engineering&page=1&descending=true&api_key=60840d79a9a8595474a4ad33893e355617951561f109c1f69a474224e4e87fba`);
  },
  
  // Gets the job with the given id
  getJob: function(id) {
    return axios.get("/api/jobs/" + id);
  },

  // Saves a job to the database
  saveJob: function(jobData) {
    return axios.post("/api/jobs", jobData);
  }
};
