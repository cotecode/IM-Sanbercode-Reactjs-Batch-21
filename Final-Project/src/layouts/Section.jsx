import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import { UserContext } from "../context/UserContext";

const Section = () => {
  const [user] = useContext(UserContext);

  // const PrivateRoute = ({ user, ...props }) => {
  //   if (user) {
  //     return <Route {...props} />;
  //   } else {
  //     return <Redirect to="/login" />;
  //   }
  // };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <LoginRoute exact path="/login" user={user} component={Login} />
      </Switch>
    </section>
  );
};

export default Section;
