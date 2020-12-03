import axios from "axios";

export default {

  // login user
  loginUser: function (userData) {
    return axios.post("/api/passport/login/", userData);
  },

  // sign up user
  signupUser: function (userData) {
    return axios.post("/api/passport/signup", userData);
  },

  // logout user
  logoutUser: function() {
    return axios.get("/api/passport/logout");
  },

  // return user data
  getUserData: function() {
    return axios.get("/api/passport/user_data");
  },

  incrementUserValue: function(value) {
    return axios.get(`/api/passport/increment/${value}`);
  },

  decrementUserValue: function() {
    return axios.get(`/api/passport/decrement`);
  }
}