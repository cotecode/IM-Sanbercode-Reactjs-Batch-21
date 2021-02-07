import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Input } from "antd";
import axios from "axios";

const GameForm = () => {
  const [user] = useContext(UserContext);
  const [daftarGame, setDaftarGame] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputGenre, setInputGenre] = useState("");
  const [inputSinglePlayer, setInputSinglePlayer] = useState("");
  const [inputMultiPlayer, setInputMultiPlayer] = useState("");
  const [inputPlatform, setInputPlatform] = useState("");
  const [inputRelease, setInputRelease] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (daftarGame === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game`)
        .then((res) => {
          let data = res.data;
          setDaftarGame(
            data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                genre: el.genre,
                singlePlayer: el.singlePlayer,
                multiplayer: el.multiplayer,
                platform: el.platform,
                release: el.release,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [daftarGame]);

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === null) {
      // untuk create data baru
      axios
        .post(
          `https://backendexample.sanbersy.com/api/data-game`,
          {
            name: inputName,
            genre: inputGenre,
            singlePlayer: inputSinglePlayer,
            multiplayer: inputMultiPlayer,
            platform: inputPlatform,
            release: inputRelease,
            image_url: inputImage,
          },
          { headers: { Authorization: "Bearer " + user.token } }
        )
        .then((res) => {
          let data = res.data;
          setDaftarGame([
            ...daftarGame,
            {
              id: data.id,
              name: data.name,
              genre: data.genre,
              singlePlayer: data.singlePlayer,
              multiplayer: data.multiplayer,
              platform: data.platform,
              release: data.release,
              image_url: data.image_url,
            },
          ]);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbersy.com/api/data-game/${currentId}`,
          {
            name: inputName,
            genre: inputGenre,
            singlePlayer: inputSinglePlayer,
            multiplayer: inputMultiPlayer,
            platform: inputPlatform,
            release: inputRelease,
            image_url: inputImage,
          },
          { headers: { Authorization: "Bearer " + user.token } }
        )
        .then(() => {
          let singleGame = daftarGame.find((el) => el.id === currentId);
          singleGame.name = inputName;
          setDaftarGame([...daftarGame]);
        });
    }
    setInputName("");
    setInputGenre("");
    setInputSinglePlayer("");
    setInputMultiPlayer("");
    setInputPlatform("");
    setInputRelease("");
    setInputImage("");
    setCurrentId(null);
  };

  // handle change
  const handleChange = (event) => {
    let inputValue = event.target.value;
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "name": {
        setInputName(inputValue);
        break;
      }
      case "genre": {
        setInputGenre(inputValue);
        break;
      }
      case "singlePlayer": {
        setInputSinglePlayer(inputValue);
        break;
      }
      case "multiplayer": {
        setInputMultiPlayer(inputValue);
        break;
      }
      case "platform": {
        setInputPlatform(inputValue);
        break;
      }
      case "release": {
        setInputRelease(inputValue);
        break;
      }
      case "image_url": {
        setInputImage(inputValue);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "50px",
        boxSizing: "border-box",
        width: "700px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "30px" }}>Add Game</h1>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Name :</label>
            <Input
              required
              type="text"
              name="name"
              value={inputName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Genre :</label>
            <Input
              required
              name="genre"
              value={inputGenre}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Singleplayer:</label>
            <Input
              required
              type="number"
              name="singlePlayer"
              max={1}
              min={0}
              value={inputSinglePlayer}
              onChange={handleChange}
            />
            <small>
              <i>**Jika 1 = Yes dan 0 = No</i>
            </small>
            <br />
            <br />
            <label style={{ float: "left" }}>Multiplayer:</label>
            <Input
              required
              type="number"
              name="multiplayer"
              max={1}
              min={0}
              value={inputMultiPlayer}
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
              value={inputPlatform}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Release:</label>
            <Input
              required
              type="number"
              name="release"
              value={inputRelease}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Link Image:</label>
            <Input
              required
              type="text"
              name="image_url"
              value={inputImage}
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GameForm;
