import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import rulesStyles from "../static/css/Rules.module.css";
import common from "../static/css/Common.module.css";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={rulesStyles.landingBody}>
        <Container className={rulesStyles.contentContainer}>
          <h1 className={rulesStyles.heading}>Rule Book</h1>
          <div className={rulesStyles.content}>
            <h3 className={rulesStyles.heading}>The 3x3 Original Game</h3>
            <Row className="mb-5">
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center mb-5"
              >
                <li className={rulesStyles.text}>
                  To begin with the configuration of the game has to be
                  selected. This includes selecting a depth (or a level) and a
                  player who shall begin the game.
                  <br />
                  <br />
                </li>
                <li className={rulesStyles.text}>
                  Once the game play begins, click the <strong>START</strong>{" "}
                  button to play. The robot and the human play in alternation.
                  Click on any move number to undo all moves made after that
                  move including itself.
                  <br />
                  <br />
                </li>
                <li className={rulesStyles.text}>
                  As in the traditional tic-tac-toe the first person to get
                  their symbol across an entire row, column or diagonal wins the
                  game.
                  <br />
                  <br />
                </li>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center mb-5"
              >
                <img
                  className={rulesStyles.gifs}
                  src={require("../static/assets/three2.gif")}
                />
              </Col>
            </Row>
          </div>
          <div className={rulesStyles.content}>
            <h3 className={rulesStyles.heading}>The Extreme 9x9 Game</h3>
            <p className={rulesStyles.text}>
              This is an extended version of the original tic-tac-toe. It
              consists of 2 kinds of boards. First is the global board that
              contains the entire game, and there are 9 local boards within
              which smaller games occur. Start by selecting the beginner of the
              game. The robot and the human will then play in alternation. The
              first player can place their symbol anywhere in the 81 cells
              across 9 local boards.
            </p>
            <br />
            <br />
            <Row className="mb-5">
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center mb-5"
              >
                <img
                  className={rulesStyles.gifs}
                  src={require("../static/assets/nine-final.gif")}
                />
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center mb-5"
              >
                <p className={rulesStyles.text}>
                  <li>
                    Following this, suppose a player places their symbol in cell
                    (i,j) of local board (x,y), then the next player must place
                    their symbol in any empty cell of the local board (i,j) of
                    the global board. score.
                  </li>
                  <br />
                  <br />
                  <li>
                    Once a local board results in a WIN condition or a TIE
                    condition, no more moves can be made in that particular
                    local board.
                  </li>
                  <br />
                  <br />
                  <li>
                    In case the local board (i,j) already has a win or a tie
                    condition, then the player can place their symbol in any of
                    the empty cells across all the 9 local boards.
                  </li>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
