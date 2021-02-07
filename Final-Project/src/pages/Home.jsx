import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Carousel } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Home = () => {
  const [daftarMovie, setDaftarMovie] = useState(null);
  const [daftarGame, setDaftarGame] = useState(null);

  // MOVIE
  useEffect(() => {
    if (daftarMovie === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then((res) => {
          let data = res.data;
          setDaftarMovie(
            data.slice(0, 4).map((el) => {
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

  const contentStyle1 = {
    height: "50vh",
    color: "#fff",
    textAlign: "center",
    fontSize: "30px",
    backgroundImage: `linear-gradient(rgba(56, 52, 52, 0.9), rgba(0, 0, 0, 0.9)), url(https://news.xbox.com/en-us/wp-content/uploads/sites/2/Publisher_XOne_Hero-hero-1.jpg?resize=940%2C528)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle2 = {
    height: "50vh",
    color: "#fff",
    textAlign: "center",
    fontSize: "30px",
    backgroundImage: `linear-gradient(rgba(56, 52, 52, 0.9), rgba(0, 0, 0, 0.9)), url(https://wallpaperaccess.com/full/329633.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // GAME
  useEffect(() => {
    if (daftarGame === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game`)
        .then((res) => {
          let data = res.data;
          setDaftarGame(
            data.slice(0, 4).map((el) => {
              return {
                id: el.id,
                name: el.name,
                genre: el.genre,
                singlePlayer: el.singlePlayer,
                multiplayer: el.multiplayer,
                platform: el.platform,
                release: el.release,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [daftarGame]);

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle2}>
            The best site to help you find the best movies and games.
            <br />
            Start getting more review with Psyche Review
          </h3>
        </div>
        <div>
          <h3 style={contentStyle1}>Best Site Review Movies and Games</h3>
        </div>
      </Carousel>
      <div
        className="site-card-wrapper container-fluid"
        style={{ background: "#fff", padding: "50px", boxSizing: "border-box" }}
      >
        {/* Movie */}
        {daftarMovie !== null && (
          <>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Popular Movies
            </h1>
            <Row gutter={16}>
              {daftarMovie.map((item) => {
                return (
                  <Col span={6}>
                    <Link to={`/detailMovies/${item.id}`}>
                      <Card
                        hoverable
                        style={{ width: 240, borderRadius: "10px" }}
                        cover={
                          <img
                            alt="example"
                            src={item.image_url}
                            style={{ borderRadius: "10px" }}
                            height="365px"
                          />
                        }
                      >
                        <Meta title={item.title} description={item.year} />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        <hr style={{ margin: "5% 0", border: "1px solid #eaeaea" }} />,
        {/*  Game */}
        {daftarGame !== null && (
          <>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Popular Games
            </h1>
            <Row gutter={16}>
              {daftarGame.map((item) => {
                return (
                  <Col span={6}>
                    <Link to={`/detailGames/${item.id}`}>
                      <Card
                        hoverable
                        style={{ width: 240, borderRadius: "10px" }}
                        cover={
                          <img
                            alt="example"
                            src={item.image_url}
                            style={{ borderRadius: "10px" }}
                            height="365px"
                          />
                        }
                      >
                        <Meta title={item.name} description={item.release} />
                        <Meta description={item.platform} />
                      </Card>
                    </Link>
                    <br />
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
