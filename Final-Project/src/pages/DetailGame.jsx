import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image, Col } from "antd";

const DetailGame = () => {
  let { id } = useParams();
  const [currentId, setCurrentId] = useState(null);
  const [daftarGame, setDaftarGame] = useState({
    name: "",
    genre: "",
    singlePlayer: 0,
    multiplayer: 0,
    platform: "",
    release: 0,
    image_url: "",
  });

  useEffect(() => {
    if (currentId === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then((res) => {
          let data = res.data;
          setDaftarGame({
            name: data.name,
            genre: data.genre,
            singlePlayer: data.singlePlayer,
            multiplayer: data.multiplayer,
            platform: data.platform,
            release: data.release,
            image_url: data.image_url,
          });
          setCurrentId(id);
        });
    }
  }, [currentId, setCurrentId]);

  return (
    <section style={{ minHeight: "100vh" }} className="container-fluid">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(56, 52, 52, 0.9), rgba(0, 0, 0, 0.9)), url(${daftarGame.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ display: "flex", padding: "50px" }}>
          <Col span={6}>
            <Image width={300} src={daftarGame.image_url} />
          </Col>
          <div>
            <h1 style={{ fontSize: "30px", color: "#fff" }}>
              {daftarGame.name}
              <span> ({daftarGame.release})</span>
            </h1>
            <h4 style={{ fontSize: "15px", color: "#fff" }}>
              {daftarGame.genre} | {daftarGame.platform}
            </h4>
            <br />
            <h3 style={{ fontSize: "30px", color: "#fff" }}>Mode</h3>
            <div>
              <span
                style={{ fontSize: "20px", color: "#fff" }}
                class="fas fa-users"
              >
                {" "}
                Multiplayer:{" "}
              </span>
              <span
                style={{ fontSize: "20px", color: "#fff", paddingLeft: "5px" }}
              >
                {daftarGame.multiplayer ? "Support" : "Not Support"}
              </span>
            </div>
            <div>
              <span
                style={{ fontSize: "20px", color: "#fff" }}
                class="fas fa-user"
              >
                {" "}
                Singleplayer:{" "}
              </span>
              <span
                style={{ fontSize: "20px", color: "#fff", paddingLeft: "5px" }}
              >
                {daftarGame.singlePlayer ? "Support" : "Not Support"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailGame;
