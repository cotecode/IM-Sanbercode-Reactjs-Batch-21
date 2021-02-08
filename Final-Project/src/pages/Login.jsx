import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Input } from "antd";

const Login = () => {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "email": {
        setInput({ ...input, email: value });
        break;
      }
      case "password": {
        setInput({ ...input, password: value });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <div
        style={{
          padding: "50px",
          background: "#fff",
          width: "600px",
          margin: "0 auto",
          boxShadow: "0px 10px 20px 0px rgba(50, 50, 50, 0.52)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              Login
            </h1>
            <label for="email">Email: </label>
            <Input
              required
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={input.email}
            />
            <br />
            <label for="password">Password: </label>
            <Input.Password
              required
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={input.password}
            />
            <br />
            <button className="btnAuth">Submit</button>
            <div style={{ textAlign: "center" }}>
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
