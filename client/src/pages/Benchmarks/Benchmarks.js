import React, { useEffect, useState } from "react";
import BenchmarkCard from "./BenchmarkCard";

// import benchmarks API

function Benchmarks() {

  const [benchmarks, setBenchmarks] = useState([]);
  const [userBenchmarks, setUserBenchmarks] = useState([]);

  useEffect(() => {
    // get benchmarks
    // set benchmarks to benchmarks array

    // get user benchmarks
    // set user benchmarks to user benchmark array
  })

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
