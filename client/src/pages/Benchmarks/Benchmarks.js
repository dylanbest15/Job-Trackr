import React, { useEffect, useState } from "react";
import BenchmarkCard from "./BenchmarkCard";
import Grid from '@material-ui/core/Grid';
import API from './../../utils/BenchmarkAPI';
import ResponsiveDrawer from './../../components/SideBar/SideBar';


// import benchmarks API

function Benchmarks() {

  const [originalBenchmarks, setBenchmarks] = useState([]);
  const [userBenchmarks, setUserBenchmarks] = useState([]);

  useEffect(() => {
    // get benchmarks
    // set benchmarks to benchmarks array
    loadBenchmarks();
    loadUserBenchmarks();
    // get user benchmarks
    // set user benchmarks to user benchmark array
  })
  function loadBenchmarks() {
    API.getBenchmarks()
      .then(res =>
        setBenchmarks(res.data)
      )
      .catch(err => console.log(err));
  };
  function loadUserBenchmarks() {
    API.getUserBenchmarks()
      .then(res =>
        setUserBenchmarks(res.data)
      )
      .catch(err => console.log(err));
  };
  return (
    <>
      <ResponsiveDrawer />

      <div className="container search-container">

        <h1>Benchmarks</h1>
        <Grid container spacing={24}>
          {originalBenchmarks ? originalBenchmarks.map(originalBenchmark => (
            <Grid item md={3}>
              <BenchmarkCard
                key={originalBenchmark.id}
                originalBenchmarkInfo={originalBenchmark}
              />
            </Grid>
          )) : null}
        </Grid>
      </div>

    </>
  )
}
export default Benchmarks;
