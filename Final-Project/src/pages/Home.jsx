// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Carousel } from "antd";

const { Meta } = Card;

const contentStyle = {
  height: "50vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#333",
};

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(`https://backendexample.sanbersy.com/api/data-movie`)
//       .then((res) => {
//         let movie = res.data.slice(0, 4).map((el) => {
//           return {
//             id: el.id,
//             title: el.title,
//             description: el.description,
//             year: el.year,
//             duration: el.duration,
//             genre: el.genre,
//             rating: el.rating,
//             review: el.review,
//             image_url: el.image_url,
//           };
//         });
//         this.setState({ movie });
//       });
//   }

//   render() {
//     return (
//       <>
//         <div className="jumbotron">
//           <Carousel autoplay>
//             <div>
//               <h3 style={contentStyle}>1</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>2</h3>
//             </div>
//           </Carousel>
//         </div>
//         <div className="site-card-wrapper container-fluid" style={{background: "#fff"}}>
//           {/* <div className="container-fluid"> */}
//             <h1 style={{fontSize: "30px", fontWeight: "bold"}}>Upcoming Movies</h1>
//             <Row gutter={16}>
//               {this.state.movie.map((item) => {
//                 return (
//                   <Col span={6}>
//                     <Card
//                       hoverable
//                       style={{ width: 240, borderRadius: "10px"}}
//                       cover={<img alt="example" src={item.image_url} style={{borderRadius: "10px"}} height="400px"  />}
//                     >
//                       <Meta title={item.title} description={item.year} />
//                     </Card>
//                     <br />
//                   </Col>
//                 );
//               })}
//             </Row>
//           {/* </div> */}
//         </div>
//       </>
//     );
//   }
// }

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
      <div className="jumbotron">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
        </Carousel>
      </div>
      <div
        className="site-card-wrapper container-fluid"
        style={{ background: "#fff" }}
      >
        {/* Movie */}
        {daftarMovie !== null && (
          <>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Upcoming Movies
            </h1>
            <Row gutter={16}>
              {daftarMovie.map((item) => {
                return (
                  <Col span={6}>
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
                  </Col>
                );
              })}
            </Row>
          </>
        )}
        ,{/*  Game */}
        {daftarGame !== null && (
          <>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Popular Games
            </h1>
            <Row gutter={16}>
              {daftarGame.map((item) => {
                return (
                  <Col span={6}>
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
                    </Card>
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
