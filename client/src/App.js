import React from "react";
import ResponsiveDrawer from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ResponsiveDrawer />
    <Router>
    <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
