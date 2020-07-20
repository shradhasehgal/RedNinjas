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

export default class WinHumanThree extends Component {
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
            <Container style={{ marginTop: "auto", marginBottom: "auto", marginLeft:"auto",marginRight:"auto" ,padding:"1%"}}>
                <img className={styles.gifc} src={require('../static/assets/rocket.gif')} />
                <br></br><br></br><br></br>
                <MDBAnimation type="bounce" infinite>
                    <text className={styles.text}>You WONNN   </text>
                    <text className={styles.text}>Congrats!!!</text>
                </MDBAnimation>
                <Link to="/three">
                    <Button size="lg" variant="light"> Play Again!</Button>
                </Link>                
              </Container>
            </Container>
          </Container>
      </div>
    );
}

}