import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailMovie = ({ match }) => {
  let { id } = useParams();
  const [daftarMovie, setDaftarMovie] = useState(null);

  const fetchMovie = () => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
      .then((response) => {
        setDaftarMovie(response.data);
      })
      .catch((error) => console.log(error.messages));
  };

  useEffect(() => {
    if (daftarMovie === null) {
      fetchMovie(match.params.id);
    }
    console.log("");
  }, [daftarMovie]);

  const time_convert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours} jam ${minutes} menit`;
  };

  return (
    <>
      {daftarMovie ? (
        <section>
          <h1>Detail Movie</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {daftarMovie.map((item) => {
              return (
                <>
                  <img src={item.image_url} width="200" alt="example" />
                  <div>
                    <h1>
                      {item.title}
                      <span>{item.year}</span>
                    </h1>
                    <h4>
                      <time_convert value={item.duration} />| {item.genre} |
                      <span>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgb(105, 39, 105)" }}
                        ></i>
                        {item.rating}
                      </span>
                    </h4>
                    <h3>Description</h3>
                    <p>{item.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailMovie;
