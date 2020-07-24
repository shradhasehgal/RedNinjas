import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import ThreeBoard from "./threeBoard.js";
import NineBoard from "./nineBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Landing.module.css";
import common from "../static/css/Common.module.css";
import configStyles from "../static/css/Config-mallika.module.css";

const play_game_sound = require("../static/assets/sounds/lets-play.mp3");

export default class NineConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWinComponent: false,
      showConfigurationComponent: false,
      showGameConfiguration: false,
      beginner: this.props.gameBeginner,
    };
  }

  //     render() {
  //       return (
  //           <div>

  //         <Button variant="default" onClick={(e) => this.props.handleStartHuman_Nine(e)}>
  //           Beginner_Human
  //         </Button>

  //         <Button variant="default" onClick={(e) => this.props.handleStartAgent_Nine(e)}>
  //           Beginner_Agent
  //         </Button>

  //         <div style={{}}>
  //           <Button
  //             variant="info"
  //             size="lg"
  //             style={{}}
  //             onClick={(e) => this.props.update_Nine("Go To Game")}
  //           >
  //               Go To Game
  //             {/* {this.state.startGameButton} */}
  //           </Button>{" "}
  //         </div>

  //           </div>
  //       )}
  // }

  playAudio(audio_element) {
    const audioEl = document.getElementsByClassName(audio_element)[0];
    audioEl.play();
  }

  render() {
    return (
      <div className={configStyles.wrapper}>
        <Container className={configStyles.mainDiv}>
          <Container
            className={configStyles.containerBody}
            style={{ display: "flex" }}
          >
            <Container
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                padding: "3% 0",
              }}
            >
              <h1
                className={configStyles.heading}
                style={{ marginBottom: "2%" }}
              >
                Select your game configuration
              </h1>
              <Container className={configStyles.startWrapper}>
                <Row className="mb-0">
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    className="justify-content-center align-self-center"
                  >
                    <h3 className={configStyles.startContent}>
                      Choose Beginner :
                    </h3>
                  </Col>
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    className="justify-content-center align-self-center"
                  >
                    <div
                      style={{
                        textAlign: "center",
                        margin: "0 10%",
                        display: "inline-block",
                      }}
                    >
                      <i
                        className={
                          "fas fa-user-astronaut mr-2 " +
                          configStyles.iconStyles +
                          (this.state.beginner === "HUMAN"
                            ? " " + configStyles.iconSelect
                            : "")
                        }
                        onClick={(e) => {
                          this.setState({ beginner: "HUMAN" });
                          this.props.handleStartHuman_Nine(e);
                        }}
                      ></i>
                      <h5 className={configStyles.playerName}>HUMAN</h5>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        margin: "0 10%",
                        display: "inline-block",
                      }}
                    >
                      <i
                        className={
                          "fas fa-robot mr-2 " +
                          configStyles.iconStyles +
                          (this.state.beginner === "AGENT"
                            ? " " + configStyles.iconSelect
                            : "")
                        }
                        onClick={(e) => {
                          this.setState({ beginner: "AGENT" });
                          this.props.handleStartAgent_Nine(e);
                        }}
                      ></i>
                      <h5 className={configStyles.playerName}>AGENT</h5>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    className="justify-content-center align-self-center"
                  >
                    <img
                      // className={rulesStyles.gifs}
                      className={configStyles.ruleimg}
                      src={require("../static/assets/nine-final3.gif")}
                    />
                  </Col>
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    className="justify-content-center align-self-center"
                  >
                    <p
                      className={configStyles.rulestext}
                      style={{ textAlign: "left" }}
                    >
                      <strong style={{ fontSize: "2vh" }}>Quick Rules :</strong>
                      <li>
                        If your opponent places their move in a cell of a small
                        board - <u>inner numbering</u>, your next move must be
                        placed in any cell in the small board -{" "}
                        <u>outer numbering</u> with the same row and column
                        number as the cell that your opponent placed it in.
                      </li>
                      <br />
                      <li>
                        In case the small board already has a win or a tie
                        condition, then the player can place their symbol in any
                        of the empty cells across all the 9 small boards.
                      </li>
                    </p>
                  </Col>
                </Row>
                {/* <Row className="mb-3">
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <h3 className={configStyles.startContent}>Depth Type</h3>
                </Col>
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 1)}
                  >
                    1
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 2)}
                  >
                    2
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 3)}
                  >
                    3
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, 4)}
                  >
                    4
                  </Button>
                  <Button
                    size="md"
                    variant="light"
                    onClick={(e) => this.props.handleDepth_Three(e, -1)}
                  >
                    Ultimate
                  </Button>
                </Col>
              </Row> */}
                <div>
                  {/* {this.state.type === 3 && ( */}
                  <>
                    {this.props.gameBeginner != " " ? (
                      <Button
                        size="md"
                        variant="light"
                        onClick={(e) => {
                          this.playAudio("audio-element-play");
                          this.props.update_Nine("Go To Game");
                        }}
                      >
                        Let's Play!
                      </Button>
                    ) : (
                      <Button size="md" variant="light" disabled>
                        Let's Play!
                      </Button>
                    )}
                  </>
                </div>
              </Container>
            </Container>
          </Container>
        </Container>
        <audio className="audio-element-play">
          <source src={play_game_sound}></source>
        </audio>
      </div>
    );
  }
}

const iconStyles = {
  color: "#FF7885",
};
