import React from "react";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Applied from "./pages/Applied/Applied";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./pages/Articles/Articles";
// import Benchmark from "./pages/Benchmarks/Benchmarks";


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/search" component={Search} />
            <Route path="/applied" component={Applied} />
            {/* <Route path="/benchmarks" component={Benchmark} /> */}
            <Route path="/resources" component={Articles} />
            {/* <Route path="/suggestedJobs" component={SuggestedJobs} /> */}
            {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
