import axios from "axios";

export default {
  //The muse API
  getZen: function() {
    return axios.get(`/api/thirdparty/quotes`);
  }
}