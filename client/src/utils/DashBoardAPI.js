import axios from "axios";

export default {

  // get first name
  getFirstName: function(firstname) {
    return axios.get(`/api/users/${firstname}`);
  },

  getLastFive: function(userId) {
    return axios.get(`/api/applications/recent/${userId}`);
  },
}