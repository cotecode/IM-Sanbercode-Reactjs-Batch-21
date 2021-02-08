import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Input } from "antd";
import axios from "axios";

const ChangePassword = () => {
  const [user] = useContext(UserContext);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://backendexample.sanbersy.com/api/change-password`,
        {
          current_password: input.current_password,
          new_password: input.new_password,
          new_confirm_password: input.new_confirm_password,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((res) => {
        alert("Password has been changed");
        setInput({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
      })
      .catch((err) => {
        alert("Must be filled");
        setInput({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
      });
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;
    let value = event.target.value;

    if (typeOfInput === "current_password") {
      setInput({ ...input, current_password: value });
    } else if (typeOfInput === "new_password") {
      setInput({ ...input, new_password: value });
    } else if (typeOfInput === "new_confirm_password") {
      setInput({ ...input, new_confirm_password: value });
    }
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "50px",
        width: "700px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "30px" }}>Change Password</h1>
      <div style={{ border: "1px solid #aaa", padding: "20px" }}>
        <form style={{ paddingBottom: "50px" }} onSubmit={handleSubmit}>
          <label>Username :</label>
          <Input disabled type="text" placeholder={user.name} />
          <br />
          <br />
          <label>Old Password :</label>
          <Input.Password
            required
            type="password"
            name="current_password"
            value={input.current_password}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>New Password :</label>
          <Input.Password
            required
            type="password"
            name="new_password"
            value={input.new_password}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Confirm New Password:</label>
          <Input.Password
            required
            type="password"
            name="new_confirm_password"
            value={input.new_confirm_password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button
            style={{
              float: "right",
              background: "#1890ff",
              color: "#fff",
              border: "none",
              padding: "5px 30px",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
