import React from "react";
import Tittle from "../Tugas-9/Title";
import DetailItem from "./DetailItem";

const Table = () => {
  return (
    <>
      <Tittle judul="Tabel Harga Buah" />
      <div style={{ border: "1px solid black" }}>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            <DetailItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
