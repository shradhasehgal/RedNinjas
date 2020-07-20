import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import overviewStyles from "../static/css/Overview.module.css";
import common from "../static/css/Common.module.css";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={overviewStyles.landingBody}>
        <Container className={overviewStyles.contentContainer}>
          <h1 className={overviewStyles.heading}>About the Application</h1>
          <Row
            className={
              overviewStyles.rowstyles +
              " mb-5 justify-content-center align-self-center"
            }
          >
            <img
              className={overviewStyles.gifs}
              src={require("../static/assets/astro.gif")}
            />
          </Row>
          <div className={overviewStyles.content}>
            <h3 className={overviewStyles.heading}>Quick Overview</h3>
            <p className={overviewStyles.text}>
              This application is an AI algorithm based Tic-Tac-Toe with
              incremental levels of difficulty. The game uses the Minimax
              algorithm. The app supports two kinds of games:{" "}
              <strong>3x3</strong> and <strong>9x9</strong> <br /> Further for
              the 3x3 tic-tac-toe, there are a total of 4 difficulty levels in
              the game and the ultimate TicTacToe that is unbeatable. Each of
              these difficulties has a gradual increase in the smartness of the
              agent/computer that finally reaches the unbeatable agent.
            </p>
          </div>
          <div className={overviewStyles.content}>
            <h3 className={overviewStyles.heading}>Game Levels</h3>
            <p className={overviewStyles.text}>
              In each of the levels, a custom version of the minimax algorithm
              is run, that assigns scores to each configuration based on the
              levels and also restricts the depth of the recursion. <br />
              Here, levels indicate the number of nodes upto which the agent can
              search/traverse in the recursion tree.
            </p>
            <Row className="mb-5">
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <li className={overviewStyles.text}>
                  <i class="fas fa-angle-double-right"></i>{" "}
                  <strong>Level 1 :</strong>
                  <br />
                  At level 1, we have used a random function that arbitrarily
                  selects one of the empty cells for the agent to make its next
                  move.
                  <br />
                  <br />
                </li>
                <li className={overviewStyles.text}>
                  <i class="fas fa-angle-double-right"></i>{" "}
                  <strong>Level 2 :</strong>
                  <br />
                  The agent can now look at upto 2 levels deep from the current
                  state. The number of crossover win states that a particular
                  empty cell can contribute to is considered and utilities are
                  increased on backtracking to the parent node configuration.
                  <br />
                  <br />
                </li>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <img
                  style={{ width: "90%" }}
                  src={require("../static/assets/astro.gif")}
                />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <img
                  style={{ width: "90%" }}
                  src={require("../static/assets/astro.gif")}
                />
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <li className={overviewStyles.text}>
                  <i class="fas fa-angle-double-right"></i>{" "}
                  <strong>Level 3 :</strong>
                  <br />
                  Apart from the crossover win states, we now allow the agent to
                  look for any immediate advantage configurations and boost the
                  utilities for those states so that the agent favours them
                  more.
                  <br />
                  <br />
                </li>
                <li className={overviewStyles.text}>
                  <i class="fas fa-angle-double-right"></i>{" "}
                  <strong>Level 4 :</strong>
                  <br />
                  Level 4: At level 4, the agent now can look upto 4 depths,
                  adopts all the strategies of level 2 and 3, and additionally
                  now also tries to block the human player from winning.
                  <br />
                  <br />
                </li>
              </Col>
            </Row>
          </div>
          <div className={overviewStyles.content}>
            <h3 className={overviewStyles.heading}>Optimization Techniques</h3>
            <p className={overviewStyles.text}>
              For the 9x9 game, we have included a set of optimizations so as to
              be able to shorten the response time of the agent. As a result,
              though there isn't a 100% guarantee that the agent will win, but
              the agent doesn't play mindlessly either.
            </p>
            <br />
            <br />
            <Row className="mb-5">
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <p className={overviewStyles.text}>
                  <li>
                    Alpha Beta pruning to cut off paths that the agent will
                    certainly not take.
                  </li>
                  <br />
                  <br />
                  <li>
                    Restricting the search depth to 5 levels. Since the agent
                    may not always reach a win state with this restriction,
                    utilities to these intermediate depths are given by
                    recycling code from 3x3 DEPTH4 strategy of calculating the
                    score.
                  </li>
                  <br />
                  <br />

                  <li>
                    Avoiding unecessary computations. For every configuration
                    where the agent has to take the next move, the only local
                    board that has to be explored depends on the previous
                    human’s move.
                  </li>
                </p>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className="justify-content-center align-self-center"
              >
                <img
                  style={{ width: "90%" }}
                  src={require("../static/assets/astro.gif")}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
