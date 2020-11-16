import React from "react";
import ResponsiveDrawer from "./components/SideBar/SideBar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <div>
    <ResponsiveDrawer>
      <h1>This works</h1>

    </ResponsiveDrawer>
    </div>
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path={["/", "/books"]}>
    //         <Books />
    //       </Route>
    //       <Route exact path="/books/:id">
    //         <Detail />
    //       </Route>
    //       <Route>
    //         <NoMatch />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
