import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import rulesStyles from "../static/css/Rules.module.css";
import common from "../static/css/Common.module.css";

export default class Scores extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={rulesStyles.landingBody}>
        <Container className={rulesStyles.contentContainer}>
          <h1 className={rulesStyles.heading}>Scores History</h1>
        </Container>
      </div>
    );
  }
}
