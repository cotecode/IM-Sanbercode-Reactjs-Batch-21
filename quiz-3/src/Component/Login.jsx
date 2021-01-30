import React, { useContext, useState } from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          background: "#fff",
          width: "50%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <form>
          <div>
            <label for="username">
              <b>Username: </b>
            </label>
            <input id="username" type="text" name="username"></input>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label for="password">
              <b>Password: </b>
            </label>
            <input id="password" type="password" name="password"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
