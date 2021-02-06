import React, { useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { UserContext } from "../context/UserContext";
import Movies from "../pages/Movies";
import Games from "../pages/Games";
import Register from "../pages/Register";
import DetailMovie from "../pages/DetailMovie";
import TableMovie from "../pages/TableMovies/TableMovie";

const Section = () => {
  const [user] = useContext(UserContext);


  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route exact path="/movies" user={user} component={Movies} />
        <Route exact path="/detailMovies/id" user={user} component={DetailMovie} />
        <Route exact path="/games" user={user} component={Games} />
        <PrivateRoute exact path="/movielisteditor" user={user} component={TableMovie} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <LoginRoute exact path="/register" user={user} component={Register} />
      </Switch>
    </section>
  );
};

export default Section;
