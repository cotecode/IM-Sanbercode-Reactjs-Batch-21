import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";

const { Meta } = Card;

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let games = res.data.map((el) => {
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
        });
        this.setState({ games });
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
          {/* <div className="container-fluid"> */}
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            Games
          </h1>
          <Row gutter={16}>
            {this.state.games.map((item) => {
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
                    <Meta description={item.platform} />
                  </Card>
                  <br />
                </Col>
              );
            })}
          </Row>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Games;
