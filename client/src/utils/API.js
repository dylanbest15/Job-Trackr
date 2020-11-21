import axios from "axios";

export default {

  //The muse API
  getJobs: function (category, location, page) {
    const categoryString = category.replace(/ /g, "%20").replace("&", "%26");
    const locationString = location.replace(",", "%C").replace(" ", "%20");
    const apiKey = "60840d79a9a8595474a4ad33893e355617951561f109c1f69a474224e4e87fba";
    const query = `category=${categoryString}&location=${locationString}&page=${page}&descending=true&api_key=${apiKey}`;
    console.log(query);
    return axios.get(`https://www.themuse.com/api/public/jobs?${query}`);
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
  updateApplicationStatus: function (UserId, newStatus) {
    return axios.put(`/api/applications/${UserId}`, newStatus);
  },

  // Removes an application from the database
  removeAppliaction: function (UserId) {
    return axios.delete(`/api/applications/${UserId}`);
  }
};
