import React, { useEffect, useState } from "react";
import BenchmarkCard from "./BenchmarkCard";
import API from '../../utils/BenchmarkAPI';

// import benchmarks API

function Benchmarks() {

  const [benchmarks, setBenchmarks] = useState([]);
  const [userBenchmarks, setUserBenchmarks] = useState([]);

  useEffect(() => {
    // get benchmarks
    // set benchmarks to benchmarks array
    loadBenchmarks();
    // get user benchmarks
    // set user benchmarks to user benchmark array
  })
  function loadBenchmarks() {
    API.getBenchmarks()
      .then(res =>
        setBenchmarks(res.data + console.log(res.data))
      )
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1>Benchmarks</h1>
      {/* loop through benchmark card component with props from benchmarks and user benchmarks states */}
      <BenchmarkCard
      />
    </>
  )
}
export default Benchmarks;
