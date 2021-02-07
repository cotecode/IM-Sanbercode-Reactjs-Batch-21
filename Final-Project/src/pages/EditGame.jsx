import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Input } from "antd";

const EditGame = () => {
  const [user] = useContext(UserContext);
  let { id } = useParams();
  let history = useHistory();
  const [currentId, setCurrentId] = useState(null);
  const [input, setInput] = useState({
    name: "",
    genre: "",
    singlePlayer: null,
    multiplayer: null,
    platform: "",
    release: 0,
    image_url: "",
  });

  useEffect(() => {
    if (currentId === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then((res) => {
          let dataGame = res.data;
          setInput({
            name: dataGame.name,
            genre: dataGame.genre,
            singlePlayer: dataGame.singlePlayer,
            multiplayer: dataGame.multiplayer,
            platform: dataGame.platform,
            release: dataGame.release,
            image_url: dataGame.image_url,
          });
          setCurrentId(id);
        });
    }
  }, [currentId, setCurrentId]);

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "name": {
        setInput({ ...input, name: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "singlePlayer": {
        setInput({ ...input, singlePlayer: event.target.value });
        break;
      }
      case "multiplayer": {
        setInput({ ...input, multiplayer: event.target.value });
        break;
      }
      case "platform": {
        setInput({ ...input, platform: event.target.value });
        break;
      }
      case "release": {
        setInput({ ...input, release: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${id}`,
        {
          name: input.name,
          genre: input.genre,
          singlePlayer: input.singlePlayer,
          multiplayer: input.multiplayer,
          platform: input.platform,
          release: input.release,
          image_url: input.image_url,
        },
        { headers: { Authorization: "Bearer " + user.token } }
      )
      .then(() => {
        history.push("/");
      });
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "50px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1 style={{ fontSize: "30px" }}>Edit Game</h1>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Name:</label>
            <Input
              required
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Genre:</label>
            <Input
              required
              name="genre"
              value={input.genre}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Singleplayer:</label>
            <br />
            <Input
              type="number"
              name="singlePlayer"
              max={1}
              min={0}
              value={input.singlePlayer}
              onChange={handleChange}
            />
            <small>
              <i>**Jika 1 = Yes dan 0 = No</i>
            </small>
            <br />
            <br />
            <label style={{ float: "left" }}>Multiplayer:</label>
            <Input
              type="number"
              name="multiplayer"
              max={1}
              min={0}
              value={input.multiplayer}
              onChange={handleChange}
            />
            <small>
              <i>**Jika 1 = Yes dan 0 = No</i>
            </small>
            <br />
            <br />
            <label style={{ float: "left" }}>Platform:</label>
            <Input
              required
              type="text"
              name="platform"
              value={input.platform}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Release:</label>
            <Input
              required
              type="number"
              name="release"
              value={input.release}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Link Image:</label>
            <Input
              required
              type="text"
              name="image_url"
              value={input.image_url}
              onChange={handleChange}
            />
            <br />
            <br />
            <div style={{ width: "100%", paddingBottom: "50px" }}>
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditGame;
