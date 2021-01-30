import React, { useContext, useEffect } from "react";
import { BookListContext } from "./BookListEditorContext";
import axios from "axios";

const BookListEditor = () => {
  const [
    daftarBuku,
    setDaftarBuku,
    ,
    setInputTitle,
    ,
    setInputDescription,
    ,
    setInputReview,
    ,
    setInputRelease,
    ,
    setInputTotalPage,
    ,
    setInputPrice,
    ,
    setInputImage,
    ,
    setCurrentId,
  ] = useContext(BookListContext);

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
                review: el.review,
              };
            })
          );
        });
    }
  }, [daftarBuku]);

  // handle edit
  const handleEdit = (event) => {
    let idBook = event.target.value;
    axios
      .get(`http://backendexample.sanbercloud.com/api/books/${idBook}`)
      .then((res) => {
        let data = res.data;
        setInputTitle(data.title);
        setInputDescription(data.description);
        setInputReview(data.review);
        setInputRelease(data.release_year);
        setInputTotalPage(data.totalPage);
        setInputPrice(data.price);
        setInputImage(data.image_url);
        setCurrentId(data.id);
      });
  };

  // handle delete
  const handleDelete = (event) => {
    let idBook = parseInt(event.target.value);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/books/${idBook}`)
      .then(() => {
        let newDaftarBuku = daftarBuku.filter((el) => {
          return el.id !== idBook;
        });
        setDaftarBuku(newDaftarBuku);
      });
  };

  return (
    <body>
      {daftarBuku !== null && (
        <section className="container" style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="text" placeholder="Search..." />
            <button style={{ marginLeft: "10px" }}>Search</button>
          </div>
          <h1 style={{ textAlign: "center", marginTop: "50px", fontSize: "40px" }}>
            Daftar Buku
          </h1>
          <table id="table-book">
            <thead>
              <tr>
                <th>No</th>
                <th>Tittle</th>
                <th>Description</th>
                <th>Review</th>
                <th>Release Year</th>
                <th>Total Page</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {daftarBuku.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.review}</td>
                    <td>{item.release_year}</td>
                    <td>{item.totalPage}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>
                        Edit
                      </button>
                      <button onClick={handleDelete} value={item.id}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </body>
  );
};

export default BookListEditor;
