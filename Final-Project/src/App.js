import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { UserProvider } from "./context/UserContext";
import Main from "./layouts/Main";

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
