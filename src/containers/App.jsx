import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">
Dashboard
        </Link>
      </li>
      <li>
        <Link to="/courses">
Cursos
        </Link>
      </li>
      <li>
        <Link to="/profile">
Profile
        </Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/courses" component={Courses} />
      <Route path="/profile" component={Profile} />
      <Route render={() => (
        <div>
          {' '}
Sorry, this page does not exist.
          {' '}
        </div>
)}
      />
    </Switch>
  </div>
);

export default App;
