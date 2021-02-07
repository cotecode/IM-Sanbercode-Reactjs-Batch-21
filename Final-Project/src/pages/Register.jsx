import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "antd";

const Register = () => {
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "name": {
        setInput({ ...input, name: value });
        break;
      }
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
    <>
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
                REGISTER
              </h1>
              <div
                style={{
                  width: "300px",
                  margin: "0 auto",
                  border: "2px solid rgb(105, 39, 105)",
                  marginBottom: "30px",
                }}
              ></div>
              <label for="name">Username: </label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={input.name}
              />
              <br />
              <label>Email: </label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={input.email}
              />
              <br />
              <label>Password: </label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
              />
              <br />
              {/* <label>Confirm Password: </label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
              />
              <br /> */}
              <button className="btnAuth">Submit</button>
              <div style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Login Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div style={{ margin: "0 auto", width: "25%", padding: "50px" }}>
        <form onSubmit={handleSubmit}>
          <label>name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
          />
          <br />
          <label>email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          <br />
          <button>Register</button>
        </form>
      </div> */}

      {/* <div style={{ minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <div style={{ padding: "50px", background: "#fff", width: "600px" }}>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "50px",
                fontSize: "30px",
              }}
            >
              REGISTER
              <div
                style={{
                  width: "300px",
                  margin: "0 auto",
                  border: "2px solid rgb(105, 39, 105)",
                }}
              ></div>
            </h1>

            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              onSubmit={handleSubmit}
            >
              <Form.Item
                label="Name"
                name="name"
                onChange={handleChange}
                value={input.name}
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                onChange={handleChange}
                value={input.email}
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                onChange={handleChange}
                value={input.password}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="conf_pass"
                onChange={handleChange}
                value={input.password}
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Form.Item {...tailLayout}>
                Already have an account? <Link to="/login">Login Now</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
