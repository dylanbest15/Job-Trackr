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

  //add to user stat
  incrementUserValue: function(value, UserId) {
    return axios.put(`/api/passport/increment/${value}/${UserId}`);
  },
  
  //subratct from other stats
  decrementUserValue: function(value, UserId) {
    return axios.put(`/api/passport/decrement/${value}/${UserId}`);
  }
}