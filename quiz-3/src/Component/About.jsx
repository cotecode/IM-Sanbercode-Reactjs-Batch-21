import React from "react";

const About = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ background: "#fff", padding: "40px" }}>
        <div className="about">
          <h1 className="text-center">
            Data Peserta Sanbercode Bootcamp Reactjs
          </h1>
          <ol>
            <li>
              <b>Nama :</b> Nico Parulian
            </li>
            <li>
              <b>Email:</b> nicotara179@gmail.com
            </li>
            <li>
              <b>Sistem Operasi yang digunakan:</b> Windows 10
            </li>
            <li>
              <b>Akun Github:</b> Cotecode(Nico)
            </li>
            <li>
              <b>Akun Telegram:</b> Nico (+6287883257010)
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
