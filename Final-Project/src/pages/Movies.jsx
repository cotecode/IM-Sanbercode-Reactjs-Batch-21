import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import axios from "axios";

const { Meta } = Card;

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let movie = res.data.map((el) => {
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
        });
        this.setState({ movie });
      });
  }

  render() {
    return (
      <>
        <div
          className="site-card-wrapper container-fluid"
          style={{
            background: "#fff",
            minHeight: "100vh",
            padding: "50px",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Movies</h1>
          <Row gutter={16}>
            {this.state.movie.map((item) => {
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
                          height="400px"
                        />
                      }
                    >
                      <Meta title={item.title} description={item.year} />
                    </Card>
                  </Link>
                  <br />
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}

export default Movies;
