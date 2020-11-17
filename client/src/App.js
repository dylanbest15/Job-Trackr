import React from "react";
import ResponsiveDrawer from "./components/SideBar/SideBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <ResponsiveDrawer />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
