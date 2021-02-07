import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { Image } from "antd";

const TableMovie = () => {
  const [user] = useContext(UserContext);
  const [daftarMovie, setDaftarMovie] = useState(null);

  useEffect(() => {
    if (daftarMovie === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then((res) => {
          let data = res.data;
          setDaftarMovie(
            data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                review: el.review,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [daftarMovie]);

  const handleDelete = (event) => {
    let idMovie = parseInt(event.target.value);
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`, {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then(() => {
        let newDaftarMovie = daftarMovie.filter((el) => {
          return el.id !== idMovie;
        });
        setDaftarMovie(newDaftarMovie);
      });
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        boxSizing: "border-box",
        paddingBottom: "20px",
      }}
    >
      {daftarMovie !== null && (
        <div>
          <h1 style={{ fontSize: "30px" }}>Table Movie</h1>
          <table id="table-list">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Tittle</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Duration</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {daftarMovie.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={item.image_url} alt="img" width={200} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                    <td>{item.rating}</td>
                    <td>{item.duration}</td>
                    <td>{item.year}</td>
                    <td>
                      <Link to={`/editMovies/${item.id}`}>
                        <button className="btnEdit">Edit</button>
                      </Link>
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
        </div>
      )}
    </section>
  );
};

export default TableMovie;
