import React, { useEffect, useState } from "react";
import BenchmarkCard from "./BenchmarkCard";
import API from './../../utils/BenchmarkAPI';

// import benchmarks API

function Benchmarks() {

  const [originalBenchmarks, setBenchmarks] = useState([]);
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
        setBenchmarks(res.data)
      )
      .catch(err => console.log(err));
  };
  return (
    <>
      <div className="container search-container">

        <h1>Benchmarks</h1>

        {originalBenchmarks ? originalBenchmarks.map(originalBenchmark => (
          <BenchmarkCard
            key={originalBenchmark.id}
            originalBenchmarkInfo={originalBenchmark}
          />
        )) : null}
      </div>

    </>
  )
}
export default Benchmarks;
