import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const EditMovie = () => {
  const [user] = useContext(UserContext);
  let { id } = useParams();
  let history = useHistory();
  const [currentId, setCurrentId] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: 0,
    duration: 0,
    genre: "",
    rating: 0,
    review: "",
    image_url: "",
  });

  useEffect(() => {
    if (currentId === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then((res) => {
          let dataMovie = res.data;
          setInput({
            title: dataMovie.title,
            description: dataMovie.description,
            year: dataMovie.year,
            duration: dataMovie.duration,
            genre: dataMovie.genre,
            rating: dataMovie.rating,
            review: dataMovie.review,
            image_url: dataMovie.image_url,
          });
          setCurrentId(id);
        });
    }
  }, [currentId, setCurrentId]);

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      case "year": {
        setInput({ ...input, year: event.target.value });
        break;
      }
      case "duration": {
        setInput({ ...input, duration: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "rating": {
        setInput({ ...input, rating: event.target.value });
        break;
      }
      case "review": {
        setInput({ ...input, review: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-movie/${id}`,
        {
          title: input.title,
          description: input.description,
          year: input.year,
          duration: input.duration,
          genre: input.genre,
          rating: input.rating,
          review: input.review,
          image_url: input.image_url,
        },
        { headers: { Authorization: "Bearer " + user.token } }
      )
      .then(() => {
        history.push("/");
      });
  };

  return (
    <section
      className="container-fluid"
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "50px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1>Edit Movie</h1>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Title:</label>
            <Input
              required
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Description:</label>
            {/* <Input
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
            /> */}
            <TextArea
              required
              rows="4"
              cols="50"
              name="description"
              value={input.description}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Year:</label>
            <Input
              required
              type="number"
              name="year"
              value={input.year}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Duration:</label>
            <Input
              required
              type="number"
              name="duration"
              value={input.duration}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Genre:</label>
            <Input
              required
              type="text"
              name="genre"
              value={input.genre}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Rating:</label>
            <Input
              required
              type="number"
              name="rating"
              value={input.rating}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Review:</label>
            <Input
              required
              type="text"
              name="review"
              value={input.review}
              onChange={handleChange}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Link Image:</label>
            <Input
              required
              type="text"
              name="image_url"
              value={input.image_url}
              onChange={handleChange}
            />
            <br />
            <br />
            <div style={{ width: "100%", paddingBottom: "20px" }}>
              <button style={{ float: "right" }}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditMovie;
