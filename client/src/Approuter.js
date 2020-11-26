import React, { useContext, useEffect } from "react";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Applied from "./pages/Applied/Applied";
import Dashboard from "./pages/Dashboard/Dashboard";
import Benchmarks from "./pages/Benchmarks/Benchmarks";
import { userContext } from "./App";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Articles from "./pages/Articles/Articles";
// import Benchmark from "./pages/Benchmarks/Benchmarks";

function ProtectedRoute({ user, ...rest}) {
  return user.id ? <Route {...rest}/> : <Redirect to="/" />
}

function Approuter() {

  const { user } = useContext(userContext);

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute user={user} path="/dashboard" component={Dashboard} />
            <ProtectedRoute user={user} path="/search" component={Search} />
            <ProtectedRoute user={user} path="/applied" component={Applied} />
            <ProtectedRoute user={user} path="/resources" component={Articles} />
            <ProtectedRoute user={user} path="/benchmarks" component={Benchmarks} />

            {/* <ProtectedRoute user={user} path="/suggestedJobs" component={SuggestedJobs} /> */}
            {/* <ProtectedRoute user={user} path="/profile" component={Profile} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Approuter;