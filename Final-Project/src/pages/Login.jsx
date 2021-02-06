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
              }}
            >
              LOGIN
            </h1>
            <div
              style={{
                width: "300px",
                margin: "0 auto",
                border: "2px solid rgb(105, 39, 105)",
                marginBottom: "30px",
              }}
            ></div>
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
            <Input
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
