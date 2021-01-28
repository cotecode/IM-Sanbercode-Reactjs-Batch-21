import React, { useContext, useState } from "react";
import { DaftarBuahContext } from "./DaftarBuahContext";
import Tittle from "../Tugas-9/Title";
import axios from "axios";

const DaftarBuahForm = () => {
  const [
    daftarBuah,
    setDaftarBuah,
    inputName,
    setInputName,
    inputHarga,
    setInputHarga,
    inputBerat,
    setInputBerat,
    currentId,
    setCurrentId,
  ] = useContext(DaftarBuahContext);

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
          price: inputHarga,
          weight: inputBerat,
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

  return (
    <>
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
    </>
  );
};

export default DaftarBuahForm;
