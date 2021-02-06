import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const TableMovie = () => {
  const [user] = useContext(UserContext);
  const [daftarMovie, setDaftarMovie] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputDuration, setInputDuration] = useState("");
  const [inputGenre, setInputGenre] = useState("");
  const [inputRating, setInputRating] = useState("");
  const [inputReview, setInputReview] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [currentId, setCurrentId] = useState(null);

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

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === null) {
      // untuk create data baru
      axios
        .post(
          `https://backendexample.sanbersy.com/api/data-movie`,
          {
            title: inputTitle,
            description: inputDescription,
            year: inputYear,
            duration: inputDuration,
            genre: inputGenre,
            rating: inputRating,
            review: inputReview,
            image_url: inputImage,
          },
          { headers: { Authorization: "Bearer " + user.token } }
        )
        .then((res) => {
          let data = res.data;
          setDaftarMovie([
            ...daftarMovie,
            {
              id: data.id,
              title: data.title,
              description: data.description,
              year: data.year,
              duration: data.duration,
              genre: data.genre,
              rating: data.rating,
              review: data.review,
              image_url: data.image_url,
            },
          ]);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbersy.com/api/data-movie/${currentId}`,
          {
            title: inputTitle,
            description: inputDescription,
            year: inputYear,
            duration: inputDuration,
            genre: inputGenre,
            rating: inputRating,
            review: inputReview,
            image_url: inputImage,
          },
          { headers: { Authorization: "Bearer " + user.token } }
        )
        .then(() => {
          let singleMovie = daftarMovie.find((el) => el.id === currentId);
          singleMovie.title = inputTitle;
          setDaftarMovie([...daftarMovie]);
        });
    }
    setInputTitle("");
    setInputDescription("");
    setInputYear("");
    setInputDuration("");
    setInputGenre("");
    setInputRating("");
    setInputReview("");
    setInputImage("");
    setCurrentId(null);
  };

  // handle change
  const handleChange = (event) => {
    let inputValue = event.target.value;
    setInputTitle(inputValue);
    setInputDescription(inputValue);
    setInputYear(inputValue);
    setInputDuration(inputValue);
    setInputGenre(inputValue);
    setInputRating(inputValue);
    setInputImage(inputValue);
    setInputReview(inputValue);
  };

  // handle edit
  const handleEdit = (event) => {
    let idMovie = event.target.value;
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
      .then((res) => {
        let data = res.data;
        setInputTitle(data.title);
        setInputDescription(data.description);
        setInputYear(data.year);
        setInputDuration(data.duration);
        setInputGenre(data.genre);
        setInputRating(data.rating);
        setInputReview(data.review);
        setInputImage(data.image_url);
        setCurrentId(data.id);
      });
  };

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
    <section className="container-fluid">
      {daftarMovie !== null && (
        <div style={{ width: "70%", margin: "0 auto", textAlign: "center" }}>
          <h1>Daftar Peserta Lomba</h1>
          <table className="peserta-lomba">
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
                    <td><img src={item.image_url} alt="img" height="300"/></td>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                    <td>{item.rating}</td>
                    <td>{item.duration}</td>
                    <td>{item.year}</td>
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
          {/* {user && (
            <>
              <h1>Form Peserta</h1>
              <form style={{ paddingBottom: "20px" }} onSubmit={handleSubmit}>
                <label>Masukkan nama peserta:</label>
                <input type="text" value={inputTitle} onChange={handleChange} />
                <button>submit</button>
              </form>
            </>
          )} */}
        </div>
      )}
    </section>
  );
};

export default TableMovie;

