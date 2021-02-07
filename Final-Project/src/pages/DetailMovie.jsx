import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image, Col } from "antd";

const DetailMovie = () => {
  let { id } = useParams();
  const [currentId, setCurrentId] = useState(null);
  const [daftarMovie, setDaftarMovie] = useState({
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
          let data = res.data;
          setDaftarMovie({
            title: data.title,
            description: data.description,
            year: data.year,
            duration: data.duration,
            genre: data.genre,
            rating: data.rating,
            review: data.review,
            image_url: data.image_url,
          });
          setCurrentId(id);
        });
    }
  }, [currentId, setCurrentId]);

  const time_convert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours} jam ${minutes} menit`;
  };

  return (
    <section style={{ minHeight: "100vh" }} className="container-fluid">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(56, 52, 52, 0.9), rgba(0, 0, 0, 0.9)), url(${daftarMovie.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ display: "flex", padding: "50px" }}>
          <Col span={6}>
            <Image width={300} src={daftarMovie.image_url} />
          </Col>
          <div>
            <h1 style={{ fontSize: "30px", color: "#fff" }}>
              {daftarMovie.title}
              <span> ({daftarMovie.year})</span>
            </h1>
            <h4 style={{ fontSize: "15px", color: "#fff" }}>
              {daftarMovie.duration} Minutes | {daftarMovie.genre} |
              <span>
                <i class="fas fa-star" style={{ color: "yellow" }}></i>
                {daftarMovie.rating} / 10
              </span>
            </h4>
            <br />
            <h3 style={{ fontSize: "30px", color: "#fff" }}>Description</h3>
            <p style={{ fontSize: "20px", color: "#fff" }}>
              {daftarMovie.description}
            </p>
            <br />
            <br />
            <h3 style={{ fontSize: "30px", color: "#fff" }}>Review</h3>
            <p style={{ fontSize: "20px", color: "#fff" }}>
              {daftarMovie.review}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
