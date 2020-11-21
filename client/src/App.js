import React from "react";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Applied from "./pages/Applied/Applied";
import Pending from "./pages/Pending/Pending";
import Dashboard from "./pages/Dashboard/Dashboard";
import Benchmarks from "./pages/Benchmarks/Benchmarks";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./pages/Articles/Articles";


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
            <Route path="/pending" component={Pending} />
            <Route path="/applied" component={Applied} />
            <Route path="/resources" component={Articles} />
            <Route path="/benchmarks" component={Benchmarks} />

            {/* <Route path="/suggestedJobs" component={SuggestedJobs} /> */}
            {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
