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

export default class ThreeWin extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showWinComponent : false,
          showConfigurationComponent : false,
          showGameConfiguration : false
      }
    }
  
    render() {
      return (
          <div></div>
      )}
}