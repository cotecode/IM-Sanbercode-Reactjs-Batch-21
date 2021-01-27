import React, { useState, useEffect } from "react";
import axios from "axios";
import Tittle from "../Tugas-9/Title";

const HooksAxios = () => {
  const [daftarBuah, setDaftarBuah] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState(0);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (daftarBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          let data = res.data;
          setDaftarBuah(
            data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                price: el.price,
                weight: el.weight,
              };
            })
          );
        });
    }
  }, [daftarBuah]);

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name: inputName,
          price: inputHarga,
          weight: inputBerat,
        })
        .then((res) => {
          let data = res.data;
          setDaftarBuah([
            ...daftarBuah,
            {
              id: data.id,
              name: data.name,
              price: data.price,
              weight: data.weight,
            },
          ]);
        });
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${currentId}`, {
          name: inputName,
          harga: inputHarga,
          berat: inputBerat,
        })
        .then(() => {
          let singleBuah = daftarBuah.find((el) => el.id === currentId);
          singleBuah.name = inputName;
          singleBuah.price = inputHarga;
          singleBuah.weight = inputBerat;
          setDaftarBuah([...daftarBuah]);
        });
    }
    setInputName("");
    setInputHarga("");
    setInputBerat("");
    setCurrentId(null);
  };

  // handle change
  const handleChange = (event) => {
    let inputValue = event.target.value;
    // setInputName(inputValue);
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "name": {
        setInputName(inputValue);
        break;
      }
      case "harga": {
        setInputHarga(inputValue);
        break;
      }
      case "berat": {
        setInputBerat(inputValue);
        break;
      }
      default: {
        break;
      }
    }
  };

  // handle edit
  const handleEdit = (event) => {
    let idFruit = event.target.value;
    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits/${idFruit}`)
      .then((res) => {
        let data = res.data;
        setInputName(data.name);
        setInputHarga(data.price);
        setInputBerat(data.weight);
        setCurrentId(data.id);
      });
  };

  // handle delete
  const handleDelete = (event) => {
    let idFruit = parseInt(event.target.value);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idFruit}`)
      .then(() => {
        let newDaftarBuah = daftarBuah.filter((el) => {
          return el.id !== idFruit;
        });
        setDaftarBuah(newDaftarBuah);
      });
  };

  return (
    <>
      {daftarBuah !== null && (
        <div style={{ width: "70%", margin: "0 auto", textAlign: "center" }}>
          <Tittle judul="Daftar Harga Buah" />
          <table id="table-buah">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {daftarBuah.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight / 1000} kg</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>
                        Edit
                      </button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Form */}
          <Tittle judul="Form Daftar Harga Buah" />
          <div>
            <div style={{ border: "1px solid #aaa", padding: "20px" }}>
              <form onSubmit={handleSubmit}>
                <label style={{ float: "left" }}>Nama:</label>
                <input
                  style={{ float: "right" }}
                  type="text"
                  required
                  name="name"
                  value={inputName}
                  onChange={handleChange}
                />
                <br />
                <br />
                <label style={{ float: "left" }}>Harga:</label>
                <input
                  style={{ float: "right" }}
                  type="text"
                  required
                  name="harga"
                  value={inputHarga}
                  onChange={handleChange}
                />
                <br />
                <br />
                <label style={{ float: "left" }}>Berat (dalam gram):</label>
                <input
                  style={{ float: "right" }}
                  type="number"
                  required
                  name="berat"
                  value={inputBerat}
                  onChange={handleChange}
                />
                <br />
                <br />
                <div style={{ width: "100%", paddingBottom: "20px" }}>
                  <button style={{ float: "right" }}>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HooksAxios;
