import React, { createContext, useState, useMemo } from "react";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Applied from "./pages/Applied/Applied";
import Dashboard from "./pages/Dashboard/Dashboard";
import Benchmarks from "./pages/Benchmarks/Benchmarks";
import Approuter from "./Approuter";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./pages/Articles/Articles";
// import Benchmark from "./pages/Benchmarks/Benchmarks";

export const userContext = createContext({
  user: {},
  setUser: () => null
})

function App() {

  const [user, setUser] = useState({});
  const store = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <userContext.Provider value={store}>
      <Approuter />
    </userContext.Provider>
  );
}

export default App;
