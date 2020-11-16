import React from "react";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import Applied from "./pages/Applied";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/applied" component={Applied} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
