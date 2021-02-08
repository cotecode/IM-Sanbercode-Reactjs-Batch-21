import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";

const MovieForm = () => {
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
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "title": {
        setInputTitle(inputValue);
        break;
      }
      case "description": {
        setInputDescription(inputValue);
        break;
      }
      case "year": {
        setInputYear(inputValue);
        break;
      }
      case "duration": {
        setInputDuration(inputValue);
        break;
      }
      case "genre": {
        setInputGenre(inputValue);
        break;
      }
      case "rating": {
        setInputRating(inputValue);
        break;
      }
      case "review": {
        setInputReview(inputValue);
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
        <h1 style={{ fontSize: "30px" }}>Add Movie</h1>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Title:</label>
            <Input
              required
              type="text"
              name="title"
              value={inputTitle}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Description:</label>
            <TextArea
              required
              rows="4"
              cols="50"
              name="description"
              value={inputDescription}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Year:</label>
            <Input
              required
              type="number"
              name="year"
              value={inputYear}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Duration:</label>
            <Input
              required
              type="number"
              name="duration"
              value={inputDuration}
              onChange={handleChange}
            />
            <small>
              <i>**Satuan Menit</i>
            </small>
            <br />
            <br />
            <label style={{ float: "left" }}>Genre:</label>
            <Input
              required
              type="text"
              name="genre"
              value={inputGenre}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Rating:</label>
            <Input
              required
              type="number"
              max={10}
              min={0}
              name="rating"
              value={inputRating}
              onChange={handleChange}
            />
            <small>
              <i>**Rating dari 0-10</i>
            </small>
            <br />
            <br />
            <label style={{ float: "left" }}>Review:</label>
            <Input
              required
              type="text"
              name="review"
              value={inputReview}
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

export default MovieForm;
