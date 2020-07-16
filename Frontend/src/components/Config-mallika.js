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
      gameBeginner: " ",
      depth: " ",
    };
  }

  render() {
    return (
      //   <div>
      //     <h1>Hi welcome</h1>
      //   </div>
      <div className={configStyles.wrapper}>
        <Container className={configStyles.mainDiv}>
          <Container className={configStyles.containerBody}>
            <h1 className={configStyles.heading}>
              Select your game configuration
            </h1>
            <Container className={configStyles.startWrapper}>
              <Row>
                <Col>
                  <h3 className={configStyles.startContent}>
                    Who begins first?
                  </h3>
                </Col>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <i
                      class="fas fa-user-astronaut fa-6x mr-2"
                      style={iconStyles}
                    ></i>
                  </div>
                  {/* <div style={{ textAlign: "center" }}> */}
                    <i class="fas fa-robot fa-6x mr-2" style={iconStyles}></i>
                  {/* </div> */}
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}

const iconStyles = {
  color: "#FF7885",
  width:"1%"
};
