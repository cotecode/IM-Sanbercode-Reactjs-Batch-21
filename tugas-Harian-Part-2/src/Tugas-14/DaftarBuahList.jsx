import React, { useContext, useEffect } from "react";
import { DaftarBuahContext } from "./DaftarBuahContext";
import Tittle from "../Tugas-9/Title";
import axios from "axios";

const DaftarBuahList = () => {
  const [
    daftarBuah,
    setDaftarBuah,,
    setInputName,,
    setInputHarga,,
    setInputBerat,,
    setCurrentId,
  ] = useContext(DaftarBuahContext);

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
        </div>
      )}
    </>
  );
};

export default DaftarBuahList;
