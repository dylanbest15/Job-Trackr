import axios from "axios";

export default {

  // get benchmarks
  getBenchmarks: function() {
    return axios.get("/api/benchmarks");
  },

  // get user benchmarks
  getUserBenchmarks: function(userId) {
    return axios.get(`/api/benchmarks/${userId}`);
  },

  // create user benchmark
  createUserBenchmark: function(userId, benchmarkId) {
    return axios.post(`/api/benchmarks/${userId}/${benchmarkId}`);
  }
}