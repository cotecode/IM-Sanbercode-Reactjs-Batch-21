import React, { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [daftarBuku, setDaftarBuku] = useState(null);

  useEffect(() => {
    if (daftarBuku === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/books`)
        .then((res) => {
          let data = res.data;
          setDaftarBuku(
            data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                image_url: el.image_url,
                release_year: el.release_year,
                price: el.price,
                totalPage: el.totalPage,
                description: el.description,
              };
            })
          );
        });
    }
  }, [daftarBuku]);

  return (
    <body>
      {daftarBuku !== null && (
        <section className="container" style={{ padding: "20px" }}>
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>
            Daftar Buku-Buku pilihan
          </h1>
          {daftarBuku.map((item) => {
            return (
              <>
                <h1 style={{ paddingTop: "20px" }}>Buku {item.title}</h1>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <img src={item.image_url} width="200px" alt="" />
                  <div>
                    <h3>Tahun Terbit: {item.release_year}</h3>
                    <h3>Harga: Rp. {item.price}</h3>
                    <h3>Jumlah Halaman: {item.totalPage}</h3>
                  </div>
                </div>
                <p style={{ padding: "20px 0" }}>
                  <h4>Deskripsi:</h4>
                  {item.description}
                </p>
                <hr />
              </>
            );
          })}
        </section>
      )}
    </body>
  );
};

export default Index;
