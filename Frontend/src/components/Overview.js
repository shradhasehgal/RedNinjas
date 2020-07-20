import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import Board from "./Board.js";
import BigBoard from "./BigBoard.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import overviewStyles from "../static/css/Overview.module.css";
import common from "../static/css/Common.module.css";
import configStyles from "../static/css/Config-mallika.module.css";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={overviewStyles.landingBody}>
        <Container className={overviewStyles.contentContainer}>
          <Row className={overviewStyles.rowstyles+" mb-5"}>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
              <h1>Hellow world</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
            <img className={overviewStyles.gifs} src={require('../static/assets/mars.gif')} />
            </Col>
          </Row>
          <Row className={overviewStyles.rowstyles+" mb-5"}>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
            <img className={overviewStyles.gifs} src={require('../static/assets/astro.gif')} />

            </Col>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
              <h1>Hellow world</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <Row className={overviewStyles.rowstyles+" mb-5"}>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
              <h1>Hellow world</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col sm={6} md={6} lg={6} className="justify-content-center align-self-center mb-3">
            <img className={overviewStyles.gifs} src={require('../static/assets/simpsons.gif')} />

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
