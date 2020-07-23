import React, { Component, useEffect } from "react";
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
import { Link } from 'react-router-dom'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
// import Sky from 'react-sky';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styles from "../static/css/result.module.css";
// import common from "../static/css/Common.module.css";
// import configStyles from "../static/css/Config-mallika.module.css";

export default class GameResults extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.route)
    console.log(this.props.winner)
    this.state = {
    };
  }

//   <Link to="/nine">
  render() {

    if (this.props.winner === "HUMAN") {

    return (
      <div className={styles.wrapper}>
        <Container className={styles.mainDiv}>
          <Container
            className={styles.containerBody}
            style={{ display: "flex" }}>
            <Container style={{ marginTop: "auto", marginBottom: "auto", marginLeft:"auto",marginRight:"auto" ,padding:"1%"}}>
                <img className={styles.gif} src={require('../static/assets/win.gif')} />
                <br></br><br></br>
                <MDBAnimation type="fadeIn" infinite>
                    {/* <text className={styles.text}>You WONNN   </text> */}
                    <text className={styles.text}>Congrats!!!</text>
                </MDBAnimation>
                    {this.props.route === "three" ? <Button size="lg" variant="light" onClick={(e) => this.props.update_Three("Show Configuration")}>Play Again!</Button> : <Button size="lg" variant="light" onClick={(e) => this.props.update_Nine("Show Configuration")}> Play Again!</Button>}
              </Container>
            </Container>
          </Container>
      </div>
    );
  } else if(this.props.winner === "AGENT"){
    return (
        <div className={styles.wrapper}>
          <Container className={styles.mainDiv}>
            <Container
              className={styles.containerBody}
              style={{ display: "flex" }}>
              <Container style={{ marginTop: "auto", marginBottom: "auto", padding:"3% 0"}}>
                  <img className={styles.gif} src={require('../static/assets/sad.gif')} />
                  <MDBAnimation type="fadeIn" infinite>
                      {/* <text className={styles.text}>You LOST :((</text>
                      <br></br> */}
                      <text className={styles.text}> Better Luck next time!</text>
                  </MDBAnimation>
                  {this.props.route === "three" ? <Button size="lg" variant="light" onClick={(e) => this.props.update_Three("Show Configuration")}>Play Again!</Button> : <Button size="lg" variant="light" onClick={(e) => this.props.update_Nine("Show Configuration")}> Play Again!</Button>}

                    {/* <Button size="lg" variant="light"> Play Again!</Button> */}
                  {/* <Button size="lg" variant="light"> Play Again!</Button> */}
                </Container>
              </Container>
            </Container>
        </div>
      );
  } else {
    return (
      <div className={styles.wrapper}>
        <Container className={styles.mainDiv}>
          <Container
            className={styles.containerBody}
            style={{ display: "flex" }}>
            <Container style={{ marginTop: "auto", marginBottom: "auto", padding:"3% 0"}}>
                <img className={styles.gif} src={require('../static/assets/tie.gif')} />
                <MDBAnimation type="fadeIn" infinite>
                    <br></br>
                    <text className={styles.text}>It's A Tie!</text>
                </MDBAnimation>
                {this.props.route === "three" ? <Button size="lg" variant="light" onClick={(e) => this.props.update_Three("Show Configuration")}>Play Again!</Button> : <Button size="lg" variant="light" onClick={(e) => this.props.update_Nine("Show Configuration")}> Play Again!</Button>}
                {/* <Button size="lg" variant="light"> Play Again!</Button> */}

              </Container>
            </Container>
          </Container>
          
      </div>

    );

  }

}

}