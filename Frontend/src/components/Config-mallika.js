import React, { Component, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
// import { Link } from 'react-router-dom'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
// import Sky from 'react-sky';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/Three.module.css";
import common from "../static/css/Common.module.css";
import configStyles from "../static/css/Config-mallika.module.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBeginner: "a ",
      depth: "a ",
      type: 3,
    };
  }

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
                      ></i>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-5">
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
                      onClick={(e) => this.handleDepth(e, 1)}
                    >
                      1
                    </Button>
                    <Button
                      size="md"
                      variant="light"
                      onClick={(e) => this.handleDepth(e, 2)}
                    >
                      2
                    </Button>
                    <Button
                      size="md"
                      variant="light"
                      onClick={(e) => this.handleDepth(e, 3)}
                    >
                      3
                    </Button>
                    <Button
                      size="md"
                      variant="light"
                      onClick={(e) => this.handleDepth(e, 4)}
                    >
                      4
                    </Button>
                    <Button
                      size="md"
                      variant="light"
                      onClick={(e) => this.handleDepth(e, -1)}
                    >
                      Ultimate
                    </Button>
                  </Col>
                </Row>
                <div>
                  {this.state.type === 3 && (
                    <>
                      {this.state.depth !== " " &&
                      this.state.beginner != " " ? (
                        <Button size="lg" variant="light">
                          Let's Play!
                        </Button>
                      ) : (
                        <Button size="lg" variant="light" disabled>
                          Let's Play!
                        </Button>
                      )}
                    </>
                  )}
                  {this.state.type === 9 && (
                    <>
                      {" "}
                      {this.state.beginner != " " ? (
                        <Button size="lg" variant="light">
                          Let's Play!
                        </Button>
                      ) : (
                        <Button size="lg" variant="light" disabled>
                          Let's Play!
                        </Button>
                      )}{" "}
                    </>
                  )}
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
