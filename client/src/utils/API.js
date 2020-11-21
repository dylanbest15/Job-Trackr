import axios from "axios";

export default {

  // Remotive API
  getRemoteJobs: function(category) {
    return axios.get(`/api/thirdparty/jobs/${category}`);
  },

  getJobCategories: function() {
    return axios.get("api/thirdparty/categories");
  },

  // Gets the applications with the given UserId
  getApplications: function (UserId) {
    return axios.get(`/api/applications/${UserId}`);
  },

  // Gets the applications with the given UserId and status
  getApplicationsByStatus: function (UserId, status) {
    return axios.get(`/api/applications/${UserId}/${status}`);
  },

  // Saves an application to the database
  saveApplication: function (applicationData) {
    return axios.post("/api/applications", applicationData);
  },

  // Updates status of an application
  updateApplicationStatus: function (userId, newStatus) {
    return axios.put(`/api/applications/${userId}`, newStatus);
  },

  // Removes an application from the database
  removeAppliaction: function (userId) {
    return axios.delete(`/api/applications/${userId}`);
  }
};
