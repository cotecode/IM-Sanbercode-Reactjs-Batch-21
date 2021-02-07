import React, { useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { UserContext } from "../context/UserContext";
import Movies from "../pages/Movies";
import Games from "../pages/Games";
import Register from "../pages/Register";
import DetailMovie from "../pages/DetailMovie";
import MovieList from "./MovieList";
import GameList from "./GameList";
import EditMovie from "../pages/EditMovie";
import DetailGame from "../pages/DetailGame";

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
        <Route exact path={`/detailMovies/:id`} user={user} component={DetailMovie} />
        <Route exact path={`/detailGames/:id`} user={user} component={DetailGame} />
        <Route exact path="/games" user={user} component={Games} />
        <PrivateRoute exact path="/movielisteditor" user={user} component={MovieList} />
        <PrivateRoute exact path="/gamelisteditor" user={user} component={GameList} />
        <PrivateRoute exact path={`/editMovies/:id`} user={user} component={EditMovie} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <LoginRoute exact path="/register" user={user} component={Register} />
      </Switch>
    </section>
  );
};

export default Section;
