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
<<<<<<< HEAD
import configStyles from "../static/css/Config-mallika.module.css";

=======
>>>>>>> 0b132584... Changed to component implementation

export default class NineConfiguration extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showWinComponent : false,
          showConfigurationComponent : false,
          showGameConfiguration : false
      }
    }
  

<<<<<<< HEAD
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

render() {
  return (
    <div className={configStyles.wrapper}>
      <Container className={configStyles.mainDiv}>
        <Container
          className={configStyles.containerBody}
          style={{ display: "flex" }}
        >
          <Container style={{ marginTop: "auto", marginBottom: "auto", padding:"3% 0"}}>
            <h1 className={configStyles.heading}>
              Select your game configuration
            </h1>
            <Container className={configStyles.startWrapper}>
              <Row className="mb-5">
                <Col
                  sm={6}
                  md={6}
                  lg={6}
                  className="justify-content-center align-self-center"
                >
                  <h3 className={configStyles.startContent}>
                    Game Beginner :
                  </h3>
                </Col>
                <Col
                  sm={6}
                  md={6}
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
                        "fas fa-robot mr-2 " + configStyles.iconStyles
                      }
                      onClick = {(e) => this.props.handleStartAgent_Nine(e)}
                    ></i>
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
                        "fas fa-user-astronaut mr-2 " +
                        configStyles.iconStyles
                      }
                      onClick = {(e) => this.props.handleStartHuman_Nine(e)}
                    ></i>
                  </div>
                </Col>
              </Row>
              {/* <Row className="mb-5">
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
                      <Button size="lg" variant="light" onClick={(e) => this.props.update_Nine("Go To Game")}>
                        Let's Play!
                      </Button>
                    ) : (
                      <Button size="lg" variant="light" disabled>
                        Let's Play!
                      </Button>
                    )}
                  </>
              </div>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
}

const iconStyles = {
color: "#FF7885",
};
=======
    handleStartAgent(e)
    {

    }

    handleStartHuman(e)
    {

    }

    handleDepth()
    {

    }

    render() {
      return (
          <div>

        <Button variant="default" onClick={(e) => this.props.handleStartHuman_Nine(e)}>
          Beginner_Human
        </Button>


        <Button variant="default" onClick={(e) => this.props.handleStartAgent_Nine(e)}>
          Beginner_Agent
        </Button>

        <div style={{}}>
          <Button
            variant="info"
            size="lg"
            style={{}}
            onClick={(e) => this.props.update_Nine("Go To Game")}
          >
              Go To Game
            {/* {this.state.startGameButton} */}
          </Button>{" "}
        </div>


          </div>
      )}
}
>>>>>>> 0b132584... Changed to component implementation
