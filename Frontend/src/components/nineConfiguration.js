import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
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
                <div>
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
