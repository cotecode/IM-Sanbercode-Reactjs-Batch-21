import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const TableGame = () => {
  const [user] = useContext(UserContext);
  const [daftarGame, setDaftarGame] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputGenre, setInputGenre] = useState("");
  const [inputSinglePlayer, setInputSinglePlayer] = useState("");
  const [inputMultiplayer, setInputMultiplayer] = useState("");
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

  // handle edit
  const handleEdit = (event) => {
    let idGame = event.target.value;
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${idGame}`)
      .then((res) => {
        let data = res.data;
        setInputName(data.name);
        setInputGenre(data.genre);
        setInputSinglePlayer(data.singlePlayer);
        setInputMultiplayer(data.multiplayer);
        setInputPlatform(data.platform);
        setInputRelease(data.release);
        setInputImage(data.image_url);
        setCurrentId(data.id);
      });
  };

  const handleDelete = (event) => {
    let idGame = parseInt(event.target.value);
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`, {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then(() => {
        let newDaftarGame = daftarGame.filter((el) => {
          return el.id !== idGame;
        });
        setDaftarGame(newDaftarGame);
      });
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {daftarGame !== null && (
        <div>
          <h1 style={{ fontSize: "30px" }}>Table Game</h1>
          <table id="table-list">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Genre</th>
                <th>Platform</th>
                <th>Single Player</th>
                <th>Multi Player</th>
                <th>Release</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {daftarGame.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image_url} alt="img" height="300" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.genre}</td>
                    <td>{item.platform}</td>
                    <td>{item.singlePlayer ? "Yes" : "No"}</td>
                    <td>{item.multiplayer ? "Yes" : "No"}</td>
                    <td>{item.release}</td>
                    <td>
                      <button
                        className="btnEdit"
                        onClick={handleEdit}
                        value={item.id}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="btnDelete"
                        onClick={handleDelete}
                        value={item.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Form */}
          {/* {user && (
            <>
              <h1>Form Peserta</h1>
              <form style={{ paddingBottom: "20px" }} onSubmit={handleSubmit}>
                <label>Masukkan nama peserta:</label>
                <input type="text" value={inputName} onChange={handleChange} />
                <button>submit</button>
              </form>
            </>
          )} */}
        </div>
      )}
    </section>
  );
};

export default TableGame;
