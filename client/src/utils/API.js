import axios from "axios";

export default {

  //The muse API
  getJobs: function () {
    return axios.get(`https://www.themuse.com/api/public/jobs?page=1&descending=true&api_key=60840d79a9a8595474a4ad33893e355617951561f109c1f69a474224e4e87fba`);
  },

  // Gets the application with the given userId and status
  getApplication: function (userId, status) {
    return axios.get(`/api/applications/${userId}/${status}`);
  },

  // Saves an application to the database
  saveApplication: function (applicationData) {
    return axios.post("/api/applications", applicationData);
  },

  updateApplicationStatus: function (userId, newStatus) {
    return axios.put(`/api/applications/${userId}`, newStatus);
  },

  removeAppliaction: function (userId) {
    return axios.delete(`/api/applications/${userId}`);
  }
};
