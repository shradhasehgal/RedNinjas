import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
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

import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/result.module.css";

export default class WinAgentNine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.wrapper}>
          <Container className={styles.mainDiv}>
            <Container
              className={styles.containerBody}
              style={{ display: "flex" }}>
              <Container style={{ marginTop: "auto", marginBottom: "auto", padding:"3% 0"}}>
                  <img className={styles.gifl} src={require('../static/assets/sad.gif')} />
                  <MDBAnimation type="bounce" infinite>
                      <text className={styles.text}>You LOST :((</text>
                      <br></br>
                      <text className={styles.text}> Better Luck next time!!</text>
                  </MDBAnimation>
                  <Link to="/nine">
                  <Button size="lg" variant="light"> Play Again!</Button>
                  </Link>
                </Container>
              </Container>
            </Container>
        </div>
      );

  }
}